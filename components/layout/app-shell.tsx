"use client"

import type * as React from "react"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { JCBSidebar } from "@/components/sidebar/sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

interface AppShellProps {
  children: React.ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <JCBSidebar />
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
            <SidebarTrigger />
            <div className="flex-1">
              <h1 className="text-xl font-semibold md:text-2xl">JCB Rental Management</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </header>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}

