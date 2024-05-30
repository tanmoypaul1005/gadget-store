import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClientPromise from "./util/mongoClientPromise";
import User from "./models/User";

const nextAuthOptions = {
  adapter: MongoDBAdapter(mongoClientPromise, {
    databaseName: process.env.ENVIRONMENT,
  }),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add CredentialsProvider if needed
  ],
};

// Log the NextAuth return value to check its structure
const authResponse = NextAuth(nextAuthOptions);
console.log(authResponse);

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = authResponse;
