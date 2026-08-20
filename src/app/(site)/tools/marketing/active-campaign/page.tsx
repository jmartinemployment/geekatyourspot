import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/active-campaign/overview-section";
import KeyCapabilitiesSection from "@/components/tools/active-campaign/key-capabilities";
import ImplementationSection from "@/components/tools/active-campaign/implementation-section";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "Active Campaign",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "ActiveCampaign: AI marketing systems for personalized automation and enhanced customer engagement.",
        "@context": "https://schema.org",
        "headline": "ActiveCampaign",
        "url": "https://geekatyourspot.com/tools/marketing/active-campaign",
        "image": [
            "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
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
                "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
            }
        },
        "datePublished": "2026-07-29T16:48:26.6144734Z",
        "dateModified": "2026-07-29T16:48:26.6144734Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://geekatyourspot.com/tools/marketing/active-campaign"
        },
        "keywords": "AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization",
        "subjectOf": {
            "@type": "TechArticle",
            "@id": "https://geekatyourspot.com/use-cases/marketing/ai-marketing-systems"
        }
    };
    // Add the return statement to fix the TypeScript error
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot', // Appends to child page titles automatically
        },
        description: "ActiveCampaign: AI marketing systems for personalized automation and enhanced customer engagement.",
        keywords: ["AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/active-campaign',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | Active Campaign',
            description: 'ActiveCampaign: AI marketing systems for personalized automation and enhanced customer engagement.',
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
            title: 'Geek at Your Spot | Active Campaign',
            description: 'ActiveCampaign: AI marketing systems for personalized automation and enhanced customer engagement.',
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
            google: '_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI',
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
    const title = "Active Campaign AI Tools";
    const heroSummary = "Active Campaign empowers businesses with AI marketing systems for personalized customer engagement and efficient automation.  Email Marketing, Marketing Automation, Active Intelligence, SMS Marketing, WhatsApp Messaging, CRM, Analytics & Reporting, and Content Creation"
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
