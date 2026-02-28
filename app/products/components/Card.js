"use client"
import { serverAddCart } from "@/app/action/cart";
import { addToGuestCart } from "@/util/guestCart";
import CommonRating from "@/app/components/CommonRating";
import { Toastr } from "@/util/utilityFunction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";

const Card = ({ product,width="max-w-[250px] min-w-[250px]",offerPercentage=null }) => {
  
  const router = useRouter();
  const { data: session } = useSession();

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
          <button
            type='button'
            onClick={async(e) => { 
              e.stopPropagation();
              if (session) {
                const success = await serverAddCart(product?._id, window.location.pathname);
                if (success?.success) {
                  Toastr({ type: "success", message: success.message });
                } else {
                  Toastr({ type: "error", message: success?.message || "Could not add to cart" });
                }
              } else {
                // Guest: save to cookie
                const guestRes = await addToGuestCart(product?._id, 1);
                if (guestRes?.success) {
                  Toastr({ type: "success", message: guestRes.message });
                } else {
                  Toastr({ type: "error", message: guestRes?.message || "Could not add to cart" });
                }
              }
              }}
            className="flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-md bg-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
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
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-0">
       {offerPercentage && <span className="px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded-full">{offerPercentage}%</span>}
      </div>
    </div>

  );
};

export default Card;
