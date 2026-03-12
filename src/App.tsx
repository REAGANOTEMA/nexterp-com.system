import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Finance from "./pages/Finance";
import Academy from "./pages/Academy";
import HR from "./pages/HR";
import NotFound from "./pages/NotFound";
import { ComingSoon } from "./components/ComingSoon";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/hr" element={<HR />} />
          <Route
            path="/marketing"
            element={
              <ComingSoon
                title="Marketing & CRM"
                description="Lead tracking, campaign analytics, and conversion reporting."
                breadcrumbs={[{ label: "NextERP" }, { label: "Marketing & CRM" }]}
              />
            }
          />
          <Route
            path="/assets"
            element={
              <ComingSoon
                title="Asset Management"
                description="Equipment inventory, software licenses, and maintenance schedules."
                breadcrumbs={[{ label: "NextERP" }, { label: "Assets" }]}
              />
            }
          />
          <Route
            path="/reports"
            element={
              <ComingSoon
                title="Reports"
                description="Investor summaries, quarterly reports, and advanced analytics."
                breadcrumbs={[{ label: "NextERP" }, { label: "Reports" }]}
              />
            }
          />
          <Route
            path="/settings"
            element={
              <ComingSoon
                title="Settings"
                description="Organization settings, roles, permissions, and integrations."
                breadcrumbs={[{ label: "NextERP" }, { label: "Settings" }]}
              />
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
