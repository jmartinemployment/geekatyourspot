import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/zapier/overview-section";
import KeyCapabilitiesSection from "@/components/tools/zapier/key-capabilities";
import ImplementationSection from "@/components/tools/zapier/implementation-section";
import WhenToUseSection from "@/components/tools/zapier/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://geekatyourspot.com/tools/marketing/zapier#article",
    "headline": "Zapier for AI Content Repurposing",
    "description": "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/zapier" },
    "keywords": "AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation",
    "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "@id": "https://geekatyourspot.com/#software-zapier",
        "name": "Zapier",
        "url": "https://zapier.com/",
        "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/blog/marketing/content-creation-workflow/ai-content-repurposing#article" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Zapier for AI Content Repurposing",
        description: "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
        keywords: ["AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/zapier',
        },
        openGraph: {
            title: "Zapier for AI Content Repurposing",
            description: "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
            url: 'https://geekatyourspot.com/tools/marketing/zapier',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Zapier for AI Content Repurposing",
            description: "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
            creator: 'Geek @ Your Spot LLC',
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
    const title = "Zapier for AI Content Repurposing";
    const heroSummary = "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.";
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
