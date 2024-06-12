import Products from "@/models/Products";
import connectMongo from "@/util/db";

export async function GET(request) {
    // try {
    //     await connectMongo(); // Ensure this connects successfully
    //     const searchParams = request.nextUrl.searchParams;
    //     let query = searchParams.get("query");
    //     console.log("query", query);

    //     // Remove quotes from the query
    //     query = query.replace(/\"(.*?)\"/g, '$1');

    //     // Consider adding an index on the 'name' field in MongoDB for faster searches
    //     const products = await Products.find({
    //         $or: [
    //             { name: new RegExp(query, 'i') },
    //             { brand: new RegExp(query, 'i') },
    //         ]
    //     }).limit(10);

    //     return Response.json({ status: 200, success: true, data: products, query, message: "Products Found" });
    // } catch (err) {
    //     console.error(err); // Enhanced error logging
    //     return Response.json({ success: false, status: 500, message: "Internal Server Error", data: null });
    // }
}