import Category from "@/models/Category";
import connectMongo from "@/util/db";

export async function GET() {
    try {
      await connectMongo();
      const categories = await Category.find({ top_brand: true });
      return Response.json({categories})
    } catch (err) {
      console.error(err);
      return Response.json([]);
    }
  };
  