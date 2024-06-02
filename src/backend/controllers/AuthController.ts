import { NextRequest, NextResponse } from "next/server";
import userModel from "../models/user.model";

//Register User
export const createUser = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { username, email, password, confirmPassword, adventurerType } = body;

    if (!username || !email || !password) {
      return NextResponse.json({ message: "Please fill all fields" });
    }

    if (password.length < 5) {
      return NextResponse.json({
        message: "Password should be at least 5 characters",
      });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ message: "Passwords do not match" });
    }

    const isExisitingUser = await userModel.find({email});

    if (isExisitingUser.length) {
      return NextResponse.json({
        success: false,
        message: "User already exists, please login",
      });
    }

    await userModel.create({
      username,
      email,
      password,
      adventurerType,
    });

    return NextResponse.json({
      success: true,
      message: "User created successfully",
    });
  } catch (error: any) {
    console.log(error);
    if (error.name === "ValidationError") {
      const message = Object.values(error.errors).map(
        (value: any) => value.message
      );
      return NextResponse.json({ success: false, message });
    }
  }
};

//Get user by Id

//Update user

//Delete user

