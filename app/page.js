import Banner from "./components/home/Banner";
import Products from "./components/products/Products";
import Category from "./components/sidebar/Category";
import Other from "./components/other/Other";
import Advertisement from "./components/advertisement/Advertisement";
import FeaturedCategories from "./components/FeaturedCategories";
import { getAllCategory } from "./action";
import SideBarCategory from "./components/home/SideBarCategory";
import OfferBanner from "./components/home/OfferBanner";
import NewProducts from "./components/products/components/NewProducts";

export default async function Home() {
  const categoryData = await getAllCategory();

  return (
    <>
      {/* <Advertisement /> */}
      <main>
        <div className="common-class">
          <div className="flex lg:gap-x-2 gap-x-0">
            <div className="h-full mt-[-15px]">
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

        <div className="common-class">
          <section className="flex mt-16 ">
            <Category />
            <Products />
          </section>

          <NewProducts />
        </div>
        {/* <Other /> */}
      </main>
    </>
  );
}
