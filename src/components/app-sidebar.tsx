"use client";

import * as React from "react";
import { IconDashboard, IconUsers, IconSettings, IconHelp, IconSearch, IconDatabase, IconReport, IconFileDescription, IconFolder, IconChartBar, IconListDetails, IconInnerShadowTop } from "@tabler/icons-react";

import Link from "next/link";
import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";

const data = {
	user: {
		name: "Admin User",
		email: "admin@example.com",
		avatar: "/avatars/admin.jpg",
	},
	navMain: [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: IconDashboard,
		},
		{
			title: "Users",
			url: "/dashboard/users",
			icon: IconUsers,
		},
		{
			title: "Analytics",
			url: "/dashboard/analytics",
			icon: IconChartBar,
		},
		{
			title: "Reports",
			url: "/dashboard/reports",
			icon: IconReport,
		},
		{
			title: "Documents",
			url: "/dashboard/documents",
			icon: IconFileDescription,
		},
		{
			title: "Projects",
			url: "/dashboard/projects",
			icon: IconFolder,
		},
	],
	navClouds: [
		{
			title: "Management",
			icon: IconListDetails,
			isActive: true,
			url: "#",
			items: [
				{
					title: "User Management",
					url: "/dashboard/users",
				},
				{
					title: "Role Management",
					url: "/dashboard/roles",
				},
			],
		},
		{
			title: "Content",
			icon: IconFileDescription,
			url: "#",
			items: [
				{
					title: "Pages",
					url: "/dashboard/pages",
				},
				{
					title: "Media",
					url: "/dashboard/media",
				},
			],
		},
		{
			title: "System",
			icon: IconSettings,
			url: "#",
			items: [
				{
					title: "Settings",
					url: "/dashboard/settings",
				},
				{
					title: "Logs",
					url: "/dashboard/logs",
				},
			],
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "/dashboard/settings",
			icon: IconSettings,
		},
		{
			title: "Help & Support",
			url: "/dashboard/help",
			icon: IconHelp,
		},
		{
			title: "Search",
			url: "#",
			icon: IconSearch,
		},
	],
	documents: [
		{
			name: "Database",
			url: "/dashboard/database",
			icon: IconDatabase,
		},
		{
			name: "Reports",
			url: "/dashboard/reports",
			icon: IconReport,
		},
		{
			name: "Documentation",
			url: "/dashboard/docs",
			icon: IconFileDescription,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
							<Link href="/dashboard">
								<IconInnerShadowTop className="!size-5" />
								<span className="text-base font-semibold">Admin Panel</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavDocuments items={data.documents} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
