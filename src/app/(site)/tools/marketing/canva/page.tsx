import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/canva/overview-section";
import KeyCapabilitiesSection from "@/components/tools/canva/key-capabilities";
import ImplementationSection from "@/components/tools/canva/implementation-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "Canva",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Canva automates content creation, enhancing design efficiency with user-friendly tools and AI-driven features.",
        "@context": "https://schema.org",
        "headline": "Canva",
        "url": "https://www.geekatyourspot.com/tools/marketing/canva",
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
        "datePublished": "2026-07-30T16:49:55.0255581Z",
        "dateModified": "2026-07-30T16:49:55.0255581Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.geekatyourspot.com/tools/marketing/canva"
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
        description: "Canva automates content creation, enhancing design efficiency with user-friendly tools and AI-driven features.",
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
            title: 'Geek at Your Spot | Canva',
            description: 'Canva automates content creation, enhancing design efficiency with user-friendly tools and AI-driven features.',
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
            title: 'Geek at Your Spot | Canva',
            description: 'Canva automates content creation, enhancing design efficiency with user-friendly tools and AI-driven features.',
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
    const title = "Canva's AI Tool";
    const heroSummary = "Streamline your content creation with Canva, a powerful tool for efficient, automated graphic design workflows.";
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
