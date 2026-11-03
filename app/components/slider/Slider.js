"use client"
import React from "react";
import "./styles.css";
import SecondaryProductCard from "../products/components/SecondaryProductCard";

const Slider = ({ products = [] }) => {
  if (!Array.isArray(products) || products.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {products.map((product, index) => (
        <SecondaryProductCard key={product?._id ?? index} width="w-full" product={product} />
      ))}
    </div>
  );
};
export default Slider;
