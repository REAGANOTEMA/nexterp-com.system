import { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { AppHeader } from "./AppHeader";

interface AppShellProps {
  children: ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
  title?: string;
}

export function AppShell({ children, breadcrumbs, title }: AppShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <AppHeader breadcrumbs={breadcrumbs} title={title} />
      <main className="pl-sidebar pt-header">
        <div className="mx-auto max-w-[1440px] p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
