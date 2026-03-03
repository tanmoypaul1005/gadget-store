import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getMainCategory } from '../action/category';

const FeaturedCategories = async () => {
  const category = await getMainCategory();

  return (
    <div className="w-full pt-2">

      {/* Grid */}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 sm:gap-4">
        {category?.slice(0, 12).map((item, index) => (
          <CategoryBox item={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;

/* Subtle accent colors cycling per card */
const ACCENTS = [
  { ring: "group-hover:ring-indigo-500/40", glow: "group-hover:bg-indigo-600/10", dot: "bg-indigo-500" },
  { ring: "group-hover:ring-violet-500/40", glow: "group-hover:bg-violet-600/10", dot: "bg-violet-500" },
  { ring: "group-hover:ring-sky-500/40",    glow: "group-hover:bg-sky-600/10",    dot: "bg-sky-500"    },
  { ring: "group-hover:ring-emerald-500/40",glow: "group-hover:bg-emerald-600/10",dot: "bg-emerald-500"},
  { ring: "group-hover:ring-pink-500/40",   glow: "group-hover:bg-pink-600/10",   dot: "bg-pink-500"   },
  { ring: "group-hover:ring-amber-500/40",  glow: "group-hover:bg-amber-600/10",  dot: "bg-amber-500"  },
];

const CategoryBox = ({ item, index }) => {
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <Link
      href={`/category/featured/${item?._id}`}
      className="group relative flex flex-col items-center justify-center gap-3
                 bg-[#111118] border border-white/5 rounded-2xl
                 p-4 sm:p-5 aspect-square
                 hover:border-white/10 transition-all duration-300
                 hover:shadow-lg hover:shadow-black/40 hover:-translate-y-0.5"
    >
      {/* Background Glow on Hover */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${accent.glow}`} />

      {/* Icon Wrapper */}
      <div className={`relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl
                       bg-white/5 ring-2 ring-white/5 ${accent.ring}
                       flex items-center justify-center
                       transition-all duration-300 group-hover:scale-110`}>
        <Image
          width={40}
          height={40}
          src={item?.icon}
          alt={item?.title || 'Category Icon'}
          className="object-contain w-6 h-6 sm:w-7 sm:h-7"
        />
      </div>

      {/* Title */}
      <span className="relative z-10 text-center text-[11px] sm:text-xs font-semibold
                       text-gray-400 group-hover:text-white transition-colors duration-200
                       leading-tight line-clamp-2">
        {item?.title}
      </span>

      {/* Active dot indicator on hover */}
      <span className={`absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full ${accent.dot}
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </Link>
  );
};