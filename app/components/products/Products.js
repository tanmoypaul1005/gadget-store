export const revalidate = 10;

import NewProducts from "./components/NewProducts";
import { base_url, products_type_value } from "@/util/const";
import { kuProductList } from "@/util/url";
import ProductBox from "./components/ProductBox";
import DailyOffer from "../other/DailyOffer";
import { auth } from "@/auth";
import { findUserId } from "@/app/action/product/action";
import { findDayOffer } from "@/app/action/cart";

const Products = async () => {

  const products = await fetch(base_url + kuProductList).then((res) => res.json());

  const newArrivals = products?.data?.filter(
    (product, index) => product.type === products_type_value.new_arrivals
  );
  const trending = products?.data?.filter(
    (product, index) => product.type === products_type_value.trending
  );
  const topRated = products?.data?.filter(
    (product, index) => product.type === products_type_value.top_rated
  );

  const day_offer = products?.data?.find(
    (product, index) => product.type === products_type_value.day_offer
  );

  const session = await auth();

  const user = await findUserId(session?.user?.email);

  const isAddCartDayOffer=await findDayOffer(day_offer?._id,user?._id);


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

      <DailyOffer user={user} isAddCartDayOffer={isAddCartDayOffer} product={day_offer} />

    </div>
  );
};

export default Products;
