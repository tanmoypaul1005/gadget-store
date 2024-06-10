import Category from "@/models/Category";
import connectMongo from "@/util/db";

export async function GET(request,{params}) {

    try {
        await connectMongo();
        if (params.category_id) {
            let category = await Category.findOne({ _id: params.category_id })
            return Response.json({success:true, status: 200, data: category, message: `Product is found` });
        } else {
            return Response.json({
                success: false,
                status: 404,
                error: 'Product Not Found',
                message: "A category ID is required to update the product."
              });
        }
    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error" });
    }
}