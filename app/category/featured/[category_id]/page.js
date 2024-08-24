import ProductCard from "@/app/components/products/components/ProductCard";
import { base_url } from "@/util/const";
import { kuCategoryDetails, kuMainCategory } from "@/util/url";
import Image from "next/image";
import React from "react";

const FeaturedCategoriesDetails = async ({ params }) => {
  const response = await fetch(
    base_url + kuMainCategory + `/${params?.category_id}`
  );
  const products = await response.json();

  const categoryResponse = await fetch(
    base_url + `${kuCategoryDetails}/${params?.category_id}`
  );

  if (!categoryResponse.ok) {
    throw new Error(`HTTP error! status: ${categoryResponse.status}`);
  }

  const categoryDetails = await categoryResponse.json();

  return (
    <div className="common-class common-topGap">
      <div className="mb-10">
        {categoryDetails?.data?.banner ? (
      <Image
      width={1800}
      height={1800}
      src={categoryDetails?.data?.banner}
      alt={categoryDetails?.data?.title}
      className="w-full h-[200px] sm:h-[300px] md:h-[230px] lg:h-[230px] xl:h-[230px] object-cover"
    />
        ) : (
          <div className="w-full p-3 text-xl font-bold rounded bg-cCommonBg ">
            <div>{categoryDetails?.data?.title ?? "Category"}  🔥</div>
          </div>
        )}
      </div>

      {products?.data?.length > 0 ? (
        <div className="md:grid flex justify-center items-center md:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 gap-y-10 pb-[40px] flex-wrap">
          {products.data.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-60 sm:justify-start"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center h-[60vh] justify-center w-full text-lg text-white">
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default FeaturedCategoriesDetails;
