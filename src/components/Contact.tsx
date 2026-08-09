import { useState } from "react";
import { MapPin, Phone, MessageCircle, PenLine, Send, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ADDRESS, PHONES, telLink, waLink, WA_MESSAGES } from "@/lib/site";
import { cn } from "@/lib/utils";

type Fields = { nom: string; telephone: string; email: string; service: string; message: string };

const SERVICES = [
  "Création d'entreprise",
  "Suivi comptable et fiscal",
  "Formation — École des Comptables",
  "Autre demande",
];

const empty: Fields = { nom: "", telephone: "", email: "", service: "", message: "" };

function validate(v: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (v.nom.trim().length < 3) e.nom = "Veuillez indiquer votre nom complet.";
  if (!/^[0-9+\s().-]{8,}$/.test(v.telephone.trim()))
    e.telephone = "Veuillez indiquer un numéro de téléphone valide.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    e.email = "Veuillez indiquer une adresse email valide.";
  if (!v.service) e.service = "Veuillez sélectionner un service.";
  if (v.message.trim().length < 10) e.message = "Votre message doit contenir au moins 10 caractères.";
  return e;
}

const inputClass =
  "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-anthracite outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brick focus:ring-2 focus:ring-ring/25";

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    const text = `Bonjour Boya Winn Consulting, je suis ${values.nom}.
Service recherché : ${values.service}
Téléphone : ${values.telephone}
Email : ${values.email}

${values.message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
    setValues(empty);
  };

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="container-bw">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre projet"
            subtitle="Contactez le cabinet par téléphone, WhatsApp ou via le formulaire ci-dessous."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="h-full rounded-xl border border-border bg-surface p-7">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brick" strokeWidth={2} />
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-anthracite">
                    Adresse
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{ADDRESS}</p>
                </div>
              </div>

              <div className="mt-7 flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brick" strokeWidth={2} />
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-anthracite">
                    Téléphones
                  </p>
                  <ul className="mt-1 space-y-1">
                    {PHONES.map((p) => (
                      <li key={p}>
                        <a
                          href={telLink(p)}
                          className="text-sm font-semibold text-muted-foreground transition-colors hover:text-brick"
                        >
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <a
                  href={telLink(PHONES[0])}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-anthracite px-5 py-3 text-sm font-semibold text-anthracite-foreground transition-colors hover:bg-brick"
                >
                  <Phone className="h-4 w-4" />
                  Appeler
                </a>
                <a
                  href={waLink(WA_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brick px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brick-strong"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="#formulaire"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-anthracite transition-colors hover:border-brick hover:text-brick"
                >
                  <PenLine className="h-4 w-4" />
                  Nous écrire
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <form
              id="formulaire"
              noValidate
              onSubmit={onSubmit}
              className="rounded-xl border border-border bg-card p-7 shadow-card"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nom" className="text-sm font-semibold text-anthracite">
                    Nom complet
                  </label>
                  <input
                    id="nom"
                    value={values.nom}
                    onChange={set("nom")}
                    className={cn(inputClass, errors.nom && "border-destructive")}
                    placeholder="Votre nom"
                  />
                  {errors.nom && <p className="mt-1.5 text-xs text-destructive">{errors.nom}</p>}
                </div>
                <div>
                  <label htmlFor="telephone" className="text-sm font-semibold text-anthracite">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    inputMode="tel"
                    value={values.telephone}
                    onChange={set("telephone")}
                    className={cn(inputClass, errors.telephone && "border-destructive")}
                    placeholder="+225 ..."
                  />
                  {errors.telephone && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.telephone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-semibold text-anthracite">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={set("email")}
                    className={cn(inputClass, errors.email && "border-destructive")}
                    placeholder="vous@exemple.com"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="service" className="text-sm font-semibold text-anthracite">
                    Service recherché
                  </label>
                  <select
                    id="service"
                    value={values.service}
                    onChange={set("service")}
                    className={cn(inputClass, errors.service && "border-destructive")}
                  >
                    <option value="">Sélectionnez un service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.service}</p>
                  )}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-semibold text-anthracite">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={set("message")}
                  className={cn(inputClass, "resize-y", errors.message && "border-destructive")}
                  placeholder="Décrivez votre besoin"
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brick px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brick-strong sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Envoyer ma demande
                <ArrowRight className="h-4 w-4" />
              </button>

              {sent && (
                <p role="status" className="mt-4 text-sm font-semibold text-brick">
                  Votre demande a été préparée sur WhatsApp. Il ne vous reste plus qu'à l'envoyer.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
