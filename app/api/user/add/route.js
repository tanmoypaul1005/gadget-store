import User from "@/models/User";
import connectMongo from "@/util/db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(request, response) {
    try {
        const user = await request.json();

        if (!user || !user.email) {
            return Response.json({ message: "Invalid Request", status: 400 });
        }

        await connectMongo();

        const existingUser = await User.findOne({ email: user.email }).exec();
        if (existingUser) {
            return Response.json({ status: 500, message: "User All Ready Register" });
        }

        const hashedPassword = await bcrypt.hash(user.password, 10);
        const _user = new User({ ...user,password: hashedPassword });
        await _user.save();

        const token = jwt.sign({ id: _user._id }, 'your_secret_key', { expiresIn: '1h' });

        const userResponse = { ..._user._doc, password: undefined,token };

        return Response.json({status: 201, message:'User Create Successfully', data: userResponse});
    } catch (err) {
        console.error(err);
        return Response.json({ message: "Internal Server Error",status:500 });
    }
}