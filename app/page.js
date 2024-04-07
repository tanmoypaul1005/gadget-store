import Image from "next/image";
import Banner from "./components/home/Banner";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Products from "./components/products/Products";

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
          <div className="flex items-center justify-center mt-10 banner lg:-mt-4">
            <div className="swiper swiper-js">
              <div
                className="relative w-full h-64 swiper-wrapper lg:h-96 lg:w-5/6"
                id="swiperSlide"
              ></div>

              <div className="swiper-scrollbar"></div>
            </div>
          </div>

          {/* <!--todo Title Categories  --> */}
          <div className="flex items-center justify-center mt-10">
            <div className="swiper categories_swiper">
              <div className="relative gap-4 swiper-wrapper" id="titlecategories"></div>

              <div className="swiper-scrollbar"></div>
            </div>
          </div>

          {/* <!--? Products and categories  --> */}
          <section
            className="flex w-full gap-8 px-8 mx-auto mt-16 min-h-auto lg:px-0 lg:w-5/6"
          >
            <aside className="sticky top-0 flex-col hidden max-h-screen lg:flex lg:w-1/4">
              <div className="overflow-y-auto aside_section">
                <div className="w-full p-4 bg-white border shadow-lg categories rounded-xl">
                  <h1 className="mb-4 text-xl font-semibold">CATEGORY</h1>
                  <div className="pb-3 text-lg text-gray-600 border-b">
                    <details>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Shirt</a>
                        <span>300</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Shorts & Jeans</a>
                        <span>30</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Jacket</a>
                        <span>50</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Dress & Frock</a>
                        <span>120</span>
                      </div>
                      <summary>
                        <div className="flex items-center gap-2">
                          Clothes
                          <img
                            className="w-4 h-4"
                            src="./assets/images/icons/dress.svg"
                            alt="productPicture"
                          />
                        </div>
                      </summary>
                    </details>
                  </div>
                  <div className="pb-3 text-lg text-gray-600 border-b">
                    <details>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Sports</a>
                        <span>300</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Formal</a>
                        <span>30</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Casual</a>
                        <span>50</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Safety Shoes</a>
                        <span>120</span>
                      </div>
                      <summary>
                        <div className="flex items-center gap-2">
                          Footwear
                          <img
                            className="w-4 h-4"
                            src="./assets/images/icons/shoes.svg"
                            alt="productPicture"
                          />
                        </div>
                      </summary>
                    </details>
                  </div>
                  <div className="pb-3 text-lg text-gray-600 border-b">
                    <details>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Earrings</a>
                        <span>300</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Couple Rings</a>
                        <span>30</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Necklace</a>
                        <span>50</span>
                      </div>
                      <summary>
                        <div className="flex items-center gap-2">
                          Jewelry
                          <img
                            className="w-4 h-4"
                            src="./assets/images/icons/jewelry.svg"
                            alt="productPicture"
                          />
                        </div>
                      </summary>
                    </details>
                  </div>
                  <div className="pb-3 text-lg text-gray-600 border-b">
                    <details>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Clothes Perfume</a>
                        <span>300</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Deodorant</a>
                        <span>30</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Jacket</a>
                        <span>50</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Dress & Frock</a>
                        <span>120</span>
                      </div>
                      <summary>
                        <div className="flex items-center gap-2">
                          Perfume
                          <img
                            className="w-4 h-4"
                            src="./assets/images/icons/perfume.svg"
                            alt="productPicture"
                          />
                        </div>
                      </summary>
                    </details>
                  </div>
                  <div className="pb-3 text-lg text-gray-600 border-b">
                    <details>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Shampoo</a>
                        <span>300</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Sunscreen</a>
                        <span>30</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Body Wash</a>
                        <span>50</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Makeup Kit</a>
                        <span>120</span>
                      </div>
                      <summary>
                        <div className="flex items-center gap-2">
                          Cosmetics
                          <img
                            className="w-4 h-4"
                            src="./assets/images/icons/cosmetics.svg"
                            alt="productPicture"
                          />
                        </div>
                      </summary>
                    </details>
                  </div>
                  <div className="pb-3 text-lg text-gray-600 border-b">
                    <details>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Sunglasses</a>
                        <span>23</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Lenses</a>
                        <span>53</span>
                      </div>
                      <summary>
                        <div className="flex items-center gap-2">
                          Glasses
                          <img
                            className="w-4 h-4"
                            src="./assets/images/icons/glasses.svg"
                            alt="productPicture"
                          />
                        </div>
                      </summary>
                    </details>
                  </div>
                  <div className="pb-3 text-lg text-gray-600 border-b">
                    <details>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Wallet</a>
                        <span>300</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Purse</a>
                        <span>30</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Gym Backpack</a>
                        <span>50</span>
                      </div>
                      <div className="flex items-baseline justify-between text-sm">
                        <a href="#">Shopping Bag</a>
                        <span>120</span>
                      </div>
                      <summary>
                        <div className="flex items-center gap-2">
                          Bags
                          <img
                            className="w-4 h-4"
                            src="./assets/images/icons/bag.svg"
                            alt="productPicture"
                          />
                        </div>
                      </summary>
                    </details>
                  </div>
                </div>

                <div
                  className="flex flex-col items-start justify-start h-auto gap-4 mt-10 bestsellers 2-72"
                >
                  <h2 className="text-lg font-semibold">BEST SELLERS</h2>
                  <div className="flex items-center justify-start gap-2">
                    <div
                      className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20"
                    >
                      <img
                        className="w-full h-full"
                        src="./assets/images/products/1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-gray-700">
                      <h4 className="text-gray-900">Baby Fabric Shoes</h4>
                      <div className="text-yellow-500 stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>
                      <div className="flex items-center justify-start gap-4">
                        <s className="text-gray-500">$14.00</s> <strong>$7.00</strong>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div
                      className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20"
                    >
                      <img
                        className="w-full h-full"
                        src="./assets/images/products/2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-gray-700">
                      <h4 className="text-gray-900">Men's Hoodies T-Shirt</h4>
                      <div className="text-yellow-500 stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                      <div className="flex items-center justify-start gap-4">
                        <s className="text-gray-500">$5.00</s> <strong>$2.00</strong>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div
                      className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20"
                    >
                      <img
                        className="w-full h-full"
                        src="./assets/images/products/3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-gray-700">
                      <h4 className="text-gray-900">Girls T-Shirt</h4>
                      <div className="text-yellow-500 stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                      </div>
                      <div className="flex items-center justify-start gap-4">
                        <s className="text-gray-500">$10.00</s> <strong>$5.00</strong>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-start gap-2">
                    <div
                      className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20"
                    >
                      <img
                        className="w-full h-full"
                        src="./assets/images/products/4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="text-gray-700">
                      <h4 className="text-gray-900">Woolen Hat For Men</h4>
                      <div className="text-yellow-500 stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon>
                      </div>
                      <div className="flex items-center justify-start gap-4">
                        <s className="text-gray-500">$24.00</s> <strong>$17.00</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            <Products />

          </section>

          <div
            className="flex flex-col flex-wrap w-full gap-8 px-8 mx-auto mt-10 mb-20 lg:px-0 lg:w-5/6 lg:flex-nowrap lg:flex-row"
          >
            <div className="w-full testimonial lg:w-2/6">
              <h1 className="pb-4 mb-8 text-xl font-semibold border-b">Testimonial</h1>
              <div
                // style="height: 23rem"
                className="flex flex-col items-center justify-center w-full p-4 border rounded-xl"
              >
                <img
                  className="w-20 h-20 rounded-full"
                  src="./assets/images/testimonial-1.jpg"
                  alt="testimonial"
                />
                <h2 className="text-lg font-bold text-gray-600">ALAN DOE</h2>
                <h5 className="text-md">CEO & Founder Invision</h5>
                <img
                  className="w-6 h-6 my-4"
                  src="./assets/images/icons/quotes.svg"
                  alt="quotes"
                />
                <p className="w-4/5 mx-auto text-sm text-center">
                  Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
                  amet.
                </p>
              </div>
            </div>

            <div
              className="flex items-center justify-center w-full rounded-lg lg:w-3/6"
              // style="background-image: url('./assets/images/cta-banner.jpg')"
              style={{ backgroundImage: "url('./images/cta-banner.jpg')" }}
            >
              <div
                className="flex flex-col items-center justify-center w-3/4 gap-4 p-8 rounded-lg bg-gray-100/70"
              >
                <button className="p-2 text-white bg-gray-900 rounded-lg">
                  25% DISCOUNT
                </button>
                <h1 className="w-56 text-4xl font-bold text-center text-gray-800">
                  Summer Collection
                </h1>
                <h5 className="text-lg font-semibold text-gray-500">Starting @ $10</h5>
                <button className="text-lg font-semibold text-gray-500">SHOP NOW</button>
              </div>
            </div>

            <div className="w-full OurServices lg:w-2/6">
              <h1 className="pb-4 mb-8 text-xl font-semibold border-b">Our Services</h1>
              <div
                // style="height: 23rem"
                className="flex flex-wrap items-center justify-between w-full p-4 border rounded-xl lg:flex-col lg:justify-center lg:px-8 lg:gap-8"
              >
                <div
                  className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                >
                  <ion-icon className="text-4xl text-red-500" name="boat-outline"></ion-icon>
                  <div>
                    <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                    <p className="text-xs text-gray-600">For Order Over $100</p>
                  </div>
                </div>

                <div
                  className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                >
                  <ion-icon
                    className="text-4xl text-red-500"
                    name="rocket-outline"
                  ></ion-icon>
                  <div>
                    <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                    <p className="text-xs text-gray-600">For Order Over $100</p>
                  </div>
                </div>

                <div
                  className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                >
                  <ion-icon className="text-4xl text-red-500" name="call-outline"></ion-icon>
                  <div>
                    <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                    <p className="text-xs text-gray-600">For Order Over $100</p>
                  </div>
                </div>

                <div
                  className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                >
                  <ion-icon
                    className="text-4xl text-red-500"
                    name="arrow-undo-outline"
                  ></ion-icon>
                  <div>
                    <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                    <p className="text-xs text-gray-600">For Order Over $100</p>
                  </div>
                </div>

                <div
                  className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                >
                  <ion-icon
                    className="text-4xl text-red-500"
                    name="ticket-outline"
                  ></ion-icon>
                  <div>
                    <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                    <p className="text-xs text-gray-600">For Order Over $100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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
