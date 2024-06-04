import { commonView } from "@/util/utilityFunction";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link href={`/products/${product?._id}`}>
      <div className="pt-5 duration-500 bg-cCommonBg text-white shadow-md w-60 rounded-xl hover:scale-105 hover:shadow-xl">
        <>
          <Image
            style={{ maxHeight: "20px", minHeight: "200px" }}
            alt=""
            width={400}
            height={500}
            src={product?.image}
            className="object-contain object-center rounded-t-xl"
          />
          <div className="px-4 py-3 w-60">
            <span className="mr-3 text-xs uppercase">
              {commonView(product?.brand)}
            </span>
            <p className="block text-lg font-bold capitalize truncate line-clamp-2">
              {product?.name}
            </p>
            <div className="flex items-center">
              <p className="my-3 text-lg font-semibold cursor-auto text-red-400">
                ${product?.price}
              </p>
              <del>
                {/* <p className="ml-2 text-sm text-gray-600 cursor-auto">$199</p> */}
              </del>
              <div className="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </div>
            </div>
          </div>
        </>
      </div>
    </Link>
  );
}

export default ProductCard;
