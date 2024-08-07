import Image from "next/image";
import React from "react";
// import AddCartButton from "./AddCartButton";
import Link from "next/link";
// import { auth } from "@/auth";
// import { findUserId } from "@/app/action/product/action";

const ProductCard = async ({ product }) => {
  // const session = await auth();
  // const user = await findUserId(session?.user?.email);
  return (
    <div
      className="flex flex-col self-center px-3 py-2 overflow-hidden bg-gray-700 border rounded-lg shadow-md w-72 group border-gray-100/30"
    >
      <Image
        style={{ maxHeight: "20px", minHeight: "200px" }}
        alt=""
        width={200}
        height={500}
        src={product?.image}
        className="object-contain object-center rounded-t-xl"
      />

      <div className="mt-2">
        <a href="#">
          <h5 className="text-lg tracking-tight text-white line-clamp-1">
            {product?.name ?? "NA"}
          </h5>
        </a>
        <div className="flex items-center justify-between mt-2 mb-5">
          <p>
            <span className="text-xl font-bold text-white">
              ${product?.price}
            </span>
          </p>
        </div>
        {/* {session?.user?.email && (
          <AddCartButton
            data={{
              product_id: product?._id,
              user: user,
              session: session,
            }}
          />
        )} */}
      </div>
    </div>
  );
};

export default ProductCard;
