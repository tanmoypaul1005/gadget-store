import Cart from "@/models/Cart";
import useCartStore from "@/stores/cartStore";
import connectMongo from "@/util/db";

export const getCartCount = async (user_id) => {
  const { setTotalCart } = useCartStore.getState();

  try {
    await connectMongo();
    const cart = await Cart?.findOne({ user: user_id }).lean().exec();
    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvb", cart?.cartItems?.length);
    
    await setTotalCart(cart?.cartItems?.length ?? 0);
    return cart?.cartItems?.length ?? 0;
  } catch (err) {
    setTotalCart(0);
  }
};
