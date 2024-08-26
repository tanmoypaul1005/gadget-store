import { getOfferDetails, getOfferProduct } from '@/app/action/offer';
import Card from '@/app/products/components/Card';
import React from 'react'

const ProductDetails = async ({ params }) => {

    const products = await getOfferProduct(params?.offer_id);
    const offerDetails = await getOfferDetails(params?.offer_id);

    return (
        <div className='common-class common-topGap'>
            <div className="w-full p-3 mb-5 text-base font-bold rounded bg-cCommonBg ">
                <div>{ offerDetails?.title ?? "Category"} 🔥</div>
            </div>
            {
                products && products?.map((item, index) => {
                    return (
                        <Card offerPercentage={offerDetails?.offerPercentage}  product={item} key={index} />
                    )
                })
            }
        </div>
    )
}

export default ProductDetails