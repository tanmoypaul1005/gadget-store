/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

import { useState } from "react";
import { useEffect } from "react";

function Banner() {


  const data = [
    {
      "src": "https://picsum.photos/seed/img1/600/400",
      "alt": "Image 1 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img2/600/400",
      "alt": "Image 2 for carousel"
    },
    {
      "src": "https://picsum.photos/seed/img3/600/400",
      "alt": "Image 3 for carousel"
    }
  ]



  const [slide, setSlide] = useState(0);

  
useEffect(() => {
  const timer = setInterval(() => {
    setSlide(slide => slide === data.length - 1 ? 0 : slide + 1);
  }, 3000); // Change slide every 3 seconds

  // Cleanup function to clear the timer when the component unmounts
  return () => clearInterval(timer);
}, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount


  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };


  return (
    <div className="relative flex justify-center items-center mx-auto mt-10 lg:h-[500px] rounded lg:w-3/4  banner lg:-mt-4 w-full h-64 sm:h-96 md:h-128 ">
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "rounded-lg shadow-md w-full h-full" : "hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="absolute filter drop-shadow-md w-8 h-8 text-white hover:cursor-pointer right-4"
      />
      <span className="absolute bottom-4 flex">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "bg-white h-2 w-2 rounded-full border-none outline-none shadow-md mx-1 cursor-pointer" : "bg-gray-500 h-2 w-2 rounded-full border-none outline-none shadow-md mx-1 cursor-pointer"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
}

export default Banner;
