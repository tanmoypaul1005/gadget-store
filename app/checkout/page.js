import { auth } from "@/auth";
import React from "react";
import { findUserId } from "../action/product/action";
import { getCartCount } from "../action/cart";
import CheckOutProduct from "./components/CheckOutProduct";
import CommonInput from "@/components/input/CommonInput";
import Address from "../components/Address/Address";
import { getAddress } from "../action/address";
import PlaceOrder from "./components/PlaceOrder";
import Image from "next/image";
import { iNoCart } from "@/util/imageImports";
import Contact from "./components/Contact";
import ShoppingButton from "./components/ShoppingButton";

export const metadata = {
  title: "Gadget store || Checkout",
  description: "",
};

const Checkout = async () => {

  const session = await auth();

  const address = await getAddress(session?.user?.email);

  const user = await findUserId(session?.user?.email);

  const cart = await getCartCount(user?._id);

  const totalPrice = cart?.reduce((total, item) => {
    return total + item?.quantity * item?.product?.price;
  }, 0);

  return (
    <>
      {
        cart?.length > 0 ?
          <>
            <div className="grid px-5 sm:px-0 common-class lg:grid-cols-2">
              <div>
                <p className="text-xl font-medium">Order Summary</p>
                <p className="text-gray-400">
                  Check your items. And select a suitable shipping method.
                </p>
                <div className="px-2 py-4 mt-8 space-y-3 border rounded-lg sm:px-6">
                  {
                    cart?.length > 0
                      ? cart?.map((item, index) => (
                        <CheckOutProduct item={item} key={index} />
                      ))
                      : "No items in cart"}
                </div>
                <div className="mt-8"></div>
                <Address email={session?.user?.email} address={address?.data} />
              </div>

              <div className="mt-10 lg:mt-0">
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400">
                  Complete your order by providing your payment details.
                </p>
                <div>
                  <CommonInput disabled={true} label={"Name"} value={session?.user?.name} placeholder="your.email@gmail.com" />
                  <CommonInput disabled={true} label={"Email"} value={session?.user?.email} placeholder="your.email@gmail.com" />
                  <Contact/>

                  <div className="py-2 mt-6 text-white border-t border-b">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Subtotal</p>
                      <p className="font-semibold">${totalPrice}</p>
                    </div>
               
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <p className="text-sm font-medium ">Total</p>
                    <p className="text-2xl font-semibold">${totalPrice}</p>
                  </div>
                </div>
                <PlaceOrder
                  data={
                    {
                      email: session?.user?.email,
                      address: address?.data,
                      total_amount: totalPrice,
                    }
                  }
                />
              </div>
            </div>
          </>
          :
          <div className='flex flex-col items-center justify-center'>
          <Image alt='No items in cart' src={iNoCart} style={{ maxWidth: "500px", maxHeight: "500px" }} />
          <div className='mt-4 text-center'>
            <h2 className='text-2xl font-semibold text-white'>Your Cart is Empty!</h2>
            <p className='mt-2 font-semibold text-white'>{"Looks like you haven't added anything to your cart yet."}</p>
           <ShoppingButton/>
          </div>
        </div>
      }
    </>

  );
};

export default Checkout;

export async function generateStaticParams() {

  const session = await auth();

  const user = await findUserId(session?.user?.email);

  const cart = await getCartCount(user?._id);

  return recipeList?.data.map((item) => {
    return {
      params: {
        cart
      },
    };
  });
}
