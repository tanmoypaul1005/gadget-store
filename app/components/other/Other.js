import Image from "next/image";
const Other = () => {
    return (
        <div className="flex flex-col flex-wrap w-full gap-8 px-8 mx-auto mt-10 mb-20 lg:px-0 lg:w-5/6 lg:flex-nowrap lg:flex-row">
            <div className="w-full testimonial lg:w-2/6">
                <h1 className="pb-4 mb-8 text-xl font-semibold border-b">Testimonial</h1>
                <div
                    // style="height: 23rem"
                    className="flex flex-col items-center justify-center w-full p-4 border rounded-xl"
                >
                    <Image
                        className="w-20 h-20 rounded-full"
                        src="/images/testimonial-1.jpg"
                        alt="testimonial"
                        width={80}
                        height={80}

                    />
                    <h2 className="text-lg font-bold">ALAN DOE</h2>
                    <h5 className="text-md">CEO & Founder Invision</h5>
                    <Image
                        className="w-6 h-6 my-4"
                        src="/images/icons/quotes.svg"
                        alt="quotes"
                        width={24}
                        height={24}
                    />
                    <p className="w-4/5 mx-auto text-sm text-center">
                        Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
                        amet.
                    </p>
                </div>
            </div>

            <div
                className="flex items-center justify-center w-full text-black rounded-lg lg:w-3/6"
                // style="background-image: url('./assets/images/cta-banner.jpg')"
                style={{ backgroundImage: "url('./images/cta-banner.jpg')" }}
            >
                <div
                    className="flex flex-col items-center justify-center w-3/4 gap-4 p-8 rounded-lg bg-gray-100/70"
                >
                    <button className="p-2 rounded-lg">
                        25% DISCOUNT
                    </button>
                    <h1 className="w-56 text-4xl font-bold text-center">
                        Summer Collection
                    </h1>
                    <h5 className="text-lg font-semibold">Starting @ $10</h5>
                    <button className="text-lg font-semibold">SHOP NOW</button>
                </div>
            </div>

            <div className="w-full OurServices lg:w-2/6">
                <h1 className="pb-4 mb-8 text-xl font-semibold border-b">Our Services</h1>
                <div
                    // style="height: 23rem"
                    className="flex flex-wrap items-center justify-between w-full p-4 border rounded-xl lg:flex-col lg:justify-center lg:px-8 lg:gap-8"
                >
                    <div
                        className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                    >
                        <ion-icon className="text-4xl" name="boat-outline"></ion-icon>
                        <div>
                            <h3 className="font-semibold">Worldwide Delivery</h3>
                            <p className="text-xs">For Order Over $100</p>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                    >
                        <ion-icon
                            className="text-4xl text-red-500"
                            name="rocket-outline"
                        ></ion-icon>
                        <div>
                            <h3 className="font-semibold">Worldwide Delivery</h3>
                            <p className="text-xs">For Order Over $100</p>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                    >
                        <ion-icon className="text-4xl" name="call-outline"></ion-icon>
                        <div>
                            <h3 className="font-semibold">Worldwide Delivery</h3>
                            <p className="text-xs">For Order Over $100</p>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                    >
                        <ion-icon
                            className="text-4xl text-red-500"
                            name="arrow-undo-outline"
                        ></ion-icon>
                        <div>
                            <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                            <p className="text-xs">For Order Over $100</p>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-center w-1/2 gap-2 lg:w-full lg:justify-between"
                    >
                        <ion-icon
                            className="text-4xl text-red-500"
                            name="ticket-outline"
                        ></ion-icon>
                        <div>
                            <h3 className="font-semibold">Worldwide Delivery</h3>
                            <p className="text-xs">For Order Over $100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Other;