import Link from "next/link";
import React from "react";
import { getCategory } from "../action";

const Categories = async () => {

  const categoryData = await getCategory();

  return (
    <>
      <div className="w-full mb-2 desktopNavbar">
        <nav className="justify-center hidden w-full my-4 lg:flex">
          <ul className="flex justify-between common-class">
            <li className="relative nav_items">
              <Link href="/">HOME</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
            </li>

            {
              categoryData?.data?.slice(0, 9)?.map((item, index) => (
                <li key={index} className="relative nav_items men_nav_item">
                  <a href="#Men">{item?.title}</a>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>

                  <ul className="absolute flex-col items-start justify-start hidden gap-2 p-4 font-normal text-black bg-white border rounded shadow-lg hoveredItems w-52 top-10">
                    {
                      item?.child?.length > 0 ? (
                        item?.child?.map((subItem, index) => (
                          <li key={index}>
                            <Link href={`/category/${subItem?._id}`}>{subItem?.title}</Link>
                          </li>
                        ))
                      ) : (
                        <li>
                          <a href="#">No Sub Category</a>
                        </li>
                      )}
                  </ul>
                </li>
              ))
            }
            {/* <li className="relative nav_items category_nav_item">
              <a href="#Categories">CATEGORIES</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>

              <ul className="absolute z-10 hidden grid-cols-4 gap-4 p-4 font-normal text-gray-400 bg-white border rounded shadow-lg categoriesItem top-10">
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

            </li> */}
          </ul>
        </nav>
      </div>

      {/* <BestSellers/> */}
    </>
  );
};

export default Categories;
