import HeroSection from "@/components/home/hero-section";
import CloneYourselfSection from "@/components/home/clone-yourself";
import TheMethodologySection from "@/components/home/the-methodology";
import SeamlessIntegrationsSection from "@/components/home/seamless-integrations";
import { UseCasesSection } from "@/components/home/use-cases";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Metadata, Viewport } from "next";



export const generateMetadata = async (): Promise<Metadata> => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.geekatyourspot.com/#organization",
        "name": "Geek at Your Spot",
        "url": "https://www.geekatyourspot.com",
        "logo": "https://www.geekatyourspot.com/logo.png",
        "description": "AI consultancy building practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work.",
        "sameAs": [
          "https://www.facebook.com/geekatyourspot",
          "https://www.linkedin.com/company/geek-at-your-spot",
          "https://twitter.com/geekatyourspot"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Delray Beach",
          "addressLocality": "Delray Beach",
          "addressRegion": "FL",
          "postalCode": "33444",
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "City",
          "name": "Delray Beach"
        },
        "foundingDate": "2024",
        "knowsAbout": ["Artificial Intelligence", "Machine Learning", "AI Integration", "Business Automation", "Process Optimization"]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.geekatyourspot.com/#localbusiness",
        "name": "Geek at Your Spot",
        "url": "https://www.geekatyourspot.com",
        "image": "https://www.geekatyourspot.com/images/action-figure.jpeg",
        "description": "AI consulting firm specializing in designing, building, and deploying AI systems for small businesses.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delray Beach",
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "areaServed": [
          { "@type": "City", "name": "Delray Beach" },
          { "@type": "State", "name": "Florida" },
          { "@type": "Region", "name": "South Florida" }
        ],
        "serviceType": "AI Consulting",
        "priceRange": "$$"
      },
      {
        "@type": "Service",
        "@id": "https://www.geekatyourspot.com/#service",
        "name": "AI Consulting and Implementation",
        "description": "Design, build, and deploy AI systems that fit your existing stack. Our four-phase methodology helps small businesses scale without adding headcount.",
        "provider": {
          "@id": "https://www.geekatyourspot.com/#organization"
        },
        "areaServed": {
          "@type": "City",
          "name": "Delray Beach"
        },
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
        "@id": "https://www.geekatyourspot.com/#webpage",
        "url": "https://www.geekatyourspot.com",
        "name": "AI Consulting for South Florida Small Businesses",
        "description": "Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work.",
        "isPartOf": {
          "@id": "https://www.geekatyourspot.com/#website"
        },
        "primaryImageOfPage": {
          "@id": "https://www.geekatyourspot.com/#primaryimage"
        },
        "datePublished": "2024-01-01",
        "breadcrumb": {
          "@id": "https://www.geekatyourspot.com/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.geekatyourspot.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.geekatyourspot.com"
          }
        ]
      },
      {
        "@type": "Website",
        "@id": "https://www.geekatyourspot.com/#website",
        "url": "https://www.geekatyourspot.com",
        "name": "Geek at Your Spot",
        "description": "AI consulting for South Florida small businesses",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.geekatyourspot.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ImageObject",
        "@id": "https://www.geekatyourspot.com/#primaryimage",
        "inLanguage": "en-US",
        "url": "https://www.geekatyourspot.com/images/action-figure.jpeg",
        "contentUrl": "https://www.geekatyourspot.com/images/action-figure.jpeg",
        "width": 1024,
        "height": 1536,
        "caption": "Geek At Your Spot - AI-created action figure representing founder's hands-on approach to AI consulting"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.geekatyourspot.com/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Geek at Your Spot offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We design, build, and deploy AI systems tailored to your existing stack. Services include free AI assessment, system design, implementation, and business automation."
            }
          },
          {
            "@type": "Question",
            "name": "Is the initial AI assessment really free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer a free consultation to evaluate your business needs and AI opportunities with no obligation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the four-phase methodology?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our structured approach guides you from assessment through implementation, ensuring AI solutions fit seamlessly into your business operations."
            }
          },
          {
            "@type": "Question",
            "name": "Who is your ideal client?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We specialize in working with small businesses in South Florida who want to leverage AI to scale without adding headcount, reduce manual work, and cut errors."
            }
          }
        ]
      }
    ]
  }
  return {
    metadataBase: new URL('https://www.geekatyourspot.com'),
    title: {
      default: 'AI Consulting for Small Business | Delray Beach, South Florida',
      template: '%s | Geek at Your Spot',
    },
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
        url: 'https://www.geekatyourspot.com',
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
      title: 'AI Consulting for Small Business | Delray Beach, South Florida',
      description: 'Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses to scale smoothly, reduce errors, and cut manual work.',
      url: 'https://www.geekatyourspot.com',
      siteName: 'Geek at Your Spot',
      images: [
        {
          url: 'https://www.geekatyourspot.com/images/action-figure.jpeg',
          width: 1024,
          height: 1536,
          alt: 'Geek At Your Spot - AI-created action figure representing hands-on AI consulting approach',
          type: 'image/jpeg',
        },
        {
          url: 'https://www.geekatyourspot.com/images/GeekAtYourSpot.svg',
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
      title: 'AI Consulting for Small Business | Delray Beach, South Florida',
      description: 'Ready to put AI to work? Geek at Your Spot builds practical AI tools for South Florida small businesses.',
      creator: '@geekatyourspot',
      images: ['https://www.geekatyourspot.com/images/action-figure.jpeg'],
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
      yandex: 'YOUR_YANDEX_VERIFICATION',
      yahoo: 'YOUR_YAHOO_VERIFICATION',
    },
    other: {
      'script:ld+json': JSON.stringify(jsonLd),
      'og:email': 'contact@geekatyourspot.com',
      'og:phone_number': 'YOUR_PHONE_NUMBER',
      'og:street-address': 'Delray Beach, FL 33444',
      'og:locality': 'Delray Beach',
      'og:region': 'FL',
      'og:postal-code': '33444',
      'og:country-name': 'United States',
      'article:author': 'Geek at Your Spot',
      'article:publisher': 'Geek at Your Spot',
      'business:contact_data:street_address': 'Delray Beach, FL 33444',
      'business:contact_data:locality': 'Delray Beach',
      'business:contact_data:region': 'FL',
      'business:contact_data:postal_code': '33444',
      'business:contact_data:country_name': 'United States',
      'msapplication-TileColor': '#023059',
      'msapplication-TileImage': '/icon.png',
    },
  };
};

export const generateViewport = (): Viewport => ({
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#023059' },
  ],
  colorScheme: 'light dark',
});

export default async function Home() {
  // const useCasesData = await geekApiService.listPublishedBlogPosts("en", POST_TYPE.pillar);

  return (
    <>
      <HeroSection />
      <CloneYourselfSection />
      <UseCasesSection />
      <TheMethodologySection />
      <SeamlessIntegrationsSection />
      <SchedulerShell />
    </>
  );
}