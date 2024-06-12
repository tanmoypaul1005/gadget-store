export const revalidate = 10;
import Image from "next/image";
import Action from "./action/Action";
import { auth } from "@/auth";
import { fetchProduct, findUserId } from "@/app/action/product/action";
import ProductComment from "./components/ProductComment";
import { getComment } from "@/app/action/comment";


const ProductDetails = async ({ params }) => {

 
  const productDetails = await fetchProduct(params?.product_id);
  const comments=await getComment(params?.product_id);
  const session = await auth();

  const user = await findUserId(session?.user?.email);


  return (
    <div className="common-class">

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
            {productDetails?.brand}
          </h2>
          <h1 className="mb-1 text-3xl font-medium title-font">
            {productDetails?.name}
          </h1>

          <p className="leading-relaxed">
            {productDetails?.description}
          </p>

          <div className="pt-4 text-2xl font-medium text-red-400 title-font">$58.00</div>
          <div className="flex items-center pb-4 border-b-2 border-gray-200">
            {/* <div className="flex">
                <span className="mr-3">Color</span>
                <button className="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                <button className="w-6 h-6 ml-1 bg-gray-700 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                <button className="w-6 h-6 ml-1 bg-red-500 border-2 border-gray-300 rounded-full focus:outline-none"></button>
              </div> */}
          </div>

          <div className="flex items-start justify-start ">
            <Action
              user={user?._id}
              product_id={params?.product_id}
            />
          </div>
        </div>
      </div>


      <ProductComment
        data={{
          comments: comments?.data,
          user: user,
          product_id: params?.product_id
        }}
      />
    </div>
  );
};

export default ProductDetails;

{
  /* <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="ml-3">4 Reviews</span>
                            </span>
                            <span className="flex py-2 pl-3 ml-3 border-l-2 border-gray-200">
                                <a className="text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-2 text-gray-500">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>
                        </div> */
}

