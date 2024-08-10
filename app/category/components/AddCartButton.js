"use client";
import { addCart } from "@/app/action/cart";
import { Toastr } from "@/util/utilityFunction";
import React from "react";

const AddCartButton = ({data}) => {

  const formData = {
    product_id: data?.product_id,
    user_id: data?.user?._id,
    quantity: 1,
  };
  
  return (
    <div
      onClick={async (e) => {
        e.preventDefault();
        const success = await addCart(formData, window.location.pathname);
        if (success.success) {
          Toastr({ type: "success", message: success.message });
        } else {
          Toastr({ type: "error", message: success.message });
        }
      }}
      className="cursor-pointer hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      Add to cart
    </div>
  );
};

export default AddCartButton;
