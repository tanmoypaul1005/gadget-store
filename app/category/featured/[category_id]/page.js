import ProductCard from '@/app/components/products/components/ProductCard'
import { base_url } from '@/util/const'
import { kuMainCategory } from '@/util/url'
import React from 'react'

const FeaturedCategoriesDetails =async ({params}) => {

    const products = await fetch(base_url+ kuMainCategory +`/${params?.category_id}`,{ next: { revalidate: 1 } })
    .then(res => res.json())
    
    return (
        <div className="flex gap-10 justify-between mx-[40px] pb-[40px] flex-wrap">
        {products?.data?.length > 0 ? (
          products.data.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <div className="flex items-center h-[60vh] justify-center w-full text-lg text-white">
            <p>No products found</p>
          </div>
        )}
      </div>
    )
}

export default FeaturedCategoriesDetails