import User from "@/models/User";
import connectMongo from "@/util/db";

export const findUserId = async (email) => {
  try {
    if (!email) {
      return null;
    }
    await connectMongo();
    const user = await User.findOne({ email: email });

    if (user) {
      return user;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};
