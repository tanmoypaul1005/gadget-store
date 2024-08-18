import { auth } from "@/auth";
import React from "react";
import { findUserId } from "../action/product/action";
import { getCartCount } from "../action/cart";
import Image from "next/image";
import RemoveCart from "./components/RemoveCart";
import Link from "next/link";
import QuantityButton from "./components/QuantityButton";
import Summary from "./components/Summary";
import ShoppingButton from "../checkout/components/ShoppingButton";
import { iNoCart } from "@/util/imageImports";

const Cart = async () => {
  
  const session = await auth();

  const user = await findUserId(session?.user?.email);

  const carts = await getCartCount(user?._id);

  return (
    <>
      {carts?.length > 0 ? (
        <div className="font-sans common-topGap common-class">
          <div className="grid gap-8 mt-5 md:grid-cols-3">
            <div className="space-y-4 md:col-span-2">
              {carts?.map((item, index) => (
                <div key={index}>
                  <div
                    key={index}
                    className="grid items-start grid-cols-3 gap-4"
                  >
                    <div className="flex items-start col-span-2 gap-4">
                      <div className="p-2 bg-gray-100 rounded-md w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                        <Image
                          src={item?.product?.image}
                          alt=""
                          className="object-contain w-full h-full"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="flex flex-col">
                        <h3 className="text-base font-bold text-white line-clamp-2">
                          {item?.product?.name}
                        </h3>
                        <p className="text-xs font-semibold text-white mt-0.5">
                          Qty:{item?.quantity ?? 0}
                        </p>

                        <button
                          type="button"
                          className="flex items-center gap-1 mt-6 text-xs font-semibold text-red-500 shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline w-4 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                              data-original="#000000"
                            ></path>
                            <path
                              d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                              data-original="#000000"
                            ></path>
                          </svg>
                          <RemoveCart data={item?._id} />
                        </button>
                      </div>
                    </div>

                    <div className="ml-auto">
                      <h4 className="text-lg font-bold text-white text-end max-sm:text-base">
                        ${item?.product?.price}
                      </h4>

                      <QuantityButton
                        id={item?._id}
                        initialQuantity={item?.quantity ?? 0}
                      />
                    </div>
                  </div>
                  {parseInt(carts?.length) - 1 !== parseInt(index) && (
                    <hr className="mt-2 border-gray-300" />
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-100 rounded-md h-max">
              <h3 className="pb-2 text-lg font-bold text-gray-800 border-b border-gray-300 max-sm:text-base">
                Order Summary
              </h3>
              {/* 
          <form className="mt-6">
            <div>
              <h3 className="mb-4 text-base font-semibold text-gray-800">
                Enter Details
              </h3>
              <div className="space-y-3">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="absolute w-4 h-4 right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="absolute w-4 h-4 right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                  <svg
                    fill="#bbb"
                    className="absolute w-4 h-4 right-4"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="m52.148 42.678-6.479-4.527a5 5 0 0 0-6.963 1.238l-1.504 2.156c-2.52-1.69-5.333-4.05-8.014-6.732-2.68-2.68-5.04-5.493-6.73-8.013l2.154-1.504a4.96 4.96 0 0 0 2.064-3.225 4.98 4.98 0 0 0-.826-3.739l-4.525-6.478C20.378 10.5 18.85 9.69 17.24 9.69a4.69 4.69 0 0 0-1.628.291 8.97 8.97 0 0 0-1.685.828l-.895.63a6.782 6.782 0 0 0-.63.563c-1.092 1.09-1.866 2.472-2.303 4.104-1.865 6.99 2.754 17.561 11.495 26.301 7.34 7.34 16.157 11.9 23.011 11.9 1.175 0 2.281-.136 3.29-.406 1.633-.436 3.014-1.21 4.105-2.302.199-.199.388-.407.591-.67l.63-.899a9.007 9.007 0 0 0 .798-1.64c.763-2.06-.007-4.41-1.871-5.713z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </form> */}

              <Summary carts={carts} />

              <div className="mt-6 space-y-3">
                <Link href={"/checkout"}>
                  <button
                    type="button"
                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md"
                  >
                    Checkout
                  </button>
                </Link>
                <div className="mt-3"></div>
                <Link href={"/"}>
                  <button
                    type="button"
                    className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md"
                  >
                    Continue Shopping{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="No items in cart"
            src={iNoCart}
            style={{ maxWidth: "500px", maxHeight: "500px" }}
          />
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-semibold text-white">
              Your Cart is Empty!
            </h2>
            <p className="mt-2 font-semibold text-white">
              {"Looks like you haven't added anything to your cart yet."}
            </p>
            <ShoppingButton />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
