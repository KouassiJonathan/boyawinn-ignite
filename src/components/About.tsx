import { Building2, Calculator, Receipt, Briefcase, GraduationCap } from "lucide-react";
import { Reveal } from "./Reveal";

const domains = [
  { icon: Building2, label: "Création d'entreprise" },
  { icon: Calculator, label: "Comptabilité" },
  { icon: Receipt, label: "Fiscalité" },
  { icon: Briefcase, label: "Conseil" },
  { icon: GraduationCap, label: "Formation" },
];

export function About() {
  return (
    <section id="a-propos" className="bg-background py-20 lg:py-28">
      <div className="container-bw grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brick">À propos</p>
          <h2 className="mt-3 text-2xl font-extrabold text-anthracite sm:text-3xl lg:text-4xl">
            À propos de Boya Winn Consulting
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Boya Winn Consulting accompagne les entrepreneurs, entreprises et professionnels dans
            leurs démarches de création, leur suivi comptable et fiscal ainsi que dans le
            développement de leurs compétences professionnelles.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {domains.map((d) => (
              <li
                key={d.label}
                className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-brick/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-background text-brick">
                  <d.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span className="truncate text-sm font-semibold text-anthracite">{d.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
