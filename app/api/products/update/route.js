import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function POST(request) {

  const body = await request.json();
  const id = body?.id;
  const categoryId = body?.categoryId;

  try {
    await connectMongo();

    // If a new category ID is not provided, return an error
    if (!categoryId) {
     return Response.json({
        status: 400,
        body: { message: "New category ID not provided" },
      });
    }

    const product = await Products.findByIdAndUpdate(
      id,
      { category: categoryId },
      { new: true }
    );

    if (!product) {
     return Response.json({
        status: 404,
        body: { message: "Product not found" },
      });
    }

  return  Response.json({
      status: 200,
      body: product,
    });
  } catch (error) {
  return  Response.json({
      status: 500,
      body: { message: "Error updating product" },
    });
  }
}
