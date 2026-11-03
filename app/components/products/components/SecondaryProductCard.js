"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import CommonRating from "../../CommonRating";
import CartQuantityButton from "./CartQuantityButton";

const SecondaryProductCard = ({ product, width = "max-w-[250px] min-w-[250px]" }) => {

  const router = useRouter();

  return (
    <>
      <div onClick={() => {
        router.push(`/products/${product?._id}`)
      }}
        onMouseEnter={() => router.prefetch(`/products/${product?._id}`)}
        className={`relative py-4 cursor-pointer overflow-hidden px-2.5 border border-cBorderColor text-white duration-500 shadow-md bg-cCommonBg rounded-xl ${width}`}>
        <div className="flex items-center justify-center">
          <Image
            style={{ minHeight: "120px", maxHeight: "120px" }}
            alt={product?.name ?? "Product Image"}
            width={400}
            height={500}
            src={product?.image}
            className="object-contain object-center w-full h-32 rounded-t-xl"
          />
        </div>
        <span className="absolute top-0 left-0 text-sm text-center text-white -rotate-45 -translate-x-6 translate-y-4 bg-black w-28">
          Sale
        </span>
        <div className="mt-2.5">
          <h5 className="text-sm font-semibold tracking-tight text-white line-clamp-1">
            {product?.name}
          </h5>
          <div className="my-2.5 flex items-center">
            <CommonRating value={parseInt(product?.ratting ?? 0)} />
          </div>
          <div className="flex gap-y-2.5 flex-col">
            <div className="text-sm font-bold text-white">${product?.price}</div>
            <CartQuantityButton productId={product?._id} size="sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondaryProductCard;
