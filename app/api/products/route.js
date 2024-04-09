export const dynamic = 'force-dynamic' // defaults to auto
import Product from '@/models/Product';
import connectMongo from '@/util/db';

export async function GET() {
  try {
    await connectMongo();
    let products = await Product.find({});
    products = JSON.parse(JSON.stringify(products));
    Response.json(products);
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Internal Server Error" });
  }
}



