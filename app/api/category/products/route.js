
export async function GET(request, { params }) {
    try {
        await connectMongo();
        const category_id= params?.category_id
      if (category_id) {
        let products = await Products.find({ category: category_id })
          .lean()
          .exec();
        return Response.json({
          success: true,
          status: 200,
          data: products,
          message: `Product is found`,
        });
      } else {
        return Response.json({
          success: false,
          status: 404,
          error: "Product Not Found",
          message: "A category ID is required to update the product.",
          data: [],
        });
      }
    } catch (err) {
      console.error(err);
      return Response.json({ message: "Internal Server Error", data: [] });
    }
  }