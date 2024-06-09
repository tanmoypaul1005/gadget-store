"use client"
import { addCart, deleteCart } from "@/app/action/cart";
import { Toastr } from "@/util/utilityFunction";
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";

const DailyOffer = ({ user, product, isAddCartDayOffer }) => {
  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate time left for the offer to end
  const calculateTimeLeft = () => {
    const now = new Date();
    const endDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7
    ); // Example: Offer ends in 7 days
    const difference = +endDate - +now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  // Update timer every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(timerId);
  }, []);

  const formData = {
    product_id: product?._id,
    user_id: user?._id,
    quantity: 1,
  };


  return (
    <div className="my-10 day">
      <h1 className="py-4 text-xl font-semibold border-b">Deal Of The Day</h1>
      <div className="flex flex-col w-full mt-10 border rounded-lg lg:flex-row">
        <div className="flex items-center justify-center px-5">
          <Image
            style={{ maxHeight: "350px", minHeight: "350px" }}
            className="object-contain object-center rounded-t-xl"
            src={product?.image}
            alt=""
            width={400}
            height={500}
          />
        </div>

        <div className="flex flex-col items-start w-full gap-2 p-4 ">
          <div className="text-yellow-500 stars">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half-outline"></ion-icon>
          </div>
          <h4 className="text-lg font-bold line-clamp-2">{product?.name}</h4>
          <p className="line-clamp-2">{product?.description}</p>
          <div>
            <strong className="text-xl font-bold text-red-400">
              ${product?.price}
            </strong>
          </div>
          <button
            onClick={async () => {
              if (isAddCartDayOffer) {
                const success = await deleteCart(isAddCartDayOffer?._id, "/")
                if (success) {
                  Toastr({ message: "Cart Cleared Successfully", type: "success" })
                } else {
                  Toastr({ message: "Cart Cleared Failed", type: "error" })
                }
              } else {
                const success = await addCart(formData, "/");
                if (success.success) {
                  Toastr({ type: "success", message: success.message });
                } else {
                  Toastr({ type: "error", message: success.message });
                }
              }
            }}
            className="px-4 py-2 font-semibold text-white bg-red-500 rounded-xl text-md"
          >
            {isAddCartDayOffer ? "REMOVE" : "ADD TO CART"}
          </button>
          <h3 className="mt-4 text-sm font-semibold">
            HURRY UP! OFFER ENDS IN:
          </h3>

          <div
            id="reverseTimer"
            className="flex items-center justify-between gap-4 text-sm font-semibold text-black"
          >
            {/* <h1
            className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
            id="days"
          ></h1>
          <h1
            className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
            id="hour"
          ></h1>
          <h1
            className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
            id="minute"
          ></h1>
          <h1
            className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
            id="second"
          ></h1> */}

            <span
              id="days"
              className="flex flex-col items-center justify-center w-12 h-12 p-2 text-white border rounded-lg shadow-lg bg-gray-300/20"
            >
              {timeLeft.days}
            </span>
            <span
              id="hours"
              className="flex flex-col items-center justify-center w-12 h-12 p-2 text-white border rounded-lg shadow-lg bg-gray-300/20"
            >
              {timeLeft.hours}
            </span>
            <span
              id="minutes"
              className="flex flex-col items-center justify-center w-12 h-12 p-2 text-white border rounded-lg shadow-lg bg-gray-300/20"
            >
              {timeLeft.minutes}
            </span>
            <span
              id="seconds"
              className="flex flex-col items-center justify-center w-12 h-12 p-2 text-white border rounded-lg shadow-lg bg-gray-300/20"
            >
              {timeLeft.seconds}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyOffer;
