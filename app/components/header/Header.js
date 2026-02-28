import React from "react";
import HeaderUserInfo from "./HeaderUserInfo";
import { auth } from "@/auth";
import Categories from "../Categories";
import { findUserId } from "@/app/action/product/action";
import { getCartCount } from "@/app/action/cart";
import { getOrders } from "@/app/action/order";
import { cookies } from "next/headers";

const Header = async ({className}) => {

  const session = await auth();

  const user = await findUserId(session?.user?.email);

  const order = await getOrders(session?.user?.email)

  const cart = await getCartCount(user?._id);

  // For guests, count items from the cookie
  let guestCartCount = 0;
  if (!session) {
    try {
      const cookieStore = cookies();
      const raw = cookieStore.get("guest_cart_items")?.value;
      if (raw) {
        const parsed = JSON.parse(decodeURIComponent(raw));
        guestCartCount = Array.isArray(parsed) ? parsed.length : 0;
      }
    } catch (_) {}
  }

  const totalCart = session ? (cart?.length ?? 0) : guestCartCount;

  return (
    <div className={`${className} bg-black border-b`}>
      <div className="flex flex-col items-center justify-between ">
        <HeaderUserInfo totalOrder={order?.data?.length} totalCart={totalCart} session={session} />
      </div>
    </div>
  );
};

export default Header;
