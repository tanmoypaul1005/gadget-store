"use client";
import CommonButton from "@/components/button/CommonButton";
import { kuCart } from "@/util/url";
import React from "react";
import axios from "axios";
import { Toastr } from "@/util/utilityFunction";

const Action = ({ product_id,  user }) => {
  const formData = {
    product_id: product_id,
    user_id: user,
    quantity: 1,
  };

  return (
    <div className="flex justify-start space-x-5">
      <CommonButton
        onClick={async () => {
          const res = await axios.post(
            process.env.NEXT_PUBLIC_BASE_URL + "api" + kuCart,
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const data = res.data;

          if (data?.success) {
            Toastr({ message: data?.message, type: "success" });
          } else {
            Toastr({ message: data?.message, type: "error" });
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
