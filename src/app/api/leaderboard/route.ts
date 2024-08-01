import dbConnect from "@/lib/dbConnect";
// import ScoreModel from "@/model/Score";
import UserModel from "@/model/User";
// import { IUser } from "@/model/User"; // Ensure correct import
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

// interface PopulatedScore extends Omit<mongoose.Document, "id"> {
//   userId: IUser & { _id: mongoose.Schema.Types.ObjectId };
//   score: number;
// }

export async function GET(req: NextRequest) {
  await dbConnect(); // Ensure connection to the database
  try {
    const topScores = await UserModel.find().sort({ score: -1 });
    // console.log("topScores: ", topScores);

    // Format the leaderboard data
    const leaderboard = topScores.map((score) => ({
      userId: score?._id,
      name: score?.name,
      instaId: score?.instaId,
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
