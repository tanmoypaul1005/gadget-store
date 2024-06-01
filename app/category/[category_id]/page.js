export const revalidate = 10;
import { getByCategoryProducts } from "@/app/action/category";
import ProductCard from "@/app/components/products/components/ProductCard";
import React from "react";

const Category = async ({ params }) => {

  const products = await getByCategoryProducts(params?.category_id);

  return (
    <div className="flex space-x-10 mx-[40px] pb-[40px]">
      {products?.data?.map((product, index) => (
        <div className="" key={index}>
        <ProductCard key={index} product={product} />
        </div>
      ))}
    </div>
  );
};

export default Category;
