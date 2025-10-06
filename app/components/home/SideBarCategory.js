import Link from 'next/link';
import React from 'react';
import { getCategory } from '@/app/action';
import { k_category_patch } from '@/util/patch';
import { List } from 'lucide-react';

const SideBarCategory = async () => {

  const categoryData = await getCategory();

  return (
    <div className="rounded-lg bg-cCommonBg">
      <nav className="flex-col hidden w-full lg:flex">
        <div className='flex items-center justify-center py-3 rounded-t-lg gap-x-2 bg-cDeepSaffron'>
        <List />
          <div className='text-lg font-semibold'>All Category</div>
        </div>

        <ul className="flex flex-col">
          {
            categoryData?.data?.slice(0, 9)?.map((item, index) => (
              <li key={index} className="relative sidebar men_nav_item">
                <div className={`py-[9.8px] ${index!== 8 ? "border-zinc-500 border-b-2": ""} w-[200px] cursor-pointer`}>
                  <Link href={k_category_patch.featured+ item?._id} className='pl-3'>{item?.title}</Link>
                </div>
                <ul className="absolute flex-col items-start justify-start hidden gap-2 p-4 font-normal text-black bg-white border rounded shadow-lg hoveredItems w-52 top-0 right-[-210px]">
                  {
                    item?.child?.length > 0 ? (
                      item?.child?.map((subItem, index) => (
                        <li key={index}>
                          <Link className='hover:text-red-600' href={`/category/${subItem?._id}`}>{subItem?.title}</Link>
                        </li>
                      ))
                    ) : (
                      <li>
                        <div>No Sub Category</div>
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