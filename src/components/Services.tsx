import {
  Building2,
  Calculator,
  GraduationCap,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";

type Service = {
  icon: LucideIcon;
  title: string;
  price: string;
  priceNote?: string;
  oldPrice?: string;
  badge?: string;
  description?: string;
  groups: { label?: string; items: string[] }[];
  bonus?: string;
  cta: string;
  href: string;
};

const services: Service[] = [
  {
    icon: Building2,
    title: "Création d'entreprise",
    price: "139 000 FCFA",
    badge: "Création en 72h",
    description:
      "Création et formalisation de votre entreprise avec accompagnement administratif.",
    groups: [
      {
        label: "Structures concernées",
        items: ["Personne physique", "SARL", "SA", "SNC", "SCOOPS", "ONG"],
      },
      {
        label: "Prestations incluses",
        items: [
          "Déclaration fiscale d'existence",
          "Registre de commerce",
          "Déclaration de souscription et de versement",
          "Contrat de bail",
          "Possibilité de domiciliation au siège du cabinet",
          "CNPS",
        ],
      },
    ],
    bonus: "Rattachement et suivi comptable offert pendant 1 mois.",
    cta: "Demander une création",
    href: waLink(WA_MESSAGES.creation),
  },
  {
    icon: Calculator,
    title: "Cabinet Comptable & Suivi",
    price: "60 000 FCFA / mois",
    oldPrice: "100 000 FCFA",
    badge: "Tarif promotionnel",
    groups: [
      {
        label: "Prestations",
        items: [
          "Suivi comptable et fiscal",
          "Établissement du bilan",
          "Certification de bilan",
          "Contrôle fiscal et social",
          "Montage de dossiers bancaires",
          "Rédaction de Business Plan",
        ],
      },
    ],
    cta: "Demander un accompagnement",
    href: waLink(WA_MESSAGES.comptabilite),
  },
  {
    icon: GraduationCap,
    title: "Formation — École des Comptables",
    price: "150 000 FCFA",
    priceNote: "Frais d'inscription : 10 000 FCFA",
    description:
      "Une formation pratique destinée aux personnes souhaitant maîtriser les principales opérations comptables, fiscales et sociales.",
    groups: [],
    cta: "Découvrir la formation",
    href: "#formation",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="container-bw">
        <Reveal>
          <SectionHeading
            eyebrow="Nos services"
            title="Des solutions adaptées à votre entreprise"
            subtitle="De la création de votre entreprise à son suivi comptable, nous vous accompagnons à chaque étape."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} as="article" className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brick/40 hover:shadow-lift">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-surface text-brick">
                    <s.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    {s.badge && (
                      <span className="inline-block rounded-full bg-brick/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brick">
                        {s.badge}
                      </span>
                    )}
                    <h3 className="mt-2 text-lg font-extrabold text-anthracite">{s.title}</h3>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-baseline gap-3">
                  <span className="text-2xl font-extrabold text-brick">{s.price}</span>
                  {s.oldPrice && (
                    <span className="text-sm font-medium text-muted-foreground line-through">
                      {s.oldPrice}
                    </span>
                  )}
                </div>
                {s.priceNote && (
                  <p className="mt-1 text-sm text-muted-foreground">{s.priceNote}</p>
                )}

                {s.description && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                )}

                {s.groups.map((g) => (
                  <div key={g.label} className="mt-6">
                    {g.label && (
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-anthracite">
                        {g.label}
                      </p>
                    )}
                    <ul className="mt-3 space-y-2">
                      {g.items.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-muted-foreground">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-brick" strokeWidth={2.5} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {s.bonus && (
                  <p className="mt-6 rounded-md border border-brick/20 bg-brick/5 p-4 text-sm font-semibold text-anthracite">
                    {s.bonus}
                  </p>
                )}

                <a
                  href={s.href}
                  {...(s.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-anthracite px-5 py-3 text-sm font-semibold text-anthracite-foreground transition-colors hover:bg-brick"
                >
                  {s.cta}
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
