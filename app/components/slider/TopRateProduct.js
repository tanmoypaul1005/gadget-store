import React from 'react'
import Slider from './Slider'
import { fetchTopRateProducts, getAllProducts } from '@/app/action/product/action';
import { products_type_value } from '@/util/const';

const componentName = async () => {
    
    const products = await fetchTopRateProducts();

    const allProducts = await getAllProducts();

    const newArrivals =await allProducts?.filter(
        (product) => product.type === products_type_value.new_arrivals
      );
      const trending = allProducts?.filter(
        (product) => product.type === products_type_value.trending
      );
   
    return (
        <>
        
        <div> 
            <div className="flex items-center justify-center w-full mb-4 text-2xl font-semibold text-center text-white ">
            Top Rated Products 🔥
        </div>
            <Slider products={products} />
        </div>

        <div> 
            <div className="flex items-center justify-center w-full mb-4 text-2xl font-semibold text-center text-white ">
            New Arrivals 🔥
        </div>
            <Slider products={newArrivals} />
        </div>

        <div> 
            <div className="flex items-center justify-center w-full mb-4 text-2xl font-semibold text-center text-white ">
            Trending 🔥
        </div>
            <Slider products={trending} />
        </div>

        </>
    )
}

export default componentName