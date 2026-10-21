import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/active-campaign/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/active-campaign/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/active-campaign/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/active-campaign/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "ActiveCampaign for AI Lead Scoring",
    "description": "Optimize sales with AI-powered lead scoring by ActiveCampaign, reducing manual tasks and boosting efficiency.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/active-campaign" },
    "keywords": "Lead Scoring",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": "ActiveCampaign",
        "url": "https://www.activecampaign.com/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "ActiveCampaign for AI Lead Scoring",
        description: "Optimize sales with AI-powered lead scoring by ActiveCampaign, reducing manual tasks and boosting efficiency.",
        keywords: ["Lead Scoring"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/active-campaign',
        },
        openGraph: {
            title: "ActiveCampaign for AI Lead Scoring",
            description: "Optimize sales with AI-powered lead scoring by ActiveCampaign, reducing manual tasks and boosting efficiency.",
            url: 'https://geekatyourspot.com/tools/marketing/active-campaign',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "ActiveCampaign for AI Lead Scoring",
            description: "Optimize sales with AI-powered lead scoring by ActiveCampaign, reducing manual tasks and boosting efficiency.",
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
    const title = "ActiveCampaign for AI Lead Scoring";
    const summary = "Boost your sales efficiency with ActiveCampaign's AI-driven lead scoring, designed to prioritize and engage high-potential leads.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <ToolsHeroSection
                title={title}
                summary={summary} />
            <OverviewSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <WhenToUseSection />
            <SchedulerShell />
        </>
    );
}
