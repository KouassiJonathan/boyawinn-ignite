import { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
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
  if (v.message.trim().length < 10)
    e.message = "Votre message doit contenir au moins 10 caractères.";
  return e;
}

const inputClass =
  "mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-anthracite outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brick focus-visible:ring-2 focus-visible:ring-ring/25";

const labelClass =
  "text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground";

export function Contact() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof Fields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <section id="contact" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="container-bw grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <Reveal>
          <p className="label-eyebrow">Contact</p>
          <h2 className="h-display mt-6 text-anthracite">Parlons de votre projet.</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Par téléphone, sur WhatsApp ou via le formulaire : le cabinet revient vers vous avec une
            réponse concrète.
          </p>

          <div className="mt-10 border-t border-border">
            <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-border py-6">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brick" strokeWidth={1.5} />
              <div className="min-w-0">
                <p className={labelClass}>Adresse</p>
                <p className="mt-1.5 text-sm text-anthracite">{ADDRESS}</p>
              </div>
            </div>
            <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-b border-border py-6">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brick" strokeWidth={1.5} />
              <div className="min-w-0">
                <p className={labelClass}>Téléphones</p>
                <ul className="mt-1.5 space-y-1.5">
                  {PHONES.map((p) => (
                    <li key={p}>
                      <a
                        href={telLink(p)}
                        className="text-sm font-semibold text-anthracite transition-colors hover:text-brick"
                      >
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={telLink(PHONES[0])}
              className="inline-flex items-center justify-center gap-2.5 border border-anthracite px-5 py-3.5 text-sm font-semibold text-anthracite transition-colors hover:bg-anthracite hover:text-anthracite-foreground"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              Appeler le cabinet
            </a>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-brick px-5 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brick-strong"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={110}>
          <form
            id="formulaire"
            noValidate
            onSubmit={onSubmit}
            className="border border-border p-7 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nom" className={labelClass}>
                  Nom complet
                </label>
                <input
                  id="nom"
                  value={values.nom}
                  onChange={set("nom")}
                  aria-invalid={Boolean(errors.nom)}
                  className={cn(inputClass, errors.nom && "border-destructive")}
                  placeholder="Votre nom"
                />
                {errors.nom && <p className="mt-1.5 text-xs text-destructive">{errors.nom}</p>}
              </div>
              <div>
                <label htmlFor="telephone" className={labelClass}>
                  Téléphone
                </label>
                <input
                  id="telephone"
                  inputMode="tel"
                  value={values.telephone}
                  onChange={set("telephone")}
                  aria-invalid={Boolean(errors.telephone)}
                  className={cn(inputClass, errors.telephone && "border-destructive")}
                  placeholder="+225 ..."
                />
                {errors.telephone && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.telephone}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={set("email")}
                  aria-invalid={Boolean(errors.email)}
                  className={cn(inputClass, errors.email && "border-destructive")}
                  placeholder="vous@exemple.com"
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="service" className={labelClass}>
                  Sujet
                </label>
                <select
                  id="service"
                  value={values.service}
                  onChange={set("service")}
                  aria-invalid={Boolean(errors.service)}
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

            <div className="mt-6">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={set("message")}
                aria-invalid={Boolean(errors.message)}
                className={cn(inputClass, "resize-y", errors.message && "border-destructive")}
                placeholder="Décrivez votre besoin"
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-anthracite px-7 py-4 text-sm font-semibold text-anthracite-foreground transition-colors duration-200 hover:bg-brick sm:w-auto"
            >
              <Send className="h-4 w-4" strokeWidth={1.75} />
              Envoyer ma demande
            </button>

            {sent && (
              <p role="status" className="mt-4 text-sm font-semibold text-brick">
                Votre demande a été préparée sur WhatsApp. Il ne vous reste plus qu'à l'envoyer.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
