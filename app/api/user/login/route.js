import User from "@/models/User";
import connectMongo from "@/util/db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        const req_body = await request.json();

        if (!req_body || !req_body.email) {
            return Response.json({ message: "Invalid Request", status: 400 });
        }

        await connectMongo();

        const user = await User.findOne({ email: req_body.email }).exec();
        if (!user) return Response.json({ status: 400, message: "Email is not found" });

        const validPass = await bcrypt.compare(req_body?.password, user.password);
        if (!validPass) return Response.json({ status: 500, message: "Invalid password" });

        const token = jwt.sign({ id: user?.id }, 'your_secret_key', { expiresIn: '1h' });

        const userResponse = { user, password: undefined,token };

        return Response.json({status: 200, message:'Login Successfully', data: userResponse});
    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error",status:500 });
    }
}