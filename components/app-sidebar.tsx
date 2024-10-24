"use client"

import * as React from "react"
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Home,
  MessageCircleQuestion,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react"

import { NavFavorites } from "@/components/nav-favorites"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavWorkspaces } from "@/components/nav-workspaces"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,

    },
  ],
  navSecondary: [
    {
      title: "Plan Meeting",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Projecten",
      url: "/projecten",
      icon: Blocks,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: "Over Mij",
      url: "/overmij",
      emoji: "",
    },
    {
      name: "Contact",
      url: "/contact",
      emoji: "",
    },
    {
      name: "Projecten",
      url: "/projecten",
      emoji: "",
    },
    {
      name: "Skills",
      url: "/skills",
      emoji: "",
    },
  ],
  workspaces: [
    {
      name: "Stonks Pizza",
      url: "/overmij",
      emoji: "",
    },
    {
      name: "Summa Move",
      url: "/contact",
      emoji: "",
    },
    {
      name: "Werk Planner",
      url: "/werkplanner",
      emoji: "",
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
