import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function DocumentsPage() {
	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)",
				} as React.CSSProperties
			}
		>
			<AppSidebar variant="inset" />
			<SidebarInset>
				<SiteHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<div className="px-4 lg:px-6">
								<h1 className="text-3xl font-bold tracking-tight">Documents</h1>
								<p className="text-muted-foreground">Manage and organize your application documents.</p>
							</div>

							<div className="px-4 lg:px-6">
								<Card>
									<CardHeader>
										<CardTitle>Document Management</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="space-y-4">
											<div className="flex items-center justify-between p-4 border rounded-lg">
												<div>
													<h3 className="font-medium">User Guide.pdf</h3>
													<p className="text-sm text-muted-foreground">Documentation</p>
												</div>
												<div className="flex items-center space-x-4">
													<Badge variant="outline">PDF</Badge>
													<Button variant="outline" size="sm">
														Download
													</Button>
												</div>
											</div>
											<div className="flex items-center justify-between p-4 border rounded-lg">
												<div>
													<h3 className="font-medium">API Documentation.docx</h3>
													<p className="text-sm text-muted-foreground">Technical</p>
												</div>
												<div className="flex items-center space-x-4">
													<Badge variant="outline">DOCX</Badge>
													<Button variant="outline" size="sm">
														Download
													</Button>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
