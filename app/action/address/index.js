"use server"

import { base_url } from "@/util/const";

export async function getAddress(email = "") {
    try {
      const res = await fetch(
        `${base_url}/address?email=${encodeURIComponent(email)}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("error: ", error);
      return { error: error.message };
    }
  }
  
  export async function addAddress(body) {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "api/address", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      revalidatePath("/en/checkout");
      return data;
    } catch (error) {
      console.log("error: ", error);
      return { error: error.message };
    }
  }
  