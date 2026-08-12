Reproduire le design et la structure de https://playful-spark-dev.lovable.app/ sur le site Boya Winn actuel en gardant la stack React + TypeScript + Tailwind CSS + Lucide.

## Direction visuelle
- Design corporate premium, minimaliste et épuré.
- Palette : rouge brique (#B5473A), anthracite (#252525), blanc, gris clair.
- Typographie : titres forts en Archivo, corps en Manrope.
- Fond clair (blanc/gris) pour les sections de contenu ; fond anthracite avec lignes de grille discrètes pour Hero, Pourquoi, CTA et Footer.
- Pas de dégradés multicolores, pas d'aura, pas d'animations lourdes.

## Structure cible
1. Hero (fond anthracite, grille, badge, titre, deux boutons, image + carte flottante)
2. Bande noire de 4 engagements (icônes fines)
3. Nos engagements (4 chiffres clés avec séparateurs)
4. À propos (image gauche + carte flottante Abidjan, texte droite)
5. Nos services (3 cartes égales : Création, Comptabilité, Formation)
6. Notre méthode (titre gauche, liste verticale numérotée droite)
7. Pourquoi Boya Winn (fond anthracite, avantages numérotés gauche, image droite)
8. Tarifs (3 cartes égales, carte centrale sombre + badge Promotion)
9. FAQ (titre gauche, accordéon droite)
10. CTA (fond anthracite, grille, deux boutons)
11. Footer corporate (logo, description, 3 colonnes de liens, contact)

## Modifications prévues

### Composants à refondre
- **Navbar.tsx** : barre minimale sur le Hero (uniquement le bouton CTA), transformation en navbar complète (logo + liens + CTA) au scroll. Liens : Accueil, À propos, Services, Méthode, Tarifs, FAQ.
- **Hero.tsx** : supprimer le mot rotatif et le gradient d'aura. Titre statique avec "créer" en brique. Grille de fond discrète. Image plus compacte. Carte flottante "Création en 72h".
- **Engagements.tsx** : passer d'une grille de compteurs à 4 blocs avec grands chiffres et séparateurs fins.
- **About.tsx** : simplifier la composition. Image principale à gauche avec carte flottante "Abidjan". Texte à droite avec liste de preuves.
- **Services.tsx** : remplacer la structure actuelle (service principal + 2 secondaires) par 3 cartes égales en ligne avec numéro, titre, description, prix, lien "En savoir plus".
- **Method.tsx** : transformer la timeline horizontale en titre gauche + liste verticale numérotée droite.
- **WhyUs.tsx** : ajuster la mise en page : titre en haut, liste numérotée à gauche, image à droite, fond anthracite avec grille.
- **Pricing.tsx** : 3 cartes égales, carte centrale en anthracite avec badge Promotion.
- **Faq.tsx** : conserver le titre gauche + accordéon droite, affiner le style.
- **Cta.tsx** : fond anthracite avec grille, supprimer la forme diagonale, deux boutons (Parler à un conseiller / Écrire sur WhatsApp).
- **Footer.tsx** : footer plus compact, logo + description + 3 colonnes (Entreprise, Services, Contact), copyright et liens légaux.

### Composants à supprimer de la page d'accueil
- **Expertise.tsx** : retirer de la landing page (pas présent dans le site cible).
- **CreationSection.tsx** : intégrer le contenu dans la carte Services.
- **School.tsx** : intégrer le contenu dans la carte Services.
- **Contact.tsx** : retirer de la landing page (le site cible redirige vers une page /contact ; ici, les CTA et le footer gèrent le contact).

### Fichiers à modifier
- `src/routes/index.tsx` : réordonner les sections, supprimer Expertise, CreationSection, School, Contact.
- `src/styles.css` : ajuster si nécessaire les utilitaires (`grid-lines`, `label-eyebrow`, etc.) et les tokens d'ombre/bordure.
- `src/lib/site.ts` : mettre à jour `NAV_LINKS` si besoin.

### Comportements à préserver
- Liens WhatsApp existants et messages prédéfinis.
- Numéros de téléphone et adresse.
- Smooth scroll vers les ancres.
- Accessibilité (sémantique, labels, focus).
- Responsive mobile et desktop.
