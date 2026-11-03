"use client";
import { useEffect, useState } from "react";
import { addToGuestCart, getGuestCartQuantity, setGuestCartQuantity } from "@/util/guestCart";
import { Toastr } from "@/util/utilityFunction";

const CartQuantityButton = ({ productId, size = "sm" }) => {
  const [qty, setQty] = useState(0);

  useEffect(() => {
    const sync = () => setQty(getGuestCartQuantity(productId));
    sync();
    window.addEventListener("guestCartUpdated", sync);
    return () => window.removeEventListener("guestCartUpdated", sync);
  }, [productId]);

  const stop = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleAdd = async (e) => {
    stop(e);
    const res = await addToGuestCart(productId, 1);
    if (res?.success) Toastr({ type: "success", message: res.message });
    else Toastr({ type: "error", message: res?.message || "Could not add to cart" });
  };

  const change = (e, delta) => {
    stop(e);
    setGuestCartQuantity(productId, qty + delta);
  };

  const text = size === "sm" ? "text-sm" : "text-base";
  const icon = size === "sm" ? "w-5 h-5" : "w-6 h-6";

  const circleBtn =
    "flex items-center justify-center w-8 h-8 font-bold rounded-full bg-slate-700 hover:bg-slate-600 select-none focus:outline-none";

  if (qty > 0) {
    return (
      <div
        onClick={stop}
        className={`flex items-center justify-between w-full p-1 text-white rounded-full bg-slate-900 ${text}`}
      >
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={(e) => change(e, -1)}
          className={circleBtn}
        >
          −
        </button>
        <span className="min-w-[2rem] text-center font-semibold" aria-live="polite">
          {qty}
        </span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={(e) => change(e, 1)}
          className={circleBtn}
        >
          +
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={`flex items-center justify-center w-full px-3 py-2 font-medium text-center text-white rounded-md bg-slate-900 focus:outline-none ${text}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${icon} mr-2`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      Add to cart
    </button>
  );
};

export default CartQuantityButton;
