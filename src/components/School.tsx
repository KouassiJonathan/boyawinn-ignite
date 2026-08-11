import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";
import formationImage from "@/assets/section-formation.jpg";

const modules = [
  {
    num: "01",
    title: "Mise en place de la comptabilité",
    text: "Utilisation du logiciel Sage i7.",
  },
  { num: "02", title: "Déclarations fiscales", text: "Utilisation de e-Impôt." },
  { num: "03", title: "Déclarations sociales", text: "Utilisation de e-CNPS." },
  {
    num: "04",
    title: "Caisse et banque",
    text: "Traitement et suivi des opérations de caisse et de banque.",
  },
  {
    num: "05",
    title: "Travaux de fin d'exercice",
    text: "Préparation et traitement des opérations de fin d'exercice.",
  },
];

export function School() {
  return (
    <section id="formation" className="bg-background py-24 lg:py-32">
      <div className="container-bw">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <p className="label-eyebrow">Formation</p>
            <h2 className="h-display mt-6 text-anthracite">École des Comptables</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Une formation pratique destinée aux personnes souhaitant maîtriser les principales
              opérations comptables, fiscales et sociales, avec les outils utilisés dans le monde
              professionnel.
            </p>

            <dl className="mt-10 grid grid-cols-2 border-y border-border">
              <div className="border-r border-border py-6 pr-6">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Frais de formation
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold text-brick">150 000 FCFA</dd>
              </div>
              <div className="py-6 pl-6">
                <dt className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Inscription + documents
                </dt>
                <dd className="mt-2 font-display text-2xl font-bold text-brick">10 000 FCFA</dd>
              </div>
            </dl>

            <a
              href={waLink(WA_MESSAGES.formation)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center justify-center gap-2.5 bg-brick px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-brick-strong"
            >
              Je souhaite m'inscrire
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>
          </Reveal>

          <Reveal delay={110}>
            <img
              src={formationImage}
              alt="Session de formation comptable de l'École des Comptables de Boya Winn Consulting"
              width={1200}
              height={900}
              loading="lazy"
              className="h-[240px] w-full object-cover sm:h-[320px]"
            />
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {modules.map((m, i) => (
            <Reveal key={m.num} as="li" delay={i * 70} className="bg-background">
              <div className="hover-rule group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-surface">
                <span className="index-number text-2xl group-hover:text-brick">{m.num}</span>
                <h3 className="mt-5 font-display text-base font-bold leading-snug text-anthracite">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                <span className="mt-auto pt-8">
                  <span className="rule-line" aria-hidden="true" />
                </span>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
