export const revalidate = 2; // revalidate at most every hour
import React from "react";
import ProductCard from "./ProductCard";
import { base_url, products_type_value } from "@/util/const";
import { kuProductList } from "@/util/url";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import { getAllProducts, getRegularProducts } from "@/app/action/product/action";

const RegularProducts = async () => {

  // const products = await fetch(base_url + kuProductList, {
  //   next: { revalidate: 1 },
  // }).then((res) => res.json());

  const products = await getRegularProducts()

  const regularProducts = products?.filter(
    (product) => product.type === products_type_value.regular
  );

  return (
    <div className="flex flex-col p-4 bg-gray-600 rounded">
      <div className="flex justify-between mb-4">
        <div className="text-xl font-semibold text-white text-start w-fit">
          Regular Products 🔥
        </div>
        <Link href={"/products"} className="cursor-pointer ">
          <BsArrowRightCircle className="inline-block text-2xl text-white" />
        </Link>
      </div>

      <section className="grid grid-cols-1 gap-4 place-self-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {regularProducts?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>

    </div>
  );
};

export default RegularProducts;


