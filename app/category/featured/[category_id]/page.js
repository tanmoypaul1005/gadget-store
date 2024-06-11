import ProductCard from '@/app/components/products/components/ProductCard'
import { base_url } from '@/util/const'
import { kuCategory, kuMainCategory } from '@/util/url'
import React from 'react'

const FeaturedCategoriesDetails = async ({ params }) => {

  const products = await fetch(base_url + kuMainCategory + `/${params?.category_id}`, { next: { revalidate: 1 } })
    .then(res => res.json())

  const categoryDetails = await fetch(base_url + `/category/details/${params?.category_id}`, { next: { revalidate: 1 } })
    .then(res => res.json())


  return (
    <>
      <div className='flex items-center justify-center mb-10 text-3xl font-bold'>
        {categoryDetails?.data?.title ?? "Category"}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-y-10 mx-[40px] pb-[40px] flex-wrap">
        {
        products?.data?.length > 0 ? (
          products.data.map((product, index) => (
            <div key={index} className="flex justify-center">
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
    </>
  )
}

export default FeaturedCategoriesDetails