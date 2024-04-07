import Image from "next/image";



function Banner() {
    
  const scrollHandler = () => {
    window.scrollTo({
      top: document.getElementById("products-feed").offsetTop - 90,
      behavior: "smooth",
    });
    //window.location.href='#products-feed'
  };

  return (
    <div className="px-6 py-12 sm:py-16 xs:py-14">
      <div className="flex flex-col md:flex-row  md:justify-between md:items-center w-full max-w-screen-xl mx-auto h-full  bg-white overflow-hidden md:gap-1 gap-4 p-0.5">
        <div className="max-w-lg">
          {/* <Fade left> */}
            <div className="font-extrabold text-blue-light">
              <h2 className="text-3xl leading-snug lg:text-6xl sm:text-5xl xxs:text-4xl">
                Stay Home
              </h2>
              <h1 className="text-4xl leading-snug lg:text-7xl sm:text-6xl xxs:text-5xl sm:mt-4 xxs:mt-2">
                Shop Online.
              </h1>
            </div>
            <p className="max-w-md mt-6 mb-8 text-sm font-medium lg:mt-10 lg:mb-14 sm:mt-8 sm:mb-10 lg:text-base">
              Shop online from a wide range of genuine products whenever you
              want 24x7.
            </p>
            <button
              className="flex items-center justify-center px-8 text-base button lg:px-10 lg:py-2 xl:text-xl lg:text-lg"
              
            >
              {/* <ShoppingBagIcon className="w-5 mr-2 xl:w-6" /> */}
              Shop Now
            </button>
          {/* </Fade> */}
        </div>
        <div className="max-w-xs mx-auto md:mx-0 md:w-1/2 xl:w-auto md:max-w-lg sm:max-w-sm xl:max-w-none">
          {/* <Fade right> */}
            <Image
              src="/img/hero.svg"
              alt=""
              width={600}
              height={600}
              objectFit="contain"
            />
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;