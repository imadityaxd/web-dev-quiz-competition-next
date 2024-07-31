import dbConnect from "@/lib/dbConnect";
import ScoreModel from "@/model/Score";
import { IUser } from "@/model/User"; // Ensure correct import
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

interface PopulatedScore extends Omit<mongoose.Document, "id"> {
  userId: IUser & { _id: mongoose.Schema.Types.ObjectId };
  score: number;
}

export async function GET(req: NextRequest) {
  await dbConnect(); // Ensure connection to the database
  try {
    const topScores = await ScoreModel.find()
      .sort({ score: -1 })
      .populate<{ userId: IUser }>("userId");

    // Format the leaderboard data
    const leaderboard = (topScores as PopulatedScore[]).map((score) => ({
      userId: score?.userId?._id.toString(),
      name: score?.userId?.name,
      instaId: score?.userId?.instaId,
      score: score?.score,
    }));

    return NextResponse.json(
      {
        success: true,
        data: leaderboard,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching the leaderboard",
      },
      { status: 500 }
    );
  }
}
