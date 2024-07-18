import dbConnect from "@/lib/dbConnect";
import jwt from "jsonwebtoken";
import UserModel from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const { name, instaId } = await request.json();

    const newUser = new UserModel({
      name,
      instaId,
    });

    await newUser.save();

    //create token data
    const tokenData = {
      name,
      instaId,
    };

    //creating token token
    const token = await jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET!, {
      expiresIn: "30m",
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "You are registed. And the competition has started. Good Luck",
      },
      { status: 201 }
    );
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error registering user",
      },
      { status: 500 }
    );
  }
}
