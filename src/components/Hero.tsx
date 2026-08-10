import { useEffect, useState } from "react";
import { ArrowRight, Building2, Calculator, ShieldCheck, GraduationCap, Timer } from "lucide-react";
import heroImage from "@/assets/hero-consulting.jpg";
import { waLink, WA_MESSAGES } from "@/lib/site";

const indicators = [
  { icon: Building2, label: "Création d'entreprise en 72h" },
  { icon: Calculator, label: "Accompagnement comptable" },
  { icon: ShieldCheck, label: "Conseil fiscal et social" },
  { icon: GraduationCap, label: "Formation professionnelle" },
];

const rotating = ["créer", "gérer", "développer", "former"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % rotating.length), 2400);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      setOffset(Math.min(window.scrollY, 600) * 0.08);
    };
    const onScroll = () => {
      if (!raf) raf = window.requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="accueil" className="hero-aura relative overflow-hidden bg-anthracite text-anthracite-foreground">
      <div className="container-bw relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div className="hero-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-anthracite-foreground/15 bg-anthracite-foreground/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-anthracite-foreground/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brick opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brick" />
            </span>
            Cabinet de conseil — Abidjan
          </p>
          <h1 className="mt-6 text-[2rem] font-extrabold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            Votre partenaire pour{" "}
            <span key={index} className="word-swap inline-block text-brick">
              {rotating[index]}
            </span>
            <br className="hidden sm:block" /> votre entreprise
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-anthracite-foreground/75 sm:text-lg">
            Boya Winn Consulting vous accompagne dans la création d'entreprise, le suivi comptable
            et fiscal et la formation professionnelle des comptables.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(WA_MESSAGES.creation)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-md bg-brick px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-brick-strong hover:shadow-lift"
            >
              Créer mon entreprise
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-anthracite-foreground/25 px-7 py-3.5 text-sm font-semibold text-anthracite-foreground transition-all duration-300 hover:border-anthracite-foreground/60 hover:bg-anthracite-foreground/5"
            >
              Nous contacter
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden rounded-xl border border-anthracite-foreground/10 shadow-lift"
            style={{ transform: `translate3d(0, ${-offset}px, 0)` }}
          >
            <img
              src={heroImage}
              alt="Consultants de Boya Winn Consulting analysant des documents comptables et administratifs"
              width={1200}
              height={1408}
              className="h-[320px] w-full scale-105 object-cover transition-transform duration-[1200ms] ease-out hover:scale-100 sm:h-[420px] lg:h-[520px]"
            />
          </div>

          <div
            className="float-card absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-lift sm:left-auto sm:-right-4"
            style={{ transform: `translate3d(0, ${-offset * 0.6}px, 0)` }}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brick/10 text-brick">
              <Timer className="h-5 w-5" strokeWidth={2} />
            </span>
            <div>
              <p className="text-sm font-extrabold text-anthracite">Création en 72h</p>
              <p className="text-xs text-muted-foreground">Dès 139 000 FCFA</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-anthracite-foreground/10">
        <ul className="container-bw grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
          {indicators.map(({ icon: Icon, label }) => (
            <li key={label} className="group flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-brick/15 text-brick transition-all duration-300 group-hover:bg-brick group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span className="text-sm font-semibold text-anthracite-foreground/90">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
