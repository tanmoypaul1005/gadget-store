import { base_url } from '@/util/const'
import { kuMainCategory } from '@/util/url'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedCategories = async () => {

    const category = await fetch(base_url + kuMainCategory, { next: { revalidate: 1 } })
        .then(res => res.json())

    return (
        <div>

            <div className='flex flex-wrap justify-between gap-2'>
                {
                    category?.data?.map((item, index) => (
                        <CategoryBox item={item} key={index} />
                    ))
                }

            </div>
        </div>
    )
}

export default FeaturedCategories


const CategoryBox = ({ item }) => {
    return (
        <Link href={`/category/featured/${item?._id}`} className='bg-cCommonBg rounded  flex-col min-h-[175px] max-h-[175px] max-w-[175px] min-w-[175px] flex justify-center items-center'>
            <Image style={{ maxWidth: "70px", minWidth: "70px", maxHeight: "70px", minHeight: "70px" }} width={70} height={70} src={item?.icon} alt="" />
            <div className='text-cDeepSaffron font-medium text-[15px] mt-3'>{item?.title}</div>
        </Link>
    )
}