import { Reveal } from "./Reveal";

/** Domaines réellement présentés par le cabinet. */
const domains = [
  {
    num: "01",
    title: "Création d'entreprise",
    text: "Constitution et formalisation de personne physique, SARL, SA, SNC, SCOOPS et ONG.",
  },
  {
    num: "02",
    title: "Comptabilité",
    text: "Mise en place et tenue de la comptabilité, établissement et certification du bilan.",
  },
  {
    num: "03",
    title: "Fiscalité",
    text: "Déclarations fiscales, contrôle fiscal et social, sécurisation de vos obligations.",
  },
  {
    num: "04",
    title: "Conseil",
    text: "Montage de dossiers bancaires, rédaction de business plan et accompagnement stratégique.",
  },
  {
    num: "05",
    title: "Formation",
    text: "École des Comptables : Sage i7, e-Impôt, e-CNPS, caisse, banque et fin d'exercice.",
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="border-b border-border bg-surface py-24 lg:py-32">
      <div className="container-bw">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="label-eyebrow">Domaines d'expertise</p>
            <h2 className="h-display mt-6 text-anthracite">Cinq domaines, un seul cabinet.</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground lg:pb-2">
              De la constitution de votre société à la montée en compétences de vos équipes, chaque
              domaine est traité par le même interlocuteur.
            </p>
          </Reveal>
        </div>

        <ol className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <Reveal
              key={d.num}
              as="li"
              delay={i * 70}
              className={
                i === 0 ? "bg-background lg:col-span-2 lg:row-span-1" : "bg-background"
              }
            >
              <article className="hover-rule group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-surface lg:p-10">
                <span className="index-number text-3xl group-hover:text-brick">{d.num}</span>
                <h3 className="h-sub mt-6 text-anthracite">{d.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {d.text}
                </p>
                <span className="mt-auto pt-8">
                  <span className="rule-line" aria-hidden="true" />
                </span>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
