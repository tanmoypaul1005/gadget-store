"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import CommonRating from "../../CommonRating";
import { serverAddCart } from "@/app/action/cart";
import { addToGuestCart } from "@/util/guestCart";
import { Toastr } from "@/util/utilityFunction";
import LoginAlertModal from "../../modal/LoginAlertModal";
import { useSession } from "next-auth/react";
import { useState } from "react";

const SecondaryProductCard = ({ product,width="max-w-[250px] min-w-[250px]" }) => {
  
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <>
    <LoginAlertModal open={open} setOpen={setOpen} />
    <div onClick={() => {
      router.push(`/products/${product?._id}`)
    }} 
    className={`relative py-4 cursor-pointer overflow-hidden px-2.5 text-white duration-500 shadow-md bg-cCommonBg rounded-xl ${width}`}>
      <div className="flex items-center justify-center">
      <Image
          style={{ minHeight: "120px", maxHeight: "120px" }}
          alt={product?.name ?? "Product Image"}
          width={400}
          height={500}
          src={product?.image}
          className="object-contain object-center w-full h-32 rounded-t-xl"
        />
      </div>
      <span className="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28">
        Sale
      </span>
      <div className="mt-2.5">
          <h5 className="text-sm font-semibold tracking-tight text-white line-clamp-1">
            {product?.name}
          </h5>
        <div className="my-2.5 flex items-center">
          <CommonRating value={parseInt(product?.ratting ?? 0)}/>
        </div>
        <div className="flex gap-y-2.5 flex-col">
          <div className="text-sm font-bold text-white">${product?.price}</div>
          <button
            type='button'
            onClick={async(e) => { 
              e.stopPropagation();
              if (session) {
                const success = await serverAddCart(product?._id, window.location.pathname);
                if (success?.success) {
                  Toastr({ type: "success", message: success.message });
                } else {
                  setOpen(true);
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
            className="flex items-center px-3 py-2 text-xs font-medium text-center text-white rounded-md w-fit bg-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2"
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
    </div>
</>
  );
};

export default SecondaryProductCard;
