import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import { getTokenData } from "@/helpers/getTokenData/getData";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const { id } = getTokenData(req);
    const { score } = await req.json();

    if (!id || score === undefined) {
      return NextResponse.json(
        {
          success: false,
          message: "session has expired",
        },
        { status: 400 }
      );
    }

    // Check if user exists
    let user = await UserModel.findById(id);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Create and save new score entry
    (user.score = score), await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Score recorded successfully",
        score: score,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
