import { Bell, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AppHeaderProps {
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function AppHeader({ title, breadcrumbs }: AppHeaderProps) {
  return (
    <header className="fixed left-sidebar top-0 right-0 z-20 flex h-header items-center justify-between border-b border-border bg-background px-6">
      {/* Breadcrumbs / Title */}
      <div className="flex items-center gap-2">
        {breadcrumbs ? (
          <nav className="flex items-center gap-1.5" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-border">/</span>}
                <span
                  className={
                    i === breadcrumbs.length - 1
                      ? "text-[13px] font-medium text-foreground"
                      : "text-[13px] text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-150"
                  }
                >
                  {crumb.label}
                </span>
              </span>
            ))}
          </nav>
        ) : (
          <h1 className="text-[13px] font-medium text-foreground">{title}</h1>
        )}
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search..."
            className="h-8 w-56 rounded-md border-border bg-secondary pl-8 text-[13px] placeholder:text-muted-foreground focus-visible:ring-1"
          />
        </div>

        {/* Notifications */}
        <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-status-danger" />
        </Button>

        {/* Profile */}
        <button className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] transition-colors duration-150 hover:bg-secondary">
          <div className="h-6 w-6 rounded-full bg-foreground flex items-center justify-center">
            <span className="text-[10px] font-medium text-background">RO</span>
          </div>
          <span className="hidden font-medium text-foreground sm:block">Reagan</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
