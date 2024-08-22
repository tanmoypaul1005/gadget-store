import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getMainCategory } from '../action/category';

const FeaturedCategories = async () => {
  const category = await getMainCategory();

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-x-12 lg:gap-y-6">
      {category?.map((item, index) => (
        <div className="flex justify-center" key={index}>
          <CategoryBox item={item} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedCategories;

const CategoryBox = ({ item }) => {
  return (
    <Link
      href={`/category/featured/${item?._id}`}
      className="bg-cCommonBg rounded flex-col
        min-h-[108px] max-h-[108px] max-w-[108px] min-w-[108px]
        sm:min-h-[145px] sm:max-h-[145px] sm:max-w-[145px] sm:min-w-[145px]
        md:min-h-[170px] md:max-h-[170px] md:max-w-[170px] md:min-w-[170px]
        
        flex justify-center items-center"
    >
      <Image
        className="w-[30px] h-[30px] sm:w-[65px] sm:h-[65px] md:w-[70px] md:h-[70px] lg:w-[75px] lg:h-[75px]"
        width={75}
        height={75}
        src={item?.icon}
        alt={item?.title || "Category Icon"}
      />
      <div className="text-cDeepSaffron font-medium text-[12px] sm:text-[15px] md:text-[16px] lg:text-[17px] mt-3">
        {item?.title}
      </div>
    </Link>
  );
};
