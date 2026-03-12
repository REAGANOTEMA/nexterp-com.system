import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  DollarSign,
  GraduationCap,
  Megaphone,
  UserCheck,
  Package,
  BarChart3,
  Settings,
  Building2,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Projects", icon: FolderKanban, to: "/projects" },
  { label: "Clients", icon: Users, to: "/clients" },
  { label: "Finance", icon: DollarSign, to: "/finance" },
  { label: "Training Academy", icon: GraduationCap, to: "/academy" },
  { label: "Marketing & CRM", icon: Megaphone, to: "/marketing" },
  { label: "Human Resources", icon: UserCheck, to: "/hr" },
  { label: "Assets", icon: Package, to: "/assets" },
  { label: "Reports", icon: BarChart3, to: "/reports" },
  { label: "Settings", icon: Settings, to: "/settings" },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-sidebar flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="flex h-header items-center gap-2.5 border-b border-border px-5">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground">
          <Building2 className="h-4 w-4 text-background" />
        </div>
        <div>
          <p className="text-[13px] font-semibold tracking-tight text-foreground leading-none">NextERP</p>
          <p className="mt-0.5 text-[10px] text-muted-foreground leading-none tracking-wide">Systems</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="text-label-caps text-muted-foreground px-2 mb-2">Navigation</p>
        <ul className="space-y-0.5">
          {navItems.map((item) => {
            const isActive =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={cn(
                    "group flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] font-normal transition-all duration-150 ease-custom",
                    isActive
                      ? "bg-foreground text-background font-medium"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <item.icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="flex-1">{item.label}</span>
                  {isActive && <ChevronRight className="h-3 w-3 opacity-50" />}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-border px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-[11px] font-medium text-muted-foreground">RO</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="truncate text-[12px] font-medium text-foreground leading-tight">Reagan Otema</p>
            <p className="truncate text-[11px] text-muted-foreground leading-tight">Director</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
