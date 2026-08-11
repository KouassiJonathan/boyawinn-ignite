import { Reveal } from "./Reveal";

/** Méthode d'accompagnement du cabinet — formulation générique, sans donnée inventée. */
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
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="label-eyebrow">Notre méthode</p>
            <h2 className="h-display mt-6 text-anthracite">Un accompagnement en cinq temps.</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:pb-2">
              Chaque dossier suit la même trame, du premier échange jusqu'au suivi régulier de vos
              obligations.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-0 border-t border-border lg:grid-cols-5 lg:border-t-0">
          {steps.map((s, i) => (
            <Reveal key={s.num} as="li" delay={i * 90} className="min-w-0">
              <div className="group relative border-b border-border py-8 pl-8 lg:border-b-0 lg:border-t lg:py-0 lg:pl-0 lg:pr-6 lg:pt-8">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-10 h-2 w-2 rounded-full bg-brick lg:left-0 lg:top-[-4.5px]"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-[3.5px] top-12 w-px bg-border lg:hidden"
                />
                <p className="index-number text-2xl transition-colors group-hover:text-brick">
                  {s.num}
                </p>
                <h3 className="mt-4 font-display text-base font-bold uppercase tracking-[0.08em] text-anthracite">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground lg:pb-10">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
