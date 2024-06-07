/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { motion } from "framer-motion";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./Carousel.css";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

function Banner() {

  const data = [
    {
      src: "/images/banner/banner-3.png",
      alt: "Image 1 for carousel",
    },
    {
      src: "/images/banner/banner-2.png",
      alt: "Image 2 for carousel",
    },
    {
      src: "/images/banner/banner-1.png",
      alt: "Image 3 for carousel",
    },
  ];

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
    }, 10000); // Change slide every 3 seconds

    // Cleanup function to clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  const nextSlide = () => {
    setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
  };

  return (
    <motion.div
      animate={{ x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="relative flex justify-center items-center mt-10 lg:h-[500px] rounded   banner lg:-mt-4 w-full h-64 sm:h-96 md:h-128">

        {
          data?.map((item, idx) => (
            <Image
              src={item.src}
              alt={item.alt}
              key={idx}
              width={1920}
              height={1080}
              className={`duration-700 rounded-lg shadow-md w-full h-full ${slide === idx ? "fade-animation" : "hidden"
                }`}
            />
          ))
        }
        <BsArrowLeftCircleFill
          onClick={nextSlide}
          className="absolute w-8 h-8 text-white filter drop-shadow-md cursor-pointer left-5 "
        />
        <BsArrowRightCircleFill
          onClick={nextSlide}
          className="absolute w-8 h-8 text-white filter drop-shadow-md hover:cursor-pointer right-4"
        />
        <span className="absolute flex bottom-4">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={`${slide === idx
                ? "bg-white h-2 w-2 rounded-full border-none outline-none shadow-md mx-1 cursor-pointer"
                : "bg-gray-500 h-2 w-2 rounded-full border-none outline-none shadow-md mx-1 cursor-pointer"
                }`}
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
    </motion.div>
  );
}

export default Banner;
