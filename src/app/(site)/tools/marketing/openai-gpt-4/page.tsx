import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/openai-gpt-4/overview-section";
import KeyCapabilitiesSection from "@/components/tools/openai-gpt-4/key-capabilities";
import ImplementationSection from "@/components/tools/openai-gpt-4/implementation-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "OpenAI GPT-4",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Boost efficiency with OpenAI GPT-4, automating content creation for high-quality, precise results.",
    "@context": "https://schema.org",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/openai-gpt-4"
    },
    "keywords": "Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies",
    "@id": "https://geekatyourspot.com/tools/marketing/openai-gpt-4#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "OpenAI GPT-4",
        description: "Boost efficiency with OpenAI GPT-4, automating content creation for high-quality, precise results.",
        keywords: ["Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/openai-gpt-4',
        },
        openGraph: {
            title: "OpenAI GPT-4",
            description: 'Boost efficiency with OpenAI GPT-4, automating content creation for high-quality, precise results.',
            url: 'https://geekatyourspot.com/tools/marketing/openai-gpt-4',
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
            title: "OpenAI GPT-4",
            description: 'Boost efficiency with OpenAI GPT-4, automating content creation for high-quality, precise results.',
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
    const title = "OpenAI GPT-4 Tool";
    const heroSummary = "OpenAI GPT-4 revolutionizes content workflows by automating writing and editing tasks for improved efficiency.";
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
            <SchedulerShell />
        </>
    );
}
