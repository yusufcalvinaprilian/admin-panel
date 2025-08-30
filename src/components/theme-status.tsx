"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeStatus() {
	const [mounted, setMounted] = useState(false);
	const { theme, systemTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const currentTheme = theme === "system" ? systemTheme : theme;

	return (
		<div className="fixed bottom-4 right-4 bg-background border border-border rounded-lg p-3 shadow-lg z-50">
			<div className="text-sm font-medium">Theme: {currentTheme}</div>
			<div className="text-xs text-muted-foreground">{theme === "system" ? "System preference" : "Manual selection"}</div>
		</div>
	);
}
