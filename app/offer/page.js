import React from "react";
import { getOffer } from "../action/offer";
import Image from "next/image";
import DateComponent from "./components/DateComponent";
import Link from "next/link";

const Offer = async () => {
  const offerList = await getOffer();

  return (
    <div className="">
      <div className="flex flex-wrap items-center justify-between gap-y-5">
        {offerList.map((offer, index) => {
          return (
            <div className="rounded-md max-w-[300px] min-w-[300px]" key={index}>
              <Image
                style={{
                  maxHeight: "300px",
                  minHeight: "300px",
                  maxWidth: "300px",
                  minWidth: "300px",
                }}
                className="rounded-t-md"
                src={offer?.thumbnail}
                alt={offer.title}
                height={352}
                width={352}
              />
              <div className="px-3 pb-3 pt-5 space-y-2 rounded-b-md bg-[#e1e1e1] text-black">
                <DateComponent />
                <div className="text-base font-bold text-center line-clamp-2">
                  {offer.title}
                </div>
                <p className="text-sm font-medium text-center line-clamp-2">
                  {offer.description}
                </p>
                <Link href={`/offer/${offer?._id}`} className="flex items-center justify-center pt-3">
                  <button  className="w-fit bg-[#f27f20] text-white  px-3 py-2  rounded-md">
                    View Offer
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;
