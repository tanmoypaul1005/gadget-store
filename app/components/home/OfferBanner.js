import { kuFeaturedCategory } from "@/util/url";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OfferBanner = ({ category = [] }) => {
  
  const watch = category.find((i) => i.title === "Smart watch");

  const airports = category.find((i) => i.title === "Airpods");

  const imageProps = {
    width: 500,
    height: 500,
    className: "object-contain rounded-sm cursor-pointer",
  };

  const images = [
    {
      src: "/images/banner/170512072268.webp",
      alt: "Image 1 for carousel",
      href: `${kuFeaturedCategory}/${watch?._id}`,
    },
    {
      src: "/images/banner/171525369129.webp",
      alt: "Image 2 for carousel",
      href: `${kuFeaturedCategory}/${watch?._id}`,
    },
    {
      src: "/images/banner/171808437763.webp",
      alt: "Image 3 for carousel",
      href: `${kuFeaturedCategory}/${airports?._id}`,
    },
  ];

  return (
    <div className="common-responsive">
      <div className="flex justify-between w-full gap-x-10">
        {images.map((image, index) => (
          <Link key={index} className="w-full" href={image.href}>
            <Image
              src={image.src}
              alt={image.alt}
              width={imageProps.width}
              height={imageProps.height}
              className={imageProps.className}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;
