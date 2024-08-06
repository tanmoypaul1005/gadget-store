"use client";
//import ProductCard from '@/app/components/products/components/ProductCard';
import { useEffect, useState } from 'react';

const CategoryProducts = ({ category_id = null }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (category_id) {
        try {
          const response = await fetch(`/api/category/products?category_id=${category_id}`);
          const data = await response.json();
          setProducts(data.data);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchProducts();
  }, [category_id]);
  console.log("products", products);

  return (
    <div className="flex mt-10 space-x-10">
      {/* {products?.map((product, index) => (
        <div key={index}>
          <ProductCard key={index} product={product} />
        </div>
      ))} */}
    </div>
  );
};

export default CategoryProducts;