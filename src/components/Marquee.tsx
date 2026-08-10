const words = [
  "Création d'entreprise en 72h",
  "Suivi comptable & fiscal",
  "Business Plan",
  "École des Comptables",
  "Domiciliation",
  "Conseil fiscal & social",
  "Certification de bilan",
];

/** Bandeau défilant continu pour rythmer la page. */
export function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee-mask overflow-hidden border-y border-border bg-surface py-4"
    >
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-10 pr-10">
            {words.map((w) => (
              <span
                key={w}
                className="flex items-center gap-10 whitespace-nowrap text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground"
              >
                {w}
                <span className="h-1.5 w-1.5 rounded-full bg-brick" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
