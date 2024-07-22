import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get("token")?.value || "";

  // Redirect to /start-quiz if trying to access /play-quiz without a token
  if (path === "/play-quiz" && !token) {
    return NextResponse.redirect(new URL("/start-quiz", request.nextUrl));
  }

  // Redirect to / if trying to access /register with a token
  if (path === "/register" && token) {
    return NextResponse.redirect(new URL("/play-quiz", request.nextUrl));
  }

  // Return NextResponse.next() to allow other requests to pass through the middleware
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/about-competition",
    "/start-quiz",
    "/register",
    "/play-quiz",
  ],
};
