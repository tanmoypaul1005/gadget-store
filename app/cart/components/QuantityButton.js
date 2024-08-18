"use client"
import { updateCartQuantity } from '@/app/action/cart';
import React, { useState } from 'react';

const QuantityButton = ({ id, initialQuantity = 1 }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isAnimating, setIsAnimating] = useState(false);

  const increment = async () => {
    if (quantity > 9) {
      return;
    }
    setIsAnimating(true);
    setQuantity(prevQuantity => prevQuantity + 1);
    await updateCartQuantity(id, quantity + 1);
    setTimeout(() => setIsAnimating(false), 300); // Reset animation state after 300ms
  };

  const decrement = async () => {
    if (quantity === 1) {
      return;
    }
    setIsAnimating(true);
    setQuantity(prevQuantity => prevQuantity - 1);
    await updateCartQuantity(id, quantity - 1);
    setTimeout(() => setIsAnimating(false), 300); // Reset animation state after 300ms
  };

  return (
    <button
      type="button"
      className={`flex items-center px-3.5 py-2 mt-6 text-xs bg-transparent border border-gray-300 rounded-md outline-none text-white transition-transform duration-300 ${isAnimating ? 'scale-110' : ''}`}
    >
      <svg
        onClick={decrement}
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 cursor-pointer fill-current"
        viewBox="0 0 124 124"
      >
        <path
          d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
          data-original="#ffff"
        ></path>
      </svg>

      <span className="mx-3 text-base font-bold">{quantity}</span>

      <svg
        onClick={increment}
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 cursor-pointer fill-current"
        viewBox="0 0 42 42"
      >
        <path
          d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
          data-original="#000000"
        ></path>
      </svg>
    </button>
  );
};

export default QuantityButton;
