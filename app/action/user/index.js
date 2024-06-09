import User from "@/models/User";
import connectMongo from "@/util/db";

export const getUser = async (user_id) => {
    
    try {
        await connectMongo();
        const user = await User.find({ _id: user_id });
        return { status: 200, success: true, data: user, message: "User found" };
    } catch (err) {
        console.error("get data", err);
        return { status: 500, success: false, message: "Internal Server Error" };
    }
}