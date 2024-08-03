import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#212121] mt-10">
                {/* <div
                    className="flex flex-col items-start justify-start gap-4 px-6 py-8 brands md:px-8 md:py-10 lg:px-16 lg:py-12"
                >
                    <h3 className="font-semibold text-red-400 text-md lg:text-lg">
                        BRAND DIRECTORY
                    </h3>
                    <div className="flex flex-wrap gap-2 mr-4 text-sm fashion lg:text-md">
                        <h4 className="font-semibold text-[darkgray]">FASHION:</h4>
                        <a className="text-gray-500" href="#">T-Shirt |</a>
                        <a className="text-gray-500" href="#">Shirts |</a>
                        <a className="text-gray-500" href="#">Jacket |</a>
                        <a className="text-gray-500" href="#">Dress & Frock |</a>
                        <a className="text-gray-500" href="#">Innerwear |</a>
                        <a className="text-gray-500" href="#">Hosiery</a>
                    </div>
                    <div className="flex flex-wrap gap-2 mr-4 text-sm footwear lg:text-md">
                        <h4 className="font-semibold text-[darkgray]">FOOTWEAR :</h4>
                        <a className="text-gray-500" href="#">Sports |</a>
                        <a className="text-gray-500" href="#">Formal |</a>
                        <a className="text-gray-500" href="#">Boots |</a>
                        <a className="text-gray-500" href="#">Casua |</a>
                        <a className="text-gray-500" href="#">Cowboy Shoes |</a>
                        <a className="text-gray-500" href="#">Party Wear Shoes |</a>
                        <a className="text-gray-500" href="#">Branded |</a>
                        <a className="text-gray-500" href="#">Firstcopy |</a>
                        <a className="text-gray-500" href="#">Long Shoes</a>
                    </div>
                    <div className="flex flex-wrap gap-2 mr-4 text-sm jewellery lg:text-md">
                        <h4 className="font-semibold text-[darkgray]">JEWELLERY :</h4>
                        <a className="text-gray-500" href="#">Necklace |</a>
                        <a className="text-gray-500" href="#">Earrings |</a>
                        <a className="text-gray-500" href="#">Couple Rings |</a>
                        <a className="text-gray-500" href="#">Pendants |</a>
                        <a className="text-gray-500" href="#">Crystal |</a>
                        <a className="text-gray-500" href="#">Bangles |</a>
                        <a className="text-gray-500" href="#">Bracelets |</a>
                        <a className="text-gray-500" href="#">Nosepin |</a>
                        <a className="text-gray-500" href="#">Chain |</a>
                        <a className="text-gray-500" href="#">Earrings |</a>
                        <a className="text-gray-500" href="#">Couple Rings</a>
                    </div>
                    <div className="flex flex-wrap gap-2 mr-4 text-sm cosmetics lg:text-md">
                        <h4 className="font-semibold text-[darkgray]">COSMETICS :</h4>
                        <a className="text-gray-500" href="#">Shampoo |</a>
                        <a className="text-gray-500" href="#">Bodywash |</a>
                        <a className="text-gray-500" href="#">Facewash |</a>
                        <a className="text-gray-500" href="#">Makeup Kit |</a>
                        <a className="text-gray-500" href="#">Liner |</a>
                        <a className="text-gray-500" href="#">Lipstick |</a>
                        <a className="text-gray-500" href="#">Prefume |</a>
                        <a className="text-gray-500" href="#">Body Soap |</a>
                        <a className="text-gray-500" href="#">Scrub |</a>
                        <a className="text-gray-500" href="#">Hair Gel |</a>
                        <a className="text-gray-500" href="#">Hair Colors |</a>
                        <a className="text-gray-500" href="#">Hair Dye |</a>
                        <a className="text-gray-500" href="#">Sunscreen |</a>
                        <a className="text-gray-500" href="#">Skin Loson |</a>
                        <a className="text-gray-500" href="#">Liner |</a>
                        <a className="text-gray-500" href="#">Lipstick</a>
                    </div>
                </div>
                <hr /> */}
                <div className="px-6 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        <div>
                            <h2 className="font-bold text-white text-md">POPULAR CATEGORIES</h2>
                            <hr className="w-16 mt-2 mb-4 title" />
                            <ul className="flex flex-col justify-start gap-2 text-gray-500">
                                <li><Link href="/">Fashion</Link></li>
                                <li><Link href="/">Electronic</Link></li>
                                <li><Link href="/">Cosmetic</Link></li>
                                <li><Link href="/">Health</Link></li>
                                <li><Link href="/">Watches</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold text-white text-md">PRODUCTS</h2>
                            <hr className="w-16 mt-2 mb-4 title" />
                            <ul className="flex flex-col justify-start gap-2 text-gray-500">
                                <li><Link href="/">Prices Drop</Link></li>
                                <li><Link href="/">New Products</Link></li>
                                <li><Link href="/">Best Sales</Link></li>
                                <li><Link href="/">Contact Us</Link></li>
                                <li><Link href="/">Sitemap</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-bold text-white text-md">OUR COMPANY</h2>
                            <hr className="w-16 mt-2 mb-4 title" />
                            <ul className="flex flex-col justify-start gap-2 text-gray-500">
                                <li><Link href="/">Delivery</Link></li>
                                <li><Link href="/">Legal Notice</Link></li>
                                <li><Link href="/">Terms And Conditions</Link></li>
                                <li><Link href="/">About Us</Link></li>
                                <li><Link href="/">Secure Payment</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold text-white text-md">SERVICES</h2>
                            <hr className="w-16 mt-2 mb-4 title" />
                            <ul className="flex flex-col justify-start gap-2 text-gray-500">
                                <li><Link href="/">Prices Drop</Link></li>
                                <li><Link href="/">New Products</Link></li>
                                <li><Link href="/">Best Sales</Link></li>
                                <li><Link href="/">Contact Us</Link></li>
                                <li><Link href="/">Sitemap</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="font-bold text-white text-md">CONTACT</h2>
                            <hr className="w-16 mt-2 mb-4 title" />
                            <ul className="flex flex-col justify-start gap-2 text-gray-500">
                                <li>
                                    <ion-icon className="text-lg" name="location-outline"></ion-icon>
                                    <Link href="/">Dhaka, Bangladesh</Link>
                                </li>
                                <li>
                                    <ion-icon className="text-lg" name="call-outline"></ion-icon>
                                    <Link href="/">01736932489</Link>
                                </li>
                                <li>
                                    <ion-icon className="text-lg" name="mail-outline"></ion-icon>
                                    <Link href="/">tanmoypaul1005@gmail.com</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:hidden">
                            <h2 className="font-bold text-white text-md">FOLLOW US</h2>
                            <hr className="w-16 mt-2 mb-4 title" />
                            <ul className="flex justify-start gap-2 text-lg text-gray-500">
                                <li>
                                    <Link href="/">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <ion-icon name="logo-github"></ion-icon>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <ion-icon name="logo-linkedin"></ion-icon>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />

            </footer>
        </div>
    )
}

export default Footer