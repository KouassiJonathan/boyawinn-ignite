import { ArrowRight, Building2, Calculator, ShieldCheck, GraduationCap, Timer } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import { waLink, WA_MESSAGES } from "@/lib/site";

const indicators = [
  { icon: Building2, label: "Création d'entreprise en 72h" },
  { icon: Calculator, label: "Accompagnement comptable" },
  { icon: ShieldCheck, label: "Conseil fiscal et social" },
  { icon: GraduationCap, label: "Formation professionnelle" },
];

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-anthracite pt-[4.5rem] text-anthracite-foreground">
      <div
        aria-hidden="true"
        className="grid-lines-sm pointer-events-none absolute inset-0 text-anthracite-foreground/[0.04]"
      />
      <div className="container-bw relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="reveal" data-visible="true">
          <p className="inline-flex items-center gap-2 rounded-full border border-anthracite-foreground/15 bg-anthracite-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-anthracite-foreground/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brick opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brick" />
            </span>
            Cabinet de conseil — Abidjan
          </p>
          <h1 className="mt-6 text-[2.1rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.5rem]">
            Votre partenaire pour{" "}
            <span className="text-brick">créer</span>
            <br className="hidden sm:block" /> votre entreprise
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-anthracite-foreground/75 sm:text-lg">
            Boya Winn Consulting accompagne les entrepreneurs et entreprises en Côte d'Ivoire dans
            la création, la comptabilité, la fiscalité et la formation professionnelle.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(WA_MESSAGES.creation)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-md bg-brick px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-brick-strong hover:shadow-lift"
            >
              Créer mon entreprise
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-anthracite-foreground/25 px-7 py-3.5 text-sm font-semibold text-anthracite-foreground transition-all duration-300 hover:border-anthracite-foreground/60 hover:bg-anthracite-foreground/5"
            >
              Parler à un conseiller
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-anthracite-foreground/10 shadow-lift">
            <img
              src={heroImage}
              alt="Consultants de Boya Winn Consulting analysant des documents comptables et administratifs"
              width={1200}
              height={1408}
              className="h-[280px] w-full scale-105 object-cover transition-transform duration-[1200ms] ease-out hover:scale-100 sm:h-[360px] lg:h-[460px]"
            />
          </div>

          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-lift sm:left-auto sm:-right-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brick/10 text-brick">
              <Timer className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <p className="text-sm font-extrabold text-anthracite">Création en 72h</p>
              <p className="text-xs text-muted-foreground">Dès 139 000 FCFA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-anthracite-foreground/10">
        <ul className="container-bw grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
          {indicators.map(({ icon: Icon, label }) => (
            <li key={label} className="group flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-anthracite-foreground/10 text-anthracite-foreground/80 transition-all duration-300 group-hover:bg-brick group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-sm font-semibold text-anthracite-foreground/90">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
