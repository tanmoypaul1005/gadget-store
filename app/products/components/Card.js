"use client"
import CommonRating from "@/app/components/CommonRating";
import CartQuantityButton from "@/app/components/products/components/CartQuantityButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ product,width="max-w-[250px] min-w-[250px]",offerPercentage=null }) => {
  
  const router = useRouter();

  return (
    <div onClick={() => {
      router.push(`/products/${product?._id}`)
    }} 
    className={`relative w-full  px-2 py-3 cursor-pointer overflow-hidden bg-gray-700 rounded-lg shadow-md ${width}`}>
      <div className="flex items-center justify-center">
        <Image
          style={{
            maxWidth: "200px",
            maxHeight: "200px",
            minHeight: "200px",
            minWidth: "200px",
          }}
          className="rounded-t-lg "
          src={product?.image}
          alt="product image"
          width={500}
          height={500}
        />
      </div>
      <span className="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28">
        Sale
      </span>
      <div className="mt-2.5">
          <h5 className="text-base font-semibold tracking-tight text-white line-clamp-1">
            {product?.name}
          </h5>
        <div className="my-2.5 flex items-center">
          <CommonRating value={parseInt(product?.ratting ?? 0)}/>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-base font-bold text-white">${product?.price}</div>
          <CartQuantityButton productId={product?._id} size="md" />
        </div>
      </div>
      <div className="absolute top-0 right-0">
       {offerPercentage && <span className="px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded-full">{offerPercentage}%</span>}
      </div>
    </div>

  );
};

export default Card;
