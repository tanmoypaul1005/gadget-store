'use server'
 
import { revalidatePath } from 'next/cache'
import Cart from "@/models/Cart";
import connectMongo from "@/util/db";
import { kuCart } from "@/util/url";
import Products from '@/models/Products';

export const getCartCount = async (user_id) => {
  try {
    await connectMongo();
    const cart = await Cart?.findOne({ user: user_id }).lean().exec();

    const cartData = await Promise.all(
      cart?.cartItems?.map(async (item) => {
        const product = await Products.findOne({ _id: item?.product })
          .lean()
          .exec();
        return {
          _id: item._id,
          product:product,
          quantity: item?.quantity,
          
        };
      })
    );
    console.log("cartData",cartData)
    return cartData;

  } catch (err) {
     return {
      cartItems:[]
     }
  }
};


export const addCart = async (formData) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "api" + kuCart, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    });

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();

    if (data?.success) {
      revalidatePath("/products/6613c4098d77cd26c4fd21a3")
      console.log('Success:', data?.message);
      return data;
    } else {
      console.error('Error:', data?.message);
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
}