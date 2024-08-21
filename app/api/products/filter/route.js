export const dynamic = "force-dynamic";
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
      query.category = category;
    }

    let products = await Products.find(query);

    return new Response(JSON.stringify({ success: true, products }), {
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