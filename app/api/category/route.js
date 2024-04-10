import Category from "@/models/Category";
import connectMongo from "@/util/db";

export async function GET() {

  try {
    await connectMongo();
    let products = await Category.find({});
    return Response.json({ status: 200, data: products, message: "Product is Found" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Internal Server Error" });
  }
}