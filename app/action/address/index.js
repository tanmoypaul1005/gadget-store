"use server"
import Address from "@/models/Address";
import User from "@/models/User";
import connectMongo from "@/util/db";
import { revalidatePath } from "next/cache";

export async function getAddress(email = "") {
  try {
    await connectMongo();
    const user = await User.findOne({ email }).lean();
    if (!user) return { success: false, data: null, message: "User not found" };

    const addressDoc = await Address.findOne({ user: user._id }).lean();
    return { success: true, data: addressDoc?.address ?? [] };
  } catch (error) {
    console.log("error getAddress:", error);
    return { success: false, data: null, error: error.message };
  }
}

export async function addAddress(body, path) {
  try {
    await connectMongo();
    const { email, title, contact, postalCode, address, house_name, address_type } = body;

    const user = await User.findOne({ email }).lean();
    if (!user) return { success: false, message: "User not found" };

    let userAddress = await Address.findOne({ user: user._id });
    if (!userAddress) {
      userAddress = new Address({ user: user._id, address: [] });
    }

    const existingIndex = userAddress.address.findIndex(
      (a) => a.address_type === address_type
    );

    if (existingIndex !== -1) {
      userAddress.address[existingIndex] = { title, contact, postalCode, address, house_name, address_type };
    } else {
      userAddress.address.push({ title, contact, postalCode, address, house_name, address_type });
    }

    await userAddress.save();
    revalidatePath(path);
    return { success: true, message: "Address saved successfully" };
  } catch (error) {
    console.log("error addAddress:", error);
    return { success: false, message: error.message };
  }
}

