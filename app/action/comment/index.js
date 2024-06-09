import connectMongo from "@/util/db";

export const addComment=async(body)=>{
  try{
    await connectMongo();

    const comment = new Comment({
      user: body?.user,
      post: body?.post,
      comment: body?.comment,
    });
    await comment.save();

    return { status: 200, success: true, message: "Comment added successfully" };
  }catch(err){
    console.error("error addComment", err);
    return { status: 500, success: false, message: "Internal Server Error" };
  }
}