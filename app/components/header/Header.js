import React from 'react'
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <header className="w-full header">
                <div className="flex flex-col items-center justify-between w-screen border-b top-header">
                    <div className="flex flex-col items-center justify-between w-full gap-4 p-6 sm:flex-row md:px-24">
                        <h1 className="text-4xl font-semibold text-gray-600">Anon</h1>
                        <form className="relative w-full sm:w-3/5">
                            <input
                                className="w-full h-full p-2 outline-none rounded-lg ring-2 ring-[#2257AA]"
                                placeholder="Enter Your Product Name..."
                                id="search"
                                type="text"
                            />
                            <label className="absolute right-2 top-2" for="search">
                                <i className="cursor-pointer fa-solid fa-magnifying-glass"></i>
                            </label>
                        </form>
                        <div className="hidden gap-8 mr-2 text-3xl text-gray-600 icons md:flex">
                            <div className="relative cursor-pointer">
                                <Image
                                    style={{ maxWidth: "30px", minWidth: "30px", maxHeight: "30px", minHeight: "30px" }}
                                    src={"/images/icons/avatar.png"}
                                    alt="pic"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            {/* <div className="relative">
                                <span
                                    className="absolute w-4 h-4 text-xs font-semibold text-center text-white bg-red-400 rounded-full -top-2 -right-2"
                                >0</span
                                >
                                <ion-icon name="heart-outline"></ion-icon>
                            </div> */}
                            <div className="relative cursor-pointer">
                                <span className="absolute w-4 h-4 text-xs font-semibold text-center text-white bg-red-400 rounded-full -top-2 -right-2" >0</span>
                                <Image
                                    style={{ maxWidth: "30px", minWidth: "30px", maxHeight: "30px", minHeight: "30px" }}
                                    src="/images/icons/trolley.png"
                                    alt="pic"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="desktopNavbar">
                    <nav className="justify-center hidden my-4 lg:flex">
                        <ul className="flex items-center justify-center gap-12 font-bold text-gray-600 desktopNavbarUl font-sm">
                            <li className="relative nav_items">
                                <a href="#Home">HOME</a>
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"
                                ></span>
                            </li>
                            <li className="relative nav_items category_nav_item">
                                <a href="#Categories">CATEGORIES</a>
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"
                                ></span>

                                <ul
                                    className="absolute z-10 hidden grid-cols-4 gap-4 p-4 font-normal text-gray-400 bg-white border shadow-lg categoriesItem top-10 rounded-xl"
                                >
                                    <li>
                                        <h3 className="py-2 mb-4 font-semibold text-gray-900 border-b">
                                            Electronics
                                        </h3>
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
                                        <h3 className="py-2 mb-4 font-semibold text-gray-900 border-b">
                                            Men
                                        </h3>
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
                                        <h3 className="py-2 mb-4 font-semibold text-gray-900 border-b">
                                            Women
                                        </h3>
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
                                            <li><Image width={500} height={500} src="/images/mens-banner.jpg" alt="pic" /></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 className="py-2 mb-4 font-semibold text-gray-900 border-b">
                                            Electronics
                                        </h3>
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
                                                <Image width={500} height={500} src="/images/womens-banner.jpg" alt="pic" />
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* <!--? hoverItems --> */}
                            </li>
                            <li className="relative nav_items men_nav_item">
                                <a href="#Men">MEN</a>
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"
                                ></span>
                                {/* <!--? hoverItems --> */}
                                <ul
                                    className="absolute flex-col items-start justify-start hidden gap-2 p-4 font-normal bg-white border shadow-lg hoveredItems w-52 top-10 rounded-xl"
                                >
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
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"
                                ></span>
                                {/* <!--? hoverItems --> */}
                                <ul
                                    className="absolute flex-col items-start justify-start hidden gap-2 p-4 font-normal bg-white border shadow-lg hoveredItems w-52 top-10 rounded-xl"
                                >
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
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"
                                ></span>
                                {/* <!--? hoverItems --> */}
                                <ul
                                    className="absolute flex-col items-start justify-start hidden gap-2 p-4 font-normal bg-white border shadow-lg hoveredItems w-52 top-10 rounded-xl"
                                >
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
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"
                                ></span>
                                {/* <!--? hoverItems --> */}
                                <ul
                                    className="absolute flex-col items-start justify-start hidden gap-2 p-4 font-normal bg-white border shadow-lg hoveredItems w-52 top-10 rounded-xl"
                                >
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
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"
                                ></span>
                            </li>
                            <li className="relative nav_items">
                                <a href="#HotOffers">HOT OFFERS</a>
                                <span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"
                                ></span>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="mobileNavbar">
                    <div
                        // style="box-shadow: 0 0 0.3rem lightgray"
                        className="fixed bottom-0 z-10 flex items-center justify-around p-4 text-lg -translate-x-1/2 bg-white border w-96 lg:hidden rounded-t-xl left-1/2"
                    >
                        <button id="openNavbarButton" type="button">
                            <ion-icon name="menu-outline"></ion-icon>
                        </button>

                        <button className="relative" type="button">
                            <span
                                className="absolute w-4 h-4 text-xs font-semibold text-center text-white bg-red-400 rounded-full -top-2 -right-2"
                            >
                                0
                            </span>
                            <ion-icon name="bag-handle-outline"></ion-icon>
                        </button>

                        <button type="button">
                            <ion-icon name="home-outline"></ion-icon>
                        </button>

                        <button className="relative" type="button">
                            <span
                                className="absolute w-4 h-4 text-xs font-semibold text-center text-white bg-red-400 rounded-full -top-2 -right-2"
                            >
                                0
                            </span>
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>

                        <button id="categoriesBtn" type="button">
                            <ion-icon name="grid-outline"></ion-icon>
                        </button>
                    </div>
                    {/* <!--* overlay --> */}
                    <div
                        id="overlayNavbar"
                        className="fixed top-0 left-0 z-10 hidden w-screen h-screen bg-gray-500/30"
                    ></div>
                    <div
                        className="fixed top-0 z-20 flex-col justify-start hidden h-screen gap-4 p-4 overflow-auto text-lg font-semibold bg-white shadow-lg w-72"
                        id="sidebarNavbar"
                    >
                        <div className="flex justify-between py-4 border-b-2">
                            <h3 className="text-red-400">Menu</h3>
                            <button className="closeButton hover:text-red-500">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                        <div className="pb-3 text-gray-600 border-b mobile_navbar_item">Home</div>
                        <div className="pb-3 text-gray-600 border-b mobile_navbar_item">
                            <details>
                                <a href="#">Shirt</a>
                                <a href="#">Shorts & Jeans</a>
                                <a href="#">Safety Shoes</a>
                                <a href="#">Wallet</a>
                                <summary>Men</summary>
                            </details>
                        </div>
                        <div className="pb-3 text-gray-600 border-b mobile_navbar_item">
                            <details>
                                <a href="#">Dress & Frock</a>
                                <a href="#">Earrings</a>
                                <a href="#">Necklace</a>
                                <a href="#">Makeup Kit</a>
                                <summary>Women</summary>
                            </details>
                        </div>
                        <div className="pb-3 text-gray-600 border-b mobile_navbar_item">
                            <details>
                                <a href="#">Earrings</a>
                                <a href="#">Couple Rings</a>
                                <a href="#">Necklace</a>
                                <a href="#">Bracelets</a>
                                <summary>Jewelry</summary>
                            </details>
                        </div>
                        <div className="pb-3 text-gray-600 border-b mobile_navbar_item">
                            <details>
                                <a href="#">Clothes Perfume</a>
                                <a href="#">Deodorant</a>
                                <a href="#">Flower Fragrance</a>
                                <a href="#">Air Freshener</a>
                                <summary>Perfume</summary>
                            </details>
                        </div>
                        <div className="pb-3 text-gray-600 border-b mobile_navbar_item">
                            <a href="#">Blog</a>
                        </div>
                        <div className="pb-3 text-gray-600 border-b mobile_navbar_item">
                            <a href="#">Hot Offers</a>
                        </div>

                        <div className="pb-3 text-gray-600 border-b mobile_navbar_item">
                            <details>
                                <div className="flex flex-col items-start border shadow-xl rounded-xl">
                                    <a className="w-full pb-2 border-b" href="#">English</a>
                                    <a className="w-full pb-2 border-b" href="#">Persian</a>
                                </div>
                                <summary>Language</summary>
                            </details>
                        </div>
                        <div className="pb-3 text-gray-600 border-b mobile_navbar_item">
                            <details>
                                <div className="flex flex-col items-start border shadow-xl rounded-xl">
                                    <a className="w-full pb-2 border-b" href="#">USD $</a>
                                    <a className="w-full pb-2 border-b" href="#">EUR €</a>
                                </div>
                                <summary>Currency</summary>
                            </details>
                        </div>

                        <div className="flex items-center justify-center gap-4 icons">
                            <a
                                className="flex items-center justify-center p-2 text-gray-900 rounded-md bg-gray-300/50 hover:scale-110 hover:text-white hover:bg-red-400"
                                href="#"
                            >
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a
                                className="flex items-center justify-center p-2 text-gray-900 rounded-md bg-gray-300/50 hover:scale-110 hover:text-white hover:bg-red-400"
                                href="#"
                            >
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                            <a
                                className="flex items-center justify-center p-2 text-gray-900 rounded-md bg-gray-300/50 hover:scale-110 hover:text-white hover:bg-red-400"
                                href="#"
                            >
                                <ion-icon name="logo-github"></ion-icon>
                            </a>
                        </div>
                    </div>

                    {/* <!--todo sidebarCategories --> */}
                    <div
                        id="sidebarCategories"
                        className="fixed top-0 z-20 flex-col justify-start hidden h-screen gap-4 p-6 overflow-auto font-semibold bg-white shadow-lg w-80"
                    >
                        <div className="w-full h-auto categories">
                            <div className="flex items-center justify-between w-full">
                                <h1 className="mb-4 text-lg font-semibold">CATEGORY</h1>
                                <button className="text-xl closeButton hover:text-red-500">
                                    <ion-icon name="close-circle-outline"></ion-icon>
                                </button>
                            </div>
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
                                            <Image
                                                className="w-4 h-4"
                                                src="./images/icons/dress.svg"
                                                alt="productPicture"
                                                width={20}
                                                height={20}
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
                            className="flex flex-col items-start justify-start w-full h-auto gap-4 mt-2 bestsellers"
                        >
                            <h2 className="text-lg font-semibold">BEST SELLERS</h2>
                            <div className="flex items-center justify-start gap-2">
                                <div className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20">
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
                                <div className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20">
                                    <img
                                        className="w-full h-full"
                                        src="./assets/images/products/2.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="text-gray-700">
                                    <h4 className="text-gray-900">Men Hoodies T-Shirt</h4>
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
                                <div className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20">
                                    <Image
                                        className="w-full h-full"
                                        src="/images/products/3.jpg"
                                        alt=""
                                        width={80}
                                        height={80}
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
                                <div className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20">
                                    <Image
                                        className="w-full h-full"
                                        src="/assets/images/products/4.jpg"
                                        alt=""
                                        width={80}
                                        height={80}
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
                </div>
            </header>
        </div>
    )
}

export default Header