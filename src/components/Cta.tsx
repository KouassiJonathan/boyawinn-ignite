import { ArrowUpRight } from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/site";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-anthracite py-24 text-anthracite-foreground lg:py-32">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 text-anthracite-foreground/[0.06]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 hidden h-[26rem] w-[26rem] -translate-y-1/2 rotate-45 border border-brick/25 lg:block"
      />
      <div className="container-bw relative">
        <p className="label-eyebrow">Passons à l'action</p>
        <h2 className="h-display mt-6 max-w-3xl">
          Construisons ensemble votre prochaine étape.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-anthracite-foreground/70">
          Création, comptabilité, fiscalité ou formation : le cabinet vous répond et vous oriente
          vers la formule adaptée à votre situation.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-brick px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors duration-200 hover:bg-brick-strong"
          >
            Parler à un conseiller
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={1.75}
            />
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2.5 border border-anthracite-foreground/30 px-7 py-4 text-sm font-semibold text-anthracite-foreground transition-colors duration-200 hover:border-anthracite-foreground hover:bg-anthracite-foreground/5"
          >
            Découvrir nos services
          </a>
        </div>
      </div>
    </section>
  );
}
