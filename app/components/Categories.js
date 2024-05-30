import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <>
      <div className="desktopNavbar">
        <nav className="justify-center hidden my-4 lg:flex">
          <ul className="flex items-center justify-center gap-12 font-bold  desktopNavbarUl font-sm">
            <li className="relative nav_items">
              <Link href="/">HOME</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
            </li>
            <li className="relative nav_items category_nav_item">
              <a href="#Categories">CATEGORIES</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>

              <ul className="absolute z-10 hidden grid-cols-4 gap-4 p-4 font-normal text-gray-400 bg-white border shadow-lg categoriesItem top-10 rounded">
                <li>
                 
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li>
                      <a href="#"> Desktop </a>
                    </li>
                    <li>
                      <a href="#"> Laptop </a>
                    </li>
                    <li>
                      <a href="#"> Camera </a>
                    </li>
                    <li>
                      <a href="#"> Tablet </a>
                    </li>
                    <li>
                      <a href="#"> Headphone </a>
                    </li>
                    <li>
                      <Image
                        src="/images/electronics-banner-1.jpg"
                        alt="pic"
                        width={500}
                        height={500}
                      />
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li>
                      <a href="#"> Formal </a>
                    </li>
                    <li>
                      <a href="#"> Casual </a>
                    </li>
                    <li>
                      <a href="#"> Sports </a>
                    </li>
                    <li>
                      <a href="#"> Jacket </a>
                    </li>
                    <li>
                      <a href="#"> Sunglasses </a>
                    </li>
                    <li>
                      <Image
                        src="/images/electronics-banner-2.jpg"
                        alt="pic"
                        width={500}
                        height={500}
                      />
                    </li>
                  </ul>
                </li>
                <li>

                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li>
                      <a href="#"> Formal </a>
                    </li>
                    <li>
                      <a href="#"> Casual </a>
                    </li>
                    <li>
                      <a href="#"> Perfume </a>
                    </li>
                    <li>
                      <a href="#"> Cosmetics </a>
                    </li>
                    <li>
                      <a href="#"> Bags </a>
                    </li>
                    <li>
                      <Image
                        width={500}
                        height={500}
                        src="/images/mens-banner.jpg"
                        alt="pic"
                      />
                    </li>
                  </ul>
                </li>
                <li>
                
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li>
                      <a href="#"> Smart </a>
                      Watch
                    </li>
                    <li>
                      <a href="#"> Smart </a>
                      TV
                    </li>
                    <li>
                      <a href="#"> Keyboard </a>
                    </li>
                    <li>
                      <a href="#"> Mouse </a>
                    </li>
                    <li>
                      <a href="#"> Microphone </a>
                    </li>
                    <li>
                      <Image
                        width={500}
                        height={500}
                        src="/images/womens-banner.jpg"
                        alt="pic"
                      />
                    </li>
                  </ul>
                </li>
              </ul>
              {/* <!--? hoverItems --> */}
            </li>
            <li className="relative nav_items men_nav_item">
              <a href="#Men">MEN</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
              {/* <!--? hoverItems --> */}
              <ul className="absolute text-black flex-col items-start justify-start hidden gap-2 p-4 font-normal bg-white border shadow-lg hoveredItems w-52 top-10 rounded">
                <li>
                  <a href="#">Shirt</a>
                </li>
                <li>
                  <a href="#">Shorts & Jeans</a>
                </li>
                <li>
                  <a href="#">Safety</a>
                </li>
                <li>
                  <a href="#">Wallet</a>
                </li>
              </ul>
              {/* <!--? hoverItems --> */}
            </li>
            <li className="relative nav_items women_nav_item">
              <a href="#Women">WOMEN</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
              {/* <!--? hoverItems --> */}
              <ul className="absolute flex-col text-black items-start justify-start hidden gap-2 p-4 font-normal bg-white border shadow-lg hoveredItems w-52 top-10 rounded">
                <li>
                  <a href="#">Dress & Frock</a>
                </li>
                <li>
                  <a href="#">Earrings</a>
                </li>
                <li>
                  <a href="#">Necklace</a>
                </li>
                <li>
                  <a href="#">Makeup Kit</a>
                </li>
              </ul>
              {/* <!--? hoverItems --> */}
            </li>
            <li className="relative nav_items jewelry_nav_item">
              <a href="#Jewelry">JEWELRY</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
              {/* <!--? hoverItems --> */}
              <ul className="absolute text-black flex-col items-start justify-start hidden gap-2 p-4 font-normal bg-white border shadow-lg hoveredItems w-52 top-10 rounded">
                <li>
                  <a href="#">Earrings</a>
                </li>
                <li>
                  <a href="#">Couple Rings</a>
                </li>
                <li>
                  <a href="#">Necklace</a>
                </li>
                <li>
                  <a href="#">Bracelets</a>
                </li>
              </ul>
              {/* <!--? hoverItems --> */}
            </li>
            <li className="relative nav_items perfume_nav_item">
              <a href="#Perfume">PERFUME</a>
              <span className="absolute bottom-0 text-black left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
              {/* <!--? hoverItems --> */}
              <ul className="absolute text-black flex-col items-start justify-start hidden gap-2 p-4 font-normal bg-white border shadow-lg hoveredItems w-52 top-10 rounded">
                <li>
                  <a href="#">Clothes Perfume</a>
                </li>
                <li>
                  <a href="#">Flower Fragrance</a>
                </li>
                <li>
                  <a href="#">Safety</a>
                </li>
                <li>
                  <a href="#">Air Freshener</a>
                </li>
              </ul>
              {/* <!--? hoverItems --> */}
            </li>
            <li className="relative nav_items">
              <a href="#Blog">BLOG</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
            </li>
            <li className="relative nav_items">
              <a href="#HotOffers">HOT OFFERS</a>
              <span className="absolute text-black bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
            </li>
          </ul>
        </nav>
      </div>

      {/* <BestSellers/> */}
    </>
  );
};

export default Categories;
