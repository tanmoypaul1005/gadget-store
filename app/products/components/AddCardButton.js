"use client"
import { serverAddCart } from '@/app/action/cart'
import React from 'react'

const AddCardButton = ({product_id}) => {
    return (
        <button
        type='button'
        onClick={(e) => {e.stopPropagation(); serverAddCart(product_id, window.location.pathname)}}
        className="flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-md bg-slate-900 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Add to cart
      </button>
    )
}

export default AddCardButton