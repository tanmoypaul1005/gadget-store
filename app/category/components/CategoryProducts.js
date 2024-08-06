// import { getByCategoryProducts } from '@/app/action/category';
// import ProductCard from '@/app/components/products/components/ProductCard';

import { getByCategoryProducts } from "@/app/action/category";

const CategoryProducts = async({category_id=null}) => {

    const products =category_id ? await getByCategoryProducts(category_id):[];

    return (
        <div className="flex mt-10 space-x-10">
        {/* {products?.data?.map((product, index) => (
          <div key={index}>
            <ProductCard key={index} product={product} />
          </div>
        ))} */}
      </div>
    )
}

export default CategoryProducts