import { Timer, HeartHandshake, Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const items = [
  { icon: Timer, title: "Rapidité", text: "Création de votre entreprise en 72h." },
  {
    icon: HeartHandshake,
    title: "Accompagnement",
    text: "Un accompagnement personnalisé pour vos démarches administratives, comptables et fiscales.",
  },
  {
    icon: Briefcase,
    title: "Expertise",
    text: "Des solutions adaptées aux besoins des entrepreneurs et des entreprises.",
  },
  {
    icon: GraduationCap,
    title: "Formation pratique",
    text: "Une formation orientée vers la pratique et les outils professionnels.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container-bw">
        <Reveal>
          <SectionHeading eyebrow="Nos atouts" title="Pourquoi choisir Boya Winn Consulting ?" />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-brick/10 text-brick">
                  <it.icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-base font-extrabold text-anthracite">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
