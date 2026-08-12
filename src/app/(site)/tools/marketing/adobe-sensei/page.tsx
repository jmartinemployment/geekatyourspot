import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/adobe-sensei/overview-section";
import KeyCapabilitiesSection from "@/components/tools/adobe-sensei/key-capabilities";
import ImplementationSection from "@/components/tools/adobe-sensei/implementation-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "Adobe Sensei",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Automate content creation workflows with Adobe Sensei\u0027s AI-driven platform for enhanced efficiency and intelligence.",
        "@context": "https://schema.org",
        "headline": "Adobe Sensei",
        "url": "https://www.geekatyourspot.com/tools/marketing/adobe-sensei",
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
        "datePublished": "2026-07-30T16:50:08.0460632Z",
        "dateModified": "2026-07-30T16:50:08.0460632Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.geekatyourspot.com/tools/marketing/adobe-sensei"
        },
        "keywords": "Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies",
        "subjectOf": {
            "@type": "TechArticle",
            "@id": "https://www.geekatyourspot.com/use-cases/marketing/automated-content-creation-workflow"
        }
    }
    // Add the return statement to fix the TypeScript error
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot', // Appends to child page titles automatically
        },
        description: "Automate content creation workflows with Adobe Sensei's AI-driven platform for enhanced efficiency and intelligence.",
        keywords: ["Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies"],
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
            title: 'Geek at Your Spot | Adobe Sensei',
            description: 'Automate content creation workflows with Adobe Senseis AI-driven platform for enhanced efficiency and intelligence.',
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
            title: 'Geek at Your Spot | Adobe Sensei',
            description: 'Automate content creation workflows with Adobe Senseis AI-driven platform for enhanced efficiency and intelligence.',
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
    const title = "Adobe Sensei's AI Tool";
    const heroSummary = "Streamline your content creation with Adobe Sensei, the AI platform that automates workflows and boosts efficiency.";
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
