"use client";
import CommonButton from "@/components/button/CommonButton";
import React from "react";
import { Toastr } from "@/util/utilityFunction";
import { addCart } from "@/app/action/cart";

const Action = ({ product_id, user }) => {
  
  const formData = {
    product_id: product_id,
    user_id: user,
    quantity: 1,
  };

  return (
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
  );
};

export default Action;
