"use client";

import { useRouter } from "next/navigation";



const ShoppingButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="px-4 py-2 mt-4 font-semibold text-white bg-green-500 rounded cursor-pointer"
    >
      Start Shopping
    </button>
  );
};

export default ShoppingButton;
