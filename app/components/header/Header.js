import React from "react";
import Link from "next/link";
import HeaderUserInfo from "./HeaderUserInfo";
import { auth } from "@/auth";
import Categories from "../Categories";
import { findUserId } from "@/app/action/product/action";
import { getCartCount } from "@/app/action/cart";

const Header = async () => {
  
  const session = await auth();

  const user = await findUserId(session?.user?.email);

  const cart = await getCartCount(user?._id);

  return (
    <div className="w-full header">
      <div className="flex flex-col items-center justify-between w-screen border-b top-header">
        <div className="flex flex-col items-center justify-between w-full gap-4 p-6 sm:flex-row md:px-24">
          <Link href="/">
            <h1 className="text-2xl font-semibold ">GADGET STORE</h1>
          </Link>
          <form className="relative w-full sm:w-3/5">
            <input
              className="w-full h-full p-3 outline-none rounded-lg ring-2 ring-[#2257AA]"
              placeholder="Enter Your Product Name..."
              id="search"
              type="text"
            />
            <label className="absolute right-2 top-2" for="search">
              <i className="cursor-pointer fa-solid fa-magnifying-glass"></i>
            </label>
          </form>
          <HeaderUserInfo totalCart={cart?.length ?? 0} session={session} />
        </div>
      </div>

      <Categories />
    </div>
  );
};

export default Header;
