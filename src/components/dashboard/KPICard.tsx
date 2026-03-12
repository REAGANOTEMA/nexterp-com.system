import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string;
  subValue?: string;
  change?: number;
  changeLabel?: string;
  icon?: ReactNode;
  className?: string;
}

export function KPICard({ label, value, subValue, change, changeLabel, icon, className }: KPICardProps) {
  const isPositive = change !== undefined && change >= 0;

  return (
    <div
      className={cn(
        "rounded-lg bg-card p-5 transition-shadow duration-150 ease-custom shadow-card hover:shadow-card-hover",
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-label-caps text-muted-foreground mb-2">{label}</p>
          <p className="font-mono text-[1.625rem] font-semibold text-foreground leading-none tabular-nums tracking-tight">
            {value}
          </p>
          {subValue && (
            <p className="mt-1 text-[12px] text-muted-foreground">{subValue}</p>
          )}
        </div>
        {icon && (
          <div className="h-8 w-8 rounded-md bg-secondary flex items-center justify-center text-muted-foreground shrink-0 ml-3">
            {icon}
          </div>
        )}
      </div>
      {change !== undefined && (
        <div className="mt-3 flex items-center gap-1.5 border-t border-border pt-3">
          {isPositive ? (
            <TrendingUp className="h-3.5 w-3.5 text-status-success" />
          ) : (
            <TrendingDown className="h-3.5 w-3.5 text-status-danger" />
          )}
          <span
            className={cn(
              "font-mono text-[12px] tabular-nums font-medium",
              isPositive ? "text-status-success" : "text-status-danger"
            )}
          >
            {isPositive ? "+" : ""}{change}%
          </span>
          <span className="text-[12px] text-muted-foreground">{changeLabel}</span>
        </div>
      )}
    </div>
  );
}
