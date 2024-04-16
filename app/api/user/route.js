// import User from "@/models/User";
// import connectMongo from "@/util/db";


// export async function POST(request) {
//     try {
//         const new_user = await request.json();

//        await connectMongo();
//         const product = new User({
//             ...new_user,
//             price: parseInt(new_product.price)
//         });

//         await product.save();
//         return Response.json({ message: "Product added successfully" });

//     } catch (err) {
//         console.error(err);
//         return Response.json({ message: "Internal Server Error" });
//     }
// };