import { Reveal } from "./Reveal";

const steps = [
  { num: "01", title: "Prise de contact", text: "Échange sur votre projet et vos obligations." },
  { num: "02", title: "Analyse", text: "Étude de votre situation juridique, fiscale et sociale." },
  {
    num: "03",
    title: "Constitution du dossier",
    text: "Préparation des pièces et des déclarations nécessaires.",
  },
  {
    num: "04",
    title: "Mise en œuvre",
    text: "Dépôt des formalités, mise en place de la comptabilité.",
  },
  { num: "05", title: "Suivi", text: "Accompagnement continu et échéances déclaratives tenues." },
];

export function Method() {
  return (
    <section id="methode" className="border-b border-border bg-background py-24 lg:py-32">
      <div className="container-bw">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="label-eyebrow">Notre méthode</p>
              <h2 className="h-display mt-6 text-anthracite">
                Un accompagnement structuré en cinq étapes.
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                Chaque dossier suit la même trame, du premier échange jusqu'au suivi régulier de vos
                obligations.
              </p>
            </Reveal>
          </div>

          <ol className="border-t border-border">
            {steps.map((s, i) => (
              <Reveal key={s.num} as="li" delay={i * 70}>
                <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-border py-8 transition-colors duration-300 hover:border-brick sm:gap-10 sm:py-10">
                  <span className="font-display text-sm font-bold tracking-[0.14em] text-brick">
                    {s.num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold uppercase tracking-[0.08em] text-anthracite sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
