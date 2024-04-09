import Product from "@/models/Product";
import connectMongo from "@/util/db";

export async function POST(request) {
    try {
        const new_product = await request.json();

       await connectMongo();
        const product = new Product({
            ...new_product,
            price: parseInt(new_product.price)
        });

        await product.save();
        return Response.json({ message: "Product added successfully" });

    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error" });
    }
};