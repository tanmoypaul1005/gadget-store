import React from "react";
import Image from "next/image";
import { commonView } from "@/util/utilityFunction";
import Link from "next/link";

const ProductBox = ({ product }) => {
  return (
    <Link
      href={`/products/${product?._id}`}
      className="flex items-center justify-start w-full gap-2 bg-[#374151] rounded-lg shadow-sm cursor-pointer h-28"
    >
      <div className="w-20 h-20 p-2">
        <Image
          style={{ maxwidth: "60px", minWidth: "60px", height: "100%" }}
          className="w-full h-full"
          src={product?.image}
          alt=""
          width={180}
          height={180}
        />
      </div>
      <div className="text-gray-700">
        <h4 className="w-full text-sm font-bold text-white line-clamp-1">
          {commonView(product?.name)}
        </h4>
       
        <div className="flex items-center justify-start gap-4 text-white">
          <strong className="text-red-400">
            $ {commonView(product?.price)}
          </strong>
          {/* <s className="text-gray-500">$14.00</s> */}
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
