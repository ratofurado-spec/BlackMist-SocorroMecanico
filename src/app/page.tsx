import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CoverageSection } from "@/components/CoverageSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MobileAssistanceSection } from "@/components/MobileAssistanceSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustBar } from "@/components/TrustBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business } from "@/config/business";
import { phoneUrl } from "@/lib/contact";

/** Somente dados confirmados. Sem geo, preços, avaliações ou perfis sociais. */
function buildJsonLd() {
  const sameAs = Object.values(business.social).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: business.name,
    description: business.description,
    ...(business.siteUrl ? { url: business.siteUrl, "@id": `${business.siteUrl}/#negocio` } : {}),
    ...(phoneUrl() ? { telephone: `+${business.contact.phone}` } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      addressCountry: business.address.country,
    },
    areaServed: business.coverage.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    makesOffer: business.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.description },
    })),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesSection />
        <MobileAssistanceSection />
        <AboutSection />
        <CoverageSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
