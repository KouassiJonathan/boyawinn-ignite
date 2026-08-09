import { Check, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { waLink, WA_MESSAGES } from "@/lib/site";

const offers = [
  {
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
    title: "Suivi comptable",
    price: "60 000 FCFA / mois",
    oldPrice: "100 000 FCFA",
    badge: "PROMOTION",
    features: [
      "Suivi comptable",
      "Suivi fiscal",
      "Bilan",
      "Contrôle fiscal et social",
      "Dossiers bancaires",
      "Business Plan",
    ],
    cta: "Être accompagné",
    href: waLink(WA_MESSAGES.comptabilite),
    featured: true,
  },
  {
    title: "Formation comptable",
    price: "150 000 FCFA",
    note: "+ 10 000 FCFA inscription/documents",
    features: ["Sage i7", "e-Impôt", "e-CNPS", "Caisse", "Banque", "Travaux de fin d'exercice"],
    cta: "S'inscrire",
    href: waLink(WA_MESSAGES.formation),
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="tarifs" className="bg-surface py-20 lg:py-28">
      <div className="container-bw">
        <Reveal>
          <SectionHeading
            eyebrow="Tarifs"
            title="Des tarifs clairs et transparents"
            subtitle="Choisissez la formule adaptée à votre besoin."
          />
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.title} delay={i * 90} className="h-full">
              <div
                className={cn(
                  "flex h-full flex-col rounded-xl border p-7 transition-all duration-300",
                  o.featured
                    ? "border-brick bg-anthracite text-anthracite-foreground shadow-lift lg:-mt-4 lg:pb-10 lg:pt-10"
                    : "border-border bg-card shadow-card hover:-translate-y-1 hover:shadow-lift",
                )}
              >
                {o.badge && (
                  <span className="mb-4 inline-block w-fit rounded-full bg-brick px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                    {o.badge}
                  </span>
                )}
                <h3
                  className={cn(
                    "text-lg font-extrabold",
                    o.featured ? "text-anthracite-foreground" : "text-anthracite",
                  )}
                >
                  {o.title}
                </h3>
                <div className="mt-4 flex flex-wrap items-baseline gap-3">
                  <span className="text-2xl font-extrabold text-brick sm:text-3xl">{o.price}</span>
                  {o.oldPrice && (
                    <span className="text-sm font-medium text-anthracite-foreground/60 line-through">
                      {o.oldPrice}
                    </span>
                  )}
                </div>
                {o.note && (
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      o.featured ? "text-anthracite-foreground/70" : "text-muted-foreground",
                    )}
                  >
                    {o.note}
                  </p>
                )}

                <ul className="mt-7 flex-1 space-y-3">
                  {o.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex gap-2.5 text-sm",
                        o.featured ? "text-anthracite-foreground/85" : "text-muted-foreground",
                      )}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brick" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors",
                    o.featured
                      ? "bg-brick text-primary-foreground hover:bg-brick-strong"
                      : "bg-anthracite text-anthracite-foreground hover:bg-brick",
                  )}
                >
                  {o.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
