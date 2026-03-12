import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";

const clientData = [
  { month: "Jul", new: 3, retained: 18 },
  { month: "Aug", new: 5, retained: 19 },
  { month: "Sep", new: 2, retained: 20 },
  { month: "Oct", new: 6, retained: 21 },
  { month: "Nov", new: 4, retained: 22 },
  { month: "Dec", new: 7, retained: 24 },
];

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border border-border bg-card p-3 shadow-card text-[12px]">
        <p className="font-medium text-foreground mb-1">{label}</p>
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center justify-between gap-4">
            <span className="text-muted-foreground capitalize">{entry.name}</span>
            <span className="font-mono font-medium tabular-nums" style={{ color: entry.color }}>
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function ClientAcquisitionChart() {
  return (
    <div className="rounded-lg bg-card p-5 shadow-card">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-label-caps text-muted-foreground mb-1">Client Acquisition</p>
          <p className="font-semibold text-foreground">New vs Retained</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-sm bg-foreground" />
            <span className="text-[12px] text-muted-foreground">New</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-sm bg-secondary-foreground/30" />
            <span className="text-[12px] text-muted-foreground">Retained</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={clientData} margin={{ top: 4, right: 0, left: 0, bottom: 0 }} barSize={10} barGap={3}>
          <CartesianGrid vertical={false} stroke="hsl(240 5.9% 90%)" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 11, fill: "hsl(240 3.8% 46.1%)" }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "hsl(240 3.8% 46.1%)" }}
            tickLine={false}
            axisLine={false}
            width={24}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="retained" fill="hsl(240 4.8% 85%)" radius={[3, 3, 0, 0]} />
          <Bar dataKey="new" fill="hsl(240 5.9% 10%)" radius={[3, 3, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
