"use client"
import { deleteCart } from '@/app/action/cart';
import { Toastr } from '@/util/utilityFunction';
import React from 'react'

const RemoveCart = (params) => {
    return (
        <div    
        onClick={async () => {
            const success = await deleteCart(params?.data, "/cart");
            if (success) {
              Toastr({ message: "Cart Cleared Successfully", type: "success" })
            } else {
              Toastr({ message: "Cart Cleared Failed", type: "error" })
            }
          }} className="cursor-pointer flex items-center justify-center mt-[4px]">REMOVE</div> 
    )
}

export default RemoveCart