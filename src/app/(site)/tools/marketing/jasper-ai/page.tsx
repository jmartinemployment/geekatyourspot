import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/jasper-ai/overview-section";
import KeyCapabilitiesSection from "@/components/tools/jasper-ai/key-capabilities";
import ImplementationSection from "@/components/tools/jasper-ai/implementation-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "Jasper AI",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Jasper AI automates content creation, enhancing efficiency and quality with AI-driven workflows for businesses.",
        "@context": "https://schema.org",
        "headline": "Jasper AI",
        "url": "https://geekatyourspot.com/tools/marketing/jasper-ai",
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
        "datePublished": "2026-07-30T16:49:52.9520059Z",
        "dateModified": "2026-07-30T16:49:52.9520059Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai"
        },
        "keywords": "Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies",
        "subjectOf": {
            "@type": "TechArticle",
            "@id": "https://geekatyourspot.com/use-cases/marketing/automated-content-creation-workflow"
        }
    }
    // Add the return statement to fix the TypeScript error
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot', // Appends to child page titles automatically
        },
        description: "Jasper AI automates content creation, enhancing efficiency and quality with AI-driven workflows for businesses.",
        keywords: ["Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/jasper-ai',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | Jasper AI',
            description: 'Jasper AI automates content creation, enhancing efficiency and quality with AI-driven workflows for businesses.',
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
            title: 'Geek at Your Spot | Jasper AI',
            description: 'Jasper AI automates content creation, enhancing efficiency and quality with AI-driven workflows for businesses.',
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
    const title = "Jasper AI's Tool";
    const heroSummary = "Jasper AI enhances content creation by automating writing tasks, improving speed and consistency for businesses.";
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
