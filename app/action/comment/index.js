"use server";

import { revalidatePath } from "next/cache";
import connectMongo from "@/util/db";

export const addComment=async(body,pathName)=>{
  try{
    await connectMongo();
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL +`api/comment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    const data = await response?.json();

    if (data?.success) {
      await revalidatePath(pathName);
      console.log("Success:", data?.message);
      return data;
    } else {
      console.error("Error:", data?.message);
    }
    return data;
  }catch(err){
    console.error("error addComment", err);
    return { status: 500, success: false, message: "Internal Server Error" };
  }
}