"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import SecondaryProductCard from "../products/components/SecondaryProductCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  smallMobile: {
    breakpoint: { max: 463, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Slider = ({ products }) => {
  return (
      <div className="bg-gray-600 rounded py-4">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass=""
      >
        {products?.map((product, index) => {
          return (
            <div className="flex items-center justify-center slider" key={index}>
              <SecondaryProductCard width="w-64 md:w-full" product={product} />
            </div>
          );
        })}
      </Carousel>
      </div>
  );
};
export default Slider;