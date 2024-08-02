import React from "react";
import Image from "next/image";
import BestSellers from "./BestSellers";

const Category = () => {
  return (
    <aside className="sticky top-0 flex-col hidden max-h-screen lg:flex lg:w-1/4">
      <div className="">
        {/* <div className="w-full p-4 text-white border shadow-lg bg-cCommonBg categories rounded-xl">
          <h1 className="mb-4 text-xl font-semibold ">CATEGORY</h1>
          
          <div className="pb-3 text-lg border-b">
            <details>
              <div className="flex items-baseline justify-between text-sm text-white ">
                <a className="text-white" href="#">Shirt</a>
                <span>300</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Shorts & Jeans</a>
                <span>30</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Jacket</a>
                <span>50</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Dress & Frock</a>
                <span>120</span>
              </div>
              <summary>
                <div className="flex items-center gap-2">
                  Clothes
                  <Image
                    className="w-4 h-4"
                    src="/images/icons/dress.svg"
                    alt="productPicture"
                    height={20}
                    width={20}
                  />
                </div>
              </summary>
            </details>
          </div>
          <div className="pb-3 text-lg border-b">
            <details>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Sports</a>
                <span>300</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Formal</a>
                <span>30</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Casual</a>
                <span>50</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Safety Shoes</a>
                <span>120</span>
              </div>
              <summary>
                <div className="flex items-center gap-2">
                  Footwear
                  <Image
                    className="w-4 h-4"
                    src="/images/icons/shoes.svg"
                    alt="productPicture"
                    height={20}
                    width={20}
                  />
                </div>
              </summary>
            </details>
          </div>
          <div className="pb-3 text-lg border-b">
            <details>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Earrings</a>
                <span>300</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Couple Rings</a>
                <span>30</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a  className="text-white" href="#">Necklace</a>
                <span>50</span>
              </div>
              <summary>
                <div className="flex items-center gap-2">
                  Jewelry
                  <Image
                    className="w-4 h-4"
                    src="/images/icons/jewelry.svg"
                    alt="productPicture"
                    height={20}
                    width={20}
                  />
                </div>
              </summary>
            </details>
          </div>
          <div className="pb-3 text-lg border-b">
            <details>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Clothes Perfume</a>
                <span>300</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Deodorant</a>
                <span>30</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Jacket</a>
                <span>50</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Dress & Frock</a>
                <span>120</span>
              </div>
              <summary>
                <div className="flex items-center gap-2">
                  Perfume
                  <Image
                    className="w-4 h-4"
                    src="/images/icons/perfume.svg"
                    alt="productPicture"
                    height={20}
                    width={20}
                  />
                </div>
              </summary>
            </details>
          </div>
          <div className="pb-3 text-lg border-b">
            <details>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Shampoo</a>
                <span>300</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Sunscreen</a>
                <span>30</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Body Wash</a>
                <span>50</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Makeup Kit</a>
                <span>120</span>
              </div>
              <summary>
                <div className="flex items-center gap-2">
                  Cosmetics
                  <Image
                    className="w-4 h-4"
                    src="/images/icons/cosmetics.svg"
                    alt="productPicture"
                    height={20}
                    width={20}
                  />
                </div>
              </summary>
            </details>
          </div>
          <div className="pb-3 text-lg border-b">
            <details>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Sunglasses</a>
                <span>23</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Lenses</a>
                <span>53</span>
              </div>
              <summary>
                <div className="flex items-center gap-2">
                  Glasses
                  <Image
                    className="w-4 h-4"
                    src="/images/icons/glasses.svg"
                    alt="productPicture"
                    height={20}
                    width={20}
                  />
                </div>
              </summary>
            </details>
          </div>
          <div className="pb-3 text-lg border-b">
            <details>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Wallet</a>
                <span>300</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Purse</a>
                <span>30</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Gym Backpack</a>
                <span>50</span>
              </div>
              <div className="flex items-baseline justify-between text-sm">
                <a className="text-white" href="#">Shopping Bag</a>
                <span>120</span>
              </div>
              <summary>
                <div className="flex items-center gap-2">
                  Bags
                  <Image
                    className="w-4 h-4"
                    src="/images/icons/bag.svg"
                    alt="productPicture"
                    height={20}
                    width={20}
                  />
                </div>
              </summary>
            </details>
          </div>
        </div> */}

        <BestSellers />
      </div>
    </aside>
  );
};

export default Category;
