import { auth } from "@/auth";
import { commonView } from "@/util/utilityFunction";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCardAction from "./ProductCardAction";
import { findUserId } from "@/app/action/product/action";
import CommonRating from "@/app/components/CommonRating";

export const ProductCard = async ({ product }) => {
  const session = await auth();
  const user = await findUserId(session?.user?.email);

  return (
    <Link href={`/products/${product?._id}`}>
      <div className="w-full py-5 text-white duration-500 shadow-md bg-cCommonBg rounded-xl hover:scale-105 hover:shadow-xl">
        <Image
          style={{ minHeight: "120px", maxHeight: "120px" }}
          alt={product?.name ?? "Product Image"}
          width={400}
          height={500}
          src={product?.image}
          className="object-contain object-center w-full h-32 rounded-t-xl"
        />
        <div className="px-3 pt-2">
          <span className="mr-3 text-xs uppercase">
            {commonView(product?.brand)}
          </span>
          <p className="block text-sm font-semibold capitalize truncate line-clamp-2">
            {product?.name ?? ""}
          </p>
          <div className="my-2">
            <CommonRating value={parseInt(product?.rating ?? 0)} />
          </div>
          <div className="flex justify-between">
            <p className="text-base font-semibold text-red-400 cursor-auto">
              ${product?.price ?? 0}
            </p>

            {session?.user?.email && (
              <ProductCardAction
                data={{
                  product_id: product?._id,
                  user: user,
                  session: session,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
