export const revalidate = 2; // revalidate at most every hour
import React from "react";
import ProductCard from "./ProductCard";
import { base_url } from "@/util/const";
import { kuProductList } from "@/util/url";

const NewProducts = async () => {
  const products = await fetch(base_url + kuProductList, {
    next: { revalidate: 1 },
  }).then((res) => res.json());

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pb-1 mb-4 text-2xl font-semibold text-center text-white border-b-2 border-white w-fit">
        Regular Products
      </div>
      <div className="newProductsContainer">
        <section className="flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-x-[50px] flex-wrap justify-items-center gap-y-12">
          {products?.data?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default NewProducts;
