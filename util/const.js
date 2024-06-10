export const base_url_src =process.env.BASE_URL;

export const base_url=base_url_src + "api";


export const products_type_value = {
    new_arrivals: "new_arrivals",
    trending: "trending",
    top_rated: "top_rated",
    regular: "regular",
    popular: "popular",
    day_offer:"day_offer",
    best_sellers:"best_sellers"
  };
  
  export const products_type = [
    products_type_value.new_arrivals,
    products_type_value.trending,
    products_type_value.top_rated,
    products_type_value.regular,
    products_type_value.popular,
    products_type_value.day_offer,
    products_type_value.best_sellers
  ];

  
  export const address_type = {
    shipping_address:"shipping_address",
    billing_address:"billing_address"
  }