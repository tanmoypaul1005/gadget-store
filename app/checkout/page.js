import { auth } from "@/auth";
import React from "react";
import { findUserId } from "../action/product/action";
import { getCartCount } from "../action/cart";
import CheckOutProduct from "./components/CheckOutProduct";

const Checkout = async () => {
  
  const session = await auth();

  const user = await findUserId(session?.user?.email);

  const cart = await getCartCount(user?._id);

  return (
    <>
      <div className="flex flex-col items-center border-b bg-[#e2e8f0] py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32 ">
        <a href="#" className="text-2xl font-bold text-gray-800">
          sneekpeeks
        </a>
        <div className="py-2 mt-4 text-xs sm:mt-0 sm:ml-auto sm:text-base">
          <div className="relative">
            <ul className="relative flex items-center justify-between w-full space-x-2 sm:space-x-4">
              <li className="flex items-center space-x-3 text-left sm:space-x-4">
                <div className="flex items-center justify-center w-6 h-6 text-xs font-semibold rounded-full ring ring-emerald-400 ring-offset-2 bg-emerald-400 text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
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
                className="w-4 h-4 text-black"
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
                  className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-600 rounded-full ring ring-gray-600 ring-offset-2"
                  href="#"
                >
                  2
                </a>
                <span className="font-semibold text-gray-900">Shipping</span>
              </li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-black"
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
                  className="flex items-center justify-center w-6 h-6 text-xs font-semibold text-white bg-gray-400 rounded-full"
                  href="#"
                >
                  3
                </a>
                <span className="font-semibold text-gray-500">Payment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          <div className="px-2 py-4 mt-8 space-y-3 border rounded-lg sm:px-6">
            {cart?.length > 0
              ? cart?.map((item, index) => (
                  <CheckOutProduct item={item} key={index} />
                ))
              : "No items in cart"}
          </div>

          <p className="mt-8 text-lg font-medium">Shipping Methods</p>
          <form className="grid gap-6 mt-5">
            <div className="relative">
              <input
                className="hidden peer"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 right-4 top-1/2"></span>
              <label
                className="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50"
                for="radio_1"
              >
                <img
                  className="object-contain w-14"
                  src="/images/naorrAeygcJzX0SyNI4Y0.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-sm leading-6 text-slate-500">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="hidden peer"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span className="box-content absolute block w-3 h-3 -translate-y-1/2 bg-white border-8 border-gray-300 rounded-full peer-checked:border-gray-700 right-4 top-1/2"></span>
              <label
                className="flex p-4 border border-gray-300 rounded-lg cursor-pointer select-none peer-checked:border-2 peer-checked:border-gray-700"
                for="radio_2"
              >
                <img
                  className="object-contain w-14"
                  src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-sm leading-6 text-slate-500">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>

        <div className="px-4 pt-8 mt-10 lg:mt-0">
          <p className="text-xl font-medium">Payment Details</p>
          <p className="text-gray-400">
            Complete your order by providing your payment details.
          </p>
          <div className="">
            <label for="email" className="block mt-4 mb-2 text-sm font-medium">
              Email
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full px-4 py-3 text-sm text-black border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="your.email@gmail.com"
              />
              <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
            </div>
            <label
              for="card-holder"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Card Holder
            </label>
            <div className="relative">
              <input
                type="text"
                id="card-holder"
                name="card-holder"
                className="w-full px-4 py-3 text-sm text-black uppercase border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Your full name here"
              />
              <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                  />
                </svg>
              </div>
            </div>
            <label
              for="card-no"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Card Details
            </label>

            <div className="relative flex-shrink-0 w-full">
              <input
                type="text"
                id="card-no"
                name="card-no"
                className="w-full px-2 py-3 text-sm text-black border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="xxxx-xxxx-xxxx-xxxx"
              />
              <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                </svg>
              </div>
            </div>

            <label
              for="billing-address"
              className="block mt-4 mb-2 text-sm font-medium"
            >
              Billing Address
            </label>

            <div className="relative flex-shrink-0 w-full">
              <input
                type="text"
                id="billing-address"
                name="billing-address"
                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-md shadow-sm outline-none pl-11 focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Street Address"
              />
              <div className="absolute inset-y-0 left-0 inline-flex items-center px-3 pointer-events-none">
                <img
                  className="object-contain w-4 h-4"
                  src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg"
                  alt=""
                />
              </div>
            </div>

            <div className="py-2 mt-6 text-white border-t border-b">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Subtotal</p>
                <p className="font-semibold">$399.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Shipping</p>
                <p className="font-semibold">$8.00</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <p className="text-sm font-medium ">Total</p>
              <p className="text-2xl font-semibold">$408.00</p>
            </div>
          </div>
          <button className="w-full px-6 py-3 mt-4 mb-8 font-medium text-white bg-gray-900 rounded-md">
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
