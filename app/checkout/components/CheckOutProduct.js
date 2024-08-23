import Image from "next/image";
import React from "react";

const CheckOutProduct = ({ item }) => {

  if (!item || !item.product) {
    return null;
  }

  return (
    <div className="flex rounded-lg ">
      <div className="flex items-center justify-center">
        <Image
          style={{ minWidth: 80, minHeight: 80 }}
          className="object-contain object-center h-24 m-2 border rounded-md w-28"
          src={item?.product?.image}
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className="flex flex-col w-full px-1 py-3 sm:px-4">
        <span className="text-base font-semibold line-clamp-2 md:line-clamp-2">{item?.product?.name}</span>
        <span className="float-right text-gray-400"> Qty:{item?.quantity}</span>
        <span className="hidden float-right text-gray-400 md:flex">Cart id: {item.product._id}</span>
        <p className="text-lg font-bold">price: ${item?.product?.price}</p>
      </div>
      {/* <ClearCart data={item?._id} /> */}
    </div>
  );
};

export default CheckOutProduct;
