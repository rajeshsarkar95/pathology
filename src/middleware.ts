import { NextRequest, NextResponse } from "next/server";

const PROTECTED_ROUTES = ["/dashboard","/admin"];
const AUTH_ROUTES = ["/login","/signup"];

export function middleware(req:NextRequest){
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token")?.value;

  const isProtected = PROTECTED_ROUTES.some((r) => pathname.startsWith(r));
  const isAuthRoute = AUTH_ROUTES.some((r) => pathname.startsWith(r));
  if (isProtected && !token){
    return NextResponse.redirect(new URL("/login",req.url));
  }
  if (isAuthRoute && token){
    return NextResponse.redirect(new URL("/dashboard",req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*", "/login", "/signup"],
};
