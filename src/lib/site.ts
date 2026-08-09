export const PHONES = ["+225 07 49 59 76 14", "+225 07 57 44 69 52", "+225 07 07 78 36 31"] as const;

export const WHATSAPP_NUMBER = "2250749597614";

export const ADDRESS = "Angré 9ème tranche, Immeuble CGK (route de la CNPS), Abidjan";

export const WA_MESSAGES = {
  general: "Bonjour Boya Winn Consulting, je souhaite obtenir des informations sur vos services.",
  creation:
    "Bonjour Boya Winn Consulting, je souhaite obtenir des informations concernant la création de mon entreprise à 139 000 FCFA.",
  comptabilite:
    "Bonjour Boya Winn Consulting, je souhaite obtenir des informations concernant votre service de suivi comptable à 60 000 FCFA par mois.",
  formation:
    "Bonjour Boya Winn Consulting, je souhaite obtenir des informations concernant la formation de l'École des Comptables.",
} as const;

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Tarifs", href: "#tarifs" },
  { label: "Formation", href: "#formation" },
  { label: "À propos", href: "#a-propos" },
  { label: "Contact", href: "#contact" },
] as const;
