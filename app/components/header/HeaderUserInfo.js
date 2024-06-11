/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoutModal from "./LogoutModal";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import Search from "./Search";
// import Fade from 'react-reveal/Fade';

const HeaderUserInfo = ({ session, totalCart, totalOrder }) => {

  const [isShowLogoutModal, setShowLogoutModal] = useState(false);

  const [mobileNav, setMobileNav] = useState(false);

  const menu = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "About", to: "/about" },
    { id: 3, text: "Service", to: "/service" },
    { id: 4, text: "Contact", to: "/contact" },
  ];

  //handle click
  const handleClick = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="w-full gap-8 px-8 mx-auto min-h-auto lg:px-0 lg:w-5/6 header">
      <LogoutModal
        open={isShowLogoutModal}
        setOpen={setShowLogoutModal}
      />
      <header>
        {/* desktop nav  */}
        <nav className="flex justify-between w-full py-3">
          {/* brand  */}
          <div className="flex items-center flex-grow space-x-2">
            <Link href={"/"} className="text-3xl font-semibold text-white select-none">
              Gadget store
            </Link>
            <Search />
          </div>

          <div>
            <div className="hidden space-x-3 md:flex lg:flex">
              <div className="flex flex-col justify-end w-full px-6 sm:flex-row">

                <Link href={"/orders"} className="flex items-center px-4 py-2 rounded-md cursor-pointer gap-x-1 hover:text-white hover:bg-cCommonBg">
                  <div className="relative">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                      <path
                        // fill-rule="evenodd"
                        d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                      // clip-rule="evenodd"
                      />
                    </svg>
                    {
                      totalOrder > 0 ? <span className="absolute flex items-center justify-center w-4 h-4 p-2 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
                        {totalOrder}
                      </span> :
                        ""
                    }
                  </div>
                  <span className="text-sm font-medium">Orders</span>
                </Link>

                <Favorites />

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
                      {session.user.name}
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
                        console.log("clicked");
                        await signIn("google", {
                          callbackUrl: "/",
                        });
                      }}
                      className="flex items-center px-4 py-2 ml-2 border rounded-md cursor-pointer gap-x-1 hover:text-black hover:bg-gray-100"
                    >
                      <span className="text-sm font-medium">Sign in</span>
                    </div>
                    <div
                      onClick={async () => {
                        console.log("clicked");
                        await signIn("google", {
                          callbackUrl: "/",
                        });
                      }}
                      className="flex items-center px-4 py-2 ml-2 border rounded-md cursor-pointer gap-x-1 hover:text-black hover:bg-gray-100"
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
    </div>
  );
};

export default HeaderUserInfo;



const CartIcon = ({ totalCart = 0 }) => {
  return (
    <>
      <Link href={"/checkout"} className="flex items-center px-4 py-2 rounded-md cursor-pointer gap-x-1 hover:text-white hover:bg-cCommonBg">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          {
            totalCart > 0 ? <span className="absolute flex items-center justify-center w-4 h-4 p-2 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
              {totalCart}
            </span> :
              ""
          }
        </div>
        <span className="text-sm font-medium">Cart</span>
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
      <Link href={"/orders"} className={`flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 ${isHover ? "hover:text-white hover:bg-cCommonBg" : ""} `}>
        <div className="relative">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path
              // fill-rule="evenodd"
              d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
            // clip-rule="evenodd"
            />
          </svg>
          {
            totalOrder > 0 ? <span className="absolute flex items-center justify-center w-4 h-4 p-2 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
              {totalOrder}
            </span> :
              ""
          }
        </div>
        <span className="text-sm font-medium">Orders</span>
      </Link>
    </>
  )
}