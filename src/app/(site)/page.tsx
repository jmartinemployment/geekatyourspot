import HeroSection from "@/components/home/hero-section";
import CloneYourselfSection from "@/components/home/clone-yourself";
import TheMethodologySection from "@/components/home/the-methodology";
import SeamlessIntegrationsSection from "@/components/home/seamless-integrations";
import { UseCasesSection } from "@/components/home/use-cases";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Metadata, Viewport } from "next";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import { AREA_SERVED } from "@/lib/seo/organization";

// The Organization and WebSite nodes come from the site layout (src/lib/seo/organization.ts).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "AI Consulting and Implementation",
      "serviceType": "AI Consulting",
      "description": "Design, build, and deploy AI systems that fit your existing stack. Our four-phase methodology helps small businesses scale without adding headcount.",
      "provider": {
        "@type": "Organization",
        "name": "Geek @ Your Spot LLC",
        "url": "https://geekatyourspot.com"
      },
      "areaServed": AREA_SERVED,
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
      "url": "https://geekatyourspot.com",
      "name": "AI Consulting for South Florida Business",
      "description": "Ready to put AI to work? Geek @ Your Spot LLC builds practical AI tools for South Florida small businesses to scale, reduce errors, and cut manual work.",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://geekatyourspot.com"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "inLanguage": "en-US",
        "url": "https://geekatyourspot.com/images/home-hero.webp",
        "contentUrl": "https://geekatyourspot.com/images/home-hero.webp",
        "width": 1024,
        "height": 1024,
        "caption": "A Geek @ Your Spot LLC robot action figure in its package, holding a laptop with a rising chart, beside icons for chat, automation, reporting and a small business storefront."
      },
      "datePublished": "2024-01-01",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://geekatyourspot.com"
          }
        ]
      }
    }
  ]
};

/** The H1's lead words and the place the business serves; with the template it runs 54 characters. */
const HOME_TITLE = "AI Integration in South Florida";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    metadataBase: new URL('https://geekatyourspot.com'),
    title: HOME_TITLE,
    description: 'Ready to put AI to work? Geek @ Your Spot LLC builds practical AI tools for South Florida small businesses to scale, reduce errors, and cut manual work.',
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
        name: 'Geek @ Your Spot LLC',
        url: 'https://geekatyourspot.com',
      },
    ],
    creator: 'Geek @ Your Spot LLC',
    publisher: 'Geek @ Your Spot LLC',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title: `${HOME_TITLE} | Geek @ Your Spot LLC`,
      description: 'Ready to put AI to work? Geek @ Your Spot LLC builds practical AI tools for South Florida small businesses to scale, reduce errors, and cut manual work.',
      url: 'https://geekatyourspot.com',
      siteName: 'Geek @ Your Spot LLC',
      images: [SHARE_IMAGE],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${HOME_TITLE} | Geek @ Your Spot LLC`,
      description: 'Ready to put AI to work? Geek @ Your Spot LLC builds practical AI tools for South Florida small businesses.',
      images: [SHARE_IMAGE],
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
    applicationName: 'Geek @ Your Spot LLC',
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
      title: 'Geek @ Your Spot LLC',
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