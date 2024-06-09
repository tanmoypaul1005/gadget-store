export const dynamic = 'force-dynamic'
import Comment from "@/models/Comment";
import Products from "@/models/Products";
import User from "@/models/User";
import connectMongo from "@/util/db";

export async function GET(request, { params }) {

    try {
        await connectMongo();
        const id = params.product_id
        if (id) {
            let products = await Products.findOne({ _id: id });
            let comment = await Comment.find({ product: id }).populate('user');
           
            return Response.json({ success: true, status: 200, data: { ...products?._doc, comment }, message: `${products?.name} is Found` });
        } else {
            return Response.json({ success: false, status: 404, error: 'No product found', message: "No movie found with the provided id" });
        }
    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error" });
    }
}




