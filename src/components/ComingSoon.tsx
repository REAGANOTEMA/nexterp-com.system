import { AppShell } from "@/components/layout/AppShell";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, delay, ease: "easeOut" as const },
});

interface ComingSoonProps {
  title: string;
  description: string;
  breadcrumbs: { label: string }[];
}

export function ComingSoon({ title, description, breadcrumbs }: ComingSoonProps) {
  return (
    <AppShell breadcrumbs={breadcrumbs}>
      <motion.div {...fadeIn(0)} className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center">
        <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center">
          <Construction className="h-6 w-6 text-muted-foreground" />
        </div>
        <div>
          <h1 className="text-heading font-semibold text-foreground">{title}</h1>
          <p className="text-[13px] text-muted-foreground mt-1 max-w-sm">{description}</p>
        </div>
        <p className="text-label-caps text-muted-foreground">Module in development</p>
      </motion.div>
    </AppShell>
  );
}
