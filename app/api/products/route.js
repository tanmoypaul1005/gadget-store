export const dynamic = 'force-dynamic' // defaults to auto
import Product from '@/models/Products';
import connectMongo from '@/util/db';

export async function GET() {

  try {
    await connectMongo();
    let products = await Product.find({});
    return Response.json({ status: 200, data: products, message: "Product is Found" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Internal Server Error" });
  }
}



