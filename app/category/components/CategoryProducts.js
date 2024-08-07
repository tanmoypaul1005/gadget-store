
import ProductCard from "./ProductCard";

const CategoryProducts = async({ category_id = null }) => {
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/category/products?category_id=${category_id}`);
  const products = await response.json();


  return (
    <div className="flex flex-wrap justify-between pt-5 gap-x-3 gap-y-3">

      {products?.data?.length > 0 ? (
        products?.data?.map((product, index) => (
            <ProductCard key={index} product={product} />
        ))
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};

export default CategoryProducts;
