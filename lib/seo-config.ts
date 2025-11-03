import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  siteName: string;
  locale: string;
  type: string;
  image: string;
  twitterHandle?: string;
}

export const seoConfig: SEOConfig = {
  title: "ROUAT DAVID - Peintre Professionnel en Auvergne-Rhône-Alpes",
  description: "ROUAT DAVID, entrepreneur du bâtiment spécialisé en peinture intérieure et extérieure. Devis gratuit en Auvergne-Rhône-Alpes, 01800.",
  keywords: [
    "peinture intérieure Auvergne-Rhône-Alpes",
    "peinture extérieure 01800",
    "peintre professionnel Auvergne",
    "finitions peinture Rhône-Alpes",
    "entrepreneur bâtiment 01800",
    "peinture maison Auvergne-Rhône-Alpes",
    "travaux peinture intérieure",
    "peinture décorative",
    "ravalement façade",
    "finitions professionnelles",
    "devis gratuit",
    "ROUAT DAVID",
    "David Rouat",
    "peinture Auvergne",
    "entrepreneur bâtiment"
  ],
  author: "David Rouat",
  siteUrl: "https://rouat-david.fr",
  siteName: "ROUAT DAVID - Peinture",
  locale: "fr_FR",
  type: "website",
  image: "/og-image.jpg",
  twitterHandle: "@adbetton"
};

export function generateMetadata(
  title?: string,
  description?: string,
  image?: string,
  url?: string
): Metadata {
  const metaTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.title;
  const metaDescription = description || seoConfig.description;
  const metaImage = image || seoConfig.image;
  const metaUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: seoConfig.keywords.join(', '),
    authors: [{ name: seoConfig.author }],
    creator: seoConfig.author,
    publisher: seoConfig.author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(seoConfig.siteUrl),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: metaUrl,
      siteName: seoConfig.siteName,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      locale: seoConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: seoConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  };
}

// Données structurées pour l'entreprise
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${seoConfig.siteUrl}#organization`,
  "name": "ROUAT DAVID",
  "legalName": "Rouat David - Entrepreneur du bâtiment",
  "url": seoConfig.siteUrl,
  "logo": `${seoConfig.siteUrl}/logo.png`,
  "image": `${seoConfig.siteUrl}/og-image.jpg`,
  "description": seoConfig.description,
  "founder": {
    "@type": "Person",
    "name": "David Rouat"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "01800",
    "postalCode": "01800",
    "addressRegion": "Auvergne-Rhône-Alpes",
    "addressCountry": "FR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33658123042",
    "contactType": "customer service",
    "email": "rouat.david@orange.fr",
    "availableLanguage": "French"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Auvergne-Rhône-Alpes"
    },
    {
      "@type": "AdministrativeArea", 
      "name": "Ain"
    },
    {
      "@type": "City",
      "name": "01800"
    }
  ],
  "serviceType": [
    "Peinture intérieure",
    "Peinture extérieure", 
    "Finitions et décoration",
    "Ravalement de façade",
    "Travaux de peinture"
  ],
  "priceRange": "€€",
  "openingHours": "Mo-Fr 08:00-18:00",
  "sameAs": [
    `${seoConfig.siteUrl}`,
  ]
};

// Schema pour les services
export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Painting Services",
  "provider": {
    "@id": `${seoConfig.siteUrl}#organization`
  },
  "areaServed": organizationSchema.areaServed,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services de peinture",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Peinture intérieure",
          "description": "Travaux de peinture intérieure professionnels avec finitions parfaites"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Peinture extérieure",
          "description": "Peinture extérieure et ravalement de façades avec produits adaptés"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Finitions et décoration",
          "description": "Techniques de peinture décorative et finitions spéciales"
        }
      }
    ]
  }
};
