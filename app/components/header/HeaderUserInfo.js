"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoutModal from "./LogoutModal";

const HeaderUserInfo = () => {
  const [isShowLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <div className="hidden gap-x-4 text-3xl text-gray-600 icons md:flex">
      <div className="relative cursor-pointer">
        <Image
          style={{
            maxWidth: "30px",
            minWidth: "30px",
            maxHeight: "30px",
            minHeight: "30px",
          }}
          src={"/images/icons/avatar.png"}
          alt="pic"
          width={20}
          height={20}
        />
      </div>

      <div
        onClick={() => {
          setShowLogoutModal(true);
        }}
        className="relative cursor-pointer"
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

      <div className="relative cursor-pointer">
        <span className="absolute w-4 h-4 text-xs font-semibold text-center text-white bg-red-400 rounded-full -top-2 -right-2">
          0
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
      </div>

      <LogoutModal open={isShowLogoutModal} setOpen={setShowLogoutModal} />
    </div>
  );
};

export default HeaderUserInfo;
