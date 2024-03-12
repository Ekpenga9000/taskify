
import NextAuth from "next-auth";
import { UserRole } from '@prisma/client';
import authConfig from "@/auth.config";
import { db } from "@/lib/database";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { findUserById } from "@/data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
    callbacks: {
         
    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const user = await findUserById(token.sub);

      if (!user) return token;

      token.role = user.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

//Session does not work with Prisma so we would have to use JWT from NextAuth
