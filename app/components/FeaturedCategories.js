import { base_url } from '@/util/const'
import { kuMainCategory } from '@/util/url'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FeaturedCategories = async () => {

    const response = await fetch(base_url + kuMainCategory);
    const category = await response.json();

    return (
        <div>
            <div className='grid items-center grid-cols-1 gap-14 justify-items-center md:justify-items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 3xl:gap-x-14'>
                {
                    category?.data?.map((item, index) => (
                        <div className='flex justify-center' key={index}>

                        <CategoryBox item={item} key={index} />
                        </div>
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