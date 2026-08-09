import { ArrowRight, Building2, Calculator, ShieldCheck, GraduationCap } from "lucide-react";
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
    <section id="accueil" className="bg-anthracite text-anthracite-foreground">
      <div className="container-bw grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-anthracite-foreground/15 bg-anthracite-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-anthracite-foreground/80">
            Cabinet de conseil — Abidjan
          </p>
          <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            Votre partenaire pour créer, gérer et{" "}
            <span className="text-brick">développer votre entreprise</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-anthracite-foreground/75 sm:text-lg">
            Boya Winn Consulting vous accompagne dans la création d'entreprise, le suivi comptable
            et fiscal et la formation professionnelle des comptables.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(WA_MESSAGES.creation)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brick px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brick-strong"
            >
              Créer mon entreprise
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-anthracite-foreground/25 px-7 py-3.5 text-sm font-semibold text-anthracite-foreground transition-colors hover:border-anthracite-foreground/60"
            >
              Nous contacter
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
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-anthracite-foreground/10">
        <ul className="container-bw grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
          {indicators.map(({ icon: Icon, label }) => (
            <li key={label} className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brick/15 text-brick">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-anthracite-foreground/90">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
