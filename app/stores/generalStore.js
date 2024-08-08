import { create } from "zustand";

export const useGeneralStore = create((set) => ({

    mobileNav: "",
    setMobileNav: (value) => set({ mobileNav: value }),

}));