import { create } from "zustand";

export const useCheckoutStore = create((set) => ({

    contact_number: "",
    setContactNumber: (value) => set({ contact_number: value }),

}));