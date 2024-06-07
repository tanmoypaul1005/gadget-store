"use client"

import { addOrder } from "@/app/action/order";
import { Toastr } from "@/util/utilityFunction";

const PlaceOrder = ({ address, email,totalPrice=0 }) => {

    const shipping_address = address?.find(
        (a) => a?.address_type === address_type.shipping_address
    );
    const billing_address = address?.find(
        (a) => a?.address_type === address_type.billing_address
    );


    const handleOrder =async () => {
        const body = {
            email: email,
            shipping_address: shipping_address._id,
            billing_address: billing_address._id,
            total_amount: totalPrice,
            items: cart.map((c) => ({ cart: c._id })),
        }

        // const response = await addOrder(body);
        // if(response?.success){
        //     Toastr({message:"Order placed successfully",type:"success"})
        // }else{
        //     Toastr({message:"Something went wrong",type:"success"})
        // }
    }

    return (
        <button
            onClick={handleOrder}
            className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
            Place Order
        </button>
    )
}

export default PlaceOrder