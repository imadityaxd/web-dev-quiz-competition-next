import mongoose from "mongoose";
import ScoreModel from "@/model/Score";
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
    const user = await UserModel.findById(id);
    if (!user) {
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    // Create and save new score entry
    const newScore = new ScoreModel({
      userId: new mongoose.Types.ObjectId(id),
      score,
      date: new Date(),
    });
    await newScore.save();

    return NextResponse.json(
      {
        success: true,
        message: "Score recorded successfully",
        score: newScore,
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
