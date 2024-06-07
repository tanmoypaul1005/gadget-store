"use server"

import Cart from "@/models/Cart";
import Order from "@/models/Order";
import User from "@/models/User";
import connectMongo from "@/util/db";

export const addOrder = async (body) => {

    try {
        await connectMongo();
        const user = await User.findOne({ email: body?.email });
        if (!user) {
            return { status: 500, success: false, message: "User not found" };
        }
      
        const cart = await Cart.find({ user: user._id })
        const items=cart?.map((c) => ({ cart: c._id }))
        console.log("cart", items)
        const order = new Order({
            user: user._id,
            order: body?.order,
            total_amount: body?.total_amount,
            shipping_address: body?.shipping_address,
            billing_address: body?.billing_address,
             items:cart?.map((c) => ({ cart: c._id })),
        });
        await order.save();

        return { status: 200, success: true, data: order, message: "Order placed successfully" };
    } catch (err) {
        console.error("error addOrder", err);
        return { status: 500, success: false, message: "Internal Server Error" };
    }
};