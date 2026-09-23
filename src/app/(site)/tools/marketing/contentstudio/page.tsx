import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/contentstudio/overview-section";
import KeyCapabilitiesSection from "@/components/tools/contentstudio/key-capabilities";
import ImplementationSection from "@/components/tools/contentstudio/implementation-section";
import WhenToUseSection from "@/components/tools/contentstudio/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "ContentStudio",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/contentstudio"
    },
    "keywords": "AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-repurposing"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/contentstudio#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "ContentStudio",
        description: "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
        keywords: ["AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/contentstudio',
        },
        openGraph: {
            title: "ContentStudio",
            description: "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
            url: 'https://geekatyourspot.com/tools/marketing/contentstudio',
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
            title: "ContentStudio",
            description: "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
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
    const title = "ContentStudio AI Tool";
    const heroSummary = "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
