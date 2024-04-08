import { connectToDatabase } from "@/util/mongodb";

export async function GET(request) {
  try{
    const { db } = await connectToDatabase();
    let products = await db.collection("gadget-storebd").find({}).toArray();
    products = JSON.parse(JSON.stringify(products));
    return Response.json(products);
  }catch (err) {
    console.error(err);
    return Response.json({ message: "Internal Server Error" });
  }
}