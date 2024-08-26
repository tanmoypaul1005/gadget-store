"use server";
import Products from "@/models/Products";
import User from "@/models/User";
import { base_url } from "@/util/const";
import connectMongo from "@/util/db";
import { kuProductList } from "@/util/url";

export const findUserId = async (email) => {
  try {
    if (!email) {
      return null;
    }
    await connectMongo();
    const user = await User.findOne({ email: email });

    if (user) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

export const fetchTopRateProducts = async () => {
  try {
    await connectMongo();
    const response = await Products.find({ ratting: 5 });
    return response;
  } catch {
    console.log("error");
    return null;
  }
};

export const fetchProduct = async (product_id) => {
  const response = await fetch(base_url + kuProductList + `/${product_id}`);
  const product = await response?.json();
  return product?.data;
};


export const getAllProducts = async () => {
  try {
    await connectMongo();
    const products = await Products.find({});
    return products;
  } catch {
    return null;
  }
}