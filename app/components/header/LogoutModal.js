"use client";
import React from "react";
import CommonModal from "../modal/CommonModal";
import { signOut } from "next-auth/react";

const LogoutModal = ({ open, setOpen }) => {
  return (
    <div>
      <CommonModal
        open={open}
        setOpen={setOpen}
        content={
          <>
            <div className="flex items-center justify-center w-full ">
              <h1 className="mt-5 text-2xl font-bold">
                Are you sure you want to logout?
              </h1>
            </div>
            <div className="flex justify-between w-full mt-5">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 font-semibold text-white bg-red-400 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  signOut({
                    callbackUrl: process.env.NEXT_PUBLIC_BASE_URL,
                  });
                  setOpen(false);
                }}
                className="px-4 py-2 font-semibold text-white bg-green-400 rounded-lg"
              >
                Logout
              </button>
            </div>
          </>
        }
      />
    </div>
  );
};

export default LogoutModal;
