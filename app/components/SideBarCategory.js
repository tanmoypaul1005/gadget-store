import Link from 'next/link';
import React from 'react';
import { getCategory } from '../action';
import Image from 'next/image';

const SideBarCategory = async () => {

  const categoryData = await getCategory();

  return (
    <div className="desktopNavbar w-[200px] h-full bg-cCommonBg rounded-lg">
      <nav className="hidden w-full lg:flex flex-col">
        <div className='gap-x-2 flex justify-center items-center mb-3 py-3 rounded-t-lg  bg-cDeepSaffron'>
          <Image width={20} height={20} style={{ maxWidth: "20px", minHeight: "20px", minWidth: "20px", maxHeight: "20px" }} src='https://motionview.com.bd/images/category.svg' alt='' />
          <div className=''>All Category</div>
        </div>

        <ul className="flex flex-col">
          {
            categoryData?.data?.slice(0, 9)?.map((item, index) => (
              <li key={index} className="relative nav_items men_nav_item">
                <div className='border-b-2 pb-2 border-zinc-500 w-[200px]'>

                  <a href="#Men" className='pl-2'>{item?.title}</a>
                </div>
                <ul className="absolute flex-col items-start justify-start hidden gap-2 p-4 font-normal text-black bg-white border rounded shadow-lg hoveredItems w-52 top-10 right-[-200px]">
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