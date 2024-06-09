"use client"
import { addOrder } from "@/app/action/order";
import { address_type } from "@/util/const";
import { Toastr } from "@/util/utilityFunction";
import { useRouter } from 'next/navigation'

const PlaceOrder = ({ data }) => {

    const shipping_address = data?.address?.find(
        (a) => a?.address_type === address_type.shipping_address
    );
    const billing_address = data?.address?.find(
        (a) => a?.address_type === address_type.billing_address
    );

    const router = useRouter()


    const handleOrder = async () => {
 
        const response = await addOrder({ email: data?.email,
            shipping_address: shipping_address._id,
            billing_address: billing_address._id,
            total_amount: data?.total_amount});
        console.log("response", response)
        if (response?.success) {
            Toastr({ message: "Order placed successfully", type: "success" });
            router.push('/orders')
        } else {
            Toastr({ message: "Something went wrong", type: "error" })
        }
    }

    return (
        <button
            onClick={handleOrder}
            className="w-full px-6 py-3 mt-4 mb-8 font-medium text-white bg-gray-900 rounded-md">
            Place Order
        </button>
    )
}

export default PlaceOrder