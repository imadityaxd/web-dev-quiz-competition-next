import dbConnect from "@/lib/dbConnect";
import ArchivedUser from "@/model/ArchievedUser";
import UserModel from "@/model/User";
import { NextRequest, NextResponse } from "next/server";
import { useAuth } from "@/context/AuthContext";

// const { timerEnded } = useAuth();

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    // Check the condition to archive users (you can define your condition here)

    // Fetch all users
    const users = await UserModel.find({});

    if (users.length > 0) {
      // Insert users into ArchivedUser collection
      await ArchivedUser.insertMany(users);

      // Remove all users from User collection
      await UserModel.deleteMany({});
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Users archived successfully and User collection is now empty.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { success: false, message: "Error archiving users", error },
      { status: 500 }
    );
  }
}
