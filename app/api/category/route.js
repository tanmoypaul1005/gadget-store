import Category from "@/models/Category";
import connectMongo from "@/util/db";

export async function GET() {

  try {
    await connectMongo();
    let products = await Category.find({status:"main_category"});

    return Response.json({ status: 200, data: products, message: "Category is Found" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Internal Server Error" });
  }
}


export async function POST(request) {
  try {
    const new_category = await request.json();
    await connectMongo();
    const category = new Category({ ...new_category });
    await category.save();
    return Response.json({ message: "Category added successfully" });
  } catch (err) {
    console.error(err);
    return Response.json({ message: "Internal Server Error" });
  }
};