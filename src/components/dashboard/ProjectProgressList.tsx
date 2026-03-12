import { CheckCircle2, CircleDashed, Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type StageStatus = "complete" | "in_progress" | "pending";

interface ProjectStage {
  name: string;
  status: StageStatus;
  progress?: number;
}

interface ProjectData {
  id: string;
  name: string;
  client: string;
  stages: ProjectStage[];
  overallProgress: number;
}

const projects: ProjectData[] = [
  {
    id: "1",
    name: "School Management System",
    client: "Iganga Modern School",
    overallProgress: 72,
    stages: [
      { name: "Requirement Analysis", status: "complete" },
      { name: "UI Design", status: "complete" },
      { name: "Backend Development", status: "in_progress", progress: 72 },
      { name: "Testing & QA", status: "pending" },
      { name: "Deployment", status: "pending" },
    ],
  },
  {
    id: "2",
    name: "Hospital Management System",
    client: "St. Mary's Hospital",
    overallProgress: 45,
    stages: [
      { name: "Requirement Analysis", status: "complete" },
      { name: "UI Design", status: "in_progress", progress: 45 },
      { name: "Backend Development", status: "pending" },
      { name: "Testing & QA", status: "pending" },
      { name: "Deployment", status: "pending" },
    ],
  },
  {
    id: "3",
    name: "NGO Operations Portal",
    client: "Helping Hands Foundation",
    overallProgress: 91,
    stages: [
      { name: "Requirement Analysis", status: "complete" },
      { name: "UI Design", status: "complete" },
      { name: "Backend Development", status: "complete" },
      { name: "Testing & QA", status: "in_progress", progress: 91 },
      { name: "Deployment", status: "pending" },
    ],
  },
];

const StageIcon = ({ status }: { status: StageStatus }) => {
  if (status === "complete") return <CheckCircle2 className="h-3.5 w-3.5 text-status-success shrink-0" />;
  if (status === "in_progress") return <CircleDashed className="h-3.5 w-3.5 text-status-info shrink-0" />;
  return <Circle className="h-3.5 w-3.5 text-border shrink-0" />;
};

export function ProjectProgressList() {
  return (
    <div className="space-y-3">
      <p className="text-label-caps text-muted-foreground">Active Projects</p>
      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg bg-card p-5 shadow-card hover:shadow-card-hover transition-shadow duration-150 ease-custom"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-medium text-[13px] text-foreground leading-tight">{project.name}</p>
                <p className="text-[12px] text-muted-foreground mt-0.5">{project.client}</p>
              </div>
              <span className="font-mono text-[13px] font-semibold tabular-nums text-foreground whitespace-nowrap">
                {project.overallProgress}%
              </span>
            </div>

            <Progress
              value={project.overallProgress}
              className="h-1 mb-4 bg-secondary [&>div]:bg-foreground"
            />

            <ul className="space-y-2">
              {project.stages.map((stage) => (
                <li key={stage.name} className="flex items-center gap-2.5">
                  <StageIcon status={stage.status} />
                  <span
                    className={cn(
                      "flex-1 text-[12px]",
                      stage.status === "complete"
                        ? "text-muted-foreground line-through decoration-1"
                        : stage.status === "in_progress"
                        ? "text-foreground font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    {stage.name}
                  </span>
                  {stage.status === "in_progress" && stage.progress !== undefined && (
                    <span className="font-mono text-[11px] tabular-nums text-muted-foreground">
                      {stage.progress}%
                    </span>
                  )}
                  {stage.status === "complete" && (
                    <span className="text-[11px] text-status-success">Done</span>
                  )}
                  {stage.status === "pending" && (
                    <span className="text-[11px] text-muted-foreground">Pending</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
