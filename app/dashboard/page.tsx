"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  const [selectedMail, setSelectedMail] = useState<{
    name: string
    email: string
    subject: string
    date: string
    teaser: string
  } | null>(null)

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "350px",
      } as React.CSSProperties}
    >
      <AppSidebar onMailSelect={setSelectedMail} />
      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">All Inboxes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Inbox</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {selectedMail ? (
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{selectedMail.subject}</h2>
                <span className="text-sm text-muted-foreground">{selectedMail.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-medium">{selectedMail.name}</span>
                <span>{selectedMail.email}</span>
              </div>
              <p className="whitespace-pre-wrap text-base">{selectedMail.teaser}</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[calc(100vh-8rem)]">
              <p className="text-lg text-muted-foreground">Select an email to view its content</p>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
