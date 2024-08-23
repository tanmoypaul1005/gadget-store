"use client"
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import Card from "@/app/products/components/Card";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
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
    <div>
      <div className="flex items-center justify-center w-full mb-4 text-2xl font-semibold text-center text-white ">
        Top Rated Products
      </div>
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
              <Card width="max-w-[270px] min-w-[270px]" product={product} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;