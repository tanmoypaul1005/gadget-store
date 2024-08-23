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

// Separate utility function outside the component
const truncateName = (name, maxLength) =>
  name.length > maxLength ? `${name.substring(0, maxLength)}...` : name;

const HeaderUserInfo = ({ session, totalCart, totalOrder }) => {
  const [isShowLogoutModal, setShowLogoutModal] = useState(false);
  const { mobileNav, setMobileNav } = useGeneralStore();

  const toggleMobileNav = () => setMobileNav(!mobileNav);

  const handleGoogleAuthClick = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <>
      <LogoutModal open={isShowLogoutModal} setOpen={setShowLogoutModal} />

      <header className="flex flex-col w-full h-fit common-class">
        <nav className="flex justify-between w-full pt-3 md:pb-3 gap-x-2">
          <div className="flex items-center flex-grow gap-x-4">
            <Link
              href="/"
              className="text-base font-semibold text-white select-none sm:text-3xl whitespace-nowrap"
            >
              Gadget Store
            </Link>
            <div className="common-responsive">
              <Search />
            </div>
          </div>

          <div className="flex items-center justify-center pr-2">
            <DesktopMenu
              session={session}
              totalCart={totalCart}
              totalOrder={totalOrder}
              onLogout={() => setShowLogoutModal(true)}
              onLogin={handleGoogleAuthClick}
            />

            <MobileMenu
              session={session}
              totalCart={totalCart}
              onToggleNav={toggleMobileNav}
              onLogin={handleGoogleAuthClick}
              onLogout={() => setShowLogoutModal(true)}
            />
          </div>
        </nav>

        <div className="block mt-[-18px] md:mt-0 w-full mb-5 md:hidden">
          <Search />
        </div>
      </header>
    </>
  );
};

export default HeaderUserInfo;

const DesktopMenu = ({ session, totalCart, totalOrder, onLogout, onLogin }) => (
  <div className="hidden gap-x-3 md:flex lg:flex">
    <div className="flex flex-col justify-end w-full sm:flex-row">
      <OrderButton totalOrder={totalOrder} />

      <CartIcon totalCart={totalCart} />

      {session ? (
        <UserMenu session={session} onLogout={onLogout} />
      ) : (
        <>
          <LoginButton text="Sign in" onClick={onLogin} />
          <LoginButton onClick={onLogin} />
        </>
      )}
    </div>
  </div>
);

const MobileMenu = ({ session, totalCart, onToggleNav, onLogin, onLogout }) => (
  <div className="block md:hidden lg:hidden">
    <div className="flex items-center space-x-1">
      {session ? (
        <UserMenu session={session} onLogout={onLogout} compact />
      ) : (
        <LoginButton text="Login" onClick={onLogin} />
      )}
      
      <div className="ml-2 mr-3">
        <CartIcon isMobile={true} totalCart={totalCart} iconSize="14px" padding="px-0" />
      </div>
      <div className="ml-1"></div>
      <HiMenuAlt3
        className="w-8 h-8 p-2 text-gray-700 transition duration-200 transform border border-gray-400 rounded-lg cursor-pointer ring-blue-300 focus:ring-4 hover:scale-110"
        onClick={onToggleNav}
      />
    </div>
  </div>
);

const CartIcon = ({isMobile=false, iconSize = "22px", totalCart = 0, padding = "px-4" }) => {
  return (
    <>
      <Link
        href={"/cart"}
        className={`flex items-center ${padding} rounded-md cursor-pointer gap-x-1 hover:text-white ${!isMobile && "hover:bg-cCommonBg"} `}
      >
        <div className="relative">
          <Image
            style={{
              maxWidth: { iconSize },
              minHeight: { iconSize },
              maxHeight: { iconSize },
              minWidth: { iconSize },
            }}
            src={iCart}
            alt=""
            width={18}
            height={18}
          />
          {totalCart > 0 ? (
            <span className={`absolute flex items-center justify-center w-4 ${isMobile? "text-[10px]":"text-xs"} text-white bg-red-500 rounded-full -top-2 -right-2`}>
              {totalCart}
            </span>
          ) : (
            ""
          )}
        </div>
        {!isMobile && <span className="text-base font-medium text-cDeepSaffron mt-[6px]">
          Cart
        </span>}
      </Link>
    </>
  );
};



const OrderButton = ({ totalOrder = 0 }) => (
  <Link
    href="/orders"
    className="flex items-center px-4 py-2 rounded-md gap-x-1 hover:text-white hover:bg-cCommonBg"
  >
    <div className="relative">
      <Image
        className="max-w-[22px] max-h-[22px]"
        src={iOrder}
        alt="Order Icon"
        width={18}
        height={18}
      />
      {totalOrder > 0 && (
        <span className="absolute flex items-center justify-center w-4 text-xs text-white bg-red-500 rounded-full -top-2 -right-2">
          {totalOrder}
        </span>
      )}
    </div>
    <span className="text-base font-medium text-cDeepSaffron mt-[6px]">
      Orders
    </span>
  </Link>
);

const UserMenu = ({ session, onLogout, compact = false }) => (
  <div className={`flex ${compact ? "space-x-1" : "ml-3 space-x-3"}`}>
    <Link href="/profile">
      <Image
        className="rounded-full"
        src={session?.user?.image}
        alt="User Picture"
        width={compact ? 20 : 40}
        height={compact ? 20 : 40}
      />
    </Link>
    <Link
      href="/profile"
      className="flex items-center justify-center text-sm font-bold text-white cursor-pointer"
    >
      {truncateName(session?.user?.name, 10)}
    </Link>
    <div
      onClick={onLogout}
      className="relative flex items-center justify-center cursor-pointer"
    >
      <Image
        src="/images/icons/logOut.svg"
        alt="Logout Icon"
        width={compact ? 20 : 30}
        height={compact ? 20 : 30}
      />
    </div>
  </div>
);

const LoginButton = ({ onClick, text = "Login" }) => (
  <div
    onClick={onClick}
    className="flex items-center px-4 ml-2 text-base font-medium rounded-md cursor-pointer gap-x-1 text-cDeepSaffron hover:bg-cCommonBg"
  >
    {text}
  </div>
);
