"use server";
import bcrypt from "bcrypt";
import { UserRegistration, RegistrationFeeback } from "@/interfaces/interfaces";
import { db } from "@/lib/database";

// This action file is used to register the user and send the user's information to the server.
export const registerUser = async (
  user: UserRegistration
): Promise<RegistrationFeeback> => {
  const { name, email, password, cpassword } = user;

  if (!name || !email || !password || !cpassword) {
    return { error: "Please fill in all fields" };
  }

  if (password !== cpassword) {
    return { error: "Passwords do not match" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "User already exists. Please login." };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "User has been registered successfully" };
};
//This action file is usd t regirster the user and send the user's information to the server.
