export const revalidate = 10;
import { base_url, products_type_value } from "@/util/const";
import { kuProductList } from "@/util/url";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BestSellers = async () => {
  const products = await fetch(base_url + kuProductList).then((res) =>
    res.json()
  );

  const best_sellers = products?.data?.filter(
    (product, index) => product.type === products_type_value.best_sellers
  );

  return (
    <aside className="top-0 flex-col hidden max-h-screen lg:flex lg:w-1/4">
      <div className="flex flex-col items-start justify-start h-auto gap-4 bestsellers 2-72">
        <h2 className="text-lg font-semibold">BEST SELLERS</h2>
        <div className="space-y-5">
          {best_sellers?.map((product, index) => (
            <Link
              href={"/products/" + product?._id}
              key={index}
              className="flex items-center justify-start gap-2"
            >
              <div className="flex items-center justify-center w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20">
                <Image
                  style={{
                    maxWidth: "70px",
                    maxHeight: "70px",
                    minWidth: "70px",
                    minHeight: "70px",
                  }}
                  className="object-contain object-center rounded-t-xl"
                  src={product?.image}
                  alt=""
                  height={70}
                  width={70}
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
                  <strong>${product?.price}</strong>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default BestSellers;
