import { createUser } from "@/backend/controllers/AuthController";
import dbConnect from "@/backend/db/db.config";
import { NextRequest } from "next/server";

interface RequestContext{

}

dbConnect(); 

export async function POST(req: NextRequest, ctx: RequestContext) { 
    return createUser(req);
}; 