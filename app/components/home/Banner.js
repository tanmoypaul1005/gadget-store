import Image from "next/image";

function Banner() {

  return (
    <div className="relative flex items-center justify-center mx-auto mt-10 rounded lg:w-3/4 banner lg:-mt-4">
      <Image
        style={{ maxHeight: "500px" }}
        className="rounded-lg"
        src={"/images/banner-1.png"}
        width={500}
        height={400}
        alt=""
      />
      {/* <div className="rounded cursor-pointer absolute pl-3 flex flex-col items-start justify-center w-full h-full text-black  ">
        <h1 className="text-3xl font-bold text-center lg:text-4xl">New Collection</h1>
        <p className="text-base font-semibold">Get the latest collection of shoes.</p>
        <button className="px-4 py-2 mt-4 text-center text-white bg-gray-900 rounded-md hover:bg-red-500">SHOP NOW</button>
      </div> */}
    </div>
  );
}

export default Banner;