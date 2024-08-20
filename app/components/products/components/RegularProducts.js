export const revalidate = 2; // revalidate at most every hour
import React from "react";
import ProductCard from "./ProductCard";
import { base_url, products_type_value } from "@/util/const";
import { kuProductList } from "@/util/url";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const RegularProducts = async () => {
  
  const products = await fetch(base_url + kuProductList, {
    next: { revalidate: 1 },
  }).then((res) => res.json());

  const regularProducts = products?.data?.filter(
    (product) => product.type === products_type_value.regular
  );

  return (
    <div className="flex flex-col px-5 py-5 bg-gray-600 rounded">
      <div className="flex justify-between mb-4">
      <div className="text-xl font-semibold text-white text-start w-fit">
        Regular Products
      </div> 
      <Link href={"/products"} className="cursor-pointer ">
        <BsArrowRightCircle className="inline-block text-2xl text-white" />
      </Link>
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
