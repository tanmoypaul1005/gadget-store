import Banner from "./components/home/Banner";
import Products from "./components/products/Products";
import FeaturedCategories from "./components/FeaturedCategories";
import { getAllCategory } from "./action";
import SideBarCategory from "./components/home/SideBarCategory";
import OfferBanner from "./components/home/OfferBanner";
import RegularProducts from "./components/products/components/RegularProducts";
import TopBrand from "./components/topBrand/TopBrand";
import Offer from "./offer/page";

export default async function Home() {
  
  const categoryData = await getAllCategory();

  return (
    <div className="space-y-5 common-class ">
      <div className="flex common-topGap lg:gap-x-2 gap-x-0">
        <div className="h-full mt-[-15px]">
          <SideBarCategory />
        </div>
        <div className="w-full">
          <Banner />
        </div>
      </div>
      <OfferBanner category={categoryData?.data} />
      <FeaturedCategories />
      <Products />
     
      <RegularProducts />
      <Offer/>
      <TopBrand/>

    </div>
  );
}
