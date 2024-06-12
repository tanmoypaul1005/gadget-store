import Comment from "@/models/Comment";
import connectMongo from "@/util/db";

export async function POST(request) {
    try {
        const new_comment = await request.json();

        await connectMongo();
        const comment = new Comment({ ...new_comment });

        await comment.save();
        return Response.json({ success: true,status:201, message: "Comment added successfully" });

    } catch (err) {
        console.error(err);
        return Response.json({success: false,status:500, message: "Internal Server Error" });
    }
};


export async function GET(request) {
    try {
        await connectMongo();

        const comments = await Comment.find({}).sort({ createdAt: -1 }).populate('user');
        return Response.json({ success: true, status: 200, data: comments, message: "Comments Found" });
    } catch (err) {
        console.error(err);
        return Response.json({ success: false, status: 500, message: "Internal Server Error", data: null });
    }
}

