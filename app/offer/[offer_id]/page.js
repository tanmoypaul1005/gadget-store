import { getOfferProduct } from '@/app/action/offer';
import Card from '@/app/products/components/Card';
import React from 'react'

const ProductDetails = async({ params }) => {
    const product =await getOfferProduct(params?.offer_id);
    return (
        <div className='common-class common-topGap'>
           {
                product && product.map((item, index) => {
                    return (
                        <Card product={item} key={index}/>
                    )
                })
           }
        </div>
    )
}

export default ProductDetails