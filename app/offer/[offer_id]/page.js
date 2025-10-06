import { getOfferDetails, getOfferProduct } from '@/app/action/offer';
import Card from '@/app/products/components/Card';
import React from 'react'

const ProductDetails = async ({ params }) => {

    const products = await getOfferProduct(params?.offer_id);
    const offerDetails = await getOfferDetails(params?.offer_id);

    return (
        <div className='common-class common-topGap'>
            <div className="relative w-full p-6 mb-8 overflow-hidden text-white shadow-lg rounded-xl bg-gradient-to-r from-blue-400 to-purple-500">
                {/* Simple decorative dots */}
                <div className="absolute w-3 h-3 bg-white rounded-full top-4 right-4 opacity-30"></div>
                <div className="absolute w-2 h-2 bg-white rounded-full top-8 right-8 opacity-40"></div>
                <div className="absolute w-2 h-2 bg-white rounded-full bottom-4 left-4 opacity-30"></div>

                {/* Main content */}
                <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-lg bg-opacity-20">
                            <span className="text-xl">🔥</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">
                                {offerDetails?.title ?? "Special Category"}
                            </h1>
                            <p className="text-sm text-white text-opacity-80">
                                Limited Time Offer
                            </p>
                        </div>
                    </div>

                    {/* Simple offer badge */}
                    {offerDetails?.offerPercentage && (
                        <div className="px-3 py-2 bg-white rounded-lg bg-opacity-20 backdrop-blur-sm">
                            <span className="text-lg font-bold">
                                {offerDetails.offerPercentage}% OFF
                            </span>
                        </div>
                    )}
                </div>
            </div>
            {
                products && products?.map((item, index) => {
                    return (
                        <Card offerPercentage={offerDetails?.offerPercentage} product={item} key={index} />
                    )
                })
            }
        </div>
    )
}

export default ProductDetails