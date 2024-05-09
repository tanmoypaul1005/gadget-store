"use client";
import CommonButton from "@/components/button/CommonButton";
import { kuCart, kuUrl } from "@/util/url";
import React from "react";
import axios from "axios";
import { base_url } from "@/util/const";
import { Toastr } from "@/util/utilityFunction";

const Action = ({ product_id }) => {
  const user = JSON.parse(localStorage.getItem("gadget-store-user"));
  

  const formData = {
    product_id: product_id,
    user_id: user?._id,
    quantity: 1,
  };

  return (
    <>
      <CommonButton
        onClick={async () => {
          const res = await axios.post(process.env.NEXT_PUBLIC_BASE_URL+ "api"+ kuCart, formData, {
            headers: {
              "Content-Type": "application/json",
            },
          });

          const data = res.data;

          if (data?.success) {
            // reset();
            Toastr({ message: data?.message, type: "success" });
            // localStorage.setItem("gadget-store-token", data?.data?.token);
            // localStorage.setItem("gadget-store-user", data?.data?.user);
            // router.push("/");
          } else {
            Toastr({ message: data?.message, type: "error" });
          }
        }}
        btnLabel="Add Cart"
        colorType="danger"
      />
      <CommonButton btnLabel="Buy" colorType="danger" />
    </>
  );
};

export default Action;
