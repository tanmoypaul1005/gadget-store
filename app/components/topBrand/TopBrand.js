"use client"
import React, { useEffect, useState } from 'react';
import Tabs from './components/Tabs';

const TopBrand = () => {
    
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    // Fetch category list
    fetch('/api/category/top-brand')
      .then(response => response.json())
      .then(data => {
        console.log('Category list:', data);
        setCategoryList(data?.categories);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='flex flex-col items-center justify-center my-5 space-y-2'>
      <div className='text-2xl font-semibold leading-9'>Top Brand Products</div>
      <Tabs categoryList={categoryList} />
    </div>
  );
};

export default TopBrand;


