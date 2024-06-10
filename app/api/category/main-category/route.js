import Category from "@/models/Category";
import connectMongo from "@/util/db";

export async function GET() {
    try {
      await connectMongo();
      let category = await Category.find({ status: "main_category" });
    
      return Response.json({
        status: 200,
        success: true,
        data: category,
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