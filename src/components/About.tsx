import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/section-about.jpg";

const proofs = [
  "Création, comptabilité, fiscalité, conseil et formation réunis dans un seul cabinet.",
  "Interlocuteur unique pour vos démarches administratives et vos obligations déclaratives.",
  "Cabinet basé à Angré 9ème tranche, Abidjan.",
];

export function About() {
  return (
    <section id="a-propos" className="bg-background py-24 lg:py-32">
      <div className="container-bw grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -left-3 -top-3 hidden h-24 w-24 border-l-2 border-t-2 border-brick sm:block" />
          <img
            src={aboutImage}
            alt="Équipe du cabinet Boya Winn Consulting en réunion avec un client à Abidjan"
            width={1200}
            height={900}
            loading="lazy"
            className="relative h-[320px] w-full object-cover sm:h-[440px] lg:h-[520px]"
          />
          <div className="relative -mt-px border border-border bg-background px-6 py-5 sm:absolute sm:-bottom-8 sm:right-0 sm:max-w-[17rem] sm:border-t-2 sm:border-t-brick">
            <p className="font-display text-2xl font-bold text-anthracite">Abidjan</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Angré 9ème tranche, Immeuble CGK, route de la CNPS
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="label-eyebrow">À propos de Boya Winn</p>
          <h2 className="h-display mt-6 text-anthracite">
            Un cabinet qui accompagne
            <br className="hidden sm:block" /> les entreprises de bout en bout.
          </h2>
          <p className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
            Boya Winn Consulting accompagne les entrepreneurs, les entreprises et les professionnels
            dans leurs démarches de création, leur suivi comptable et fiscal ainsi que dans le
            développement de leurs compétences professionnelles.
          </p>

          <div className="mt-10 h-px w-full bg-border" />

          <ul className="mt-8 space-y-5">
            {proofs.map((p) => (
              <li key={p} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                <span aria-hidden="true" className="mt-2.5 h-px w-6 shrink-0 bg-brick" />
                <span className="text-sm leading-relaxed text-anthracite">{p}</span>
              </li>
            ))}
          </ul>

          <a
            href="#services"
            className="group mt-10 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.14em] text-anthracite transition-colors hover:text-brick"
          >
            Découvrir nos services
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.75}
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
