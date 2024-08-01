"use server"

import Cart from "@/models/Cart";
import Order from "@/models/Order";
import Products from "@/models/Products";
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
        const items = cart?.map((c) => ({ product: c.product, quantity: c?.quantity }))
        const order = new Order({
            user: user._id,
            order: body?.order,
            total_amount: body?.total_amount,
            shipping_address: body?.shipping_address,
            billing_address: body?.billing_address,
            items: items,
        });
        await order.save();
        await Cart.deleteMany({ user: user._id });

        return { status: 200, success: true, message: "Order placed successfully" };
    } catch (err) {
        console.error("error addOrder", err);
        return { status: 500, success: false, message: "Internal Server Error" };
    }
};


// export const getOrders = async (email) => {
//     try {
//         await connectMongo();
//         const user = await User.findOne({ email: email });
//         if (!user) {
//             return { status: 500, success: false, message: "User not found" };
//         }
//         const orders = await Order.find({ user: user._id }).populate("items.product");
//         // const populatedOrders = orders.map((order) => {
//         //     return {
//         //         _id: order._id,
//         //         total_amount: order.total_amount,
//         //         order_status: order.order_status,
//         //         shipping_address:order.shipping_address,
//         //         billing_address:order.billing_address,
//         //         items:order.items?.map((i)=>{
//         //            return{
//         //             product:Products.findOne({ _id: i.product })
//         //            }
//         //         }) ,
//         //     };
//         // });
//         // console.log("vbvbv",populatedOrders);
//         console.log("orderssssss", orders);
//         if (orders) {
//             return { status: 200, data:orders, success: true, orders };
//         } else {
//             return { status: 500, data:null, success: true, data: orders };
//         }
//     } catch (err) {
//         console.error("error getOrders", err);
//         return { status: 500, success: false, message: "Internal Server Error" };
//     }
// }




export const getOrders = async (email) => {
    try {
        await connectMongo(); // Ensure this function connects to MongoDB
        const user = await User.findOne({ email: email });
        if (!user) {
            return { status: 500, success: false, message: "User not found" };
        }
        const orders = await Order.find({ user: user._id }).populate({
            path: 'items.product',
            model: 'Product' // Specify the model name here if it's different
        });

        if (orders && orders.length > 0) {
            // Transform the orders to include product details
            const populatedOrders = orders.map(order => ({
                _id: order._id,
                createdAt: order.createdAt,
                total_amount: order.total_amount,
                order_status: order.order_status,
                shipping_address: order.shipping_address,
                billing_address: order.billing_address,
                items: JSON.stringify(order.items?.map(item => { return { product: item?.product,quantity:item?.quantity} }))
            }));console.log("populatedOrders",populatedOrders);

            return { status: 200, data: populatedOrders, success: true };
        } else {
            return { status: 404, data: null, success: false, message: "No orders found" };
        }
    } catch (err) {
        console.error("error getOrders", err);
        return { status: 500, success: false, message: "Internal Server Error" };
    }
}
