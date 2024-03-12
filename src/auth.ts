import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { db } from "@/lib/database";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig
});

//Session does not work with Prisma so we would have to use JWT from NextAuth