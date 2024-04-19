
import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function POST(request) {
    try {
        const new_product = await request.json();

        await connectMongo();
        const product = new Products({
            ...new_product,
            price: parseInt(new_product.price)
        });

        await product.save();
        return Response.json({ status: 201, success: true, data:product,message: "Product added successfully" });

    } catch (err) {
        console.error(err);
        return Response.json({ status: 500, success: false,data:null, message: "Internal Server Error" });
    }
};