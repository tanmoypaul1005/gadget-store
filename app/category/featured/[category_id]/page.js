import ProductCard from '@/app/components/products/components/ProductCard'
import CommonSelectBox from '@/components/input/CommonSelectBox'
import { base_url } from '@/util/const'
import { kuMainCategory } from '@/util/url'
import Image from 'next/image'
import React from 'react'

const FeaturedCategoriesDetails = async ({ params }) => {

  const response = await fetch(base_url + kuMainCategory + `/${params?.category_id}`);
  const products = await response.json();

  const categoryResponse = await fetch(base_url + `/category/details/${params?.category_id}`);

  if (!categoryResponse.ok) {
    throw new Error(`HTTP error! status: ${categoryResponse.status}`);
  }

  const categoryDetails = await categoryResponse.json();

  return (
    <div className='common-class'>

      <div className='mb-10'>
        {
          categoryDetails?.data?.banner ?
            <img width={500} height={500} src={categoryDetails?.data?.banner} alt={categoryDetails?.data?.title} className='w-full h-[300px] object-cover' />
            :

            <div className='p-3 flex justify-between rounded text-xl font-bold bg-cCommonBg w-full '>
              <div>

                {categoryDetails?.data?.title ?? "Category"}
              </div>
              <div>
                <CommonSelectBox
                  options={["Price: Low to High", "Price: High to Low", "Newest Arrivals", "Best Sellers"]}
                  label={"Filter Products"}
                />
              </div>
            </div>
        }

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-4 gap-y-10 pb-[40px] flex-wrap">
        {
          products?.data?.length > 0 ? (
            products.data.map((product, index) => (
              <div key={index} className="flex justify-center sm:justify-start">
                <div className="w-60"> {/* w-60 is approximately 240px */}
                  <ProductCard product={product} />
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center h-[60vh] justify-center w-full text-lg text-white">
              <p>No products found</p>
            </div>
          )}
      </div>
    </div>
  )
}

export default FeaturedCategoriesDetails


