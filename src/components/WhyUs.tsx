import { Reveal } from "./Reveal";
import whyUsImage from "@/assets/section-whyus.jpg";

const advantages = [
  {
    num: "01",
    title: "Rapidité",
    text: "Votre entreprise créée en 72h, dossier administratif complet à la clé.",
  },
  {
    num: "02",
    title: "Accompagnement personnalisé",
    text: "Un interlocuteur dédié pour vos démarches administratives, comptables et fiscales.",
  },
  {
    num: "03",
    title: "Rigueur",
    text: "Déclarations, bilans et contrôles traités avec les outils utilisés par l'administration.",
  },
  {
    num: "04",
    title: "Expertise transversale",
    text: "Création, comptabilité, fiscalité, conseil et formation dans un même cabinet.",
  },
];

export function WhyUs() {
  return (
    <section
      id="pourquoi"
      className="relative overflow-hidden bg-anthracite py-24 text-anthracite-foreground lg:py-32"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 text-anthracite-foreground/[0.05]"
      />
      <div className="container-bw relative">
        <Reveal>
          <p className="label-eyebrow-light">Pourquoi Boya Winn</p>
          <h2 className="h-display mt-6 max-w-2xl">
            Pourquoi choisir Boya Winn ?
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <ul className="border-t border-anthracite-foreground/15">
            {advantages.map((a, i) => (
              <Reveal key={a.num} as="li" delay={i * 80}>
                <div className="group grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-anthracite-foreground/15 py-8 transition-colors duration-300 hover:border-brick sm:gap-10">
                  <span className="font-display text-sm font-bold tracking-[0.14em] text-brick">
                    {a.num}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold uppercase tracking-[0.08em] sm:text-xl">
                      {a.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-anthracite-foreground/70">
                      {a.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120} className="lg:pt-8">
            <img
              src={whyUsImage}
              alt="Consultante du cabinet Boya Winn Consulting accueillant un client dans les bureaux d'Abidjan"
              width={1200}
              height={900}
              loading="lazy"
              className="h-[300px] w-full object-cover lg:h-[560px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
