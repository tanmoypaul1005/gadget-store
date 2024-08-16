import Banner from "./components/home/Banner";
import Products from "./components/products/Products";
import FeaturedCategories from "./components/FeaturedCategories";
import { getAllCategory } from "./action";
import SideBarCategory from "./components/home/SideBarCategory";
import OfferBanner from "./components/home/OfferBanner";
import NewProducts from "./components/products/components/NewProducts";
import BestSellers from "./components/sidebar/BestSellers";
import TopRate from "./top-rate/page";

export default async function Home() {
  const categoryData = await getAllCategory();

  return (
    <>
      <div className="space-y-10 common-class">
        
        <div className="flex lg:gap-x-2 gap-x-0">
          <div className="h-full mt-[-15px]">
            <SideBarCategory />
          </div>
          <div className="w-full">
            <Banner />
          </div>
        </div>
        <OfferBanner category={categoryData?.data} />
        <FeaturedCategories />
        <div>
          <div className="flex h-full">
            <BestSellers />
            <Products />
          </div>
          <TopRate />
          <NewProducts />
        </div>
      </div>
    </>
  );
}
