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
        <div className="common-class">
          <Banner />
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
