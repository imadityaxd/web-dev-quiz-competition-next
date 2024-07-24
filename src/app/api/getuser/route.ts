import { getTokenData } from "@/helpers/getTokenData/getData";
import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  dbConnect();
  try {
    const userName = await getTokenData(request);

    return NextResponse.json(
      {
        success: true,
        message: "user found",
        data: userName.name,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
