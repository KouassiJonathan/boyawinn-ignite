import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";
import creationImage from "@/assets/section-creation.jpg";

const prestations = [
  "Déclaration fiscale d'existence",
  "Registre de commerce",
  "Déclaration de souscription et de versement",
  "Contrat de bail",
  "Domiciliation possible au siège du cabinet",
  "CNPS",
  "Suivi comptable offert pendant 1 mois",
];

const structures = ["Personne physique", "SARL", "SA", "SNC", "SCOOPS", "ONG"];

export function CreationSection() {
  return (
    <section id="creation" className="bg-surface py-24 lg:py-32">
      <div className="container-bw grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <p className="label-eyebrow">Création d'entreprise</p>
          <h2 className="h-display mt-6 text-anthracite">
            Créez votre entreprise
            <br className="hidden sm:block" /> en 72 heures.
          </h2>

          <div className="mt-9 flex flex-wrap items-baseline gap-x-6 gap-y-3 border-y border-border py-6">
            <span className="font-display text-3xl font-bold tracking-tight text-brick sm:text-4xl">
              139 000 FCFA
            </span>
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-anthracite">
              Dossier complet
            </span>
          </div>

          <div className="mt-9">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              Structures concernées
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {structures.map((s) => (
                <li
                  key={s}
                  className="border border-border bg-background px-3.5 py-2 text-xs font-semibold text-anthracite transition-colors hover:border-brick hover:text-brick"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={waLink(WA_MESSAGES.creation)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center justify-center gap-2.5 bg-anthracite px-7 py-4 text-sm font-semibold text-anthracite-foreground transition-colors duration-200 hover:bg-brick"
          >
            Je veux créer mon entreprise
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </a>
        </Reveal>

        <Reveal delay={110}>
          <img
            src={creationImage}
            alt="Entrepreneur signant les documents de création de son entreprise avec Boya Winn Consulting"
            width={1200}
            height={900}
            loading="lazy"
            className="h-[220px] w-full object-cover sm:h-[280px]"
          />
          <ol className="mt-px border border-border bg-background">
            {prestations.map((p, i) => (
              <li
                key={p}
                className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 border-b border-border px-6 py-4 text-sm text-anthracite last:border-b-0 sm:px-8"
              >
                <span className="font-display text-xs font-bold tabular-nums text-brick">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
