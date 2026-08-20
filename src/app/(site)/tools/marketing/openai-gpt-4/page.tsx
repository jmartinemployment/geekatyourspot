import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/openai-gpt-4/overview-section";
import KeyCapabilitiesSection from "@/components/tools/openai-gpt-4/key-capabilities";
import ImplementationSection from "@/components/tools/openai-gpt-4/implementation-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "OpenAI GPT-4",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Boost efficiency with OpenAI GPT-4, automating content creation for high-quality, precise results.",
        "@context": "https://schema.org",
        "headline": "OpenAI GPT-4",
        "url": "https://geekatyourspot.com/tools/marketing/openai-gpt-4",
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
        "datePublished": "2026-07-30T16:49:54.7781600Z",
        "dateModified": "2026-07-30T16:49:54.7781600Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://geekatyourspot.com/tools/marketing/openai-gpt-4"
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
        description: "Boost efficiency with OpenAI GPT-4, automating content creation for high-quality, precise results.",
        keywords: ["Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/openai-gpt-4',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | OpenAI GPT-4',
            description: 'Boost efficiency with OpenAI GPT-4, automating content creation for high-quality, precise results.',
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
            title: 'Geek at Your Spot | OpenAI GPT-4',
            description: 'Boost efficiency with OpenAI GPT-4, automating content creation for high-quality, precise results.',
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
    const title = "OpenAI GPT-4 Tool";
    const heroSummary = "OpenAI GPT-4 revolutionizes content workflows by automating writing and editing tasks for improved efficiency.";
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
