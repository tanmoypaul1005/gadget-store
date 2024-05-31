export const revalidate = 10;
import { getByCategoryProducts } from "@/app/action/category";
import ProductBox from "@/app/components/products/components/ProductBox";
import { base_url } from "@/util/const";
import React from "react";

const Category = async ({ params }) => {
  console.log("params", params);
  const products = await getByCategoryProducts(params?.category_id);
  console.log("products", products);

  return (
    <div className="flex justify-between">
      {products?.data?.map((product, index) => (
        <div className="w-[400px] h-[600px]" key={index}>
        <ProductBox key={index} product={product} />
        </div>
      ))}
    </div>
  );
};

export default Category;
