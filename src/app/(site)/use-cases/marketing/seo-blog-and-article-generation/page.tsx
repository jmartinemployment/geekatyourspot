import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/lede-section'
import AIDrivenWorkflowSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/ai-driven-workflow-section'
import BenefitsSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/benefits-section'
import ToolsSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/tools-section'
import IntegrationSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/integration-section'
import PAASection from '@/components/use-cases/marketing/seo-blog-and-article-generation/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "SEO Blog and Article Generation",
            "description": "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
            "author": {
                "@type": "Organization",
                "url": "https://geekatyourspot.com",
                "name": "Geek @ Your Spot LLC"
            },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-08-23T15:34:00.2547546Z",
            "dateModified": "2026-08-23T15:34:00.2547546Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"
            },
            "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
            "wordCount": 2745,
            "mentions": [
                { "@type": "Thing", "name": "Surfer SEO", "url": "https://surferseo.com/" },
                { "@type": "Thing", "name": "ChatGPT", "url": "https://chatgpt.com/" },
                { "@type": "Thing", "name": "Claude", "url": "https://claude.ai/" },
                { "@type": "Thing", "name": "Frase", "url": "https://www.frase.io/" },
                { "@type": "Thing", "name": "HubSpot AI", "url": "https://www.hubspot.com/products/artificial-intelligence" },
                { "@type": "Thing", "name": "Keyword Insights", "url": "https://www.keywordinsights.ai/" }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "SEO Blog and Article Generation",
        description: "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
        keywords: ["SEO Blog and Article Generation", "AI content tools", "content automation", "SEO optimization", "marketing AI"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/seo-blog-and-article-generation',
        },
        openGraph: {
            title: "SEO Blog and Article Generation",
            description: "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
            url: 'https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "SEO Blog and Article Generation",
            description: "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
            images: [SHARE_IMAGE],
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
            title: 'Geek @ Your Spot LLC',
        },
    };
};

export default async function Page() {
    const title = "SEO Blog and Article Generation";
    const heroSummary = "Harness AI technology to streamline your SEO blog and article generation, boosting content quality and search engine performance."
    const heroImage = "";
    const imgAlt = ""
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection
                title={title}
                summary={heroSummary}
                image={heroImage}
                imgAlt={imgAlt} />
            <article>
                <LedeSection />
                <AIDrivenWorkflowSection />
                <BenefitsSection />
                <ToolsSection />
                <IntegrationSection />
                <PAASection />
                <SchedulerShell />
            </article>

        </>
    );
}
