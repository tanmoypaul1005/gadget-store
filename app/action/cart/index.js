"use server";

import { revalidatePath } from "next/cache";
import Cart from "@/models/Cart";
import connectMongo from "@/util/db";
import { kuCart } from "@/util/url";
import Products from "@/models/Products";

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
    console.log("Success:", result);
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
