"use client"
import React, { useEffect, useState } from 'react';
import CommonModal from '../modal/CommonModal';
import Image from "next/image";

const Advertisement = () => {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const isFirstTime = localStorage.getItem('isFirstTime');
        // if (!isFirstTime) {
        setShowPopup(true);
        //     localStorage.setItem('isFirstTime', 'no');
        // }
    }, []);

    return (
        <div>
            <CommonModal
                open={showPopup}
                setOpen={setShowPopup}
                padding="p-0"
                content={
                    <div className="flex items-center">
                        <div className="hidden h-full md:flex md:w-1/2">
                            <Image
                                className="w-full h-full"
                                src="/images/newsletter.png"
                                alt="newsletter"
                                width={500}
                                height={500}
                            />
                        </div>
                        <div
                            className="relative flex flex-col justify-center w-full h-full gap-4 p-12 px-8 md:w-1/2"
                        >
                            <button
                                className="absolute text-2xl closeButton top-4 right-4 hover:text-red-500"
                            >
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                            <h3 className="text-xl font-bold text-gray-800">Subscribe Newsletter.</h3>
                            <p className="font-semibold text-gray-600 text-md">
                                Subscribe the <span className="text-lg font-semibold">Anon</span> to get
                                latest products and discount update.
                            </p>
                            <input className="p-2 border" type="email" placeholder="Email Address" />
                            <button
                                className="self-center px-3 py-2 text-white bg-gray-900 rounded-md hover:bg-red-500"
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Advertisement;