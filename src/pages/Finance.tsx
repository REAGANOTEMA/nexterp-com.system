import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/AppShell";
import { TrendingUp, TrendingDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, BarChart, Bar,
} from "recharts";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: "easeOut" as const },
});

const monthlyData = [
  { month: "Jul", income: 28500000, expenses: 12000000, profit: 16500000 },
  { month: "Aug", income: 31200000, expenses: 13500000, profit: 17700000 },
  { month: "Sep", income: 27800000, expenses: 11200000, profit: 16600000 },
  { month: "Oct", income: 38000000, expenses: 14000000, profit: 24000000 },
  { month: "Nov", income: 41500000, expenses: 15200000, profit: 26300000 },
  { month: "Dec", income: 45102800, expenses: 16800000, profit: 28302800 },
];

const invoices = [
  { id: "INV-047", client: "St. Mary's Hospital", amount: "UGX 4,000,000", status: "paid", date: "Dec 28" },
  { id: "INV-048", client: "Iganga Modern School", amount: "UGX 6,000,000", status: "pending", date: "Jan 5" },
  { id: "INV-049", client: "Helping Hands Foundation", amount: "UGX 3,500,000", status: "pending", date: "Jan 8" },
  { id: "INV-050", client: "Kampala Hotel Group", amount: "UGX 8,000,000", status: "overdue", date: "Dec 20" },
  { id: "INV-051", client: "Calvary Christian Centre", amount: "UGX 2,500,000", status: "paid", date: "Dec 30" },
];

const statusColors: Record<string, string> = {
  paid: "text-status-success",
  pending: "text-status-warning",
  overdue: "text-status-danger",
};

const fmt = (v: number) => `${(v / 1000000).toFixed(1)}M`;

export default function Finance() {
  return (
    <AppShell breadcrumbs={[{ label: "NextERP" }, { label: "Finance" }]}>
      <div className="space-y-6">
        <motion.div {...fadeIn(0)} className="flex items-center justify-between">
          <div>
            <h1 className="text-heading font-semibold text-foreground">Finance & Accounting</h1>
            <p className="text-[13px] text-muted-foreground mt-1">Fiscal Year 2024/25 · All amounts in UGX</p>
          </div>
          <Button variant="outline" size="sm" className="h-8 gap-1.5 text-[12px]">
            <Download className="h-3 w-3" />
            Export Report
          </Button>
        </motion.div>

        {/* Summary KPIs */}
        <motion.div {...fadeIn(0.05)} className="grid grid-cols-3 gap-4">
          {[
            { label: "Total Income", value: "UGX 212,102,800", change: "+18%", up: true },
            { label: "Total Expenses", value: "UGX 82,700,000", change: "+9%", up: false },
            { label: "Net Profit", value: "UGX 129,402,800", change: "+24%", up: true },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-card p-5 shadow-card">
              <p className="text-label-caps text-muted-foreground mb-2">{item.label}</p>
              <p className="font-mono text-[1.25rem] font-semibold text-foreground tabular-nums leading-none">{item.value}</p>
              <div className={cn("flex items-center gap-1 mt-2 text-[12px] font-medium", item.up ? "text-status-success" : "text-status-danger")}>
                {item.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {item.change} YTD
              </div>
            </div>
          ))}
        </motion.div>

        {/* Monthly Chart */}
        <motion.div {...fadeIn(0.1)} className="rounded-lg bg-card p-5 shadow-card">
          <p className="text-label-caps text-muted-foreground mb-1">Monthly Overview</p>
          <p className="font-semibold text-foreground mb-4">Income · Expenses · Profit</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyData} barSize={12} barGap={3} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
              <CartesianGrid vertical={false} stroke="hsl(240 5.9% 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "hsl(240 3.8% 46.1%)" }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "hsl(240 3.8% 46.1%)", fontFamily: "Geist Mono" }} tickLine={false} axisLine={false} tickFormatter={fmt} width={40} />
              <Tooltip formatter={(v: number) => `UGX ${v.toLocaleString()}`} contentStyle={{ fontSize: 12, borderRadius: 6, border: "1px solid hsl(240 5.9% 90%)", boxShadow: "var(--shadow-card)" }} />
              <Bar dataKey="income" fill="hsl(240 5.9% 10%)" radius={[3, 3, 0, 0]} />
              <Bar dataKey="expenses" fill="hsl(240 4.8% 80%)" radius={[3, 3, 0, 0]} />
              <Bar dataKey="profit" fill="hsl(142.1 76.2% 36.3%)" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Invoices */}
        <motion.div {...fadeIn(0.15)}>
          <p className="text-label-caps text-muted-foreground mb-3">Recent Invoices</p>
          <div className="rounded-lg bg-card shadow-card overflow-hidden">
            <div className="border-b border-border px-5 py-3 grid grid-cols-12 gap-4">
              <span className="col-span-2 text-label-caps text-muted-foreground">Invoice</span>
              <span className="col-span-4 text-label-caps text-muted-foreground">Client</span>
              <span className="col-span-2 text-label-caps text-muted-foreground">Date</span>
              <span className="col-span-2 text-label-caps text-muted-foreground">Amount</span>
              <span className="col-span-2 text-label-caps text-muted-foreground">Status</span>
            </div>
            {invoices.map((inv, i) => (
              <div
                key={inv.id}
                className={cn("px-5 py-3.5 grid grid-cols-12 gap-4 items-center hover:bg-secondary/40 transition-colors duration-150", i < invoices.length - 1 ? "border-b border-border" : "")}
              >
                <span className="col-span-2 font-mono text-[12px] text-muted-foreground">{inv.id}</span>
                <span className="col-span-4 text-[13px] text-foreground">{inv.client}</span>
                <span className="col-span-2 text-[12px] text-muted-foreground">{inv.date}</span>
                <span className="col-span-2 font-mono text-[12px] tabular-nums text-foreground">{inv.amount}</span>
                <span className={cn("col-span-2 text-[12px] font-medium", statusColors[inv.status])}>
                  {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Profit Distribution */}
        <motion.div {...fadeIn(0.2)} className="rounded-lg bg-card p-5 shadow-card">
          <p className="text-label-caps text-muted-foreground mb-3">Profit Distribution Policy</p>
          <div className="space-y-4">
            {[
              { label: "Reagan Otema — Co-Founder A", pct: 40, amount: "UGX 51,761,120" },
              { label: "Binsobedde Najiib — Co-Founder B", pct: 40, amount: "UGX 51,761,120" },
              { label: "Retained Earnings", pct: 20, amount: "UGX 25,880,560" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[13px] text-foreground">{item.label}</span>
                  <div className="text-right">
                    <span className="font-mono text-[12px] tabular-nums text-foreground">{item.amount}</span>
                    <span className="ml-2 font-mono text-[11px] text-muted-foreground">({item.pct}%)</span>
                  </div>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full rounded-full bg-foreground" style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppShell>
  );
}
