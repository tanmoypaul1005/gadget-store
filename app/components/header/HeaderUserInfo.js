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
import { useGeneralStore } from "@/app/stores/generalStore";

const HeaderUserInfo = ({ session, totalCart, totalOrder }) => {

  const [isShowLogoutModal, setShowLogoutModal] = useState(false);

  const { mobileNav, setMobileNav } = useGeneralStore();

  const handleClick = () => {
    setMobileNav(!mobileNav);
  };

  const handleGoogleAuthClick = async () => {
    await signIn("google", {
      callbackUrl: "/",
    });
  };

  const truncateName = (name, maxLength) => {
    if (name.length > maxLength) {
      return name.substring(0, maxLength) + "...";
    }
    return name;
  };

  return (
    <>
      <LogoutModal open={isShowLogoutModal} setOpen={setShowLogoutModal} />

      <div className="flex flex-col w-full h-fit common-class">

        <nav className="flex justify-between w-full pt-3 md:pb-3 gap-x-2">
          <div className="flex items-center flex-grow gap-x-4">
            <Link
              href={"/"}
              className="text-base font-semibold text-white select-none sm:text-3xl whitespace-nowrap"
            >
              Gadget store
            </Link>
            <div className="common-responsive">
              <Search />
            </div>
          </div>

          <div className="flex items-center justify-center pr-2">
            <div className="hidden gap-x-3 md:flex lg:flex">
              <div className="flex flex-col justify-end w-full sm:flex-row">
                <OrderButton isHover={true} totalOrder={totalOrder} />

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
                      {truncateName(session?.user?.name, 10)}
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
                    <LoginButton text="Sign in" onClick={handleGoogleAuthClick} />
                    <LoginButton onClick={handleGoogleAuthClick} />
                  </>
                )}
              </div>
            </div>

            {/* menu icon  */}
            <div className="block md:hidden lg:hidden">
              <div className="flex">
              {
            session ? <div className="flex space-x-1">
              <Link className="flex items-center justify-center" href={"/profile"}>
                <Image
                  style={{
                    maxWidth: "20px",
                    minWidth: "20px",
                    maxHeight: "20px",
                    minHeight: "20px",
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
                className="flex items-center justify-center text-base font-bold text-white cursor-pointer"
              >
                {truncateName(session?.user?.name, 10)}
              </Link>
              <div
                onClick={() => {
                  setShowLogoutModal(true);
                }}
                className="relative flex items-center justify-center cursor-pointer"
              >
                <Image
                  style={{
                    maxWidth: "20px",
                    minWidth: "20px",
                    maxHeight: "20px",
                    minHeight: "20px",
                  }}
                  src={"/images/icons/logOut.svg"}
                  alt="pic"
                  width={20}
                  height={20}
                />
              </div>
            </div> : <div
              onClick={handleGoogleAuthClick}
              className="flex items-center px-2 ml-2 text-base font-medium rounded-md cursor-pointer gap-x-1 text-cDeepSaffron hover:bg-cCommonBg"
            >
              Login
            </div>
          }

          <CartIcon showTitle={false} iconSize="18px" padding="px-2" totalCart={totalCart} />
                <div className="mr-2"></div>
                <HiMenuAlt3
                  className="w-10 h-10 p-2 text-gray-700 transition duration-200 transform border border-gray-400 rounded-lg cursor-pointer ring-blue-300 focus:ring-4 hover:scale-110"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        </nav>

        <div className="block mt-[-18px] md:mt-0 w-full mb-5 md:hidden">
          <Search />
        </div>
      </div>
    </>
  );
};

export default HeaderUserInfo;

const CartIcon = ({iconSize="22px", showTitle=true, totalCart = 0, padding = "px-4" }) => {
  return (
    <>
      <Link
        href={"/cart"}
        className={`flex items-center ${padding} rounded-md cursor-pointer gap-x-1 hover:text-white hover:bg-cCommonBg`}
      >
        <div className="relative">
          <Image
            style={{
              maxWidth: {iconSize},
              minHeight: {iconSize},
              maxHeight:{iconSize},
              minWidth:{iconSize},
            }}
            src={iCart}
            alt=""
            width={18}
            height={18}
          />
          {totalCart > 0 ? (
            <span className="absolute flex items-center justify-center w-4 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
              {totalCart}
            </span>
          ) : (
            ""
          )}
        </div>
{  showTitle &&      <span className="text-base font-medium text-cDeepSaffron mt-[6px]">
          Cart
        </span>}
      </Link>
    </>
  );
};

const OrderButton = ({ isHover = true, totalOrder = 0 }) => {
  return (
    <>
      <Link
        href={"/orders"}
        className={`flex cursor-pointer justify-center items-center gap-x-1 rounded-md py-2 px-4 ${isHover ? "hover:text-white hover:bg-cCommonBg" : ""
          } `}
      >
        <div className="relative">
          <Image
            style={{
              maxWidth: "22px",
              minHeight: "22px",
              maxHeight: "22px",
              minWidth: "22px",
            }}
            src={iOrder}
            alt=""
            width={18}
            height={18}
          />
          {totalOrder > 0 ? (
            <span className="absolute flex items-center justify-center w-4 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
              {totalOrder}
            </span>
          ) : (
            ""
          )}
        </div>
        <span className="text-base font-medium text-cDeepSaffron mt-[6px]">
          Orders
        </span>
      </Link>
    </>
  );
};

const LoginButton = ({ onClick, text = "Login" }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center px-4 ml-2 text-base font-medium rounded-md cursor-pointer gap-x-1 text-cDeepSaffron hover:bg-cCommonBg"
    >
      {text}
    </div>
  )
}
