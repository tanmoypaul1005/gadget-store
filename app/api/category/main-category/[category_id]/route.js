import Category from "@/models/Category";
import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function GET(request, { params }) {
  try {
    await connectMongo();
    let category = await Category.find({ parent_id: params?.category_id });

    const category_id = category.map((item) => {
      return item._id
    })

    const products = await Products.find({ category: { $in: category_id } });

    return Response.json({
      status: 200,
      success: true,
      data: products,
      message: "Category is Found",
    });
  } catch (err) {
    console.error(err);
    return Response.json({
      success: false,
      status: 500,
      message: "Internal Server Error",
    });
  }
}