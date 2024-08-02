import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({products=[]}) => {
    return (
      <div className="newProductsContainer">
        <section className="flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-x-[50px] flex-wrap justify-items-center gap-y-20">
          {products?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </section>
      </div>
    );
};

export default ProductList;