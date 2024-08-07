import ProductCard from '@/app/category/components/ProductCard'
import React from 'react'

const CategoryProducts = ({productList,selectedId}) => {
    return (
        <div>
     {selectedId  &&  <div className="flex flex-wrap justify-between pt-5 gap-x-3 gap-y-3">
        {productList[selectedId]?.length > 0 ? (
            productList[selectedId].map((product, productIndex) => (
                <ProductCard key={productIndex} product={product} />
            ))
        ) : (
            <div>No products found</div>
        )}
        </div>}
      </div>
    )
}

export default React.memo(CategoryProducts);