import { Counter } from "./Counter";
import { Reveal } from "./Reveal";

const stats = [
  { to: 72, suffix: "h", label: "Pour créer votre entreprise" },
  { to: 5, suffix: "", label: "Domaines d'expertise" },
  { to: 5, suffix: "", label: "Modules de formation" },
  { to: 100, suffix: "%", label: "Accompagnement personnalisé" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-background py-12 lg:py-16">
      <div className="container-bw grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 90}>
            <div className="border-l-2 border-brick/30 pl-5 transition-colors hover:border-brick">
              <p className="text-3xl font-extrabold text-anthracite sm:text-4xl">
                <Counter to={s.to} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
