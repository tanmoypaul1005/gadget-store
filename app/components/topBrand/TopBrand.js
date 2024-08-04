import React from 'react';

const TopBrand = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-2'>
            <div className='text-2xl font-semibold leading-9'>Top Brand Products</div>
            <div className='flex space-x-8'>
                <div className='text-sm font-normal leading-5 text-white cursor-pointer hover:text-cDeepSaffron'>Samsung</div>
                <div className='text-sm font-normal leading-5 text-white cursor-pointer hover:text-cDeepSaffron'>MUI</div>
                <div className='text-sm font-normal leading-5 text-white cursor-pointer hover:text-cDeepSaffron'>Apple</div>
                <div className='text-sm font-normal leading-5 text-white cursor-pointer hover:text-cDeepSaffron'>HP</div>
                <div className='text-sm font-normal leading-5 text-white cursor-pointer hover:text-cDeepSaffron'>Lenovo</div>
            </div>
        </div>
    );
};

export default TopBrand;