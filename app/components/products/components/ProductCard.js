import { auth } from "@/auth";
import { commonView } from "@/util/utilityFunction";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductCardAction from "./ProductCardAction";
import { findUserId } from "@/app/action/product/action";
import Rating from "@mui/material/Rating";
import CommonRating from "@/components/CommonRating";

export const ProductCard = async ({ product }) => {
  const session = await auth();
  const user = await findUserId(session?.user?.email);

  return (
    <Link href={`/products/${product?._id}`}>
      <div className="py-3 text-white duration-500 shadow-md bg-cCommonBg w-60 rounded-xl hover:scale-105 hover:shadow-xl">
        <>
          <Image
            style={{ maxHeight: "20px", minHeight: "200px" }}
            alt=""
            width={400}
            height={500}
            src={product?.image}
            className="object-contain object-center rounded-t-xl"
          />
          <div className="px-4 pt-2 w-60">
            <span className="mr-3 text-xs uppercase">
              {commonView(product?.brand)}
            </span>
            <p className="block text-sm font-semibold capitalize truncate line-clamp-2">
              {product?.name}
            </p>
            <div>
              <div className="mt-2 flex space-x-0.5">
                <CommonRating value={parseInt(product?.ratting ?? 0)}/>
                <div>({parseInt(product?.ratting ?? 0)})</div>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-semibold text-red-400 cursor-auto">
                  ${product?.price}
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
        </>
      </div>
    </Link>
  );
};

export default ProductCard;
