import Banner from "./components/home/Banner";
import Products from "./components/products/Products";
import Category from "./components/sidebar/Category";
import Other from "./components/other/Other";
import Advertisement from "./components/advertisement/Advertisement";
import FeaturedCategories from "./components/FeaturedCategories";

export default function Home() {
  return (
    <>
      {/* <Advertisement /> */}
      <main>
        <div className="w-full gap-8 px-8 mx-auto min-h-auto lg:px-0 lg:w-5/6">
          <Banner />
          <div className="mt-10"></div>
          <FeaturedCategories />
        </div>

        <section className="flex w-full gap-8 px-8 mx-auto mt-16 min-h-auto lg:px-0 lg:w-5/6">
          <Category />
          <Products />
        </section>
        <Other />
      </main>
    </>
  );
}
