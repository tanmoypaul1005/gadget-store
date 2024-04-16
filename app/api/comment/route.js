import Comment from "@/models/Comment";
import connectMongo from "@/util/db";

export async function POST(request) {
    try {
        const new_comment = await request.json();

       await connectMongo();
        const comment = new Comment({...new_comment});

        await comment.save();
        return Response.json({ message: "Comment added successfully" });

    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error" });
    }
};