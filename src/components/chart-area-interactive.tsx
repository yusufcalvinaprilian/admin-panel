"use client";

import * as React from "react";
import dynamic from "next/dynamic";

import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Dynamic import untuk menghindari SSR issues
const ChartComponent = dynamic(() => import("@/components/chart-component"), {
	ssr: false,
	loading: () => (
		<div className="aspect-auto h-[250px] w-full flex items-center justify-center">
			<div className="text-muted-foreground">Loading chart...</div>
		</div>
	),
});

export const description = "An interactive area chart";

export function ChartAreaInteractive() {
	const isMobile = useIsMobile();
	const [timeRange, setTimeRange] = React.useState("90d");
	const [mounted, setMounted] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);
		if (isMobile) {
			setTimeRange("7d");
		}
	}, [isMobile]);

	if (!mounted) {
		return (
			<Card className="@container/card">
				<CardHeader>
					<CardTitle>Total Visitors</CardTitle>
					<CardDescription>Loading chart...</CardDescription>
				</CardHeader>
				<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
					<div className="aspect-auto h-[250px] w-full flex items-center justify-center">
						<div className="text-muted-foreground">Loading...</div>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="@container/card">
			<CardHeader>
				<CardTitle>Total Visitors</CardTitle>
				<CardDescription>
					<span className="hidden @[540px]/card:block">Total for the last 3 months</span>
					<span className="@[540px]/card:hidden">Last 3 months</span>
				</CardDescription>
				<CardAction>
					<ToggleGroup type="single" value={timeRange} onValueChange={setTimeRange} variant="outline" className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex">
						<ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
						<ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
						<ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
					</ToggleGroup>
					<Select value={timeRange} onValueChange={setTimeRange}>
						<SelectTrigger className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden" size="sm" aria-label="Select a value">
							<SelectValue placeholder="Last 3 months" />
						</SelectTrigger>
						<SelectContent className="rounded-xl">
							<SelectItem value="90d" className="rounded-lg">
								Last 3 months
							</SelectItem>
							<SelectItem value="30d" className="rounded-lg">
								Last 30 days
							</SelectItem>
							<SelectItem value="7d" className="rounded-lg">
								Last 7 days
							</SelectItem>
						</SelectContent>
					</Select>
				</CardAction>
			</CardHeader>
			<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
				<ChartComponent timeRange={timeRange} />
			</CardContent>
		</Card>
	);
}
