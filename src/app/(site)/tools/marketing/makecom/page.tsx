import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/makecom/overview-section";
import KeyCapabilitiesSection from "@/components/tools/makecom/key-capabilities";
import ImplementationSection from "@/components/tools/makecom/implementation-section";
import WhenToUseSection from "@/components/tools/makecom/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "Make.com",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Automate AI content repurposing with Make.com to transform and distribute content efficiently across formats.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/makecom"
    },
    "keywords": "AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-repurposing"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/makecom#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Make.com",
        description: "Automate AI content repurposing with Make.com to transform and distribute content efficiently across formats.",
        keywords: ["AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/makecom',
        },
        openGraph: {
            title: "Make.com",
            description: "Automate AI content repurposing with Make.com to transform and distribute content efficiently across formats.",
            url: 'https://geekatyourspot.com/tools/marketing/makecom',
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
            title: "Make.com",
            description: "Automate AI content repurposing with Make.com to transform and distribute content efficiently across formats.",
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
    const title = "Make.com AI Tool";
    const heroSummary = "Automate AI content repurposing with Make.com to transform and distribute content efficiently across formats.";
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
