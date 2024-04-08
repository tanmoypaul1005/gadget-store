import Image from "next/image";
import Banner from "./components/home/Banner";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Products from "./components/products/Products";
import Category from "./components/category/Category";
import Other from "./components/other/Other";

export default function Home() {
  return (
    <>
      <body>
        {/* <!--! newspaper popup --> */}
        <div
          id="newspaper"
          className="fixed z-20 items-center justify-center hidden w-screen h-screen"
        >
          <div
            id="newspaperOverlay"
            className="z-10 fixed top-0 w-screen h-screen bg-[#00000066]"
          ></div>
          <div
            id="newspaperBox"
            className="z-20 flex items-center w-4/5 overflow-hidden bg-white border rounded-md shadow-md lg:w-3/6 h-2/5 lg:h-3/5"
          >
            <div className="hidden h-full md:flex md:w-1/2">
              <Image
                className="w-full h-full"
                src="/images/newsletter.png"
                alt="newsletter"
                width={500}
                height={500}
              />
            </div>
            <div
              className="relative flex flex-col justify-center w-full h-full gap-4 p-12 px-8 md:w-1/2"
            >
              <button
                className="absolute text-2xl closeButton top-4 right-4 hover:text-red-500"
              >
                <ion-icon name="close-circle-outline"></ion-icon>
              </button>
              <h3 className="text-xl font-bold text-gray-800">Subscribe Newsletter.</h3>
              <p className="font-semibold text-gray-600 text-md">
                Subscribe the <span className="text-lg font-semibold">Anon</span> to get
                latest products and discount update.
              </p>
              <input className="p-2 border" type="email" placeholder="Email Address" />
              <button
                className="self-center px-3 py-2 text-white bg-gray-900 rounded-md hover:bg-red-500"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <Header />


        <main>
          {/* <!-- !banner --> */}
        <Banner/>

          {/* <!--? Products and categories  --> */}
          <section className="flex w-full gap-8 px-8 mx-auto mt-16 min-h-auto lg:px-0 lg:w-5/6">
            <Category />

            <Products />

          </section>

          <Other />

          <div className="flex w-full mx-auto my-10">
            <div className="swiper blog_swiper">
              <div className="swiper-wrapper" id="blog_swiper"></div>

              <div className="swiper-scrollbar"></div>
            </div>
          </div>
        </main>
        <Footer />

      </body>
    </>
  );
}
