"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const CategoryProducts = ({ category_id = null }) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (category_id) {
        try {
          const response = await fetch(
            `/api/category/products?category_id=${category_id}`
          );
          const data = await response.json();
          setProducts(data.data);
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchProducts();
  }, [category_id]);


  return (
    <div className="flex flex-wrap justify-between pt-5 gap-x-3 gap-y-3">

      {products.length > 0 ? (
        products.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default CategoryProducts;
