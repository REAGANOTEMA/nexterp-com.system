import { motion } from "framer-motion";
import { AppShell } from "@/components/layout/AppShell";
import { Plus, Filter, Building2, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: "easeOut" as const },
});

type ClientStatus = "active" | "pending" | "inactive";

const statusColors: Record<ClientStatus, string> = {
  active: "text-status-success",
  pending: "text-status-warning",
  inactive: "text-muted-foreground",
};

const clients = [
  { id: "C-001", name: "Iganga Modern School", contact: "Mr. Ouma Ochieng", industry: "Education", email: "info@igangaschool.ug", phone: "+256 432 120 456", projects: 1, status: "active" as ClientStatus, value: "UGX 18,000,000" },
  { id: "C-002", name: "St. Mary's Hospital", contact: "Dr. Agnes Namukasa", industry: "Healthcare", email: "admin@stmarys.ug", phone: "+256 777 432 100", projects: 2, status: "active" as ClientStatus, value: "UGX 24,000,000" },
  { id: "C-003", name: "Helping Hands Foundation", contact: "Pastor James Okiror", industry: "NGO", email: "info@helpinghands.ug", phone: "+256 752 800 123", projects: 1, status: "active" as ClientStatus, value: "UGX 12,000,000" },
  { id: "C-004", name: "Kampala Hotel Group", contact: "Ms. Sarah Nakato", industry: "Hospitality", email: "sarah@kampalahotel.ug", phone: "+256 700 555 789", projects: 1, status: "active" as ClientStatus, value: "UGX 32,000,000" },
  { id: "C-005", name: "Calvary Christian Centre", contact: "Bishop Paul Mwangi", industry: "Religious", email: "calvary@ccc.ug", phone: "+256 714 200 890", projects: 1, status: "active" as ClientStatus, value: "UGX 9,500,000" },
  { id: "C-006", name: "Uganda Bus Lines Ltd", contact: "Mr. Henry Kasozi", industry: "Transport", email: "ops@ugandabus.ug", phone: "+256 782 300 456", projects: 1, status: "inactive" as ClientStatus, value: "UGX 15,000,000" },
  { id: "C-007", name: "East Africa Pharma", contact: "Dr. Miriam Otieno", industry: "Pharmaceutical", email: "m.otieno@eapharma.co.ke", phone: "+254 700 123 456", projects: 0, status: "pending" as ClientStatus, value: "—" },
];

export default function Clients() {
  return (
    <AppShell breadcrumbs={[{ label: "NextERP" }, { label: "Clients" }]}>
      <div className="space-y-6">
        <motion.div {...fadeIn(0)} className="flex items-center justify-between">
          <div>
            <h1 className="text-heading font-semibold text-foreground">Clients</h1>
            <p className="text-[13px] text-muted-foreground mt-1">
              {clients.length} clients · {clients.filter(c => c.status === "active").length} active
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 gap-1.5 text-[12px]">
              <Filter className="h-3 w-3" />
              Filter
            </Button>
            <Button size="sm" className="h-8 gap-1.5 text-[12px]">
              <Plus className="h-3 w-3" />
              New Client
            </Button>
          </div>
        </motion.div>

        <motion.div {...fadeIn(0.05)} className="rounded-lg bg-card shadow-card overflow-hidden">
          <div className="border-b border-border px-5 py-3 grid grid-cols-12 gap-4">
            <span className="col-span-1 text-label-caps text-muted-foreground">ID</span>
            <span className="col-span-3 text-label-caps text-muted-foreground">Client</span>
            <span className="col-span-2 text-label-caps text-muted-foreground hidden md:block">Industry</span>
            <span className="col-span-3 text-label-caps text-muted-foreground hidden lg:block">Contact</span>
            <span className="col-span-1 text-label-caps text-muted-foreground">Projects</span>
            <span className="col-span-1 text-label-caps text-muted-foreground hidden md:block">Status</span>
            <span className="col-span-1 text-label-caps text-muted-foreground hidden lg:block">Value</span>
          </div>

          {clients.map((client, i) => (
            <div
              key={client.id}
              className={cn(
                "px-5 py-3.5 grid grid-cols-12 gap-4 items-center hover:bg-secondary/40 transition-colors duration-150 cursor-pointer",
                i < clients.length - 1 ? "border-b border-border" : ""
              )}
            >
              <span className="col-span-1 font-mono text-[11px] text-muted-foreground">{client.id}</span>
              <div className="col-span-3 flex items-center gap-2.5">
                <div className="h-7 w-7 rounded-md bg-secondary flex items-center justify-center shrink-0">
                  <Building2 className="h-3.5 w-3.5 text-muted-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-foreground leading-tight truncate">{client.name}</p>
                  <p className="text-[11px] text-muted-foreground md:hidden">{client.industry}</p>
                </div>
              </div>
              <span className="col-span-2 text-[12px] text-muted-foreground hidden md:block">{client.industry}</span>
              <div className="col-span-3 hidden lg:block">
                <p className="text-[12px] text-foreground">{client.contact}</p>
                <p className="text-[11px] text-muted-foreground">{client.email}</p>
              </div>
              <span className="col-span-1 font-mono text-[13px] text-foreground tabular-nums">{client.projects}</span>
              <span className={cn("col-span-1 text-[12px] font-medium hidden md:block", statusColors[client.status])}>
                {client.status.charAt(0).toUpperCase() + client.status.slice(1)}
              </span>
              <span className="col-span-1 font-mono text-[11px] text-muted-foreground hidden lg:block truncate">
                {client.value.replace("UGX ", "")}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </AppShell>
  );
}
