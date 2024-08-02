// import Products from "@/models/Products";
// import connectMongo from "@/util/db";
import { create } from "zustand";


export const useProductStore = create((set) => ({

    productList: [],
    setProductList: (value) => set({ productList: value }),

}));


export const fetchProductList = async (min_price = 0, max_price = 0) => {
    // const { setProductList } = useProductStore.getState();
    // try {
    //   await connectMongo();
    //   const response = await Products({ min_price, max_price });
    //   setProductList(response);
    // } catch {
    //   return [];
    // }
  };