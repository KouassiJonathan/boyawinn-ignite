import { CheckCircle2, ArrowRight, Timer } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";
import creationImage from "@/assets/section-creation.jpg";

const prestations = [
  "Déclaration fiscale d'existence",
  "Registre de commerce",
  "Déclaration de souscription et de versement",
  "Contrat de bail",
  "Possibilité de domiciliation au siège du cabinet",
  "CNPS",
  "Rattachement et suivi comptable offert pendant 1 mois",
];

const structures = ["Personne physique", "SARL", "SA", "SNC", "SCOOPS", "ONG"];

export function CreationSection() {
  return (
    <section className="bg-anthracite py-20 text-anthracite-foreground lg:py-28">
      <div className="container-bw grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brick">
            Création d'entreprise
          </p>
          <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl lg:text-4xl">
            Créez votre entreprise simplement et rapidement
          </h2>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-3xl font-extrabold text-brick sm:text-4xl">139 000 FCFA</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-brick px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary-foreground">
              <Timer className="h-4 w-4" />
              Création en 72h
            </span>
          </div>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-anthracite-foreground/75">
            Structures concernées : {structures.join(", ")}.
          </p>

          <a
            href={waLink(WA_MESSAGES.creation)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-brick px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brick-strong"
          >
            Je veux créer mon entreprise
            <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>

        <Reveal delay={120}>
          <div className="mb-6 overflow-hidden rounded-xl border border-anthracite-foreground/12">
            <img
              src={creationImage}
              alt="Entrepreneur signant les documents de création de son entreprise à Abidjan"
              width={1200}
              height={900}
              loading="lazy"
              className="h-[220px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[280px]"
            />
          </div>
          <ul className="grid gap-3 rounded-xl border border-anthracite-foreground/12 bg-anthracite-foreground/5 p-6 sm:p-8">
            {prestations.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-anthracite-foreground/90">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brick" strokeWidth={2} />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
