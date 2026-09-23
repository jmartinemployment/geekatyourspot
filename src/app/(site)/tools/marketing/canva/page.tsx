import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewToolSection from "@/components/tools/canva/overview-section";
import KeyCapabilitiesSection from "@/components/tools/canva/key-capabilities";
import ImplementationSection from "@/components/tools/canva/implementation-section";
import WhenToUseSection from "@/components/tools/canva/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "Canva",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Canva automates content creation, enhancing design efficiency with user-friendly tools and AI-driven features.",
    "@context": "https://schema.org",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/canva"
    },
    "keywords": "Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies",
    "@id": "https://geekatyourspot.com/tools/marketing/canva#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    // Add the return statement to fix the TypeScript error
    return {
        title: "Canva",
        description: "Canva automates content creation, enhancing design efficiency with user-friendly tools and AI-driven features.",
        keywords: ["Automated Content Creation Workflow, AI Content Automation, Content Workflow Efficiency, AI Marketing Tools, B2B Content Strategies"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/canva',
        },
        openGraph: {
            title: "Canva",
            description: 'Canva automates content creation, enhancing design efficiency with user-friendly tools and AI-driven features.',
            url: 'https://geekatyourspot.com/tools/marketing/canva',
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
            title: "Canva",
            description: 'Canva automates content creation, enhancing design efficiency with user-friendly tools and AI-driven features.',
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
    const title = "Canva's AI Tool";
    const heroSummary = "Streamline your content creation with Canva, a powerful tool for efficient, automated graphic design workflows.";
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
