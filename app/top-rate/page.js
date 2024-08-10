import React from "react";
import ProductCard from "../category/components/ProductCard";
import { fetchTopRateProducts } from "../action/product/action";

const TopRate = async () => {
  const products = await fetchTopRateProducts();
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="pb-1 mb-4 text-2xl font-semibold text-center text-white border-b-2 border-white w-fit">Top Rated Products</div>
      <section className="flex sm:flex-row justify-center items-center gap-x-[50px] flex-wrap justify-items-center gap-y-12">
        {products?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </div>
  );
};

export default TopRate;
