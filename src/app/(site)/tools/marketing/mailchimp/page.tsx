import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/mailchimp/overview-section";
import KeyCapabilitiesSection from "@/components/tools/mailchimp/key-capabilities";
import ImplementationSection from "@/components/tools/mailchimp/implementation-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { TechArticle, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<TechArticle> = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": "https://geekatyourspot.com/tools/marketing/mailchimp#article",
    "headline": "Mailchimp for AI Marketing Systems",
    "description": "Discover Mailchimp's AI Marketing Systems for streamlined email campaigns and enhanced audience engagement.",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/mailchimp" },
    "keywords": "AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization",
    "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
    "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
    "about": {
        "@type": "Thing",
        "@id": "https://geekatyourspot.com/#software-mailchimp",
        "name": "Mailchimp",
        "url": "https://mailchimp.com/",
        "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/marketing/ai-marketing-systems#article" }
    }
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Mailchimp for AI Marketing Systems",
        description: "Discover Mailchimp's AI Marketing Systems for streamlined email campaigns and enhanced audience engagement.",
        keywords: ["AI Marketing Systems, small business marketing, AI implementation, marketing automation, B2B AI solutions, lead nurturing, customer engagement, workflow automation, sales optimization"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/mailchimp',
        },
        openGraph: {
            title: "Mailchimp for AI Marketing Systems",
            description: 'Discover Mailchimp\u0027s AI Marketing Systems for streamlined email campaigns and enhanced audience engagement.',
            url: 'https://geekatyourspot.com/tools/marketing/mailchimp',
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
            title: "Mailchimp for AI Marketing Systems",
            description: 'Discover Mailchimp\u0027s AI Marketing Systems for streamlined email campaigns and enhanced audience engagement.',
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
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
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
            <SchedulerShell />
        </>
    );
}
