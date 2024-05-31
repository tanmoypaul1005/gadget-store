'use server'
 
import { revalidatePath } from 'next/cache'
import Cart from "@/models/Cart";
import useCartStore from "@/stores/cartStore";
import connectMongo from "@/util/db";
import { kuCart } from "@/util/url";
export const getCartCount = async (user_id) => {
  const { setTotalCart } = useCartStore.getState();

  try {
    await connectMongo();
    const cart = await Cart?.findOne({ user: user_id }).lean().exec();
    console.log("", cart?.cartItems?.length);
    
    await setTotalCart(cart?.cartItems?.length ?? 0);
    return cart?.cartItems?.length ?? 0;
  } catch (err) {
    setTotalCart(0);
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