// ProductDetails.jsx (Server Component)
export const revalidate = 10;
import Image from "next/image";
import Action from "./action/Action";
import { auth } from "@/auth";
import { fetchProduct, findUserId } from "@/app/action/product/action";
import ProductComment from "./components/ProductComment";
import { getComment } from "@/app/action/comment";
import CommonRating from "@/app/components/CommonRating";

const ProductDetails = async ({ params }) => {
  const productDetails = await fetchProduct(params?.product_id);
  const comments = await getComment(params?.product_id);
  const session = await auth();
  const user = await findUserId(session?.user?.email);

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-6xl px-4 py-10 mx-auto sm:px-6 lg:px-8">

        {/* ── Product Section ── */}
        <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2">

          {/* Image Panel */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl bg-[#111118] border border-white/5
                            flex items-center justify-center p-8 aspect-square lg:aspect-auto lg:h-[480px]">
              {/* Glow */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-indigo-600/5 group-hover:opacity-100 rounded-2xl" />
              <Image
                src={productDetails?.image}
                className="relative z-10 object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                width={500}
                height={500}
                alt={productDetails?.name}
              />
            </div>
          </div>

          {/* Info Panel */}
          <div className="flex flex-col justify-center gap-5">

            {/* Brand */}
            {productDetails?.brand && (
              <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-widest text-indigo-400 uppercase border rounded-full w-fit bg-indigo-600/10 border-indigo-500/20">
                {productDetails.brand}
              </span>
            )}

            {/* Name */}
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
              {productDetails?.name ?? "N/A"}
            </h1>

            {/* Rating + Stock */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <CommonRating value={parseInt(productDetails?.ratting ?? 0)} />
                <span className="text-sm text-gray-500">
                  ({comments?.data?.length ?? 0} reviews)
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400
                               bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                In Stock
              </span>
            </div>

            {/* Description */}
            <p className="pl-4 text-sm leading-relaxed text-gray-400 border-l-2 border-indigo-600/50">
              {productDetails?.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-white/5" />

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="text-4xl font-bold text-white">
                {productDetails?.price?.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </span>
              <span className="text-sm text-gray-500 mb-1.5">USD · Tax included</span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-start justify-start pt-1">
              <Action user={user?._id} product_id={params?.product_id} />
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", label: "Secure Payment" },
                { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", label: "Easy Returns" },
                { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", label: "Free Shipping" },
              ].map(({ icon, label }) => (
                <div key={label}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/5
                             border border-white/5 text-center">
                  <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
                  </svg>
                  <span className="text-[10px] text-gray-500 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Comments Section ── */}
        <ProductComment
          data={{
            comments: comments?.data,
            user: user,
            product_id: params?.product_id,
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
