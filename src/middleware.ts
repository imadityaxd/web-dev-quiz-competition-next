import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";
  const isPublicPath =
    path === "/about-competition" ||
    path === "/start-quiz" ||
    path === "/register";

  // if (isPublicPath && token) {
  //   return NextResponse.redirect(new URL("/play-quiz", request.nextUrl));
  // }
  // if (!isPublicPath && !token) {
  //   return NextResponse.redirect(new URL("/", request.nextUrl));
  // }
}

export const config = {
  matcher: [
    // "/",
    // "/about-competition",
    // "/start-quiz",
    // "/register",
    // "/play-quiz",
  ],
};
