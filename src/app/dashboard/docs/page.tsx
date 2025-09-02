import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocsPage() {
	return (
		<SidebarProvider style={{ "--sidebar-width": "calc(var(--spacing) * 72)", "--header-height": "calc(var(--spacing) * 12)" } as React.CSSProperties}>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-1 flex-col gap-6 px-4 py-6 lg:px-6">
					<Card>
						<CardHeader>
							<CardTitle>Documentation</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">Internal documentation hub for your team and processes.</p>
						</CardContent>
					</Card>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
