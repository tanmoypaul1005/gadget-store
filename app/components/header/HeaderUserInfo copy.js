/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoutModal from "./LogoutModal";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { HiMenuAlt3 } from 'react-icons/hi';
// import Fade from 'react-reveal/Fade';

const HeaderUserInfo = ({ session, totalCart }) => {

  const [isShowLogoutModal, setShowLogoutModal] = useState(false);

  const [mobileNav, setMobileNav] = useState(false)
  const menu = [
      { id: 1, text: 'Home', to: '/' },
      { id: 2, text: 'About', to: '/about' },
      { id: 3, text: 'Service', to: '/service' },
      { id: 4, text: 'Contact', to: '/contact' },
  ]

  //handle click 
  const handleClick = () => {
      setMobileNav(!mobileNav)
  }


  return (
    <div className="w-full">
        <header>
            {/* desktop nav  */}
            <nav className="flex items-center px-12 bg-white border-b border-gray-300 py-3">
                {/* brand  */}
                <div className="flex items-center space-x-2 flex-grow">
                   
                    <h1 className="text-xl font-semibold text-gray-700 select-none">Navbar</h1>
                </div>
                {/* menu s */}

                <div className="hidden md:flex lg:flex space-x-3">
                    <ul className="flex items-center space-x-4">
                        {menu.map(item => (
                            <li key={item.id}>
                                <a href={item.to} className="text-gray-600 text-lg">{item.text}</a>
                            </li>
                        ))}
                    </ul>

                    <button className="bg-blue-600 ring-blue-300 px-3 py-2 text-white focus:ring-4 transition duration-300 rounded-lg hover:bg-blue-700">Signup</button>
                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                // <Fade>
                    <nav className="bg-white shadow-lg mx-6 mt-2 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden">
                        <ul>
                            {menu.map(item => (
                                <a key={item.id} href={item.to} className="text-gray-600 text-lg">
                                    <li className="py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default">
                                        {item.text}
                                    </li>
                                </a>
                            ))}
                        </ul>

                        {/* button  */}
                        <div className="px-3 py-2">
                            <button className="bg-blue-600 ring-blue-300 px-3 py-2 text-white focus:ring-4 transition duration-300 rounded-lg hover:bg-blue-700 w-full">Signup</button>
                        </div>
                    </nav>
                // </Fade>
            )}
        </header>

    </div>
  );
};

export default HeaderUserInfo;


// {session ? (
//   <div classNameName="flex space-x-3">
//     <Link href={"/profile"}>
//       <Image
//         style={{
//           maxWidth: "40px",
//           minWidth: "40px",
//           maxHeight: "40px",
//           minHeight: "40px",
//         }}
//         classNameName="rounded-full"
//         src={session?.user?.image}
//         alt="pic"
//         width={20}
//         height={20}
//       />
//     </Link>
//     <Link
//       href={"/profile"}
//       classNameName="text-xl cursor-pointer flex justify-center items-center font-bold text-white"
//     >
//       {session.user.name}
//     </Link>
//     <div
//       onClick={() => {
//         setShowLogoutModal(true);
//       }}
//       classNameName="relative cursor-pointer flex justify-center items-center"
//     >
//       <Image
//         style={{
//           maxWidth: "30px",
//           minWidth: "30px",
//           maxHeight: "30px",
//           minHeight: "30px",
//         }}
//         src={"/images/icons/logOut.svg"}
//         alt="pic"
//         width={20}
//         height={20}
//       />
//     </div>
//   </div>
// ) : (
//   <>
//     <div
//       onClick={async () => {
//         console.log("clicked");
//         await signIn("google", {
//           callbackUrl: "/",
//         });
//       }}
//       className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:text-black hover:bg-gray-100"
//     >
//       <span className="text-sm font-medium">Sign in</span>
//     </div>
//     <div
//       onClick={async () => {
//         console.log("clicked");
//         await signIn("google", {
//           callbackUrl: "/",
//         });
//       }}
//       className="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:text-black hover:bg-gray-100"
//     >
//       <span className="text-sm font-medium">Login</span>
//     </div>
//   </>
// )}

// <LogoutModal
//   open={isShowLogoutModal}
//   setOpen={setShowLogoutModal}
// />