// "use client";
import Image from "next/image";
import React from "react";
import ClearCart from "./ClearCart";

const CheckOutProduct = ({ item }) => {
  console.log("CheckOutProduct item:", item);

  if (!item || !item.product) {
    return null;
  }

  return (
    <div className="flex flex-col rounded-lg sm:flex-row">
      <Image
        className="m-2 h-24 w-28 rounded-md border object-contain object-center"
        src={item?.product?.image}
        width={100}
        height={100}
        alt=""
      />
      <div className="flex w-full flex-col px-4 py-4">
        <span className="font-semibold">{item?.product?.name}</span>
        <span className="float-right text-gray-400">{item.product._id}</span>
        <p className="text-lg font-bold">${item?.product?.price}</p>
      </div>
      <ClearCart data={item?._id} />
    </div>
  );
};

export default CheckOutProduct;
