import Banner from "./components/home/Banner";
import Products from "./components/products/Products";
import Category from "./components/sidebar/Category";
import Other from "./components/other/Other";
import Advertisement from "./components/advertisement/Advertisement";
import FeaturedCategories from "./components/FeaturedCategories";
import { getAllCategory } from "./action";
import SideBarCategory from "./components/SideBarCategory";
import OfferBanner from "./components/home/OfferBanner";

export default async function Home() {

  const categoryData = await getAllCategory();

  return (
    <>
      {/* <Advertisement /> */}
      <main>
        <div className="common-class">
          <div className="flex gap-x-2">
            <div className=" h-full mt-[-15px]">
              <SideBarCategory />
            </div>

            <div className="w-full">
              <Banner />
            </div>
          </div>
          <OfferBanner category={categoryData?.data} />
          <div className="mt-10"></div>
          <FeaturedCategories />
        </div>

        <section className="flex mt-16 common-class ">
          <Category />
          <Products />
        </section>
        <Other />
      </main>
    </>
  );
}
