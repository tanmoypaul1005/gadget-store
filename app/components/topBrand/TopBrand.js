import React from 'react';
import Tabs from './components/Tabs';
import { getTopBrandList, getTopBrandProducts } from '@/app/action/category';

const TopBrand = async() => {

    const categoryList = await getTopBrandList();

    const productList=await getTopBrandProducts();

    return (
        <div className='flex flex-col items-center justify-center my-5 space-y-2'>
            <div className='text-2xl font-semibold leading-9'>Top Brand Products</div>
            <Tabs productList={productList} categoryList={categoryList}/> 
        </div>
    );
};

export default TopBrand;