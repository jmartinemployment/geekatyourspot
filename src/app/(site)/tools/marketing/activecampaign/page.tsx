import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/activecampaign/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/activecampaign/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/activecampaign/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/activecampaign/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "ActiveCampaign",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Optimize sales with AI-powered lead scoring by ActiveCampaign, reducing manual tasks and boosting efficiency.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/activecampaign"
    },
    "keywords": "Lead Scoring",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/activecampaign#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "ActiveCampaign",
        description: "Optimize sales with AI-powered lead scoring by ActiveCampaign, reducing manual tasks and boosting efficiency.",
        keywords: ["Lead Scoring"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/activecampaign',
        },
        openGraph: {
            title: "ActiveCampaign",
            description: "Optimize sales with AI-powered lead scoring by ActiveCampaign, reducing manual tasks and boosting efficiency.",
            url: 'https://geekatyourspot.com/tools/marketing/activecampaign',
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
            title: "ActiveCampaign",
            description: "Optimize sales with AI-powered lead scoring by ActiveCampaign, reducing manual tasks and boosting efficiency.",
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
    const title = "ActiveCampaign";
    const summary = "Boost your sales efficiency with ActiveCampaign's AI-driven lead scoring, designed to prioritize and engage high-potential leads.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
