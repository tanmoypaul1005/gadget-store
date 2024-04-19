export const dynamic = 'force-dynamic' // defaults to auto
import Product from '@/models/Products';
import connectMongo from '@/util/db';
import { products_type } from '../utils/const';


export async function GET(request) {
  try {
    await connectMongo();
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("type");
    let products = [];
    if (products_type.includes(query)) {
      products = await Product.find({ type: query });
    }
    else if (query === null) {
      products = await Product.find({})
    }
    else {
      return Response.json({ success: false, status: 400, message: "Invalid type", data: null });
    }
    return Response.json({ status: 200, success: true, data: products, message: "Product is Found" });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false, status: 500, message: "Internal Server Error", data: null });
  }
}


