/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoutModal from "./LogoutModal";
import { signIn } from "next-auth/react";
import Link from "next/link";
const HeaderUserInfo = ({ session, totalCart }) => {
  const [isShowLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      <header class="shadow flex justify-between w-full">
      <div className="text-xl font-semibold text-white max-w-[200px] min-w-[200px] flex items-center px-2">
          Gadget store
        </div>
        <div class="w-full relative flex max-w-screen-xl flex-col overflow-hidden px-4  sm:mx-auto sm:flex-row">
          <input type="checkbox" class="peer hidden" id="navbar-open" />
          <label
            class="absolute right-4 top-5 cursor-pointer sm:hidden"
            for="navbar-open"
          >
            <span class="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-labelledby="header-navigation"
            class="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-start"
          >
            <h2 class="sr-only" id="header-navigation">
              Header navigation
            </h2>


            <div className="  py-3 px-6 w-full flex justify-end">
          <LogoutModal open={isShowLogoutModal} setOpen={setShowLogoutModal} />
          <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:text-black hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path
                fill-rule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Orders</span>
          </div>

          <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:text-black hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">Favorites</span>
          </div>

          <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:text-black hover:bg-gray-100">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                {totalCart}
              </span>
            </div>
            <span className="text-sm font-medium">Cart</span>
          </div>

          {session ? (
            <div classNameName="flex space-x-3">
              <Link href={"/profile"}>
                <Image
                  style={{
                    maxWidth: "40px",
                    minWidth: "40px",
                    maxHeight: "40px",
                    minHeight: "40px",
                  }}
                  classNameName="rounded-full"
                  src={session?.user?.image}
                  alt="pic"
                  width={20}
                  height={20}
                />
              </Link>
              <Link
                href={"/profile"}
                classNameName="text-xl cursor-pointer flex justify-center items-center font-bold text-white"
              >
                {session.user.name}
              </Link>
              <div
                onClick={() => {
                  setShowLogoutModal(true);
                }}
                classNameName="relative cursor-pointer flex justify-center items-center"
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
                className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:text-black hover:bg-gray-100"
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
                className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:text-black hover:bg-gray-100"
              >
                <span className="text-sm font-medium">Login</span>
              </div>
            </>
          )}
        </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HeaderUserInfo;
