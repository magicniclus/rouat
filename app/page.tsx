'use client';

import { AnimatePresence } from 'framer-motion';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import ProjectGallery from '@/components/ProjectGallery';
import ContactSection from '@/components/ContactSection';
import LogoCarousel from '@/components/LogoCarousel';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import { useExitIntent } from '@/hooks/useExitIntent';
import { config } from '@/lib/config';
import { organizationSchema, servicesSchema } from '@/lib/seo-config';

export default function Home() {
  const { showExitIntent, closeExitIntent } = useExitIntent({
    enabled: true,
    delay: 500,
    sensitivity: 20
  });
  const servicesData = [
    {
      title: "Peinture Intérieure",
      subtitle: "Peinture et finitions intérieures",
      content: "Travaux de peinture intérieure professionnels. Application soignée pour transformer et embellir vos espaces de vie avec des finitions parfaites.",
      image: "/peinture.png",
      gradientFrom: "#ff7e5f",
      gradientTo: "#feb47b",
      href: "/services/peinture-interieure"
    },
    {
      title: "Peinture Extérieure",
      subtitle: "Ravalement et protection",
      content: "Peinture extérieure et ravalement de façades. Protection et embellissement de vos murs extérieurs avec des produits adaptés aux intempéries.",
      image: "/maison-work.png",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      href: "/services/peinture-exterieure"
    },
    {
      title: "Finitions & Décoration",
      subtitle: "Techniques décoratives",
      content: "Techniques de peinture décorative et finitions spéciales. Création d'ambiances uniques avec des effets de matière et de couleur.",
      image: "/plomberie.png",
      gradientFrom: "#28a745",
      gradientTo: "#20c997",
      href: "/services/finitions-decoration"
    }
  ];



  const contactInfo = {
    address: "01800\nAuvergne-Rhône-Alpes\nRayon d'intervention : 50 km autour de 01800",
    phone: "06 58 12 30 42",
    email: "rouat.david@orange.fr",
    mapEmbedUrl: "https://maps.google.com/maps?q=01800,France&t=&z=12&ie=UTF8&iwloc=&output=embed"
  };

  return (
    <div>
      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      
      <Hero config={config.hero} />
      <LogoCarousel config={config.partners} speed={30} />
      <AboutSection
        id="expertise"
        smallTitle={config.about.sections[0].smallTitle}
        title={config.about.sections[0].title}
        subtitle={config.about.sections[0].subtitle}
        content={config.about.sections[0].content}
        image={config.about.sections[0].image}
        gradientFrom={config.about.sections[0].gradientFrom}
        gradientTo={config.about.sections[0].gradientTo}
        buttonText={config.about.sections[0].buttonText}
        buttonHref={config.about.sections[0].buttonHref}
        reversed={config.about.sections[0].reversed}
      />
      <ServicesSection id="services" cards={servicesData} />
      <ProjectGallery id="realisations" config={config.gallery} />
      <AboutSection
        smallTitle={config.about.sections[1].smallTitle}
        title={config.about.sections[1].title}
        subtitle={config.about.sections[1].subtitle}
        content={config.about.sections[1].content}
        image={config.about.sections[1].image}
        gradientFrom={config.about.sections[1].gradientFrom}
        gradientTo={config.about.sections[1].gradientTo}
        buttonText={config.about.sections[1].buttonText}
        buttonHref={config.about.sections[1].buttonHref}
        reversed={config.about.sections[1].reversed}
      />
      <TeamSection config={config.team} />
      <ContactSection 
        title="Contactez-nous"
        subtitle="Parlons de votre projet de peinture intérieure ou extérieure en Auvergne-Rhône-Alpes"
        contactInfo={contactInfo} 
      />

      {/* Exit Intent Popup */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentPopup onClose={closeExitIntent} />
        )}
      </AnimatePresence>
    </div>
  );
}
