import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

const peintureExterieurConfig = {
  // SEO et métadonnées
  title: "Peinture Extérieure Auvergne-Rhône-Alpes - ROUAT DAVID",
  description: "Spécialiste peinture extérieure et ravalement de façades en Auvergne-Rhône-Alpes. Devis gratuit pour vos travaux de peinture extérieure. Protection durable garantie.",
  keywords: [
    "peinture extérieure Auvergne-Rhône-Alpes",
    "ravalement façade 01800",
    "peinture façade Auvergne", 
    "peintre extérieur Rhône-Alpes",
    "devis ravalement gratuit",
    "peinture extérieure professionnelle",
    "ROUAT DAVID façadier"
  ],
  
  // Contenu principal
  serviceName: "Peinture Extérieure",
  heroImage: "/maison-work.png",
  heroTitle: "Peinture Extérieure & Ravalement",
  heroSubtitle: "Protégez et embellissez vos façades avec des solutions durables adaptées au climat de l'Auvergne-Rhône-Alpes.",
  
  // Localisation
  sector: "Peinture - Ravalement",
  location: "Auvergne-Rhône-Alpes",
  
  // Description détaillée
  mainDescription: "ROUAT DAVID, expert en peinture extérieure, vous accompagne dans tous vos projets de ravalement et de protection de façades en Auvergne-Rhône-Alpes. Spécialisé dans les techniques de peinture extérieure, j'utilise exclusivement des produits adaptés aux conditions climatiques de notre région pour garantir une protection durable et un rendu esthétique optimal de vos façades.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Ravalement de façades",
      description: "Nettoyage, préparation et application de peinture extérieure sur tous types de façades avec produits haute résistance."
    },
    {
      title: "Préparation des façades",
      description: "Nettoyage haute pression, grattage, rebouchage des fissures et application d'enduits de façade."
    },
    {
      title: "Peinture anti-humidité",
      description: "Application de peintures spéciales contre l'humidité et les infiltrations pour une protection maximale."
    },
    {
      title: "Traitement des fissures",
      description: "Réparation professionnelle des fissures et microfissures avec produits élastiques adaptés."
    },
    {
      title: "Peinture volets et menuiseries",
      description: "Rénovation et protection de tous éléments extérieurs en bois, PVC ou métal avec peintures spécialisées."
    },
    {
      title: "Conseils techniques",
      description: "Diagnostic de l'état de vos façades et conseils sur les meilleures solutions de protection et d'embellissement."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente", 
    "Produits haute qualité résistants aux intempéries",
    "Techniques professionnelles éprouvées",
    "Garantie sur tous les travaux extérieurs",
    "Respect des normes environnementales",
    "Protection complète du chantier",
    "Conseils d'expert en ravalement",
    "Suivi post-travaux inclus"
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
  peintureExterieurConfig.serviceName,
  peintureExterieurConfig.location,
  peintureExterieurConfig.description,
  peintureExterieurConfig.keywords
);

export default function PeintureExterieurePage() {
  return <ServicePage {...peintureExterieurConfig} />;
}
