export const dynamic = "force-dynamic";
import Category from "@/models/Category";
import Products from "@/models/Products";
import { products_type } from "@/util/const";
import connectMongo from "@/util/db";

export async function GET(request) {
  try {
    await connectMongo();
    const searchParams = request.nextUrl.searchParams;
    const queryType = searchParams.get("type");
    const minPrice = parseFloat(searchParams.get("minPrice"));
    const maxPrice = parseFloat(searchParams.get("maxPrice"));
    const category = searchParams.get("category");

    let query = {};

    if (products_type.includes(queryType)) {
      query.type = queryType;
    }

    if (!isNaN(minPrice)) {
      query.price = { ...query.price, $gte: minPrice };
    }

    if (!isNaN(maxPrice)) {
      query.price = { ...query.price, $lte: maxPrice };
    }
    
    if (category) {
      // Find subcategories based on the parent category ID
      let subcategories = await Category.find({ parent_id: category });
  
      // Extract the IDs of the subcategories
      const category_ids = subcategories.map((item) => item._id);
  
      // Include the parent category ID as well
      category_ids.push(category);
  
      // Filter products by category and its subcategories
      query.category = { $in: category_ids };
    }

    let products = await Products.find(query);

    return new Response(JSON.stringify({ success: true,minPrice, maxPrice, category, products }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


// try {
//   let query = {};
//   let sort = {};

//   if (!isNaN(minPrice)) {
//     query.price = { ...query.price, $gte: minPrice };
//   }

//   if (!isNaN(maxPrice)) {
//     query.price = { ...query.price, $lte: maxPrice };
//   }

//   if (category) {
//     // Find subcategories based on the parent category ID
//     let subcategories = await Category.find({ parent_id: category });

//     // Extract the IDs of the subcategories
//     const category_ids = subcategories.map((item) => item._id);

//     // Include the parent category ID as well
//     category_ids.push(category);

//     // Filter products by category and its subcategories
//     query.category = { $in: category_ids };
//   }

//   // Extract filter type from request parameters
//   const filterType = params?.filterType;

//   // Build sort object based on filter type
//   switch (filterType) {
//     case 'Best Rating':
//       query.rating = 5;
//       break;
//     case 'Newest':
//       sort.createdAt = -1;
//       break;
//     case 'Price: Low to High':
//       sort.price = 1;
//       break;
//     case 'Price: High to Low':
//       sort.price = -1;
//       break;
//     default:
//       break;
//   }

//   let products = await Products.find(query).sort(sort);

//   // If filter type is 'Newest', limit to last 5 products
//   if (filterType === 'Newest') {
//     products = products.slice(0, 5);
//   }

//   return new Response(JSON.stringify({ success: true, minPrice, maxPrice, category, products }), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// } catch (error) {
//   console.error("Error fetching products:", error);
//   return new Response(JSON.stringify({ success: false, error: error.message }), {
//     status: 500,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }