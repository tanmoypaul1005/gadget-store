"use server"
import { revalidatePath } from "next/cache";

export async function getAddress(email = "") {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL +
      `api/address?email=${encodeURIComponent(email)}`
    );
    let data;
    if (res.headers.get('content-type')?.includes('application/json')) {
      data = await res.json();
    } else {
      throw new Error('Server response is not JSON');
    }

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
    revalidatePath("/profile");
    return data;
  } catch (error) {
    console.log("error: ", error);
    return { error: error.message };
  }
}
