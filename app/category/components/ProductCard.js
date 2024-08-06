import Image from "next/image";
import React from "react";

const ProductCard = ({product}) => {
  return (
      <div className="flex flex-col self-center px-3 py-2 overflow-hidden bg-gray-700 border rounded-lg shadow-md w-72 group border-gray-100/30">
      <Image
            style={{ maxHeight: "20px", minHeight: "200px" }}
            alt=""
            width={200}
            height={500}
            src={product?.image}
            className="object-contain object-center rounded-t-xl"
          />
      
        <div className="mt-2">
          <a href="#">
            <h5 className="text-lg tracking-tight text-white line-clamp-1">
             {product?.name ?? "NA"}
            </h5>
          </a>
          <div className="flex items-center justify-between mt-2 mb-5">
            <p>
              <span className="text-xl font-bold text-white">${product?.price}</span>
            </p>
          </div>
          <a
            href="#"
            className="hover:border-white/40 flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mr-2"
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
          </a>
        </div>
      </div>
  );
};

export default ProductCard;
