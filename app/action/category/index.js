import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function getByCategoryProducts(category_id) {

    try {
        console.log("category_id", category_id)
        await connectMongo();
        if (category_id) {
            let products = await Products.find({ category: category_id }).lean()
            .exec();
            return {success:true, status: 200, data: products, message: `Product is found` };
        } else {
            return {
                success: false,
                status: 404,
                error: 'Product Not Found',
                message: "A category ID is required to update the product.",
                data:[]
              };
        }
    } catch (err) {
        console.error(err);
        return { message: "Internal Server Error",data:[] };
    }
}