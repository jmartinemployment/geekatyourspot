import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/keyword-insights/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/keyword-insights/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/keyword-insights/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/keyword-insights/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "Keyword Insights",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Automate SEO blog and article creation with Keyword Insights for improved content quality and search rankings.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/keyword-insights"
    },
    "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/keyword-insights#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Keyword Insights", description: "Automate SEO blog and article creation with Keyword Insights for improved content quality and search rankings.",
        keywords: ["Keyword Insights", "SEO content generation", "AI content tools"], authors: [{ name: 'Geek At Your Spot Editorial Team' }],
        creator: 'Geek at Your Spot Llc', publisher: 'Geek at Your Spot Llc', metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {canonical: '/tools/marketing/keyword-insights'},
        openGraph: {title: 'Keyword Insights | Geek At Your Spot', description: "Automate SEO blog and article creation with Keyword Insights for improved content quality and search rankings.",
            url: 'https://geekatyourspot.com/tools/marketing/keyword-insights', siteName: 'Geek at Your Spot', locale: 'en_US', type: 'website',
            images: [{url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot'}]},
        twitter: {card: 'summary_large_image', title: 'Keyword Insights | Geek At Your Spot', description: "Automate SEO blog and article creation with Keyword Insights for improved content quality and search rankings.",
            creator: 'Geek at Your Spot', images: ['/images/GeekAtYourSpot.svg']},
        robots: {index: true, follow: true},
    };
};

export default async function Page() {
    const title = "Keyword Insights";
    const summary = "Boost your SEO strategy with Keyword Insights, the tool that automates and optimizes blog and article generation.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ToolsHeroSection title={title} summary={summary} />
            <OverviewSection /> <KeyCapabilitiesSection /> <ImplementationSection /> <WhenToUseSection /> <SchedulerShell />
        </>
    );
}
