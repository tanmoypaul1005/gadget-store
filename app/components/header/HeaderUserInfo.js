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
    <div className="gap-x-4 text-3xl text-gray-600 icons md:flex">
      {session ? (
        <div className="flex space-x-3">
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
          <Link href={"/profile"} className="text-xl cursor-pointer flex justify-center items-center font-bold text-white">
            {session.user.name}
          </Link>
          <div
            onClick={() => {
              setShowLogoutModal(true);
            }}
            className="relative cursor-pointer flex justify-center items-center"
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
        <div
          onClick={async () => {
            console.log("clicked");
            await signIn("google", {
              callbackUrl: "/",
            });
          }}
          className="text-xl flex justify-center cursor-pointer font-bold text-white"
        >
          Login
        </div>
      )}

      <Link href={"/checkout"} className="relative cursor-pointer flex justify-center items-center">
        <span className="absolute w-[23px] h-[23px] text-xs font-semibold text-center text-white flex justify-center items-center bg-red-400 rounded-full -top-2 -right-2">
          {totalCart}
        </span>
        <Image
          style={{
            maxWidth: "30px",
            minWidth: "30px",
            maxHeight: "30px",
            minHeight: "30px",
          }}
          src="/images/icons/trolley.png"
          alt="pic"
          width={20}
          height={20}
        />
      </Link>

      <LogoutModal open={isShowLogoutModal} setOpen={setShowLogoutModal} />
    </div>
  );
};

export default HeaderUserInfo;
