import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/contentstudio/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/contentstudio/key-capabilities";
import ImplementationSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/contentstudio/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/contentstudio/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { WithContext, TechArticle } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "ContentStudio for AI Content Repurposing",
    "description": "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/content-creation-workflow/intelligent-content-generation/contentstudio" },
    "keywords": "AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": "ContentStudio",
        "url": "https://contentstudio.io/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/blog/marketing/content-creation-workflow/ai-content-repurposing" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "ContentStudio for AI Content Repurposing",
        description: "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
        keywords: ["AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/content-creation-workflow/intelligent-content-generation/contentstudio',
        },
        openGraph: {
            title: "ContentStudio for AI Content Repurposing",
            description: "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
            url: 'https://geekatyourspot.com/tools/marketing/content-creation-workflow/intelligent-content-generation/contentstudio',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "ContentStudio for AI Content Repurposing",
            description: "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
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
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek @ Your Spot LLC',
        },
    };
};

export default async function Page() {
    const title = "ContentStudio for AI Content Repurposing";
    const heroSummary = "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <ToolsHeroSection
                title={title}
                summary={heroSummary} />
            <OverviewToolSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <WhenToUseSection />
            <SchedulerShell />
        </>
    );
}
