import Image from "next/image";
import React from "react";
import AddCartButton from "./AddCartButton";
import { findUserId } from "@/app/action/product/action";
import { auth } from "@/auth";
import Link from "next/link";
import CommonRating from "@/components/CommonRating";

const ProductCard = async ({ product }) => {
  const session = await auth();
  const user = await findUserId(session?.user?.email);
  return (
    <Link href={`/products/${product?._id}`}>
      <div className="flex flex-col self-center w-64 px-3 py-2 overflow-hidden bg-gray-700 border rounded-lg shadow-md group border-gray-100/30">
        <div className="flex items-center justify-center">
          <Image
            style={{ maxWidth: "200px", maxHeight: "20px", minHeight: "200px" }}
            alt=""
            width={150}
            height={500}
            src={product?.image}
            className="object-contain object-center rounded-t-xl"
          />
        </div>

        <div className="mt-2">
          <h5 className="text-lg tracking-tight text-white line-clamp-1">
            {product?.name ?? "NA"}
          </h5>
          <div className="mt-2 ">
            <CommonRating value={parseInt(product?.ratting ?? 0)} />
          </div>
          <div className="flex items-center justify-between mt-2 mb-5 text-xl font-bold text-white">
            ${product?.price}
          </div>
          {session?.user?.email && (
            <AddCartButton
              data={{
                product_id: product?._id,
                user: user,
                session: session,
              }}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
