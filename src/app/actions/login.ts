"use server";

import * as z from "zod";
import { loginSchema } from "@/schemas"; 
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const loginUser = async (values: z.infer<typeof loginSchema>) => {
    const validatedData = loginSchema.safeParse(values);
    
    if (!validatedData.success) {
        return { error: "Invalid data" };
    }

    const { email, password } = validatedData.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" };
                default:
                    return { error: "Something went wrong!" };
            }
            
        }

        throw error;
    }
};