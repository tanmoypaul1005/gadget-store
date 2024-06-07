import { auth } from "@/auth";
import React from "react";
import { findUserId } from "../action/product/action";
import { getCartCount } from "../action/cart";
import CheckOutProduct from "./components/CheckOutProduct";
import CommonInput from "@/components/input/CommonInput";
import Address from "../components/Address/Address";
import { getAddress } from "../action/address";

const Checkout = async () => {

  const session = await auth();

  const address = await getAddress(session?.user?.email);

  const user = await findUserId(session?.user?.email);

  const cart = await getCartCount(user?._id);

  const totalPrice = cart?.reduce((total, item) => {
    return total + item?.quantity * item?.product?.price;
  }, 0);

  return (
    <>
      {/* <div className="flex flex-col items-center border-b bg-[#e2e8f0] py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 ">
        <a href="#" className="text-2xl font-bold text-gray-800">
          sneekpeeks
        </a>
        <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <div className="ring ring-emerald-400 ring-offset-2 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400 text-xs font-semibold text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">Shop</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <a
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="px-5 grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="mt-8 space-y-3 rounded-lg border  px-2 py-4 sm:px-6">
            {cart?.length > 0
              ? cart?.map((item, index) => (
                <CheckOutProduct item={item} key={index} />
              ))
              : "No items in cart"}
          </div>

          {/* <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="/images/naorrAeygcJzX0SyNI4Y0.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700  flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form> */}
          <div className="mt-8"></div>
          <Address email={session?.user?.email} address={address?.data} />
        </div>

        <div className="mt-10 px-4 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div>
            <CommonInput disabled={true} label={"Name"} value={session?.user?.name} placeholder="your.email@gmail.com" />
            <CommonInput disabled={true} label={"Email"} value={session?.user?.email} placeholder="your.email@gmail.com" />
            <CommonInput label={"Contact Number"} placeholder="Street Address"/>

            <div className="mt-6 border-t border-b py-2 text-white">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Subtotal</p>
                <p className="font-semibold">${totalPrice}</p>
              </div>
              {/* <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Shipping</p>
                <p className="font-semibold">$8.00</p>
              </div> */}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium ">Total</p>
              <p className="text-2xl font-semibold">${totalPrice}</p>
            </div>
          </div>
          <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;

export async function generateStaticParams() {


  const session = await auth();

  const user = await findUserId(session?.user?.email);

  const cart = await getCartCount(user?._id);

  return recipeList?.data.map((item) => {
    return {
      params: {
        cart,
      },
    };
  });
}
