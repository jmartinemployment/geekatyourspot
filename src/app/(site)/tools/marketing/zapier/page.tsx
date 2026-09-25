import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/zapier/overview-section";
import KeyCapabilitiesSection from "@/components/tools/zapier/key-capabilities";
import ImplementationSection from "@/components/tools/zapier/implementation-section";
import WhenToUseSection from "@/components/tools/zapier/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<SoftwareApplication> = {
    "@type": "SoftwareApplication",
    "name": "Zapier",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/zapier"
    },
    "keywords": "AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-repurposing"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/zapier#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Zapier",
        description: "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
        keywords: ["AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/zapier',
        },
        openGraph: {
            title: "Zapier",
            description: "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
            url: 'https://geekatyourspot.com/tools/marketing/zapier',
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
            title: "Zapier",
            description: "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
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
    const title = "Zapier AI Tool";
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
