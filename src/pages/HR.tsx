import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/AppShell";
import { Users, UserCheck, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: "easeOut" as const },
});

const employees = [
  { id: "E-001", name: "Reagan Otema", position: "Co-Founder & Director", dept: "Management", salary: "UGX 2,500,000", status: "active", tasks: 8, completion: 88 },
  { id: "E-002", name: "Binsobedde Najiib", position: "Co-Founder & Director", dept: "Management", salary: "UGX 2,500,000", status: "active", tasks: 6, completion: 92 },
  { id: "E-003", name: "Aisha Kamara", position: "Lead Designer", dept: "Development", salary: "UGX 1,200,000", status: "active", tasks: 12, completion: 75 },
  { id: "E-004", name: "James Opiyo", position: "Backend Developer", dept: "Development", salary: "UGX 1,400,000", status: "active", tasks: 15, completion: 68 },
  { id: "E-005", name: "Lydia Nakato", position: "Marketing Lead", dept: "Marketing", salary: "UGX 1,000,000", status: "active", tasks: 9, completion: 83 },
  { id: "E-006", name: "Kenneth Owino", position: "Finance Officer", dept: "Finance", salary: "UGX 1,100,000", status: "active", tasks: 7, completion: 91 },
  { id: "E-007", name: "Amina Tumwine", position: "Trainer", dept: "Academy", salary: "UGX 900,000", status: "on_leave", tasks: 4, completion: 60 },
];

export default function HR() {
  return (
    <AppShell breadcrumbs={[{ label: "NextERP" }, { label: "Human Resources" }]}>
      <div className="space-y-6">
        <motion.div {...fadeIn(0)} className="flex items-center justify-between">
          <div>
            <h1 className="text-heading font-semibold text-foreground">Human Resources</h1>
            <p className="text-[13px] text-muted-foreground mt-1">Staff management · Payroll · Attendance</p>
          </div>
          <Button size="sm" className="h-8 gap-1.5 text-[12px]">
            <Plus className="h-3 w-3" />
            Add Employee
          </Button>
        </motion.div>

        <motion.div {...fadeIn(0.05)} className="grid grid-cols-3 gap-4">
          {[
            { label: "Total Staff", value: String(employees.length), icon: Users },
            { label: "Active", value: String(employees.filter(e => e.status === "active").length), icon: UserCheck },
            { label: "On Leave", value: String(employees.filter(e => e.status === "on_leave").length), icon: Clock },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-card p-5 shadow-card flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-mono text-[1.25rem] font-semibold text-foreground tabular-nums leading-none">{stat.value}</p>
                <p className="text-[12px] text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeIn(0.1)}>
          <p className="text-label-caps text-muted-foreground mb-3">Employee Directory</p>
          <div className="rounded-lg bg-card shadow-card overflow-hidden">
            <div className="border-b border-border px-5 py-3 grid grid-cols-12 gap-4">
              <span className="col-span-1 text-label-caps text-muted-foreground">ID</span>
              <span className="col-span-3 text-label-caps text-muted-foreground">Employee</span>
              <span className="col-span-2 text-label-caps text-muted-foreground hidden md:block">Department</span>
              <span className="col-span-2 text-label-caps text-muted-foreground hidden lg:block">Salary</span>
              <span className="col-span-2 text-label-caps text-muted-foreground">Performance</span>
              <span className="col-span-1 text-label-caps text-muted-foreground">Tasks</span>
              <span className="col-span-1 text-label-caps text-muted-foreground">Status</span>
            </div>
            {employees.map((emp, i) => (
              <div
                key={emp.id}
                className={cn("px-5 py-3.5 grid grid-cols-12 gap-4 items-center hover:bg-secondary/40 transition-colors duration-150", i < employees.length - 1 ? "border-b border-border" : "")}
              >
                <span className="col-span-1 font-mono text-[11px] text-muted-foreground">{emp.id}</span>
                <div className="col-span-3">
                  <p className="text-[13px] font-medium text-foreground leading-tight">{emp.name}</p>
                  <p className="text-[11px] text-muted-foreground">{emp.position}</p>
                </div>
                <span className="col-span-2 text-[12px] text-muted-foreground hidden md:block">{emp.dept}</span>
                <span className="col-span-2 font-mono text-[11px] text-muted-foreground hidden lg:block">{emp.salary}</span>
                <div className="col-span-2 flex items-center gap-2">
                  <Progress value={emp.completion} className="h-1 flex-1 bg-secondary [&>div]:bg-foreground" />
                  <span className="font-mono text-[11px] tabular-nums text-muted-foreground">{emp.completion}%</span>
                </div>
                <span className="col-span-1 font-mono text-[12px] text-foreground tabular-nums">{emp.tasks}</span>
                <span className={cn("col-span-1 text-[12px] font-medium", emp.status === "active" ? "text-status-success" : "text-status-warning")}>
                  {emp.status === "active" ? "Active" : "Leave"}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppShell>
  );
}
