import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";
import servicesImage from "@/assets/section-services.jpg";

const secondary = [
  {
    num: "02",
    title: "Cabinet comptable & suivi",
    price: "60 000 FCFA / mois",
    oldPrice: "100 000 FCFA",
    items: [
      "Suivi comptable et fiscal",
      "Établissement et certification du bilan",
      "Contrôle fiscal et social",
      "Montage de dossiers bancaires",
      "Rédaction de business plan",
    ],
    cta: "Être accompagné",
    href: waLink(WA_MESSAGES.comptabilite),
    external: true,
  },
  {
    num: "03",
    title: "École des Comptables",
    price: "150 000 FCFA",
    note: "Inscription et documents : 10 000 FCFA",
    items: [
      "Mise en place de la comptabilité (Sage i7)",
      "Déclarations fiscales (e-Impôt)",
      "Déclarations sociales (e-CNPS)",
      "Caisse, banque et fin d'exercice",
    ],
    cta: "Découvrir la formation",
    href: "#formation",
    external: false,
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
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

        {/* Service principal */}
        <Reveal delay={60}>
          <article className="mt-16 grid border border-border lg:grid-cols-[1.05fr_0.95fr]">
            <div className="order-2 flex flex-col p-8 sm:p-12 lg:order-1">
              <div className="flex items-start justify-between gap-6">
                <span className="index-number text-3xl">01</span>
                <span className="border border-brick/40 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brick">
                  Création en 72h
                </span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-anthracite sm:text-3xl">
                Création d'entreprise
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Constitution complète et formalisation de votre entreprise, avec accompagnement
                administratif : déclaration fiscale d'existence, registre de commerce, déclaration
                de souscription et de versement, contrat de bail, CNPS et possibilité de
                domiciliation au siège du cabinet.
              </p>

              <div className="mt-10 flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-border pt-8">
                <span className="font-display text-3xl font-bold tracking-tight text-brick sm:text-4xl">
                  139 000 FCFA
                </span>
                <span className="text-sm text-muted-foreground">
                  Suivi comptable offert pendant 1 mois
                </span>
              </div>

              <a
                href={waLink(WA_MESSAGES.creation)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex w-full items-center justify-center gap-2.5 bg-brick px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-brick-strong sm:w-auto"
              >
                Demander une création
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.75}
                />
              </a>
            </div>

            <div className="order-1 border-b border-border lg:order-2 lg:border-b-0 lg:border-l">
              <img
                src={servicesImage}
                alt="Consultant du cabinet Boya Winn Consulting analysant les états financiers d'une entreprise"
                width={1200}
                height={900}
                loading="lazy"
                className="h-[240px] w-full object-cover sm:h-[320px] lg:h-full"
              />
            </div>
          </article>
        </Reveal>

        {/* Services secondaires */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {secondary.map((s, i) => (
            <Reveal key={s.num} delay={i * 90} as="article" className="h-full">
              <div className="hover-rule group flex h-full flex-col border border-border p-8 transition-colors duration-300 hover:bg-surface sm:p-10">
                <span className="index-number text-3xl group-hover:text-brick">{s.num}</span>
                <h3 className="h-sub mt-6 text-anthracite">{s.title}</h3>

                <div className="mt-4 flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-xl font-bold text-brick">{s.price}</span>
                  {s.oldPrice && (
                    <span className="text-sm text-muted-foreground line-through">{s.oldPrice}</span>
                  )}
                </div>
                {s.note && <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>}

                <ul className="mt-7 space-y-3">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm text-muted-foreground"
                    >
                      <span aria-hidden="true" className="mt-2.5 h-px w-3.5 shrink-0 bg-brick" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <span className="rule-line" aria-hidden="true" />
                  <a
                    href={s.href}
                    {...(s.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
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
