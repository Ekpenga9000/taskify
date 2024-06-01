import { NextRequest, NextResponse } from "next/server";
import userModel from "../models/user.model";

//Register User
export const createUser = async (req: NextRequest) => {
    try {

        const body = await req.json();
        const { username, email, password, confirmPassword } = body;

        if (!username || !email || !password) {
            return NextResponse.json({ message: "Please fill all fields" });
        }

        if (password !== confirmPassword) {
            return NextResponse.json({ message: "Passwords do not match" });
        }
        
    } catch (error:any) {
        console.log(error); 
        if (error.name === "ValidationError") {
            const message = Object.values(error.errors).map((value: any) => value.message);
            return NextResponse.json({ success:false, message });
        }
    }
}

//Get user by Id

//Update user

//Delete user