import dbConnect from "@/backend/db/db.config"; 
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "@/backend/models/user.model";

dbConnect();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json({ message: "Please provide your login credentials." }, { status: 401 });
        }

        const existingUser = await userModel.findOne({ username }).select("+password");

        if (!existingUser.username) {
            return NextResponse.json({ message: "Invalid login credentials" }, { status: 401 });
        }

        const isPasswordMatched = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordMatched) {
            return NextResponse.json({ message: "Invalid login credentials" }, { status: 401 });
        }

        // Create token data

        const tokenData = {
            id: existingUser._id
        }

        const token = await jwt.sign(tokenData, process.env.NEXTAUTH_SECRET!, { expiresIn: '1d' }); 

        const response = NextResponse.json({
            message: "Login successful",
            token: token
        }, { status: 200 });

        return response;

    } catch (error: any) {
        console.log(error);
        return NextResponse.json({ message: error.message }, {status: 500});
    }
}