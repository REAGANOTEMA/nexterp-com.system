import directorReagan from "@/assets/director-reagan.jpg";
import directorNajiib from "@/assets/director-najiib.jpg";
import { Check, Mail, Phone, Linkedin } from "lucide-react";

interface Director {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  permissions: string[];
  initials: string;
}

const directors: Director[] = [
  {
    id: "1",
    name: "Reagan Otema",
    role: "Co-Founder & Director",
    email: "reaganotemas@gmail.com",
    phone: "+256 772 514 889",
    image: directorReagan,
    initials: "RO",
    permissions: ["Financial Approvals", "Project Approvals", "Hiring Approvals", "System Administration"],
  },
  {
    id: "2",
    name: "Binsobedde Najiib",
    role: "Co-Founder & Director",
    email: "najiib@nexterp.co.ug",
    phone: "+256 700 000 000",
    image: directorNajiib,
    initials: "BN",
    permissions: ["HR & Recruitment", "Development Oversight", "Training Academy", "Partner Relations"],
  },
];

export function DirectorCards() {
  return (
    <div className="space-y-3">
      <p className="text-label-caps text-muted-foreground">Leadership</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {directors.map((d) => (
          <div
            key={d.id}
            className="rounded-lg bg-card p-5 shadow-card hover:shadow-card-hover transition-shadow duration-150 ease-custom"
          >
            <div className="flex gap-4">
              {/* Photo */}
              <div className="shrink-0">
                <img
                  src={d.image}
                  alt={d.name}
                  className="h-14 w-14 rounded-md object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-[14px] text-foreground leading-tight">{d.name}</p>
                <p className="text-[12px] text-muted-foreground mt-0.5">{d.role}</p>

                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <Mail className="h-3 w-3 shrink-0" />
                    <span className="truncate">{d.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <Phone className="h-3 w-3 shrink-0" />
                    <span>{d.phone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Permissions */}
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-label-caps text-muted-foreground mb-2">Permissions</p>
              <ul className="grid grid-cols-2 gap-1">
                {d.permissions.map((perm) => (
                  <li key={perm} className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Check className="h-3 w-3 text-status-success shrink-0" />
                    <span>{perm}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
