import Image from "next/image";
import NewProducts from "./components/NewProducts";
import { base_url } from "@/util/const";
import { kuProductList } from "@/util/url";
import { products_type_value } from "@/app/api/utils/const";
import ProductBox from "./components/ProductBox";

const Products = async () => {
  const products = await fetch(base_url + kuProductList, {
    next: { revalidate: 1 },
  }).then((res) => res.json());

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
    <div className="flex flex-col w-full lg:w-3/4">
      <div className="grid grid-cols-1 gap-4 mx-auto max-w-screen min-w-screen md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4 NewArrivals">
          <h1 className="pb-4 text-xl font-semibold border-b">New Arrivals</h1>

          {newArrivals?.map((product, index) => (
            <ProductBox key={index} product={product} />
          ))}
        </div>

        <div className="flex flex-col gap-4 Trending">
          <h1 className="pb-4 text-xl font-semibold border-b">Trending</h1>
          {trending?.map((product, index) => (
            <ProductBox key={index} product={product} />
          ))}
        </div>

        <div className="flex flex-col gap-4 TopRated">
          <h1 className="pb-4 text-xl font-semibold border-b">Top Rated</h1>
          {topRated?.map((product, index) => (
            <ProductBox key={index} product={product} />
          ))}
        </div>
      </div>

      <div className="my-10 day">
        <h1 className="py-4 text-xl font-semibold border-b">Deal Of The Day</h1>
        <div className="flex flex-col justify-between w-full h-auto mt-10 border rounded-lg lg:flex-row">
          <Image
            className="lg:w-1/2"
            src="/images/products/shampoo.jpg"
            alt=""
            width={80}
            height={80}
          />
          <div className="flex flex-col items-start gap-2 p-4 lg:w-1/2">
            <div className="text-yellow-500 stars">
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star"></ion-icon>
              <ion-icon name="star-half-outline"></ion-icon>
            </div>
            <h4 className="text-lg font-bold">
              SHAMPOO, CONDITIONER & FACEWASH PACKS
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
              amet consectetur Lorem ipsum dolor
            </p>
            <div>
              <strong className="text-xl font-bold text-red-400">
                $150.00
              </strong>
              <s className="text-xl text-gray-500">$200.00</s>
            </div>
            <button className="px-4 py-2 font-semibold text-white bg-red-500 rounded-xl text-md">
              ADD TO CART
            </button>
            <h3 className="mt-4 text-sm font-semibold">
              HURRY UP! OFFER ENDS IN:
            </h3>
            <div
              id="reverseTimer"
              className="flex items-center justify-between gap-4 text-sm font-semibold text-black"
            >
              <h1
                className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
                id="days"
              ></h1>
              <h1
                className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
                id="hour"
              ></h1>
              <h1
                className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
                id="minute"
              ></h1>
              <h1
                className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
                id="second"
              ></h1>
            </div>
          </div>
        </div>
      </div>

      <NewProducts />
    </div>
  );
};

export default Products;
