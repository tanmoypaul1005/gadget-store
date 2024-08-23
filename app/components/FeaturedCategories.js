import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getMainCategory } from '../action/category';

const FeaturedCategories = async () => {
  const category = await getMainCategory();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-6 lg:gap-8">
      {category?.slice(0,10).map((item, index) => (
        <CategoryBox item={item} key={index} />
      ))}
    </div>
  );
};

export default FeaturedCategories;

const CategoryBox = ({ item }) => {
  return (
    <Link
      href={`/category/featured/${item?._id}`}
      className="bg-cCommonBg rounded flex flex-col items-center justify-center
        min-h-[100px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px] xl:min-h-[200px]
        min-w-[100px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px]"
    >
      <Image
        className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
        width={100}
        height={100}
        src={item?.icon}
        alt={item?.title || "Category Icon"}
      />
      <div className="text-cDeepSaffron font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] mt-2 md:mt-3">
        {item?.title}
      </div>
    </Link>
  );
};
