import dbConnect from "@/lib/dbConnect";
import jwt from "jsonwebtoken";
import UserModel from "@/model/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const { name, instaId } = await request.json();
    if (!name) {
      return NextResponse.json(
        {
          success: false,
          message: "name is required",
        },
        { status: 400 }
      );
    }

    const existedUser = await UserModel.findOne({ name });
    if (existedUser) {
      return NextResponse.json(
        {
          success: false,
          message:
            "user with this name already exists. Please choose the different name",
        },
        { status: 409 }
      );
    }

    const newUser = new UserModel({
      name,
      instaId,
    });

    await newUser.save();

    const user = await UserModel.findOne({ name });
    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "user not found",
        },
        { status: 409 }
      );
    }

    //create token data
    const tokenData = {
      id: user._id,
      name: user.name,
    };

    //creating token token
    const token = jwt.sign(tokenData, process.env.JWT_TOKEN_SECRET!, {
      expiresIn: "30m",
    });

    const response = NextResponse.json(
      {
        success: true,
        message: "You are registed. And the competition has started. Good Luck",
      },
      { status: 201 }
    );
    const maxAge = 30 * 60; // 30 minutes in seconds
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge,
      secure: process.env.NODE_ENV === "production",
    });
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
