
export const revalidate = 2 // revalidate at most every hour
import React from 'react'
import ProductCard from './ProductCard'
import { base_url } from '@/util/const'
import { kuProductList } from '@/util/url'

const NewProducts = async () => {

    const products = await fetch(base_url + kuProductList,{ next: { revalidate: 1 } })
        .then(res => res.json())

    return (

        <div className="newProductsContainer">

            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {
                    products?.data?.map((product, index) => (
                        <ProductCard key={index} product={product}  />
                    ))
                }
            </section>
        </div>

    )
}

export default NewProducts