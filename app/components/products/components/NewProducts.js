export const revalidate = 2; // revalidate at most every hour
import React from "react";
import ProductCard from "./ProductCard";
import { base_url } from "@/util/const";
import { kuProductList } from "@/util/url";
import ProductFilter from "./ProductFilter";

const NewProducts = async () => {
  const products = await fetch(base_url + kuProductList, {
    next: { revalidate: 1 },
  }).then((res) => res.json());

  return (
    <div className="flex gap-x-5">
      <ProductFilter />
      <div className="newProductsContainer">
        <section className="flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-x-[50px] flex-wrap justify-items-center gap-y-20">
          {products?.data?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default NewProducts;
