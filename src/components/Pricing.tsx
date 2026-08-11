import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { waLink, WA_MESSAGES } from "@/lib/site";

const offers = [
  {
    num: "01",
    title: "Création d'entreprise",
    price: "139 000 FCFA",
    features: [
      "Création en 72h",
      "Documents administratifs",
      "Contrat de bail",
      "CNPS",
      "Suivi comptable offert pendant 1 mois",
    ],
    cta: "Commencer",
    href: waLink(WA_MESSAGES.creation),
    featured: false,
  },
  {
    num: "02",
    title: "Suivi comptable",
    price: "60 000 FCFA / mois",
    oldPrice: "100 000 FCFA",
    badge: "Promotion",
    features: [
      "Suivi comptable",
      "Suivi fiscal",
      "Bilan",
      "Contrôle fiscal et social",
      "Dossiers bancaires",
      "Business plan",
    ],
    cta: "Être accompagné",
    href: waLink(WA_MESSAGES.comptabilite),
    featured: true,
  },
  {
    num: "03",
    title: "Formation comptable",
    price: "150 000 FCFA",
    note: "+ 10 000 FCFA inscription et documents",
    features: ["Sage i7", "e-Impôt", "e-CNPS", "Caisse", "Banque", "Travaux de fin d'exercice"],
    cta: "S'inscrire",
    href: waLink(WA_MESSAGES.formation),
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="border-y border-border bg-surface py-24 lg:py-32">
      <div className="container-bw">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="label-eyebrow">Tarifs</p>
            <h2 className="h-display mt-6 text-anthracite">Des tarifs clairs et transparents.</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:pb-2">
              Les montants indiqués correspondent aux formules annoncées par le cabinet. Aucun frais
              caché.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid items-stretch gap-6 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.title} delay={i * 90} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col border p-8 transition-colors duration-300 sm:p-10",
                  o.featured
                    ? "border-brick bg-anthracite text-anthracite-foreground"
                    : "border-border bg-background hover:border-anthracite/30",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      "index-number text-2xl",
                      o.featured && "text-anthracite-foreground/30",
                    )}
                  >
                    {o.num}
                  </span>
                  {o.badge && (
                    <span className="border border-brick px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brick">
                      {o.badge}
                    </span>
                  )}
                </div>

                <h3
                  className={cn(
                    "h-sub mt-6",
                    o.featured ? "text-anthracite-foreground" : "text-anthracite",
                  )}
                >
                  {o.title}
                </h3>

                <div className="mt-5 flex flex-wrap items-baseline gap-3">
                  <span className="font-display text-2xl font-bold tracking-tight text-brick">
                    {o.price}
                  </span>
                  {o.oldPrice && (
                    <span className="text-sm text-anthracite-foreground/50 line-through">
                      {o.oldPrice}
                    </span>
                  )}
                </div>
                {o.note && (
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      o.featured ? "text-anthracite-foreground/65" : "text-muted-foreground",
                    )}
                  >
                    {o.note}
                  </p>
                )}

                <ul
                  className={cn(
                    "mt-8 space-y-3 border-t pt-8",
                    o.featured ? "border-anthracite-foreground/15" : "border-border",
                  )}
                >
                  {o.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm",
                        o.featured ? "text-anthracite-foreground/75" : "text-muted-foreground",
                      )}
                    >
                      <span aria-hidden="true" className="mt-2.5 h-px w-3.5 shrink-0 bg-brick" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group mt-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold transition-colors duration-200",
                    o.featured
                      ? "mt-10 bg-brick text-primary-foreground hover:bg-brick-strong"
                      : "mt-10 border border-anthracite text-anthracite hover:bg-anthracite hover:text-anthracite-foreground",
                  )}
                >
                  {o.cta}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
