"use server"

import User from "@/models/User";
import connectMongo from "@/util/db";

export const addOrder = async (body) => {
    try {
      await connectMongo();
      let user = await User.findOne({ email:body?.email  });
        if (!user) {
            return {status:500, success: false, message: "User not found" };
        }
        const order = new Order({
            user: user._id,
            order: body?.order,
            total: body?.total,
            payment: body?.payment,
            status: body?.status,
            shipping_address: body?.shipping_address,
            billing_address: body?.billing_address,
            
        });
        await order.save();

        return {status:200, success: true,data:data, message: "Order placed successfully" };
    } catch (err) {
      return {status:500, success: false, message: "Internal Server Error" };
    }
  };