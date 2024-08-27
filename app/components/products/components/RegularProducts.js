export const revalidate = 2; // revalidate at most every hour
import React from "react";
import ProductCard from "./ProductCard";
import { products_type_value } from "@/util/const";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import { getAllProducts } from "@/app/action/product/action";

const RegularProducts = async () => {

  const products = await getAllProducts()

  const regularProducts = products?.filter(
    (product) => (product.type === products_type_value.regular) && (product.ratting > 0 && product.ratting < 5)
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


