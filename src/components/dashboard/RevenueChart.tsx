import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

const data = [
  { month: "Jul", revenue: 28500000, expenses: 12000000 },
  { month: "Aug", revenue: 31200000, expenses: 13500000 },
  { month: "Sep", revenue: 27800000, expenses: 11200000 },
  { month: "Oct", revenue: 38000000, expenses: 14000000 },
  { month: "Nov", revenue: 41500000, expenses: 15200000 },
  { month: "Dec", revenue: 45102800, expenses: 16800000 },
];

const formatUGX = (value: number) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return value.toString();
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-border bg-card p-3 shadow-card text-[12px]">
        <p className="font-medium text-foreground mb-2">{label}</p>
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground">{entry.name === "revenue" ? "Revenue" : "Expenses"}</span>
            <span className="font-mono font-medium tabular-nums" style={{ color: entry.color }}>
              UGX {entry.value?.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function RevenueChart() {
  return (
    <div className="rounded-lg bg-card p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-label-caps text-muted-foreground mb-1">Financial Performance</p>
          <p className="font-semibold text-foreground">Revenue vs Expenses</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-foreground" />
            <span className="text-[12px] text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-status-danger/50" />
            <span className="text-[12px] text-muted-foreground">Expenses</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(240 5.9% 10%)" stopOpacity={0.12} />
              <stop offset="95%" stopColor="hsl(240 5.9% 10%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(0 84.2% 60.2%)" stopOpacity={0.1} />
              <stop offset="95%" stopColor="hsl(0 84.2% 60.2%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="hsl(240 5.9% 90%)" strokeDasharray="0" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "hsl(240 3.8% 46.1%)" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "hsl(240 3.8% 46.1%)", fontFamily: "Geist Mono, monospace" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatUGX}
            width={44}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="hsl(240 5.9% 10%)"
            strokeWidth={2}
            fill="url(#revGrad)"
            dot={false}
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke="hsl(0 84.2% 60.2%)"
            strokeWidth={1.5}
            fill="url(#expGrad)"
            dot={false}
            strokeDasharray="4 2"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
