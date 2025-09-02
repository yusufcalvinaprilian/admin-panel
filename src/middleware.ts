import { NextResponse, type NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
	const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");
	const isAuthRoute = req.nextUrl.pathname === "/login" || req.nextUrl.pathname.startsWith("/api/login") || req.nextUrl.pathname.startsWith("/api/logout");
	const cookie = req.cookies.get("demo_session");

	if (isDashboard && !cookie) {
		const url = new URL("/login", req.url);
		url.searchParams.set("callbackUrl", req.nextUrl.pathname + req.nextUrl.search);
		return NextResponse.redirect(url);
	}
	if (isAuthRoute) return NextResponse.next();
	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/login", "/api/login", "/api/logout"],
};
