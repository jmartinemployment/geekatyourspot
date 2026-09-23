import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/hubspot/overview-section";
import KeyCapabilitiesSection from "@/components/tools/hubspot/key-capabilities";
import ImplementationSection from "@/components/tools/hubspot/implementation-section";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "HubSpot",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Streamline your marketing with HubSpot&#39;s automation and analytics, designed to boost efficiency and customer engagement.",
    "@context": "https://schema.org",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/hubspot"
    },
    "keywords": "AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-marketing-systems"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/hubspot#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "HubSpot",
        description: "Streamline your marketing with HubSpot&#39;s automation and analytics, designed to boost efficiency and customer engagement.",
        keywords: ["AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/hubspot',
        },
        openGraph: {
            title: "HubSpot",
            description: 'Streamline your marketing with HubSpot&#39;s automation and analytics, designed to boost efficiency and customer engagement.',
            url: 'https://geekatyourspot.com/tools/marketing/hubspot',
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
            title: "HubSpot",
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
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
        },
    };
};

export default async function Page() {
    const title = "HubSpot AI Tools";
    const heroSummary = "Streamline your marketing with HubSpot's automation and analytics, designed to boost efficiency and customer engagement.";
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
