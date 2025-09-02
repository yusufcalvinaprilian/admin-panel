"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
	const router = useRouter();
	const params = useSearchParams();
	const [email, setEmail] = useState("admin@example.com");
	const [password, setPassword] = useState("admin123");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError("");
		setLoading(true);
		const res = await fetch("/api/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		});
		setLoading(false);
		if (!res.ok) {
			setError("Email atau password salah");
			return;
		}
		const callbackUrl = params.get("callbackUrl") ?? "/dashboard";
		router.replace(callbackUrl);
	}

	return (
		<div className="min-h-svh flex items-center justify-center px-4">
			<Card className="w-full max-w-sm">
				<CardHeader>
					<CardTitle>Masuk</CardTitle>
				</CardHeader>
				<CardContent>
					<form className="grid gap-4" onSubmit={onSubmit}>
						<div className="grid gap-2">
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
						</div>
						{error && <div className="text-sm text-red-600">{error}</div>}
						<Button type="submit" disabled={loading}>
							{loading ? "Memproses..." : "Masuk"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
