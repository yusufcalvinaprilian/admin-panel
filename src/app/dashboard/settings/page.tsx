import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
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
								<h1 className="text-3xl font-bold tracking-tight">Settings</h1>
								<p className="text-muted-foreground">Manage your application settings and preferences.</p>
							</div>

							<div className="px-4 lg:px-6">
								<Tabs defaultValue="general" className="space-y-4">
									<TabsList>
										<TabsTrigger value="general">General</TabsTrigger>
										<TabsTrigger value="security">Security</TabsTrigger>
										<TabsTrigger value="notifications">Notifications</TabsTrigger>
									</TabsList>

									<TabsContent value="general" className="space-y-4">
										<Card>
											<CardHeader>
												<CardTitle>General Settings</CardTitle>
											</CardHeader>
											<CardContent className="space-y-4">
												<div className="space-y-2">
													<Label htmlFor="site-name">Site Name</Label>
													<Input id="site-name" defaultValue="Admin Panel" />
												</div>
												<div className="space-y-2">
													<Label htmlFor="site-description">Site Description</Label>
													<Input id="site-description" defaultValue="Modern Admin Panel" />
												</div>
												<Button>Save Changes</Button>
											</CardContent>
										</Card>
									</TabsContent>

									<TabsContent value="security" className="space-y-4">
										<Card>
											<CardHeader>
												<CardTitle>Security Settings</CardTitle>
											</CardHeader>
											<CardContent className="space-y-4">
												<div className="space-y-2">
													<Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
													<Input id="session-timeout" type="number" defaultValue="30" />
												</div>
												<Button>Update Security Settings</Button>
											</CardContent>
										</Card>
									</TabsContent>

									<TabsContent value="notifications" className="space-y-4">
										<Card>
											<CardHeader>
												<CardTitle>Notification Settings</CardTitle>
											</CardHeader>
											<CardContent className="space-y-4">
												<p className="text-sm text-muted-foreground">Configure your notification preferences.</p>
												<Button>Save Preferences</Button>
											</CardContent>
										</Card>
									</TabsContent>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
}
