import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/AppShell";
import { GraduationCap, Users, BookOpen, Award, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: "easeOut" as const },
});

const courses = [
  { id: "C-001", title: "Web Development Bootcamp", trainer: "Reagan Otema", students: 18, duration: "12 weeks", price: "UGX 250,000", status: "active" },
  { id: "C-002", title: "Database Administration (PostgreSQL)", trainer: "Binsobedde Najiib", students: 12, duration: "8 weeks", price: "UGX 180,000", status: "active" },
  { id: "C-003", title: "UI/UX Design Fundamentals", trainer: "Aisha Kamara", students: 15, duration: "6 weeks", price: "UGX 150,000", status: "active" },
  { id: "C-004", title: "Network & Systems Administration", trainer: "James Opiyo", students: 10, duration: "10 weeks", price: "UGX 220,000", status: "active" },
  { id: "C-005", title: "Digital Marketing & SEO", trainer: "Lydia Nakato", students: 8, duration: "4 weeks", price: "UGX 120,000", status: "upcoming" },
];

export default function Academy() {
  return (
    <AppShell breadcrumbs={[{ label: "NextERP" }, { label: "Training Academy" }]}>
      <div className="space-y-6">
        <motion.div {...fadeIn(0)} className="flex items-center justify-between">
          <div>
            <h1 className="text-heading font-semibold text-foreground">Training Academy</h1>
            <p className="text-[13px] text-muted-foreground mt-1">ICT training programs · Current term</p>
          </div>
          <Button size="sm" className="h-8 gap-1.5 text-[12px]">
            <Plus className="h-3 w-3" />
            New Course
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeIn(0.05)} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            { label: "Total Students", value: "63", icon: Users },
            { label: "Active Courses", value: "4", icon: BookOpen },
            { label: "Certificates Issued", value: "127", icon: Award },
            { label: "Revenue (Term)", value: "UGX 14.2M", icon: GraduationCap },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg bg-card p-5 shadow-card flex items-center gap-3">
              <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center shrink-0">
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <p className="font-mono text-[1.25rem] font-semibold text-foreground tabular-nums leading-none">{stat.value}</p>
                <p className="text-[12px] text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Courses */}
        <motion.div {...fadeIn(0.1)}>
          <p className="text-label-caps text-muted-foreground mb-3">Courses</p>
          <div className="rounded-lg bg-card shadow-card overflow-hidden">
            <div className="border-b border-border px-5 py-3 grid grid-cols-12 gap-4">
              <span className="col-span-1 text-label-caps text-muted-foreground">ID</span>
              <span className="col-span-4 text-label-caps text-muted-foreground">Course</span>
              <span className="col-span-2 text-label-caps text-muted-foreground hidden md:block">Trainer</span>
              <span className="col-span-1 text-label-caps text-muted-foreground">Students</span>
              <span className="col-span-2 text-label-caps text-muted-foreground hidden lg:block">Duration</span>
              <span className="col-span-1 text-label-caps text-muted-foreground hidden lg:block">Fee</span>
              <span className="col-span-1 text-label-caps text-muted-foreground">Status</span>
            </div>
            {courses.map((course, i) => (
              <div
                key={course.id}
                className={cn("px-5 py-3.5 grid grid-cols-12 gap-4 items-center hover:bg-secondary/40 transition-colors duration-150", i < courses.length - 1 ? "border-b border-border" : "")}
              >
                <span className="col-span-1 font-mono text-[11px] text-muted-foreground">{course.id}</span>
                <span className="col-span-4 text-[13px] font-medium text-foreground">{course.title}</span>
                <span className="col-span-2 text-[12px] text-muted-foreground hidden md:block">{course.trainer}</span>
                <span className="col-span-1 font-mono text-[13px] text-foreground tabular-nums">{course.students}</span>
                <span className="col-span-2 text-[12px] text-muted-foreground hidden lg:block">{course.duration}</span>
                <span className="col-span-1 font-mono text-[11px] text-muted-foreground hidden lg:block">{course.price.replace("UGX ", "")}</span>
                <span className={cn("col-span-1 text-[12px] font-medium", course.status === "active" ? "text-status-success" : "text-status-warning")}>
                  {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppShell>
  );
}
