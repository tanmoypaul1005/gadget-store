import { getOfferProduct } from '@/app/action/offer';
import React from 'react'

const ProductDetails = async({params }) => {
    const product =await getOfferProduct(params?.offer_id);
    return (
        <div className='common-class common-topGap'>
            {product?.length > 0 && product[0]?.name}
            {params?.offer_id}
        </div>
    )
}

export default ProductDetails