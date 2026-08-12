import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";

const services = [
  {
    num: "01",
    title: "Création d'entreprise",
    price: "139 000 FCFA",
    text: "Constitution et formalisation de votre entreprise en 72h : déclaration fiscale d'existence, registre de commerce, CNPS, contrat de bail et domiciliation possible au siège du cabinet.",
    cta: "Demander une création",
    href: waLink(WA_MESSAGES.creation),
  },
  {
    num: "02",
    title: "Suivi comptable et fiscal",
    price: "60 000 FCFA / mois",
    oldPrice: "100 000 FCFA",
    badge: "Promotion",
    text: "Mise en place et tenue de la comptabilité, établissement et certification du bilan, déclarations fiscales et sociales, contrôle fiscal et montage de dossiers bancaires.",
    cta: "Être accompagné",
    href: waLink(WA_MESSAGES.comptabilite),
  },
  {
    num: "03",
    title: "École des Comptables",
    price: "150 000 FCFA",
    note: "Inscription et documents : 10 000 FCFA",
    text: "Formation pratique aux outils professionnels : Sage i7, e-Impôt, e-CNPS, caisse, banque et travaux de fin d'exercice.",
    cta: "S'inscrire",
    href: waLink(WA_MESSAGES.formation),
  },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-24 lg:py-32">
      <div className="container-bw">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="label-eyebrow">Nos services</p>
            <h2 className="h-display mt-6 text-anthracite">
              Des prestations claires,
              <br className="hidden sm:block" /> des tarifs annoncés.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:pb-2">
              Trois offres structurent l'accompagnement du cabinet : la création de votre structure,
              son suivi comptable et fiscal, puis la formation des professionnels.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} as="article" className="h-full">
              <div className="hover-rule group flex h-full flex-col border border-border bg-background p-8 transition-colors duration-300 hover:bg-surface sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <span className="index-number text-3xl group-hover:text-brick">{s.num}</span>
                  {s.badge && (
                    <span className="border border-brick px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brick">
                      {s.badge}
                    </span>
                  )}
                </div>

                <h3 className="h-sub mt-6 text-anthracite">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>

                <div className="mt-6 flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-xl font-bold text-brick">{s.price}</span>
                  {s.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">{s.oldPrice}</span>
                  )}
                </div>
                {s.note && <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>}

                <div className="mt-auto pt-10">
                  <span className="rule-line" aria-hidden="true" />
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] text-anthracite transition-colors hover:text-brick"
                  >
                    {s.cta}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.75}
                    />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
