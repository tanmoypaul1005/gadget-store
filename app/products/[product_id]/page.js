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
    <div className="bg-[#0a0a0f]">
      <div className="py-10 common-class ">
        <div className="flex flex-wrap pb-5">
          <Image
            style={{ maxHeight: "400px" }}
            src={productDetails?.image}
            className="object-contain object-center w-full border border-gray-200 rounded lg:w-1/2"
            width={500}
            height={500}
            alt=""
          />
          <div className="w-full py-6 lg:w-1/2 lg:pl-10 lg:py-0">
            <h2 className="text-sm tracking-widest title-font">
              {productDetails?.brand ?? "NA"}
            </h2>
            <h1 className="mb-1 text-3xl font-medium title-font">
              {productDetails?.name ?? "NA"}
            </h1>

            <p className="leading-relaxed">{productDetails?.description}</p>
            <div className="my-3 space-y-3">
              <div className="mt-2">
                <CommonRating value={parseInt(productDetails?.ratting ?? 0)} />
              </div>
              <div>Status: In Stock</div>
              <div className="text-2xl font-medium text-red-400 title-font">
                {productDetails?.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </div>

            <div className="flex items-start justify-start ">
              <Action user={user?._id} product_id={params?.product_id} />
            </div>
          </div>
        </div>

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

