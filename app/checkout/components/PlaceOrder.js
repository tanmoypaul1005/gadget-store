"use client"
import { addOrder } from "@/app/action/order";
import { useCheckoutStore } from "@/app/stores/checkoutStore";
import { address_type } from "@/util/const";
import { Toastr } from "@/util/utilityFunction";
import { useRouter } from 'next/navigation'

const PlaceOrder = ({ data }) => {

    const { contact_number, setContactNumber } = useCheckoutStore();

    const shipping_address = data?.address?.find(
        (a) => a?.address_type === address_type.shipping_address
    );
    const billing_address = data?.address?.find(
        (a) => a?.address_type === address_type.billing_address
    );

    const router = useRouter()


    const handleOrder = async () => {

        

        if (!shipping_address || !billing_address) {
            Toastr({ message: "Please add shipping and billing address", type: "error" });
            return;
        }

        if(!contact_number) {
            Toastr({ message: "Please add contact number", type: "error" });
            return;
        }

        if (contact_number.length < 10) {
            Toastr({ message: "Contact number must be at least 10 digits long", type: "error" });
            return;
        }
        
 
        const response = await addOrder({ email: data?.email,
            shipping_address: shipping_address._id,
            billing_address: billing_address._id,
            total_amount: data?.total_amount});
       
        if (response?.success) {
            Toastr({ message: "Order placed successfully", type: "success" });
            setContactNumber("")
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