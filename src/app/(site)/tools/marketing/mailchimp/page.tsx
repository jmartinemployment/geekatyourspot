import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/mailchimp/overview-section";
import KeyCapabilitiesSection from "@/components/tools/mailchimp/key-capabilities";
import ImplementationSection from "@/components/tools/mailchimp/implementation-section";
import WhenToUseSection from "@/components/tools/mailchimp/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Mailchimp for AI Marketing Systems",
    "description": "Discover Mailchimp's AI Marketing Systems for streamlined email campaigns and enhanced audience engagement.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/mailchimp" },
    "keywords": "AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization",
    "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
    "about": {
        "@type": "Thing",
        "name": "Mailchimp",
        "url": "https://mailchimp.com/",
        "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Mailchimp for AI Marketing Systems",
        description: "Discover Mailchimp's AI Marketing Systems for streamlined email campaigns and enhanced audience engagement.",
        keywords: ["AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/mailchimp',
        },
        openGraph: {
            title: "Mailchimp for AI Marketing Systems",
            description: 'Discover Mailchimp\u0027s AI Marketing Systems for streamlined email campaigns and enhanced audience engagement.',
            url: 'https://geekatyourspot.com/tools/marketing/mailchimp',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Mailchimp for AI Marketing Systems",
            description: 'Discover Mailchimp\u0027s AI Marketing Systems for streamlined email campaigns and enhanced audience engagement.',
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
    const title = "Mailchimp for AI Marketing Systems";
    const heroSummary = "Mailchimp offers AI-powered email marketing tools that streamline campaign creation and improve audience interaction.";
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
