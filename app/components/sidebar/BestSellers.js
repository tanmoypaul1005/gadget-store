export const revalidate = 10;

import { products_type_value } from "@/app/api/utils/const";
import { base_url } from "@/util/const";
import { kuProductList } from "@/util/url";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestSellers = async () => {
  const products = await fetch(base_url + kuProductList).then((res) =>
    res.json()
  );

  const newArrivals = products?.data?.filter(
    (product, index) => product.type === products_type_value.new_arrivals
  );
  const trending = products?.data?.filter(
    (product, index) => product.type === products_type_value.trending
  );
  const topRated = products?.data?.filter(
    (product, index) => product.type === products_type_value.top_rated
  );
  return (
    <div className="flex flex-col items-start justify-start h-auto gap-4 mt-10 bestsellers 2-72">
      <h2 className="text-lg font-semibold">BEST SELLERS</h2>

      {newArrivals?.map((product, index) => (
        <Link href={"/products/"+product?._id}  key={index} className="flex items-center justify-start gap-2">
          <div className="flex items-center justify-center w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20">
            <Image
              style={{
                maxWidth: "50px",
                maxHeight: "50px",
                minWidth: "50px",
                minHeight: "50px",
              }}
              className="w-full h-full"
              src={product?.image}
              alt=""
              height={20}
              width={20}
            />
          </div>
          <div className="">
            <h4 className="line-clamp-1">{product?.name}</h4>
            <div className="text-yellow-500 stars">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half-outline"></ion-icon>
            </div>
            <div className="flex items-center justify-start gap-4">
              <s className="">$14.00</s> <strong>$7.00</strong>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BestSellers;
