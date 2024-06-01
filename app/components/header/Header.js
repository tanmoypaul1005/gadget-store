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
        <HeaderUserInfo totalCart={cart?.length ?? 0} session={session} />
      </div>
      <Categories />
    </div>
  );
};

export default Header;
