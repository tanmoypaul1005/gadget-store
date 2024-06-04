import Banner from "./components/home/Banner";
import Header from "./components/header/Header";
import Products from "./components/products/Products";
import Category from "./components/sidebar/Category";
import Other from "./components/other/Other";
import Advertisement from "./components/advertisement/Advertisement";

export default function Home() {
  return (
    <>
      <Advertisement />
      <main>
        <div className="">
          <Banner />
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
