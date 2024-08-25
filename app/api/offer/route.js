import Offer from "@/models/Offer";
import connectMongo from "@/util/db";

export async function POST(request) {
    try {
        const new_offer = await request.json();

        await connectMongo();
        const offer = new Offer({ ...new_offer });

        await offer.save();
        return Response.json({ success: true,data:offer, status:201, message: "Comment added successfully" });

    } catch (err) {
        console.error(err);
        return Response.json({success: false,status:500, message: "Internal Server Error" });
    }
};


export async function GET(request) {
    try {
        await connectMongo();

        const offer = await offer.find({}).sort({ createdAt: -1 });
        return Response.json({ success: true, status: 200, data: offer, message: "Comments Found" });
    } catch (err) {
        console.error(err);
        return Response.json({ success: false, status: 500, message: "Internal Server Error", data: null });
    }
}

