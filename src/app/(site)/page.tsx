import HeroSection from "@/components/home/hero-section";
import CloneYourselfSection from "@/components/home/clone-yourself";
import TheMethodologySection from "@/components/home/the-methodology";
import SeamlessIntegrationsSection from "@/components/home/seamless-integrations";
import { UseCasesSection } from "@/components/home/use-cases";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Metadata, Viewport } from "next";



// Matches the Google Business Profile: name, address, phone and hours must agree
// with it, or the two read as different businesses.
const areaServed = [
  { "@type": "City", "name": "Delray Beach" },
  { "@type": "AdministrativeArea", "name": "Palm Beach County" },
  { "@type": "AdministrativeArea", "name": "Broward County" },
  { "@type": "AdministrativeArea", "name": "Miami-Dade County" },
  { "@type": "Place", "name": "South Florida" }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://geekatyourspot.com/#organization",
      "name": "Geek at Your Spot",
      "alternateName": "Geek @ Your Spot",
      "url": "https://geekatyourspot.com",
      "logo": "https://geekatyourspot.com/images/GeekAtYourSpot.svg",
      "image": "https://geekatyourspot.com/images/action-figure.jpeg",
      "description": "AI consultancy building practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work.",
      "telephone": "+1-561-526-3512",
      "sameAs": [
        "https://www.facebook.com/geekatyourspot",
        "https://www.linkedin.com/company/geekatyourspot",
        "https://twitter.com/geekatyourspot"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2025 NW 18th Street",
        "addressLocality": "Delray Beach",
        "addressRegion": "FL",
        "postalCode": "33445",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "areaServed": areaServed,
      "priceRange": "$$",
      "foundingDate": "2024",
      "knowsAbout": ["Artificial Intelligence", "Machine Learning", "AI Integration", "Business Automation", "Process Optimization"]
    },
    {
      "@type": "Service",
      "@id": "https://geekatyourspot.com/#service",
      "name": "AI Consulting and Implementation",
      "serviceType": "AI Consulting",
      "description": "Design, build, and deploy AI systems that fit your existing stack. Our four-phase methodology helps small businesses scale without adding headcount.",
      "provider": {
        "@id": "https://geekatyourspot.com/#organization"
      },
      "areaServed": areaServed,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free AI Assessment",
              "description": "Complimentary consultation to evaluate your business needs and AI opportunities"
            },
            "price": "0",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI System Design",
              "description": "Custom AI solution design tailored to your existing tech stack and business requirements"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Implementation",
              "description": "Build and deploy AI systems with hands-on engineering expertise"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Business Automation",
              "description": "Reduce manual work and errors through AI-powered automation"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://geekatyourspot.com/#webpage",
      "url": "https://geekatyourspot.com",
      "name": "AI Consulting for South Florida Small Businesses",
      "description": "Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work.",
      "isPartOf": {
        "@id": "https://geekatyourspot.com/#website"
      },
      "primaryImageOfPage": {
        "@id": "https://geekatyourspot.com/#primaryimage"
      },
      "datePublished": "2024-01-01",
      "breadcrumb": {
        "@id": "https://geekatyourspot.com/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://geekatyourspot.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://geekatyourspot.com"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://geekatyourspot.com/#website",
      "url": "https://geekatyourspot.com",
      "name": "Geek at Your Spot",
      "description": "AI consulting for South Florida small businesses"
    },
    {
      "@type": "ImageObject",
      "@id": "https://geekatyourspot.com/#primaryimage",
      "inLanguage": "en-US",
      "url": "https://geekatyourspot.com/images/action-figure.jpeg",
      "contentUrl": "https://geekatyourspot.com/images/action-figure.jpeg",
      "width": 1024,
      "height": 1536,
      "caption": "Geek At Your Spot - AI-created action figure representing founder's hands-on approach to AI consulting"
    }
  ]
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    metadataBase: new URL('https://geekatyourspot.com'),
    title: "Geek at Your Spot",
    description: 'Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work. Free consultation with 40 years of engineering expertise.',
    keywords: [
      'AI consulting',
      'AI for small business',
      'Delray Beach AI',
      'South Florida AI consulting',
      'Business automation',
      'AI implementation',
      'AI tools',
      'Business efficiency',
      'AI systems',
      'AI integration',
      'machine learning for business',
    ],
    authors: [
      {
        name: 'Geek at Your Spot',
        url: 'https://geekatyourspot.com',
      },
    ],
    creator: 'Geek at Your Spot LLC',
    publisher: 'Geek at Your Spot LLC',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: "Geek at Your Spot",
      description: 'Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work.',
      url: 'https://geekatyourspot.com',
      siteName: 'Geek at Your Spot',
      images: [
        {
          url: 'https://geekatyourspot.com/images/action-figure.jpeg',
          width: 1024,
          height: 1536,
          alt: 'Geek At Your Spot - AI-created action figure representing hands-on AI consulting approach',
          type: 'image/jpeg',
        },
        {
          url: 'https://geekatyourspot.com/images/GeekAtYourSpot.svg',
          width: 116,
          height: 48,
          alt: 'Geek at Your Spot logo',
          type: 'image/svg+xml',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Geek at Your Spot",
      description: 'Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses.',
      creator: '@geekatyourspot',
      images: ['https://geekatyourspot.com/images/action-figure.jpeg'],
      site: '@geekatyourspot',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'technology',
    classification: 'Business Services',
    applicationName: 'Geek at Your Spot',
    icons: {
      icon: '/favicon.gif',
      shortcut: '/favicon.ico',
      apple: '/icon.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/icon.png',
        },
      ],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'black-translucent',
      title: 'Geek at Your Spot',
      startupImage: '/icon.png',
    },
    verification: {
      google: '_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI',
    },
  };
};

export const generateViewport = (): Viewport => ({
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#023059' },
  ],
  colorScheme: 'light',
});

export default async function Home() {
  // const useCasesData = await geekApiService.listPublishedBlogPosts("en", POST_TYPE.pillar);

  return (
    <>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <CloneYourselfSection />
      <UseCasesSection />
      <TheMethodologySection />
      <SeamlessIntegrationsSection />
      <SchedulerShell />
    </>
  );
}