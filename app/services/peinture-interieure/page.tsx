import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

const peintureInterieurConfig = {
  // SEO et métadonnées
  title: "Peinture Intérieure Auvergne-Rhône-Alpes - ROUAT DAVID",
  description: "Expert en peinture intérieure en Auvergne-Rhône-Alpes. Devis gratuit et personnalisé pour tous vos projets de peinture intérieure. Finitions professionnelles garanties.",
  keywords: [
    "peinture intérieure Auvergne-Rhône-Alpes",
    "peintre intérieur 01800", 
    "peinture murs Auvergne",
    "finitions peinture Rhône-Alpes",
    "devis peinture gratuit",
    "peinture professionnelle",
    "ROUAT DAVID peintre"
  ],
  
  // Contenu principal
  serviceName: "Peinture Intérieure",
  heroImage: "/peinture.png",
  heroTitle: "Peinture Intérieure Professionnelle",
  heroSubtitle: "Transformez vos espaces intérieurs avec des finitions parfaites et durables. Expert peintre en Auvergne-Rhône-Alpes.",
  
  // Localisation
  sector: "Peinture - Bâtiment",
  location: "Auvergne-Rhône-Alpes",
  
  // Description détaillée
  mainDescription: "ROUAT DAVID vous propose ses services de peinture intérieure professionnelle en Auvergne-Rhône-Alpes. Fort de mon expertise dans le secteur du bâtiment, je réalise tous vos projets de peinture intérieure avec un souci constant de la qualité et des finitions parfaites. De la préparation des supports à l'application finale, chaque étape est réalisée avec le plus grand soin pour un résultat durable et esthétique.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Peinture murs et plafonds",
      description: "Application professionnelle de peinture sur tous types de supports intérieurs avec préparation soignée des surfaces."
    },
    {
      title: "Préparation des supports",
      description: "Rebouchage, ponçage, lessivage et application d'enduits pour une surface parfaitement lisse et prête à peindre."
    },
    {
      title: "Peinture décorative",
      description: "Techniques décoratives spéciales : effets de matière, patines, et finitions personnalisées pour un rendu unique."
    },
    {
      title: "Peinture boiseries",
      description: "Rénovation et peinture de portes, fenêtres, plinthes, et tous éléments en bois avec lasures ou peintures adaptées."
    },
    {
      title: "Finitions et retouches",
      description: "Soins apportés aux détails, protection des sols et mobilier, nettoyage complet après intervention."
    },
    {
      title: "Conseils couleurs",
      description: "Accompagnement dans le choix des couleurs et des finitions selon vos goûts et l'ambiance souhaitée."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement", 
    "Tarification transparente",
    "Finitions professionnelles soignées",
    "Matériaux de qualité supérieure",
    "Respect des délais convenus",
    "Protection complète de vos biens",
    "Conseils d'expert en décoration",
    "Garantie sur tous les travaux",
    "Nettoyage complet après chantier"
  ],
  
  // Zone d'intervention
  serviceArea: [
    "01800 et environs",
    "Auvergne-Rhône-Alpes", 
    "Ain (01)",
    "50 km autour de 01800",
    "Communes limitrophes",
    "Sur devis pour zones éloignées"
  ],
  
  // Contact
  contactInfo: {
    phone: "06 58 12 30 42",
    email: "rouat.david@orange.fr",
    address: "01800, Auvergne-Rhône-Alpes"
  }
};

// Métadonnées SEO automatiques
export const metadata: Metadata = generateServiceMetadata(
  peintureInterieurConfig.serviceName,
  peintureInterieurConfig.location,
  peintureInterieurConfig.description,
  peintureInterieurConfig.keywords
);

export default function PeintureInterieurePage() {
  return <ServicePage {...peintureInterieurConfig} />;
}
