
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

            <section className="grid justify-center grid-cols-1 mx-5 mt-10 mb-5 w-fit lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-[100px]">
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