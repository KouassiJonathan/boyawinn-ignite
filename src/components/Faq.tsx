import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Combien coûte la création d'une entreprise ?",
    a: "La formule de création d'entreprise est proposée à 139 000 FCFA.",
  },
  { q: "Quel est le délai de création ?", a: "Le cabinet annonce une création en 72h." },
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
    a: "Les frais de formation sont de 150 000 FCFA, avec 10 000 FCFA de frais d'inscription et de documents.",
  },
  {
    q: "Où êtes-vous situés ?",
    a: "Angré 9ème tranche, Immeuble CGK, route de la CNPS, Abidjan.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-surface py-24 lg:py-32">
      <div className="container-bw grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <p className="label-eyebrow">FAQ</p>
          <h2 className="h-display mt-6 text-anthracite">Questions fréquentes</h2>
        </Reveal>

        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 50}>
                <div className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-6 text-left transition-colors hover:text-brick"
                    >
                      <span className="font-display text-base font-bold text-anthracite sm:text-lg">
                        {f.q}
                      </span>
                      <Plus
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className={cn(
                          "h-5 w-5 shrink-0 text-brick transition-transform duration-300",
                          isOpen && "rotate-45",
                        )}
                      />
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-out",
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden pr-10 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
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
