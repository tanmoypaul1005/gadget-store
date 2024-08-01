import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { getCategory } from '@/app/action';
import { k_category_patch } from '@/util/patch';

const SideBarCategory = async () => {

  const categoryData = await getCategory();

  return (
    <div className="rounded-lg bg-cCommonBg">
      <nav className="flex-col hidden w-full lg:flex">
        <div className='flex items-center justify-center py-3 rounded-t-lg gap-x-2 bg-cDeepSaffron'>
          <Image width={20} height={20} style={{ maxWidth: "20px", minHeight: "20px", minWidth: "20px", maxHeight: "20px" }} src='https://motionview.com.bd/images/category.svg' alt='' />
          <div className='text-lg font-semibold'>All Category</div>
        </div>

        <ul className="flex flex-col">
          {
            categoryData?.data?.slice(0, 10)?.map((item, index) => (
              <li key={index} className="relative sidebar men_nav_item">
                <div className={`py-[9.8px] ${index!== 9 ? "border-zinc-500 border-b-2": ""} w-[200px] cursor-pointer`}>
                  <Link href={k_category_patch.featured+ item?._id} className='pl-3'>{item?.title}</Link>
                </div>
                <ul className="absolute flex-col items-start justify-start hidden gap-2 p-4 font-normal text-black bg-white border rounded shadow-lg hoveredItems w-52 top-0 right-[-210px]">
                  {
                    item?.child?.length > 0 ? (
                      item?.child?.map((subItem, index) => (
                        <li key={index}>
                          <Link href={`/category/${subItem?._id}`}>{subItem?.title}</Link>
                        </li>
                      ))
                    ) : (
                      <li>
                        <a href="#">No Sub Category</a>
                      </li>
                    )}
                </ul>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
};

export default SideBarCategory;