"use client";
import { deleteCart } from "@/app/action/cart";
import { Toastr } from "@/util/utilityFunction";
import React from "react";

const ClearCart = (params) => {
  

  return (
    <div
      className="cursor-pointer"
      onClick={async () => {
      const success=  await deleteCart(params?.data,"/checkout");
      if(success){
        Toastr({ message: "Cart Cleared Successfully", type: "success" })
      }else{
        Toastr({ message: "Cart Cleared Failed", type: "error" })
      }
      }}
    >
      Clear
    </div>
  );
};

export default ClearCart;
