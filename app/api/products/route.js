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
      products = await Product.find({ type: query }).populate("offer");
    } else if (query === null) {
      products = await Product.find({ ratting: { $gt: 0,$lt:5 } }).populate("offer");
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
