import Link from "next/link";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { ThemeStatus } from "@/components/theme-status";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { IconCamera, IconLogout } from "@tabler/icons-react";

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
								<Tabs defaultValue="profile" className="space-y-4">
									<TabsList className="grid w-full grid-cols-4">
										<TabsTrigger value="profile">Profile</TabsTrigger>
										<TabsTrigger value="general">General</TabsTrigger>
										<TabsTrigger value="security">Security</TabsTrigger>
										<TabsTrigger value="notifications">Notifications</TabsTrigger>
									</TabsList>

									{/* Profile Tab */}
									<TabsContent value="profile" className="space-y-4">
										<Card>
											<CardHeader>
												<CardTitle>Profile Information</CardTitle>
												<CardDescription>Update your personal information and profile picture.</CardDescription>
											</CardHeader>
											<CardContent className="space-y-6">
												{/* Profile Picture */}
												<div className="flex items-center gap-6">
													<div className="relative">
														<Avatar className="h-20 w-20">
															<AvatarImage src="/avatars/admin.jpg" alt="Profile" />
															<AvatarFallback>AD</AvatarFallback>
														</Avatar>
														<Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
															<IconCamera className="h-4 w-4" />
														</Button>
													</div>
													<div className="space-y-1">
														<h3 className="text-lg font-medium">Admin User</h3>
														<p className="text-sm text-muted-foreground">admin@example.com</p>
														<Badge variant="secondary">Administrator</Badge>
													</div>
												</div>

												{/* Profile Form */}
												<div className="grid gap-4 md:grid-cols-2">
													<div className="space-y-2">
														<Label htmlFor="first-name">First Name</Label>
														<Input id="first-name" defaultValue="Admin" />
													</div>
													<div className="space-y-2">
														<Label htmlFor="last-name">Last Name</Label>
														<Input id="last-name" defaultValue="User" />
													</div>
													<div className="space-y-2">
														<Label htmlFor="email">Email</Label>
														<Input id="email" type="email" defaultValue="admin@example.com" />
													</div>
													<div className="space-y-2">
														<Label htmlFor="phone">Phone</Label>
														<Input id="phone" defaultValue="+1 (555) 123-4567" />
													</div>
													<div className="space-y-2">
														<Label htmlFor="location">Location</Label>
														<Input id="location" defaultValue="New York, NY" />
													</div>
													<div className="space-y-2">
														<Label htmlFor="timezone">Timezone</Label>
														<Input id="timezone" defaultValue="UTC-5 (Eastern Time)" />
													</div>
												</div>

												<div className="space-y-2">
													<Label htmlFor="bio">Bio</Label>
												</div>

												<div className="flex gap-2">
													<Button>Save Changes</Button>
													<Button variant="outline">Cancel</Button>
												</div>
											</CardContent>
										</Card>

										{/* Account Actions */}
										<Card>
											<CardHeader>
												<CardTitle>Account Actions</CardTitle>
												<CardDescription>Manage your account and session.</CardDescription>
											</CardHeader>
											<CardContent className="space-y-4">
												<div className="flex items-center justify-between">
													<div>
														<h4 className="font-medium">Logout</h4>
														<p className="text-sm text-muted-foreground">Sign out of your account</p>
													</div>
													<Link href="/logout">
														<Button variant="outline" size="sm">
															<IconLogout className="mr-2 h-4 w-4" />
															Logout
														</Button>
													</Link>
												</div>
											</CardContent>
										</Card>
									</TabsContent>

									{/* General Tab */}
									<TabsContent value="general" className="space-y-4">
										<Card>
											<CardHeader>
												<CardTitle>General Settings</CardTitle>
												<CardDescription>Configure general application settings.</CardDescription>
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

									{/* Security Tab */}
									<TabsContent value="security" className="space-y-4">
										<Card>
											<CardHeader>
												<CardTitle>Security Settings</CardTitle>
												<CardDescription>Manage your security preferences and authentication.</CardDescription>
											</CardHeader>
											<CardContent className="space-y-4">
												<div className="space-y-2">
													<Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
													<Input id="session-timeout" type="number" defaultValue="30" />
												</div>
												<div className="space-y-2">
													<Label htmlFor="current-password">Current Password</Label>
													<Input id="current-password" type="password" />
												</div>
												<div className="space-y-2">
													<Label htmlFor="new-password">New Password</Label>
													<Input id="new-password" type="password" />
												</div>
												<div className="space-y-2">
													<Label htmlFor="confirm-password">Confirm New Password</Label>
													<Input id="confirm-password" type="password" />
												</div>
												<Button>Update Security Settings</Button>
											</CardContent>
										</Card>
									</TabsContent>

									{/* Notifications Tab */}
									<TabsContent value="notifications" className="space-y-4">
										<Card>
											<CardHeader>
												<CardTitle>Notification Settings</CardTitle>
												<CardDescription>Configure your notification preferences.</CardDescription>
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
				<ThemeStatus />
			</SidebarInset>
		</SidebarProvider>
	);
}
