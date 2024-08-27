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

const Slider = ({ products=[] }) => {
  return (
    <div className="py-4 min-h-[300px] bg-gray-600 rounded">
      
      {
        products?.length === 0 ? (<div className=""></div>) :
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
        {
        products?.map((product, index) => {
          return (
            <div className="flex items-center justify-center slider" key={index}>
              <SecondaryProductCard width="w-64 md:w-full" product={product} />
            </div>
          );
        })
        }

        
        {/* {
          Array.from({ length: 5 }).map((_, index) => {
            return (
              <div className="flex items-center justify-center slider" key={index}>
                <div className="w-full max-w-sm p-4 mx-auto border border-blue-300 rounded-md shadow" key={index}>
                  <div className="animate-pulse">
                   
                    <div className="flex items-center justify-center w-full h-40 rounded bg-slate-700"></div>

                    <div className="flex-1 pt-5 pb-1 space-y-6">
                      <div className="h-2 rounded bg-slate-700"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-2 col-span-2 rounded bg-slate-700"></div>
                          <div className="h-2 col-span-1 rounded bg-slate-700"></div>
                        </div>
                        <div className="h-2 rounded bg-slate-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        } */}
      </Carousel>
      }
      
    </div>
  );
};
export default Slider;