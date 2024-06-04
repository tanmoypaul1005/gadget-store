"use client";
import { deleteCart } from "@/app/action/cart";
import { Toastr } from "@/util/utilityFunction";
import Image from "next/image";
import React from "react";

const ClearCart = (params) => {

  return (
    <div
      className="cursor-pointer flex justify-center items-center"
      onClick={async () => {
        const success = await deleteCart(params?.data, "/checkout");
        if (success) {
          Toastr({ message: "Cart Cleared Successfully", type: "success" })
        } else {
          Toastr({ message: "Cart Cleared Failed", type: "error" })
        }
      }}
    >
      <Image
        style={{ maxWidth: "25", minWidth: "25px", naxHeight: "25px", minHeight: "25px", cursor: "pointer" }}
        className=' cursor-pointer'
        src={"/images/icons/redCancel.svg"}
        alt=''
        width={10}
        height={10}
      />
    </div>
  );
};

export default ClearCart;
