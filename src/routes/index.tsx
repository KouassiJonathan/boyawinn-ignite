import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Engagements } from "@/components/Engagements";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Method } from "@/components/Method";
import { CreationSection } from "@/components/CreationSection";
import { School } from "@/components/School";
import { Pricing } from "@/components/Pricing";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";



const TITLE = "Boya Winn Consulting | Création d'entreprise, Comptabilité & Formation";
const DESCRIPTION =
  "Boya Winn Consulting accompagne les entrepreneurs et entreprises en Côte d'Ivoire dans la création d'entreprise, le suivi comptable et fiscal et la formation professionnelle.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Boya Winn Consulting",
          description: DESCRIPTION,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Angré 9ème tranche, Immeuble CGK, route de la CNPS",
            addressLocality: "Abidjan",
            addressCountry: "CI",
          },
          telephone: ["+2250749597614", "+2250757446952", "+2250707783631"],
          areaServed: "Côte d'Ivoire",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <WhyUs />
        <CreationSection />
        <School />
        <Pricing />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>

  );
}
