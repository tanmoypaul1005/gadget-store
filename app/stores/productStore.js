import axios from "axios";
import { create } from "zustand";


export const useProductStore = create((set) => ({

    productList: [],
    setProductList: (value) => set({ productList: value }),

    filterForm:{
      category:null,
      minPrice:null,
      maxPrice:null,
    },
    setFilterForm: (value) => set({ filterForm: value }),

}));


export const fetchProductList = async (categoryId) => {
    const { setProductList } = useProductStore.getState();
    try {
      const response = await axios.get(`/api/category/products?category_id=${categoryId}`);
      const data = response?.data?.data || [];
      console.log("data",data);
      setProductList(data);
    } catch (error) {
      console.error(error);
      setProductList([]);
    }
  };