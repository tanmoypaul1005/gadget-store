import React from 'react'
import Slider from './Slider'
import { fetchTopRateProducts } from '@/app/action/product/action';

const componentName = async () => {
    const products = await fetchTopRateProducts();
    return (
        <div> <div className="flex items-center justify-center w-full mb-4 text-2xl font-semibold text-center text-white ">
            Top Rated Products 🔥
        </div>
            <Slider products={products} />
        </div>
    )
}

export default componentName