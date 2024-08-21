"use server";

import { revalidatePath } from "next/cache";
import Cart from "@/models/Cart";
import connectMongo from "@/util/db";
import { kuCart } from "@/util/url";
import { auth } from "@/auth";
import { findUserId } from "../product/action";

export const getCartCount = async (user_id) => {
  try {
    await connectMongo();
    const cart = await Cart?.find({ user: user_id }).populate("product");
    return cart;
  } catch (err) {
    return [];
  }
};

export const deleteCart = async (cart_id,path) => {
  try {
    await connectMongo();
    const result = await Cart?.findByIdAndDelete({ _id: cart_id });
    revalidatePath(path);
    return true;
  } catch (err) {
    return false;
  }
};

export const addCart = async (formData, pathName) => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "api" + kuCart, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();

    if (data?.success) {
      revalidatePath(pathName);
      console.log("Success:", data?.message);
      return data;
    } else {
      console.error("Error:", data?.message);
    }
    return data;
  } catch (error) {
    console.error("Error:", error);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
};

export const findDayOffer = async (product_id,user_id) => {
  try {
    await connectMongo();
    const day_offer = await Cart?.findOne({ product: product_id,user: user_id });
      return day_offer;
  } catch (err) {
    return null;
  }
};



export const updateCartQuantity = async (id, newQuantity) => {
  await connectMongo();

  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ _id:id });

    if (!cart) {
      throw new Error("Cart not found");
    }
  
    // Update the quantity of the product in the cart
    cart.quantity = newQuantity;

    // Save the updated cart
    await cart.save();

    // Optionally revalidate the path if needed
    revalidatePath(kuCart);

    return cart;
  } catch (error) {
    console.error("Error updating cart quantity:", error);
    throw error;
  }
};

export const serverAddCart = async (formData) => {
   
  const session = await auth();
  const user = await findUserId(session?.user?.email); 
}