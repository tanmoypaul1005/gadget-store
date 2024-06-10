import Image from 'next/image'
import React from 'react'

const FeaturedCategories = () => {
    return (
        <div>
            <div className='flex flex-wrap gap-2'>
                <div className='bg-cCommonBg rounded  flex-col h-[175px] w-[175px] flex justify-center items-center'>
                    <Image style={{ maxWidth: "70px", minWidth: "70px", maxHeight: "70px", minHeight: "70px" }} width={70} height={70} src='/images/category/phone.jpg' alt="" />
                    <div className='text-cDeepSaffron font-medium text-[15px] mt-3'>Phone and tablets</div>
                </div>

                <div className='bg-cCommonBg rounded  flex-col h-[175px] w-[175px] flex justify-center items-center'>
                    <Image style={{ maxWidth: "70px", minWidth: "70px", maxHeight: "70px", minHeight: "70px" }} width={70} height={70} src='/images/category/phone.jpg' alt="" />
                    <div className='text-cDeepSaffron font-medium text-[15px] mt-3'>Phone and tablets</div>
                </div>


                <div className='bg-cCommonBg rounded  flex-col h-[175px] w-[175px] flex justify-center items-center'>
                    <Image style={{ maxWidth: "70px", minWidth: "70px", maxHeight: "70px", minHeight: "70px" }} width={70} height={70} src='/images/category/phone.jpg' alt="" />
                    <div className='text-cDeepSaffron font-medium text-[15px] mt-3'>Phone and tablets</div>
                </div>


                <div className='bg-cCommonBg rounded  flex-col h-[175px] w-[175px] flex justify-center items-center'>
                    <Image style={{ maxWidth: "70px", minWidth: "70px", maxHeight: "70px", minHeight: "70px" }} width={70} height={70} src='/images/category/phone.jpg' alt="" />
                    <div className='text-cDeepSaffron font-medium text-[15px] mt-3'>Phone and tablets</div>
                </div>


                <div className='bg-cCommonBg rounded  flex-col h-[175px] w-[175px] flex justify-center items-center'>
                    <Image style={{ maxWidth: "70px", minWidth: "70px", maxHeight: "70px", minHeight: "70px" }} width={70} height={70} src='/images/category/phone.jpg' alt="" />
                    <div className='text-cDeepSaffron font-medium text-[15px] mt-3'>Phone and tablets</div>
                </div>


                <div className='bg-cCommonBg rounded  flex-col h-[175px] w-[175px] flex justify-center items-center'>
                    <Image style={{ maxWidth: "70px", minWidth: "70px", maxHeight: "70px", minHeight: "70px" }} width={70} height={70} src='/images/category/phone.jpg' alt="" />
                    <div className='text-cDeepSaffron font-medium text-[15px] mt-3'>Phone and tablets</div>
                </div>


                <div className='bg-cCommonBg rounded  flex-col h-[175px] w-[175px] flex justify-center items-center'>
                    <Image style={{ maxWidth: "70px", minWidth: "70px", maxHeight: "70px", minHeight: "70px" }} width={70} height={70} src='/images/category/phone.jpg' alt="" />
                    <div className='text-cDeepSaffron font-medium text-[15px] mt-3'>Phone and tablets</div>
                </div>

                <div className='bg-cCommonBg rounded  flex-col h-[175px] w-[175px] flex justify-center items-center'>
                    <Image style={{ maxWidth: "70px", minWidth: "70px", maxHeight: "70px", minHeight: "70px" }} width={70} height={70} src='/images/category/phone.jpg' alt="" />
                    <div className='text-cDeepSaffron font-medium text-[15px] mt-3'>Phone and tablets</div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCategories