export const revalidate = 2; // revalidate at most every hour
import React from "react";
import ProductCard from "./ProductCard";
import { base_url, products_type_value } from "@/util/const";
import { kuProductList } from "@/util/url";

const RegularProducts = async () => {
  
  const products = await fetch(base_url + kuProductList, {
    next: { revalidate: 1 },
  }).then((res) => res.json());

  const regularProducts = products?.data?.filter(
    (product, index) => product.type === products_type_value.regular
  );

  return (
    <div className="flex flex-col px-5 py-5 bg-gray-600 rounded">
      <div className="pb-1 mb-4 text-2xl font-semibold text-white text-start w-fit">
        Regular Products
      </div>
      <div className="newProductsContainer">
        <section className="flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-x-[50px] flex-wrap justify-items-center gap-y-8">
          {regularProducts?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default RegularProducts;
