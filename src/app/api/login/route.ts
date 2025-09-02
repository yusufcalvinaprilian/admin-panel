import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { email, password } = await request.json();
		// Demo user credentials
		const demoEmail = "admin@example.com";
		const demoPassword = "admin123";

		if (email === demoEmail && password === demoPassword) {
			const res = NextResponse.json({ ok: true });
			res.headers.append("Set-Cookie", `demo_session=${encodeURIComponent(email)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24}`);
			return res;
		}
		return NextResponse.json({ ok: false, message: "Invalid credentials" }, { status: 401 });
	} catch (e) {
		return NextResponse.json({ ok: false, message: "Bad request" }, { status: 400 });
	}
}
