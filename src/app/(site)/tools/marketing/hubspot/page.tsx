import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/hubspot/overview-section";
import KeyCapabilitiesSection from "@/components/tools/hubspot/key-capabilities";
import ImplementationSection from "@/components/tools/hubspot/implementation-section";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
 "@type": "SoftwareApplication",
  "name": "HubSpot",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Streamline your marketing with HubSpot&#39;s automation and analytics, designed to boost efficiency and customer engagement.",
  "@context": "https://schema.org",
  "headline": "HubSpot",
  "url": "https://www.geekatyourspot.com/tools/marketing/hubspot",
  "image": [
    "https://www.geekatyourspot.com/images/GeekAtYourSpot.svg"
  ],
  "author": {
    "@type": "Person",
    "name": "Geek At Your Spot Editorial Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Geek At Your Spot",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.geekatyourspot.com/images/GeekAtYourSpot.svg"
    }
  },
  "datePublished": "2026-07-29T16:48:23.1157456Z",
  "dateModified": "2026-07-29T16:48:23.1157456Z",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.geekatyourspot.com/tools/marketing/hubspot"
  },
  "keywords": "AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization",
  "subjectOf": {
    "@type": "TechArticle",
    "@id": "https://www.geekatyourspot.com/use-cases/marketing/ai-marketing-systems"
  }
}
    // Add the return statement to fix the TypeScript error
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot', // Appends to child page titles automatically
        },
        description: "Streamline your marketing with HubSpot&#39;s automation and analytics, designed to boost efficiency and customer engagement.",
        keywords: ["automated accounts payable", "AP automation", "AI in finance", "accounts payable software", "financial operations", "invoice processing", "AP efficiency", "AI-driven finance", "AP tools", "business automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com/'),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | HubSpot',
            description: 'Streamline your marketing with HubSpot&#39;s automation and analytics, designed to boost efficiency and customer engagement.',
            url: 'https://geekatyourspot.com/',
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [
                {
                    url: '/images/GeekAtYourSpot.svg',
                    width: 116,
                    height: 48,
                    alt: 'Geek at Your Spot',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Geek at Your Spot | HubSpot',
            description: 'Streamline your marketing with HubSpot&#39;s automation and analytics, designed to boost efficiency and customer engagement.',
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
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
        verification: {
            google: 'google-site-verification-token',
            yandex: 'yandex-verification-token',
            yahoo: 'yahoo-verification-token',
        },
        icons: {
            icon: '/favicon.ico',
            shortcut: '/shortcut-icon.png',
            apple: '/apple-icon.png',
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
        },
        other: {
            'script:ld+json': JSON.stringify(jsonLd),
        },
    };
};

export default async function Page() {
    const title = "HubSpot AI Tools";
    const heroSummary = "Streamline your marketing with HubSpot's automation and analytics, designed to boost efficiency and customer engagement.";
    return (
        <>
            <ToolsHeroSection
                title={title}
                summary={heroSummary} />
            <OverviewToolSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />

        </>
    );
}
