
export const dynamic = "force-dynamic";
import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function GET(request,{params}) {

    try {
        await connectMongo();

        
        if (params.category_id) {
            let products = await Products.find({ category: params.category_id })
            return Response.json({success:true, status: 200, data: products, message: `Product is found` });
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