import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/jasper-ai/overview-section";
import KeyCapabilitiesSection from "@/components/tools/jasper-ai/key-capabilities";
import ImplementationSection from "@/components/tools/jasper-ai/implementation-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<SoftwareApplication> = {
    "@type": "SoftwareApplication",
    "name": "Jasper AI",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Jasper AI automates content creation, enhancing efficiency and quality with AI-driven workflows for businesses.",
    "@context": "https://schema.org",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai"
    },
    "keywords": "Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies",
    "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Jasper AI",
        description: "Jasper AI automates content creation, enhancing efficiency and quality with AI-driven workflows for businesses.",
        keywords: ["Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/jasper-ai',
        },
        openGraph: {
            title: "Jasper AI",
            description: 'Jasper AI automates content creation, enhancing efficiency and quality with AI-driven workflows for businesses.',
            url: 'https://geekatyourspot.com/tools/marketing/jasper-ai',
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
            title: "Jasper AI",
            description: 'Jasper AI automates content creation, enhancing efficiency and quality with AI-driven workflows for businesses.',
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
    const title = "Jasper AI's Tool";
    const heroSummary = "Jasper AI enhances content creation by automating writing tasks, improving speed and consistency for businesses.";
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
