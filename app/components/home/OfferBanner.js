import Link from 'next/link'
import React from 'react'

const OfferBanner = ({category=[]}) => {
    const watch = category.find((i) => i.title === "Smart watch")

    const airpods = category.find((i) => i.title === "Airpods")
    return (
        <div className="flex w-full justify-between mt-10 gap-x-10">
          <Link className="w-full" href={`/category/featured/${watch?._id}`}>
            <img
              src="/images/banner/170512072268.webp"
              alt="Image 1 for carousel"
              width={180}
              height={180}
              className="object-contain rounded-sm cursor-pointer"
            />
          </Link>

          <Link className="w-full" href={`/category/featured/${watch?._id}`}>
            <img
              src="/images/banner/171525369129.webp"
              alt="Image 1 for carousel"
              width={180}
              height={180}
              className="object-contain rounded-sm cursor-pointer"
            />
          </Link>

          <Link className="w-full" href={`/category/featured/${airpods?._id}`}>
            <img
              src="/images/banner/171808437763.webp"
              alt="Image 1 for carousel"
              width={180}
              height={180}
              className="object-contain rounded-sm cursor-pointer"
            />
          </Link>
        </div>
    )
}

export default OfferBanner