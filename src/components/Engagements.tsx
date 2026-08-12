import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const facts = [
  { to: 72, suffix: "h", label: "Pour créer votre entreprise" },
  { to: 5, suffix: "", label: "Domaines d'expertise" },
  { to: 5, suffix: "", label: "Modules de formation" },
  { to: 1, suffix: " mois", label: "De suivi comptable offert" },
];

export function Engagements() {
  return (
    <section aria-label="Nos engagements" className="border-b border-border bg-background">
      <div className="container-bw py-16 lg:py-24">
        <Reveal>
          <p className="label-eyebrow">Nos engagements</p>
        </Reveal>
        <dl className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-0">
          {facts.map((f, i) => (
            <Reveal
              key={f.label}
              delay={i * 90}
              className={cn(
                "min-w-0",
                i > 0 && "lg:border-l lg:border-border lg:pl-10",
                (i === 1 || i === 3) && "border-l border-border pl-6 lg:pl-10",
              )}
            >
              <dt className="font-display text-5xl font-bold tracking-tight text-anthracite sm:text-6xl">
                <Counter to={f.to} suffix={f.suffix} />
              </dt>
              <dd className="mt-3 max-w-[16ch] text-sm leading-snug text-muted-foreground">
                {f.label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
