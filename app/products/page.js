import React from "react";
import ProductCard from "../category/components/ProductCard";
import { base_url, products_type_value } from "@/util/const";
import { kuProductList } from "@/util/url";

const Products = async () => {
  const products = await fetch(base_url + kuProductList, {
    next: { revalidate: 1 },
  }).then((res) => res.json());

  const regularProducts = products?.data?.filter(
    (product, index) => product.type === products_type_value.regular
  );

  return (
    <div className="newProductsContainer common-topGap common-class">
      <section className="flex sm:flex-row flex-col sm:justify-between justify-center items-center gap-x-[50px] flex-wrap justify-items-center gap-y-12">
        {regularProducts?.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Products;
