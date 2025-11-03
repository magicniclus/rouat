import ServicePage, { generateServiceMetadata } from '@/components/ServicePage';
import { Metadata } from 'next';

const finitionsDecorationConfig = {
  // SEO et métadonnées
  title: "Finitions & Décoration Peinture Auvergne-Rhône-Alpes - ROUAT DAVID",
  description: "Expert en finitions décoratives et techniques de peinture spéciales en Auvergne-Rhône-Alpes. Devis gratuit pour vos projets de décoration personnalisée.",
  keywords: [
    "finitions peinture Auvergne-Rhône-Alpes",
    "peinture décorative 01800",
    "techniques décoratives Auvergne",
    "effets peinture Rhône-Alpes", 
    "décoration murale professionnelle",
    "devis finitions gratuit",
    "ROUAT DAVID décorateur"
  ],
  
  // Contenu principal
  serviceName: "Finitions & Décoration",
  heroImage: "/plomberie.png",
  heroTitle: "Finitions & Techniques Décoratives",
  heroSubtitle: "Créez des ambiances uniques avec des techniques décoratives personnalisées et des finitions d'exception.",
  
  // Localisation
  sector: "Décoration - Finitions",
  location: "Auvergne-Rhône-Alpes",
  
  // Description détaillée
  mainDescription: "ROUAT DAVID vous propose son expertise en finitions décoratives et techniques spéciales de peinture en Auvergne-Rhône-Alpes. Passionné par les arts décoratifs, je maîtrise un large éventail de techniques pour créer des ambiances uniques et personnalisées. Chaque projet est une création sur mesure, adaptée à vos goûts et à votre intérieur, avec un souci constant du détail et de la perfection.",
  
  // Sous-prestations
  subServices: [
    {
      title: "Effets de matière",
      description: "Création d'effets décoratifs : stuc, chaux, béton ciré, effets métallisés pour des surfaces uniques et originales."
    },
    {
      title: "Patines et vieillissement",
      description: "Techniques de patine pour donner un aspect authentique et du caractère à vos murs et boiseries."
    },
    {
      title: "Peinture à l'éponge",
      description: "Application de techniques à l'éponge pour créer des effets de profondeur et de texture sur vos surfaces."
    },
    {
      title: "Pochoirs et motifs",
      description: "Réalisation de motifs décoratifs personnalisés, pochoirs, frises et ornements muraux sur mesure."
    },
    {
      title: "Finitions haut de gamme",
      description: "Application de finitions premium : laques, vernis, glacis pour un rendu professionnel et durable."
    },
    {
      title: "Conseils décoration",
      description: "Accompagnement complet dans vos choix décoratifs, harmonies colorées et création d'ambiances personnalisées."
    }
  ],
  
  // Avantages
  advantages: [
    "Devis gratuit et personnalisé",
    "Estimation gratuite et sans engagement",
    "Tarification transparente",
    "Techniques décoratives exclusives", 
    "Créations sur mesure uniques",
    "Matériaux haut de gamme",
    "Conseils d'expert en décoration",
    "Finitions d'exception garanties",
    "Respect de vos goûts et budget",
    "Suivi personnalisé de A à Z"
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
  finitionsDecorationConfig.serviceName,
  finitionsDecorationConfig.location,
  finitionsDecorationConfig.description,
  finitionsDecorationConfig.keywords
);

export default function FinitionsDecorationPage() {
  return <ServicePage {...finitionsDecorationConfig} />;
}
