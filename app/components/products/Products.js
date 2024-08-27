export const revalidate = 10;

import { products_type_value } from "@/util/const";
import DailyOffer from "../other/DailyOffer";
import { auth } from "@/auth";
import {
  fetchTopRateProducts,
  findUserId,
  getAllProducts,
} from "@/app/action/product/action";
import { findDayOffer } from "@/app/action/cart";
import Slider from "../slider/Slider";

const fetchProductsData = async () => {
  try {
    const products = await getAllProducts();
    const topRateProducts = await fetchTopRateProducts();
    const session = await auth();
    const user = await findUserId(session?.user?.email);

    const newArrivals = products?.filter(
      (product) => product.type === products_type_value.new_arrivals
    );
    const trending = products?.filter(
      (product) => product.type === products_type_value.trending
    );
    const dayOffer = products?.find(
      (product) => product.type === products_type_value.day_offer
    );
    const isAddCartDayOffer = await findDayOffer(dayOffer?._id, user?._id);

    return {
      topRateProducts,
      newArrivals,
      trending,
      dayOffer,
      user,
      isAddCartDayOffer,
    };
  } catch (error) {
    console.error("Error fetching products data:", error);
    return {};
  }
};

const Products = async () => {
  const {
    topRateProducts,
    newArrivals,
    trending,
    dayOffer,
    user,
    isAddCartDayOffer,
  } = await fetchProductsData();

  return (
    <>
      <ProductSection title="Top Rated Products 🔥" products={topRateProducts} />
      <ProductSection title="New Arrivals 🔥" products={newArrivals} />
      <ProductSection title="Trending 🔥" products={trending} />
      <DailyOffer
        user={user}
        isAddCartDayOffer={isAddCartDayOffer}
        product={dayOffer}
      />
    </>
  );
};

const ProductSection = ({ title, products }) => (
  <div>
    <div className="flex items-center justify-center w-full mb-4 text-2xl font-semibold text-center text-white">
      {title}
    </div>
    <Slider products={products} />
  </div>
);

export default Products;

