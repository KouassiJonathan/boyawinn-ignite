import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Combien coûte la création d'une entreprise ?",
    a: "La formule de création d'entreprise est proposée à 139 000 FCFA.",
  },
  { q: "Quel est le délai de création ?", a: "Le service annonce une création en 72h." },
  {
    q: "Quels types de structures pouvez-vous créer ?",
    a: "Personne physique, SARL, SA, SNC, SCOOPS et ONG.",
  },
  {
    q: "Combien coûte le suivi comptable ?",
    a: "Le tarif promotionnel indiqué est de 60 000 FCFA par mois au lieu de 100 000 FCFA.",
  },
  {
    q: "Combien coûte la formation ?",
    a: "Les frais de formation sont de 150 000 FCFA, avec 10 000 FCFA de frais d'inscription et documents.",
  },
  {
    q: "Où êtes-vous situés ?",
    a: "Angré 9ème tranche, Immeuble CGK, route de la CNPS, Abidjan.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-bw">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 text-left sm:px-6"
                    >
                      <span className="text-sm font-bold text-anthracite sm:text-base">{f.q}</span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 shrink-0 text-brick transition-transform duration-300",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
