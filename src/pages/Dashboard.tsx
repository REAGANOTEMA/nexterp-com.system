import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/AppShell";
import { KPICard } from "@/components/dashboard/KPICard";
import { DirectorCards } from "@/components/dashboard/DirectorCards";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { ProjectProgressList } from "@/components/dashboard/ProjectProgressList";
import { ClientAcquisitionChart } from "@/components/dashboard/ClientAcquisitionChart";
import {
  DollarSign,
  Users,
  FolderKanban,
  GraduationCap,
  AlertCircle,
  Clock,
  CheckCircle2,
} from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: "easeOut" as const },
});

const recentActivity = [
  { id: 1, message: "Invoice #047 paid — St. Mary's Hospital", amount: "UGX 4,000,000", time: "2h ago", icon: CheckCircle2, color: "text-status-success" },
  { id: 2, message: "School Management System — Dev milestone reached", time: "5h ago", icon: FolderKanban, color: "text-status-info" },
  { id: 3, message: "NGO Portal deployment deadline in 3 days", time: "1d ago", icon: AlertCircle, color: "text-status-warning" },
  { id: 4, message: "New client onboarded — Kampala Hotel Group", time: "2d ago", icon: Users, color: "text-muted-foreground" },
  { id: 5, message: "12 new students enrolled in Web Dev Bootcamp", time: "2d ago", icon: GraduationCap, color: "text-muted-foreground" },
];

export default function Dashboard() {
  return (
    <AppShell breadcrumbs={[{ label: "NextERP" }, { label: "Executive Dashboard" }]}>
      <div className="space-y-6">
        {/* Page Title */}
        <motion.div {...fadeIn(0)}>
          <h1 className="text-heading font-semibold text-foreground">Executive Dashboard</h1>
          <p className="text-[13px] text-muted-foreground mt-1">
            NextERP Systems — Fiscal Year 2024/25 · Last updated just now
          </p>
        </motion.div>

        {/* KPI Row */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            {
              label: "Revenue This Month",
              value: "45.1M",
              subValue: "UGX 45,102,800",
              change: 12.4,
              changeLabel: "vs last month",
              icon: <DollarSign className="h-4 w-4" />,
            },
            {
              label: "Active Clients",
              value: "24",
              subValue: "3 new this month",
              change: 14.3,
              changeLabel: "vs last month",
              icon: <Users className="h-4 w-4" />,
            },
            {
              label: "Active Projects",
              value: "17",
              subValue: "4 due this week",
              change: -5.9,
              changeLabel: "vs last month",
              icon: <FolderKanban className="h-4 w-4" />,
            },
            {
              label: "Academy Students",
              value: "63",
              subValue: "Enrolled this term",
              change: 21.2,
              changeLabel: "vs last term",
              icon: <GraduationCap className="h-4 w-4" />,
            },
          ].map((kpi, i) => (
            <motion.div key={kpi.label} {...fadeIn(i * 0.05)}>
              <KPICard {...kpi} />
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid gap-4 lg:grid-cols-2">
          <motion.div {...fadeIn(0.2)}>
            <RevenueChart />
          </motion.div>
          <motion.div {...fadeIn(0.25)}>
            <ClientAcquisitionChart />
          </motion.div>
        </div>

        {/* Directors */}
        <motion.div {...fadeIn(0.3)}>
          <DirectorCards />
        </motion.div>

        {/* Projects + Activity */}
        <div className="grid gap-4 lg:grid-cols-2">
          <motion.div {...fadeIn(0.35)}>
            <ProjectProgressList />
          </motion.div>

          <motion.div {...fadeIn(0.4)}>
            <div className="space-y-3">
              <p className="text-label-caps text-muted-foreground">Recent Activity</p>
              <div className="rounded-lg bg-card shadow-card overflow-hidden">
                {recentActivity.map((item, i) => (
                  <div
                    key={item.id}
                    className={`flex items-start gap-3 px-5 py-3.5 hover:bg-secondary/50 transition-colors duration-150 ${
                      i < recentActivity.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <item.icon className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${item.color}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-[12px] text-foreground leading-snug">{item.message}</p>
                      {item.amount && (
                        <p className="font-mono text-[11px] text-status-success tabular-nums mt-0.5">{item.amount}</p>
                      )}
                    </div>
                    <span className="text-[11px] text-muted-foreground whitespace-nowrap flex items-center gap-1">
                      <Clock className="h-2.5 w-2.5" />
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Profit Distribution */}
              <div className="rounded-lg bg-card shadow-card p-5">
                <p className="text-label-caps text-muted-foreground mb-3">Profit Distribution — Dec 2024</p>
                <div className="space-y-3">
                  {[
                    { label: "Reagan Otema (40%)", value: 11241120, pct: 40 },
                    { label: "Binsobedde Najiib (40%)", value: 11241120, pct: 40 },
                    { label: "Retained Earnings (20%)", value: 5620560, pct: 20 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[12px] text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-[12px] tabular-nums text-foreground">
                          UGX {item.value.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-foreground transition-all duration-500"
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AppShell>
  );
}
