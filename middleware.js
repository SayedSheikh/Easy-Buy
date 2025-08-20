// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // protected routes
  const protectedPaths = ["/dashboard", "/profile", "/protected-page"];
  const isProtected = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtected && !token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("error", "unauthorized");
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname); // save original page
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/protected-page/:path*"],
};
