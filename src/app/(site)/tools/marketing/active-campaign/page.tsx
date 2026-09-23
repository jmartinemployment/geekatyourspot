import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/active-campaign/overview-section";
import KeyCapabilitiesSection from "@/components/tools/active-campaign/key-capabilities";
import ImplementationSection from "@/components/tools/active-campaign/implementation-section";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "Active Campaign",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "ActiveCampaign: AI marketing systems for personalized automation and enhanced customer engagement.",
    "@context": "https://schema.org",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/active-campaign"
    },
    "keywords": "AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-marketing-systems"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/active-campaign#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Active Campaign",
        description: "ActiveCampaign: AI marketing systems for personalized automation and enhanced customer engagement.",
        keywords: ["AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/active-campaign',
        },
        openGraph: {
            title: "Active Campaign",
            description: 'ActiveCampaign: AI marketing systems for personalized automation and enhanced customer engagement.',
            url: 'https://geekatyourspot.com/tools/marketing/active-campaign',
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
            title: "Active Campaign",
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
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
        },
    };
};

export default async function Page() {
    const title = "Active Campaign AI Tools";
    const heroSummary = "Active Campaign empowers businesses with AI marketing systems for personalized customer engagement and efficient automation.  Email Marketing, Marketing Automation, Active Intelligence, SMS Marketing, WhatsApp Messaging, CRM, Analytics & Reporting, and Content Creation"
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ToolsHeroSection
                title={title}
                summary={heroSummary} />
            <OverviewToolSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />

        </>
    );
}
