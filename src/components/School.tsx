import { FileText, Landmark, Receipt, Wallet, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { waLink, WA_MESSAGES } from "@/lib/site";

const modules = [
  {
    num: "01",
    icon: FileText,
    title: "Mise en place de la comptabilité",
    text: "Utilisation du logiciel Sage i7.",
  },
  { num: "02", icon: Receipt, title: "Déclarations fiscales", text: "Utilisation de e-Impôt." },
  {
    num: "03",
    icon: ShieldCheck,
    title: "Déclarations sociales",
    text: "Utilisation de e-CNPS.",
  },
  {
    num: "04",
    icon: Wallet,
    title: "Caisse et banque",
    text: "Traitement et suivi des opérations de caisse et de banque.",
  },
  {
    num: "05",
    icon: Landmark,
    title: "Travaux de fin d'exercice",
    text: "Préparation et traitement des opérations de fin d'exercice.",
  },
];

export function School() {
  return (
    <section id="formation" className="bg-background py-20 lg:py-28">
      <div className="container-bw">
        <Reveal>
          <SectionHeading
            eyebrow="Formation"
            title="École des Comptables"
            subtitle="Apprenez la comptabilité avec des outils utilisés dans le monde professionnel."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Frais de formation
              </p>
              <p className="mt-2 text-2xl font-extrabold text-brick">150 000 FCFA</p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Inscription + documents
              </p>
              <p className="mt-2 text-2xl font-extrabold text-brick">10 000 FCFA</p>
            </div>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <Reveal key={m.num} delay={i * 70} as="li" className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brick/40 hover:shadow-card">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-anthracite text-anthracite-foreground">
                    <m.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-extrabold tracking-widest text-brick">{m.num}</span>
                </div>
                <h3 className="mt-5 text-base font-extrabold text-anthracite">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <a
            href={waLink(WA_MESSAGES.formation)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-brick px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brick-strong"
          >
            Je souhaite m'inscrire
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
