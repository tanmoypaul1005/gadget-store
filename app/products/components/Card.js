import Image from "next/image";
import React from "react";

const Card = ({ product }) => {
  return (
    <div className="relative w-full max-w-[250px] min-w-[250px] px-2 pt-2 overflow-hidden bg-white rounded-lg shadow-md">
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
      <div className="pb-5 mt-4 ">
        <a href="#">
          <h5 className="text-base font-semibold tracking-tight line-clamp-1 text-slate-900">
            {product?.name}
          </h5>
        </a>
        <div className="mt-2.5 mb-5 flex items-center">
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
          {parseInt(product?.ratting ?? 0)}.0
          </span>
          <div className="flex">
          {
            [...Array(product?.ratting)].map((item,index)=>(
              <div key={index}>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-yellow-300"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
              </div>
            ))
          }
      </div>
        </div>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-base font-bold text-slate-900">${product?.price}</span>

          </p>
          <button
            className="flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-md bg-slate-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
    </div>
  );
};

export default Card;
