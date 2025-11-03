import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

// Configuration de la page peinture
const peintureConfig = {
  // SEO et métadonnées
  title: "Peinture Auvergne-Rhône-Alpes - ROUAT DAVID",
  description: "ROUAT DAVID, spécialiste travaux de peinture en Auvergne-Rhône-Alpes. Peinture intérieure et extérieure. Devis gratuit et personnalisé pour tous vos projets.",
  keywords: [
    "peinture Auvergne-Rhône-Alpes",
    "peintre 01800",
    "peinture intérieure",
    "peinture extérieure",
    "devis peinture gratuit",
    "travaux peinture Auvergne",
    "entrepreneur peintre",
    "peinture façade",
    "rénovation peinture"
  ],
  
  // Contenu principal
  serviceName: "Peinture",
  heroImage: "/peinture.png",
  heroTitle: "Travaux de Peinture Professionnels",
  heroSubtitle: "Peinture intérieure et extérieure en Auvergne-Rhône-Alpes. Application professionnelle avec devis gratuit et personnalisé.",
  
  // Secteur d'activité
  sector: "BTP - Peinture",
  location: "Auvergne-Rhône-Alpes",
  
  // Contenu détaillé
  mainDescription: "ROUAT DAVID, entrepreneur spécialisé en travaux de peinture en Auvergne-Rhône-Alpes, vous accompagne dans tous vos projets de peinture intérieure et extérieure. Que vous souhaitiez rafraîchir vos murs, rénover votre façade ou créer une ambiance personnalisée, je vous propose une prestation complète avec des finitions soignées. Mon expertise dans le secteur du BTP me permet de vous conseiller sur le choix des couleurs et des finitions adaptées à vos besoins.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Peinture intérieure",
      description: "Peinture de murs, plafonds, boiseries pour toutes les pièces de votre habitation"
    },
    {
      title: "Peinture extérieure",
      description: "Ravalement de façade, peinture de volets, portails et éléments extérieurs"
    },
    {
      title: "Préparation des supports",
      description: "Ponçage, rebouchage, lessivage et préparation minutieuse des surfaces"
    },
    {
      title: "Peinture décorative",
      description: "Effets décoratifs, patines, enduits à la chaux pour personnaliser vos espaces"
    },
    {
      title: "Peinture de rénovation",
      description: "Remise en état de peintures anciennes, traitement des fissures et défauts"
    },
    {
      title: "Conseil couleurs",
      description: "Aide au choix des couleurs et harmonies pour créer l'ambiance souhaitée"
    },
    {
      title: "Finitions spéciales",
      description: "Peintures spécialisées : anti-humidité, lessivable, écologique"
    },
    {
      title: "Protection des surfaces",
      description: "Bâchage soigné et protection de vos meubles et sols pendant les travaux"
    }
  ],
  
  // Avantages/Points forts
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Application professionnelle garantie",
    "Matériaux de qualité supérieure",
    "Finitions parfaites et durables",
    "Conseil personnalisé en couleurs",
    "Respect des délais convenus",
    "Protection soignée de vos biens",
    "Garantie sur tous les travaux"
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
  
  // Informations de contact
  contactInfo: {
    phone: "06 58 12 30 42",
    email: "rouat.david@orange.fr",
    address: "01800, Auvergne-Rhône-Alpes"
  }
  
  // Pas de section pricing selon les instructions
};

// Génération des métadonnées SEO
export const metadata: Metadata = generateServiceMetadata(
  peintureConfig.serviceName,
  peintureConfig.location,
  peintureConfig.description,
  peintureConfig.keywords
);

export default function PeinturePage() {
  return <ServicePage {...peintureConfig} />;
}
