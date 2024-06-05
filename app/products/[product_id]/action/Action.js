"use client";
import CommonButton from "@/components/button/CommonButton";
import React from "react";
import { Toastr } from "@/util/utilityFunction";
import { addCart } from "@/app/action/cart";
import { useState } from "react";

const Action = ({ product_id, user }) => {

  const [quantity, setQuantity] = useState(1);

  const formData = {
    product_id: product_id,
    user_id: user,
    quantity: quantity,
  };


  const incrementQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <div className="flex flex-col">
      <div className="my-5">
        <h3 className="mb-1 text-sm text-white uppercase">Quantity</h3>
        <div className="flex text-white border border-gray-300 divide-x divide-gray-300 w-max">
          <div
            className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
            onClick={decrementQuantity}
          >
            -
          </div>
          <div className="flex items-center justify-center w-8 h-8 text-base">
            {quantity}
          </div>
          <div
            className="flex items-center justify-center w-8 h-8 text-xl cursor-pointer select-none"
            onClick={incrementQuantity}
          >
            +
          </div>
        </div>
      </div>
      <div className="flex justify-start space-x-5">
        <CommonButton
          onClick={async () => {
            const success = await addCart(formData, "/products/" + product_id);
            if (success.success) {
              Toastr({ type: "success", message: success.message });
            } else {
              Toastr({ type: "error", message: success.message });
            }
          }}
          btnLabel="Add Cart"
          colorType="danger"
        />
        <CommonButton btnLabel="Buy" colorType="danger" />
      </div>
    </div>
  );
};

export default Action;

{/* <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 bg-gray-200 border-0 rounded-full">
<svg
  fill="currentColor"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="2"
  className="w-5 h-5"
  viewBox="0 0 24 24"
>
  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
</svg>
</button> */}