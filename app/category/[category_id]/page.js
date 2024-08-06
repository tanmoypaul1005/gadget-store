export const revalidate = 10;
import {
  getByCategoryProducts,
  getCategoryDetails,
} from "@/app/action/category";
import ProductCard from "@/app/components/products/components/ProductCard";
import React from "react";

const Category = async ({ params }) => {
  const products = await getByCategoryProducts(params?.category_id);

  const category = await getCategoryDetails(params?.category_id);

  return (
    <div className="common-class">
      <div className="flex justify-between w-full p-3 text-xl font-bold rounded bg-cCommonBg ">
        <div>{category ?.title ?? "Category"}</div>
      </div>
      <div className="flex mt-10 space-x-10">
        {products?.data?.map((product, index) => (
          <div key={index}>
            <ProductCard key={index} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
