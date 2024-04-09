import React from 'react'
import Image from "next/image";

const Category = () => {
    
    return (
        <aside className="sticky top-0 flex-col hidden max-h-screen lg:flex lg:w-1/4">
            <div className="overflow-y-auto aside_section">
                <div className="w-full p-4 bg-white border shadow-lg categories rounded-xl">
                    <h1 className="mb-4 text-xl font-semibold text-black">CATEGORY</h1>
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
                                        src="/images/icons/dress.svg"
                                        alt="productPicture"
                                        height={20}
                                        width={20}
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
                </div>

                <div className="flex flex-col items-start justify-start h-auto gap-4 mt-10 bestsellers 2-72">
                    <h2 className="text-lg font-semibold">BEST SELLERS</h2>
                    <div className="flex items-center justify-start gap-2">
                        <div className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20">
                            <Image
                                className="w-full h-full"
                                src="/images/products/1.jpg"
                                alt=""
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className="">
                            <h4 className="">Baby Fabric Shoes</h4>
                            <div className="text-yellow-500 stars">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-half-outline"></ion-icon>
                            </div>
                            <div className="flex items-center justify-start gap-4">
                                <s className="">$14.00</s> <strong>$7.00</strong>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <div
                            className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20"
                        >
                            <Image
                                className="w-full h-full"
                                src="/images/products/2.jpg"
                                alt=""
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className="">
                            <h4 className="">Men Hoodies T-Shirt</h4>
                            <div className="text-yellow-500 stars">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-half-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                            <div className="flex items-center justify-start gap-4">
                                <s className="">$5.00</s> <strong>$2.00</strong>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <div
                            className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20"
                        >
                            <Image
                                className="w-full h-full"
                                src="/images/products/3.jpg"
                                alt=""
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className="">
                            <h4 className="">Girls T-Shirt</h4>
                            <div className="text-yellow-500 stars">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-half-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                            <div className="flex items-center justify-start gap-4">
                                <s className="">$10.00</s> <strong>$5.00</strong>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                        <div className="w-20 h-20 p-2 border rounded-md shadow-lg bg-gray-300/20">
                            <Image
                                className="w-full h-full"
                                src="/images/products/4.jpg"
                                alt=""
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className="">
                            <h4 className="">Woolen Hat For Men</h4>
                            <div className="text-yellow-500 stars">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-half-outline"></ion-icon>
                            </div>
                            <div className="flex items-center justify-start gap-4">
                                <s className="">$24.00</s> <strong>$17.00</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Category