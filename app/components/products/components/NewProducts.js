
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

            <section className="flex justify-between  gap-x-[50px] flex-wrap  justify-items-center gap-y-20">
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