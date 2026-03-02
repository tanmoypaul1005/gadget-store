
import { create } from "zustand";


const useCartStore = create((set) => ({

  totalCart: 0,
  setTotalCart: (value) => set({ totalCart: value }),

}));

export default useCartStore;


