export const dynamic = "force-dynamic";
import Product from "@/models/Products";
import connectMongo from "@/util/db";
import Category from "@/models/Category";
import { products_type } from "@/util/const";

export async function GET(request) {
  try {
    await connectMongo();
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("type");
    let products = [];
    if (products_type.includes(query)) {
      products = await Product.find({ type: query });
    } else if (query === null) {
      products = await Product.find({});
      // Filter products to ensure rating is between 0 and 4
      products = products.map((product) => {
        if (product.rating < 0) {
          product.rating = 0;
        } else if (product.rating > 4) {
          product.rating = 4;
        }
        return product;
      });
    } else {
      return Response.json({
        success: false,
        status: 400,
        message: "Invalid type",
        data: null,
      });
    }

    products = await Promise.all(
      products.map(async (product) => {
        const category = await Category.findOne({ _id: product.category });
        if (category) {
          product.category = category;
        }
        return product;
      })
    );

    return Response.json({
      status: 200,
      success: true,
      data: products,
      message: "Product is Found",
    });
  } catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
      data: null,
    });
  }
}
