import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/AppShell";
import { CheckCircle2, CircleDashed, Circle, Plus, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: "easeOut" as const },
});

type ProjectStatus = "development" | "testing" | "planning" | "completed" | "design";

const statusConfig: Record<ProjectStatus, { label: string; color: string }> = {
  planning: { label: "Planning", color: "text-status-warning" },
  design: { label: "Design", color: "text-status-info" },
  development: { label: "Development", color: "text-status-info" },
  testing: { label: "Testing", color: "text-status-warning" },
  completed: { label: "Completed", color: "text-status-success" },
};

const projects = [
  {
    id: "P-001",
    name: "School Management System",
    client: "Iganga Modern School",
    status: "development" as ProjectStatus,
    progress: 72,
    budget: "UGX 18,000,000",
    deadline: "Due in 14 days",
    team: ["KO", "AM", "JB"],
  },
  {
    id: "P-002",
    name: "Hospital Management System",
    client: "St. Mary's Hospital",
    status: "design" as ProjectStatus,
    progress: 45,
    budget: "UGX 24,000,000",
    deadline: "Due in 38 days",
    team: ["RO", "LN"],
  },
  {
    id: "P-003",
    name: "NGO Operations Portal",
    client: "Helping Hands Foundation",
    status: "testing" as ProjectStatus,
    progress: 91,
    budget: "UGX 12,000,000",
    deadline: "Due in 3 days",
    team: ["AM", "JB", "TK"],
  },
  {
    id: "P-004",
    name: "Hotel Booking Platform",
    client: "Kampala Hotel Group",
    status: "planning" as ProjectStatus,
    progress: 8,
    budget: "UGX 32,000,000",
    deadline: "Due in 90 days",
    team: ["RO"],
  },
  {
    id: "P-005",
    name: "Church Management App",
    client: "Calvary Christian Centre",
    status: "development" as ProjectStatus,
    progress: 55,
    budget: "UGX 9,500,000",
    deadline: "Due in 21 days",
    team: ["LN", "KO"],
  },
  {
    id: "P-006",
    name: "Transport Fleet Management",
    client: "Uganda Bus Lines Ltd",
    status: "completed" as ProjectStatus,
    progress: 100,
    budget: "UGX 15,000,000",
    deadline: "Delivered",
    team: ["AM", "TK", "JB"],
  },
];

export default function Projects() {
  return (
    <AppShell breadcrumbs={[{ label: "NextERP" }, { label: "Projects" }]}>
      <div className="space-y-6">
        <motion.div {...fadeIn(0)} className="flex items-center justify-between">
          <div>
            <h1 className="text-heading font-semibold text-foreground">Projects</h1>
            <p className="text-[13px] text-muted-foreground mt-1">
              {projects.length} projects · {projects.filter(p => p.status !== "completed").length} active
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1.5 text-[12px]">
              <Filter className="h-3 w-3" />
              Filter
            </Button>
            <Button size="sm" className="h-8 gap-1.5 text-[12px]">
              <Plus className="h-3 w-3" />
              New Project
            </Button>
          </div>
        </motion.div>

        {/* Projects Table */}
        <motion.div {...fadeIn(0.05)} className="rounded-lg bg-card shadow-card overflow-hidden">
          <div className="border-b border-border px-5 py-3 grid grid-cols-12 gap-4">
            <span className="col-span-1 text-label-caps text-muted-foreground">ID</span>
            <span className="col-span-3 text-label-caps text-muted-foreground">Project</span>
            <span className="col-span-2 text-label-caps text-muted-foreground hidden md:block">Client</span>
            <span className="col-span-2 text-label-caps text-muted-foreground hidden lg:block">Status</span>
            <span className="col-span-2 text-label-caps text-muted-foreground">Progress</span>
            <span className="col-span-1 text-label-caps text-muted-foreground hidden lg:block">Budget</span>
            <span className="col-span-1 text-label-caps text-muted-foreground hidden md:block">Team</span>
          </div>

          {projects.map((project, i) => {
            const cfg = statusConfig[project.status];
            return (
              <div
                key={project.id}
                className={cn(
                  "px-5 py-3.5 grid grid-cols-12 gap-4 items-center hover:bg-secondary/40 transition-colors duration-150 cursor-pointer",
                  i < projects.length - 1 ? "border-b border-border" : ""
                )}
              >
                <span className="col-span-1 font-mono text-[11px] text-muted-foreground">{project.id}</span>
                <div className="col-span-3">
                  <p className="text-[13px] font-medium text-foreground leading-tight truncate">{project.name}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5 md:hidden">{project.client}</p>
                  <p className={cn("text-[11px] mt-0.5 lg:hidden", cfg.color)}>{cfg.label}</p>
                </div>
                <span className="col-span-2 text-[12px] text-muted-foreground truncate hidden md:block">{project.client}</span>
                <span className={cn("col-span-2 text-[12px] font-medium hidden lg:flex items-center gap-1.5", cfg.color)}>
                  {project.status === "completed" ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : project.progress > 50 ? (
                    <CircleDashed className="h-3 w-3" />
                  ) : (
                    <Circle className="h-3 w-3" />
                  )}
                  {cfg.label}
                </span>
                <div className="col-span-2 flex items-center gap-2">
                  <Progress
                    value={project.progress}
                    className="h-1 flex-1 bg-secondary [&>div]:bg-foreground"
                  />
                  <span className="font-mono text-[11px] tabular-nums text-muted-foreground w-7 text-right">
                    {project.progress}%
                  </span>
                </div>
                <span className="col-span-1 font-mono text-[11px] text-muted-foreground hidden lg:block truncate">
                  {project.budget.replace("UGX ", "")}
                </span>
                <div className="col-span-1 hidden md:flex -space-x-1">
                  {project.team.slice(0, 3).map((initials) => (
                    <div
                      key={initials}
                      className="h-5 w-5 rounded-full bg-secondary border border-card flex items-center justify-center"
                    >
                      <span className="text-[9px] font-medium text-muted-foreground">{initials}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </AppShell>
  );
}
