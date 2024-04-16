import User from "@/models/User";
import connectMongo from "@/util/db";
import { sendResponse } from "next/dist/server/image-optimizer";



export async function POST(request) {
    try {
        const user = await request.json();
        console.log("user", user)

        await connectMongo();

        User.findOne({ email: user?.email })
            .exec((error, data) => {
                if (data) { return sendResponse(500, "User All Ready Register"); }

                const _user = new User({...user});
                _user.save((error, data) => {
                    if (error) { return sendResponse(500, error) }
                    if (data) { return sendResponse(201, 'User Create Successfully', data) }
                });
            });

    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error" });
    }
};