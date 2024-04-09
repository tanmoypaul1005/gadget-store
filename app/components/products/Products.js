
import Image from "next/image";

const Products = () => {
    return (
        <div className="flex flex-col w-full lg:w-3/4">
            <div className="grid grid-cols-1 gap-4 mx-auto max-w-screen min-w-screen md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-4 NewArrivals">
                    <h1 className="pb-4 text-xl font-semibold border-b">New Arrivals</h1>

                    <div className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28">
                        <div className="w-20 h-20 p-2">
                            <Image
                                style-={{ width: "100%", height: "100%" }}
                                className="w-full h-full"
                                src="/images/products/clothes-1.jpg"
                                alt=""
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="w-full text-sm font-bold text-gray-900">
                                Relaxed Short Full...
                            </h4>
                            <h4>Clothes</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$7.00</strong>
                                <s className="text-gray-500">$14.00</s>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/clothes-2.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="w-full text-sm font-bold text-gray-900">
                                Girls Pnk Embro Desi...
                            </h4>
                            <h4>Clothes</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$21.00</strong>
                                <s className="text-gray-500">$24.00</s>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/clothes-3.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Black Floral Wrap...
                            </h4>
                            <h4>Clothes</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$5.00</strong>
                                <s className="text-gray-500">$15.00</s>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/shirt-1.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Pure Garment Dye...
                            </h4>
                            <h4>Mens Fashion</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$30.00</strong>
                                <s className="text-gray-500">$40.00</s>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 Trending">
                    <h1 className="pb-4 text-xl font-semibold border-b">Trending</h1>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/sports-5.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Running & Trekking...
                            </h4>
                            <h4>Sports</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$82.00</strong>
                                <s className="text-gray-500">$101.00</s>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/sports-2.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Trekking & Running...
                            </h4>
                            <h4>Sports</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$78.00</strong>
                                <s className="text-gray-500">$93.00</s>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/party-wear-1.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Womens Party Wea...
                            </h4>
                            <h4>Party Wear</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$27.00</strong>
                                <s className="text-gray-500">$32.00</s>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/sports-3.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Sports Claw Women...
                            </h4>
                            <h4>Sports</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$12.00</strong>
                                <s className="text-gray-500">$24.00</s>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 TopRated">
                    <h1 className="pb-4 text-xl font-semibold border-b">Top Rated</h1>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/watch-3.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Pocket Watch Leather...
                            </h4>
                            <h4>Watches</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$32.00</strong>
                                <s className="text-gray-500">$53.00</s>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/jewellery-3.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Silver Deer Heart Neck...
                            </h4>
                            <h4>Jewellery</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$12.00</strong>
                                <s className="text-gray-500">$32.00</s>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/perfume.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Titan 100 Ml Womens
                            </h4>
                            <h4>Perfume</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$74.00</strong>
                                <s className="text-gray-500">$104.00</s>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-start w-full gap-2 bg-white border rounded-lg shadow-sm cursor-pointer h-28"
                    >
                        <div className="w-20 h-20 p-2">
                            <Image
                                className="w-full h-full"
                                src="/images/products/belt.jpg"
                                alt=""
                                width={80}
                                height={80}
                            />
                        </div>
                        <div className="text-gray-700">
                            <h4 className="text-sm font-bold text-gray-900">
                                Men Leather Rever...
                            </h4>
                            <h4>Belt</h4>
                            <div className="flex items-center justify-start gap-4">
                                <strong className="text-red-400">$17.00</strong>
                                <s className="text-gray-500">$23.00</s>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-10 day">
                <h1 className="py-4 text-xl font-semibold border-b">Deal Of The Day</h1>
                <div
                    className="flex flex-col justify-between w-full h-auto mt-10 border rounded-lg lg:flex-row"
                >
                    <Image
                        className="lg:w-1/2"
                        src="/images/products/shampoo.jpg"
                        alt=""
                        width={80}
                        height={80}
                    />
                    <div className="flex flex-col items-start gap-2 p-4 lg:w-1/2">
                        <div className="text-yellow-500 stars">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-half-outline"></ion-icon>
                        </div>
                        <h4 className="text-lg font-bold">
                            SHAMPOO, CONDITIONER & FACEWASH PACKS
                        </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
                            amet consectetur Lorem ipsum dolor
                        </p>
                        <div>
                            <strong className="text-xl font-bold text-red-400">$150.00</strong>
                            <s className="text-xl text-gray-500">$200.00</s>
                        </div>
                        <button
                            className="px-4 py-2 font-semibold text-white bg-red-500 rounded-xl text-md"
                        >
                            ADD TO CART
                        </button>
                        <h3 className="mt-4 text-sm font-semibold">HURRY UP! OFFER ENDS IN:</h3>
                        <div
                            id="reverseTimer"
                            className="flex items-center justify-between gap-4 text-sm font-semibold text-black"
                        >
                            <h1
                                className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
                                id="days"
                            ></h1>
                            <h1
                                className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
                                id="hour"
                            ></h1>
                            <h1
                                className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
                                id="minute"
                            ></h1>
                            <h1
                                className="flex flex-col items-center justify-center w-12 h-12 p-2 border rounded-lg shadow-lg bg-gray-300/20"
                                id="second"
                            ></h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="newProductsContainer">
                {/* <h1 className="py-4 text-xl font-semibold border-b">New Products</h1>
                    <div
                        id="newProducts"
                        className="grid grid-cols-2 gap-6 newProducts md:grid-cols-3 lg:grid-cols-4"
                    >
                        
                    </div> */}
                {/* 

                {/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
                <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

                    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
                    <div class="w-[280px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">
                                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                                <div class="flex items-center">
                                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                    <del>
                                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                    </del>
                                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <!--   🛑 Product card 1 - Ends Here  -->

  <!--   ✅ Product card 2 - Starts Here 👇 --> */}
                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">
                                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                                <div class="flex items-center">
                                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                    <del>
                                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                    </del>
                                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <!--   🛑 Product card 2- Ends Here  -->

  <!--   ✅ Product card 3 - Starts Here 👇 --> */}
                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">
                                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                                <div class="flex items-center">
                                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                    <del>
                                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                    </del>
                                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <!--   🛑 Product card 3 - Ends Here  -->

  <!--   ✅ Product card 4 - Starts Here 👇 --> */}
                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1651950540805-b7c71869e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">
                                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                                <div class="flex items-center">
                                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                    <del>
                                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                    </del>
                                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <!--   🛑 Product card 4 - Ends Here  -->

  <!--   ✅ Product card 5 - Starts Here 👇 --> */}
                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1649261191624-ca9f79ca3fc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">
                                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                                <div class="flex items-center">
                                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                    <del>
                                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                    </del>
                                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <!--   🛑 Product card 5 - Ends Here  -->

  <!--   ✅ Product card 6 - Starts Here 👇 --> */}
                    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src="https://images.unsplash.com/photo-1649261191606-cb2496e97eee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                            <div class="px-4 py-3 w-72">
                                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                <p class="text-lg font-bold text-black truncate block capitalize">Product Name</p>
                                <div class="flex items-center">
                                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                    <del>
                                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                    </del>
                                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                    </svg></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    {/* <!--   🛑 Product card 6 - Ends Here  --> */}

                </section>

            </div>
        </div>


    )
}

export default Products