import type { Metadata } from "next";
import HeroSection from '@/components/use-cases/marketing/ai-content-repurposing/hero-section'
import LedeSection from '@/components/use-cases/marketing/ai-content-repurposing/lede-section'
import BenefitsSection from '@/components/use-cases/marketing/ai-content-repurposing/benefits-section'
import StreamliningSection from '@/components/use-cases/marketing/ai-content-repurposing/streamlining-section'
import ImplementingSection from '@/components/use-cases/marketing/ai-content-repurposing/implementing-section'
import PAASection from '@/components/use-cases/marketing/ai-content-repurposing/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "AI Content Repurposing",
            "description": "Explore AI Content Repurposing to save time, reduce costs, and enhance engagement. Learn about tools and strategies for effective content transformation.",
            "author": {
                "@type": "Organization",
                "@id": "https://geekatyourspot.com/#organization",
                "name": "Geek at Your Spot"
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
            "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-repurposing#article",
            "mentions": [
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/copyai#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/contentstudio#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/airia#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/makecom#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/zapier#software"
                }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "Jasper AI",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Jasper AI transforms content into multiple formats, enhancing reach and engagement efficiently.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Copy.ai",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Copy.ai: AI-powered content repurposing tool that extends content life and boosts engagement across formats.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/copyai"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/copyai#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "ContentStudio",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/contentstudio"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/contentstudio#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Airia",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Airia repurposes content into various formats with AI, enhancing reach and engagement efficiently.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/airia"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/airia#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Make.com",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate AI content repurposing with Make.com to transform and distribute content efficiently across formats.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/makecom"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/makecom#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Zapier",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/zapier"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/zapier#software"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "AI Content Repurposing",
        description: "Explore AI Content Repurposing to save time, reduce costs, and enhance engagement. Learn about tools and strategies for effective content transformation.",
        keywords: ["AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/ai-content-repurposing' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/ai-content-repurposing',
        },
        openGraph: {
            title: "AI Content Repurposing",
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
            title: "AI Content Repurposing",
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
        icons: {
            icon: '/favicon.ico',
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
        },
    };
};

export default async function Page() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
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
