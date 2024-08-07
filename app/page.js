import Banner from "./components/home/Banner";
import Products from "./components/products/Products";
import Other from "./components/other/Other";
import Advertisement from "./components/advertisement/Advertisement";
import FeaturedCategories from "./components/FeaturedCategories";
import { getAllCategory } from "./action";
import SideBarCategory from "./components/home/SideBarCategory";
import OfferBanner from "./components/home/OfferBanner";
import NewProducts from "./components/products/components/NewProducts";
import BestSellers from "./components/sidebar/BestSellers";

export default async function Home() {
  const categoryData = await getAllCategory();

  return (
    <>
      {/* <Advertisement /> */}
      <div className="space-y-10 common-class">
        <div className="flex lg:gap-x-2 gap-x-0">
          <div className="h-full mt-[-15px]">
            <SideBarCategory />
          </div>
          <div className="w-full"><Banner /></div>
        </div>
        <OfferBanner category={categoryData?.data} />
       
        <FeaturedCategories />

        <div>
          <div className="flex h-full">
            <BestSellers /> 
            <Products />
          </div>
          <NewProducts />
        </div>
        {/* <Other /> */}
      </div>
    </>
  );
}
