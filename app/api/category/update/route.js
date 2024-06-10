import Category from "@/models/Category";
import connectMongo from "@/util/db";

export async function POST(request) {
    try {
      await connectMongo();
      const { id, ...updateFields } = await request.json();

      const updatedCategory = await Category.findByIdAndUpdate(id, updateFields, { new: true });
        if (!updatedCategory) {
            return Response.json({
            status: 404,
            success: false,
            message: "Category not found",
            });
        }
      return Response.json({
        status: 200,
        success: true,
        data: updatedCategory,
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