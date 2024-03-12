import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import { loginSchema } from "./schemas"; 
import { findUserByEmail } from "./data/user";
// import GitHub from "next-auth/providers/github";

export default {
    providers: [
        credentials({
            async authorize(credentials) {
                const validatedData = loginSchema.safeParse(credentials);
                if (validatedData.success) {
                    const { email, password } = validatedData.data;
                    const user = await findUserByEmail(email);

                    if (!user || !user.password) return null;
                    
                    const isValid = await bcrypt.compare(password, user.password);

                    if (isValid) return user;
                }
                return null;
             }

        }),
    ],
} satisfies NextAuthConfig;