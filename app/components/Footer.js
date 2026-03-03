import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-10 border-t border-white/5">

            {/* Main Footer Grid */}
            <div className="max-w-6xl py-12 mx-auto ">
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

                    {/* Popular Categories */}
                    <div className="col-span-1">
                        <h2 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">Popular Categories</h2>
                        <ul className="space-y-2.5">
                            {["Fashion", "Electronic", "Cosmetic", "Health", "Watches"].map((item) => (
                                <li key={item}>
                                    <Link href="/"
                                        className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                                        <span className="w-1 h-1 transition-opacity bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="col-span-1">
                        <h2 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">Products</h2>
                        <ul className="space-y-2.5">
                            {["Prices Drop", "New Products", "Best Sales", "Contact Us", "Sitemap"].map((item) => (
                                <li key={item}>
                                    <Link href="/"
                                        className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                                        <span className="w-1 h-1 transition-opacity bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Our Company */}
                    <div className="col-span-1">
                        <h2 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">Our Company</h2>
                        <ul className="space-y-2.5">
                            {["Delivery", "Legal Notice", "Terms & Conditions", "About Us", "Secure Payment"].map((item) => (
                                <li key={item}>
                                    <Link href="/"
                                        className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                                        <span className="w-1 h-1 transition-opacity bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col-span-1">
                        <h2 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">Services</h2>
                        <ul className="space-y-2.5">
                            {["Prices Drop", "New Products", "Best Sales", "Contact Us", "Sitemap"].map((item) => (
                                <li key={item}>
                                    <Link href="/"
                                        className="text-gray-400 hover:text-indigo-400 text-sm transition-colors duration-200 flex items-center gap-1.5 group">
                                        <span className="w-1 h-1 transition-opacity bg-indigo-600 rounded-full opacity-0 group-hover:opacity-100"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 sm:col-span-2 md:col-span-1">
                        <h2 className="mb-4 text-xs font-bold tracking-widest text-white uppercase">Contact</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="flex items-start gap-3 text-sm text-gray-400 transition-colors hover:text-indigo-400 group">
                                    <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 group-hover:bg-indigo-600/20
                                   border border-white/5 flex items-center justify-center transition-colors">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </span>
                                    Dhaka, Bangladesh
                                </Link>
                            </li>
                            <li>
                                <Link href="tel:01736932489" className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-indigo-400 group">
                                    <span className="flex items-center justify-center flex-shrink-0 transition-colors border rounded-lg w-7 h-7 bg-white/5 group-hover:bg-indigo-600/20 border-white/5">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </span>
                                    01736932489
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:tanmoypaul1005@gmail.com" className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-indigo-400 group">
                                    <span className="flex items-center justify-center flex-shrink-0 transition-colors border rounded-lg w-7 h-7 bg-white/5 group-hover:bg-indigo-600/20 border-white/5">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <span className="truncate">tanmoypaul1005@gmail.com</span>
                                </Link>
                            </li>
                        </ul>

                        {/* Social Icons */}
                        <div className="flex gap-2 mt-6">
                            {[
                                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                                { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                                { label: "Instagram", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                            ].map(({ label, path }) => (
                                <Link key={label} href="/" aria-label={label}
                                    className="flex items-center justify-center w-8 h-8 transition-all duration-200 border rounded-lg bg-white/5 hover:bg-indigo-600 border-white/5 hover:border-indigo-500 group">
                                    <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={path} />
                                    </svg>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Payment Methods — SVG Icons */}
                <div className="pt-8 mt-10 border-t border-white/5">
                    <p className="mb-4 text-xs tracking-widest text-center text-gray-500 uppercase sm:text-left">Secure Payment Methods</p>
                    <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                        {["VISA", "MC", "AMEX", "PayPal", "Apple Pay", "Google Pay"].map((method) => (
                            <span key={method}
                                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-xs font-semibold
                           hover:border-indigo-500/30 hover:text-gray-300 transition-colors cursor-default">
                                {method}
                            </span>
                        ))}
                        {/* Lock icon */}
                        <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            SSL Secured
                        </span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-3 pt-6 mt-8 border-t border-white/5 sm:flex-row">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} <span className="font-medium text-gray-400">gadget store</span>. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((item) => (
                            <Link key={item} href="/"
                                className="text-xs text-gray-500 transition-colors duration-200 hover:text-indigo-400">
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer