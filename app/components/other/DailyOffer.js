"use client"
import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";

const DailyOffer = () => {
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

  return (
    <div className="my-10 day">
      <h1 className="py-4 text-xl font-semibold border-b">Deal Of The Day</h1>
      <div className="flex flex-col justify-between w-full h-auto mt-10 border rounded-lg lg:flex-row">
        <Image
          className="lg:w-1/2"
          src="/images/products/shampoo.jpg"
          alt=""
          width={80}
          height={80}
        />
        <div className="flex flex-col items-start gap-2 p-4 lg:w-1/2">
          <div className="text-yellow-500 stars">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half-outline"></ion-icon>
          </div>
          <h4 className="text-lg font-bold">
            SHAMPOO, CONDITIONER & FACEWASH PACKS
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
            amet consectetur Lorem ipsum dolor
          </p>
          <div>
            <strong className="text-xl font-bold text-red-400">$150.00</strong>
            <s className="text-xl text-gray-500">$200.00</s>
          </div>
          <button className="px-4 py-2 font-semibold text-white bg-red-500 rounded-xl text-md">
            ADD TO CART
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
