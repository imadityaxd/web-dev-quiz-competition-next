import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export function getTokenData(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.JWT_TOKEN_SECRET!);
    return decodedToken;
  } catch (error: any) {
    throw new Error(error.message);
  }
}