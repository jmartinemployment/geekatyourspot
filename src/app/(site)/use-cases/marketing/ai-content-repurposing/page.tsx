import type { Metadata } from "next";
import HeroSection from '@/components/use-cases/marketing/ai-content-repurposing/hero-section'
import LedeSection from '@/components/use-cases/marketing/ai-content-repurposing/lede-section'
import BenefitsSection from '@/components/use-cases/marketing/ai-content-repurposing/benefits-section'
import StreamliningSection from '@/components/use-cases/marketing/ai-content-repurposing/streamlining-section'
import ImplementingSection from '@/components/use-cases/marketing/ai-content-repurposing/implementing-section'
import PAASection from '@/components/use-cases/marketing/ai-content-repurposing/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "headline": "AI Content Repurposing",
                "description": "Explore AI Content Repurposing to save time, reduce costs, and enhance engagement. Learn about tools and strategies for effective content transformation.",
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
                "datePublished": "2026-08-22T13:35:50.1761797Z",
                "dateModified": "2026-08-22T13:35:50.1761797Z",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-repurposing"
                },
                "keywords": "AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation",
                "wordCount": 2881,
                "proficiencyLevel": "Beginner",
                "citation": [
                    {
                        "@type": "BlogPosting",
                        "url": "https://geekatyourspot.com/blog/marketing/unlocking-the-power-of-ai-for-content-repurposing"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "Jasper AI",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Jasper AI transforms content into multiple formats, enhancing reach and engagement efficiently.",
                "url": "https://geekatyourspot.com/tools/marketing/jasper-ai"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Copy.ai",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Copy.ai: AI-powered content repurposing tool that extends content life and boosts engagement across formats.",
                "url": "https://geekatyourspot.com/tools/marketing/copyai"
            },
            {
                "@type": "SoftwareApplication",
                "name": "ContentStudio",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
                "url": "https://geekatyourspot.com/tools/marketing/contentstudio"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Airia",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Airia repurposes content into various formats with AI, enhancing reach and engagement efficiently.",
                "url": "https://geekatyourspot.com/tools/marketing/airia"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Make.com",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Automate AI content repurposing with Make.com to transform and distribute content efficiently across formats.",
                "url": "https://geekatyourspot.com/tools/marketing/makecom"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Zapier",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
                "url": "https://geekatyourspot.com/tools/marketing/zapier"
            }
        ]
    }
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot',
        },
        description: "Explore AI Content Repurposing to save time, reduce costs, and enhance engagement. Learn about tools and strategies for effective content transformation.",
        keywords: ["AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/ai-content-repurposing' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/ai-content-repurposing',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | AI Content Repurposing',
            description: "Explore AI Content Repurposing to save time, reduce costs, and enhance engagement. Learn about tools and strategies for effective content transformation.",
            url: 'https://geekatyourspot.com/use-cases/marketing/ai-content-repurposing',
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
            title: 'Geek at Your Spot | AI Content Repurposing',
            description: "Explore AI Content Repurposing to save time, reduce costs, and enhance engagement. Learn about tools and strategies for effective content transformation.",
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
    return (
        <>
            <HeroSection />
            <article>
                <LedeSection />
                <BenefitsSection />
                <StreamliningSection />
                <ImplementingSection />
                <PAASection />
                <SchedulerShell />
            </article>

        </>
    );
}
