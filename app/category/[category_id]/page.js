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
    <div className="common-class common-topGap">
      <div className="flex justify-between w-full p-3 mb-5 text-xl font-bold rounded bg-cCommonBg ">
        <div>{category ?.title ?? "Category"} 🔥</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        {products?.data?.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
