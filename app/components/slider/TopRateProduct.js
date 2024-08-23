import React from 'react'
import Slider from './Slider'
import { fetchTopRateProducts } from '@/app/action/product/action';

const componentName =async () => {
    const products = await fetchTopRateProducts();
    return (
        <div>
            <Slider products={products} />
        </div>
    )
}

export default componentName