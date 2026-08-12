import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/salesforce-pardot/overview-section";
import KeyCapabilitiesSection from "@/components/tools/salesforce-pardot/key-capabilities";
import ImplementationSection from "@/components/tools/salesforce-pardot/implementation-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "Salesforce Pardot",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "AI-driven marketing automation with Salesforce Pardot enhances lead management and campaign efficiency.",
        "@context": "https://schema.org",
        "headline": "Salesforce Pardot",
        "url": "https://www.geekatyourspot.com/tools/marketing/salesforce-pardot",
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
        "datePublished": "2026-07-29T16:48:23.5553589Z",
        "dateModified": "2026-07-29T16:48:23.5553589Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.geekatyourspot.com/tools/marketing/salesforce-pardot"
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
        description: "AI-driven marketing automation with Salesforce Pardot enhances lead management and campaign efficiency.",
        keywords: ["AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization"],
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
            title: 'Geek at Your Spot | Salesforce Pardot',
            description: 'AI-driven marketing automation with Salesforce Pardot enhances lead management and campaign efficiency.',
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
            title: 'Geek at Your Spot | Salesforce Pardot',
            description: 'AI-driven marketing automation with Salesforce Pardot enhances lead management and campaign efficiency.',
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
    const title = "Salesforce Pardot AI Tool";
    const heroSummary = "Optimize your marketing campaigns with Salesforce Pardot&#39;s AI-driven automation and seamless Salesforce CRM integration.";
    return (
        <>
            <ToolsHeroSection
                title={title}
                summary={heroSummary} />
            <OverviewToolSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <SchedulerShell />
        </>
    );
}
