export const dynamic = 'force-dynamic' 
import Comment from "@/models/Comment";
import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function GET(request) {

    try {
        await connectMongo();
        const id = request.nextUrl.pathname?.split('/')
        if (id[3]) {
            let products = await Products.findOne({ _id: id[3] });
            let comment =await Comment.find({ product: id[3] });
            return Response.json({success:true, status: 200, data: {...products?._doc,comment}, message: `${products?.name} is Found` });
        } else {
            return Response.json({ success:false,status: 404, error: 'No product found', message: "No movie found with the provided id" });
        }
    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error" });
    }
}




