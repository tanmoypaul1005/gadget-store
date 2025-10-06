
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="footer bg-[#212121] pt-20 pb-5 mt-5">
                <div className="px-6 py-8 md:px-8 md:py-5 lg:px-16">
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

                    </div>
                  
                </div>
        </footer>
    )
}

export default Footer