
import { create } from "zustand";


const useCartStore = create((set) => ({

  totalCart: 0,
  setTotalCart: (value) => set({ totalCart: value }),

}));

export default useCartStore;

// get FavoriteCompany
// export const getCartCount = async (user_id) => {

//   const { setTotalCart } = useCartStore.getState();

//   try {
//    await connectMongo();
//    const cart= await Cart.findOne({ user: user_id }).lean().exec();
//    console.log("vnb",cart)

//    setTotalCart(cart?.cartItems?.length ?? 0)

//   } catch (err) {
//     setTotalCart(0)
//   }
// };

