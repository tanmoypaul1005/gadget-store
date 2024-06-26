/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoutModal from "./LogoutModal";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import Search from "./Search";
import { iCart, iOrder } from "@/util/imageImports";

const HeaderUserInfo = ({ session, totalCart, totalOrder }) => {

  const [isShowLogoutModal, setShowLogoutModal] = useState(false);

  const [mobileNav, setMobileNav] = useState(false);

  //handle click
  const handleClick = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      <LogoutModal
        open={isShowLogoutModal}
        setOpen={setShowLogoutModal}
      />

      <div className="flex flex-col w-full px-8 mx-auto md:gap-8 lg:px-0 lg:w-5/6">
        <header className="">
          {/* desktop nav  */}
          <nav className="flex justify-between gap-x-2 w-full py-3">
            {/* brand  */}
            <div className="flex items-center flex-grow gap-x-4">
              <Link href={"/"} className="text-3xl max-w-[190px] min-w-[190px]  font-semibold text-white select-none">
                Gadget store
              </Link>
              <div className="hidden w-full md:block lg:block">
                <Search /> 
              </div>
            </div>

            <div className="flex items-center justify-center pr-2">
              <div className="hidden gap-x-3 md:flex lg:flex">
                <div className="flex flex-col justify-end w-full sm:flex-row">

                  <OrderButton
                    isHover={true}
                    totalOrder={totalOrder}
                  />

                  {/* <Favorites /> */}

                  <CartIcon totalCart={totalCart} />

                  {session ? (
                    <div className="flex ml-3 space-x-3">
                      <Link href={"/profile"}>
                        <Image
                          style={{
                            maxWidth: "40px",
                            minWidth: "40px",
                            maxHeight: "40px",
                            minHeight: "40px",
                          }}
                          className="rounded-full"
                          src={session?.user?.image}
                          alt="pic"
                          width={20}
                          height={20}
                        />
                      </Link>
                      <Link
                        href={"/profile"}
                        className="flex items-center justify-center font-bold text-white cursor-pointer text-md"
                      >
                        {session?.user?.name}
                      </Link>
                      <div
                        onClick={() => {
                          setShowLogoutModal(true);
                        }}
                        className="relative flex items-center justify-center cursor-pointer"
                      >
                        <Image
                          style={{
                            maxWidth: "30px",
                            minWidth: "30px",
                            maxHeight: "30px",
                            minHeight: "30px",
                          }}
                          src={"/images/icons/logOut.svg"}
                          alt="pic"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        onClick={async () => {

                          await signIn("google", {
                            callbackUrl: "/",
                          });
                        }}
                        className="flex items-center px-4 py-2 ml-2 border rounded-md cursor-pointer border-cDeepSaffron gap-x-1 text-cDeepSaffron hover:bg-cCommonBg"
                      >
                        <span className="text-sm font-medium">Sign in</span>
                      </div>
                      <div
                        onClick={async () => {
                          await signIn("google", {
                            callbackUrl: "/",
                          });
                        }}
                        className="flex items-center px-4 py-2 ml-2 border rounded-md cursor-pointer border-cDeepSaffron gap-x-1 text-cDeepSaffron hover:bg-cCommonBg"
                      >
                        <span className="text-sm font-medium">Login</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* menu icon  */}
              <div className="block md:hidden lg:hidden">
                <div className="flex space-x-3">
                  <CartIcon totalCart={totalCart} />
                  <HiMenuAlt3
                    className="w-10 h-10 p-2 text-gray-700 transition duration-200 transform border border-gray-400 rounded-lg cursor-pointer ring-blue-300 focus:ring-4 hover:scale-110"
                    onClick={handleClick}
                  />
                </div>
              </div>


            </div>
          </nav>

          {/* mobile nav  */}
          {mobileNav && (
            <>
              <nav className="block py-4 mx-6 my-2 border border-gray-300 rounded-lg shadow-lg md:hidden lg:hidden">
                <ul>
                  <li>
                    <OrderButton totalOrder={totalOrder} isHover={false} />
                  </li>
                  <li>
                    <Favorites isHover={false} />
                  </li>
                </ul>
              </nav>
            </>
          )}
        </header>

        <div className="block w-full mb-5 md:hidden lg:hidden">
          <Search />
        </div>
      </div>
    </>
  );
};

export default HeaderUserInfo;



const CartIcon = ({ totalCart = 0 }) => {
  return (
    <>
      <Link href={"/checkout"} className="flex items-center px-4 py-2 rounded-md cursor-pointer gap-x-1 hover:text-white hover:bg-cCommonBg">
        <div className="relative">

          <Image src={iCart} alt="" width={18} height={18} />
          {
            totalCart > 0 ? <span className="absolute flex items-center justify-center w-4 h-4 p-2 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
              {totalCart}
            </span> :
              ""
          }
        </div>
        <span className="text-sm font-medium text-cDeepSaffron mt-[4px]">Cart</span>
      </Link>
    </>
  )
}


const Favorites = ({ isHover = true }) => {
  return (
    <>
      <div className={`flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 ${isHover ? "hover:text-white hover:bg-cCommonBg" : ""} `}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            // fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          // clip-rule="evenodd"
          />
        </svg>
        <span className="text-sm font-medium">Favorites</span>
      </div>
    </>
  )
}

const OrderButton = ({ isHover = true, totalOrder = 0 }) => {
  return (
    <>
      <Link href={"/orders"} className={`flex cursor-pointer justify-center items-center gap-x-1 rounded-md py-2 px-4 ${isHover ? "hover:text-white hover:bg-cCommonBg" : ""} `}>
        <div className="relative">
          <Image src={iOrder} alt="" width={18} height={18} />
          {
            totalOrder > 0 ? <span className="absolute flex items-center justify-center w-4 h-4 p-2 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
              {totalOrder}
            </span> :
              ""
          }
        </div>
        <span className="text-sm font-medium text-cDeepSaffron mt-[4px]">Orders</span>
      </Link>
    </>
  )
}