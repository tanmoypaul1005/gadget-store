import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getMainCategory } from '../action/category';

const FeaturedCategories = async () => {
  const category = await getMainCategory();

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 sm:gap-4 lg:gap-6">
      {category?.slice(0, 12).map((item, index) => (
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
        min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-[140px] xl:min-h-[160px]
        min-w-[80px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[140px] xl:min-w-[160px]"
    >
      <Image
        className="w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px]"
        width={70}
        height={70}
        src={item?.icon}
        alt={item?.title || 'Category Icon'}
      />
      <div className="text-cDeepSaffron font-medium text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] mt-1 md:mt-2">
        {item?.title}
      </div>
    </Link>
  );
};
