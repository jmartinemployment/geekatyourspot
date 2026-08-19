import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/marketing/ai-content-creation-workflow/chatgpt/overview-section";
import ImplementationSection from "@/components/tools/marketing/ai-content-creation-workflow/chatgpt/implementation-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/ai-content-creation-workflow/chatgpt/key-capabilities";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "ChatGPT",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://www.geekatyourspot.com/tools/marketing/chatgpt",
        "@context": "https://schema.org",
        "headline": "ChatGPT",
        "description": "Enhance your content workflow with ChatGPT, ensuring efficient, secure, and on-brand AI-generated content.",
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
        "datePublished": "2026-08-18T11:42:50.5822275Z",
        "dateModified": "2026-08-18T11:42:50.5822275Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.geekatyourspot.com/tools/marketing/chatgpt"
        },
        "keywords": "AI Content Creation Workflow, Automated Content Generation, AI Content Repurposing, Bulk Social Media Scheduling, SEO Blog Generation, Personalized Email Campaigns",
        "subjectOf": {
            "@type": "TechArticle",
            "@id": "https://www.geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow"
        }
    };
    // Add the return statement to fix the TypeScript error
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot', // Appends to child page titles automatically
        },
        description: "Enhance your content workflow with ChatGPT, ensuring efficient, secure, and on-brand AI-generated content.",
        keywords: ["AI Content Creation Workflow, Automated Content Generation, AI Content Repurposing, Bulk Social Media Scheduling, SEO Blog Generation, Personalized Email Campaigns"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot llc',
        metadataBase: new URL('https://geekatyourspot.com/'),
        alternates: {
            canonical: '/',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | Active Campaign',
            description: 'Enhance your content workflow with ChatGPT, ensuring efficient, secure, and on-brand AI-generated content.',
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
            description: 'Enhance your content workflow with ChatGPT, ensuring efficient, secure, and on-brand AI-generated content.',
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
    const title = "ChatGPT AI Content Creation Tool";
    const heroSummary = "Boost your content creation process with ChatGPT, offering tailored solutions for seamless integration."
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
