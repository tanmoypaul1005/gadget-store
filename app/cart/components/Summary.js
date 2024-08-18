import React from "react";

const Summary = ({ carts }) => {
  const totalPrice = carts?.reduce((total, item) => {
    return total + item?.quantity * item?.product?.price;
  }, 0);
  return (
    <>
      <ul className="mt-6 space-y-3 text-gray-800">
        <li className="flex flex-wrap gap-4 text-sm">
          Subtotal <span className="ml-auto font-bold">${totalPrice}</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Shipping <span className="ml-auto font-bold">$0</span>
        </li>
        <li className="flex flex-wrap gap-4 text-sm">
          Tax <span className="ml-auto font-bold">$0</span>
        </li>
        <hr className="border-gray-300" />
        <li className="flex flex-wrap gap-4 text-sm font-bold">
          Total <span className="ml-auto">${totalPrice}</span>
        </li>
      </ul>
    </>
  );
};

export default Summary;
