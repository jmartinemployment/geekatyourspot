import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/hubspot-ai/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/hubspot-ai/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/hubspot-ai/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/hubspot-ai/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication", "name": "HubSpot AI", "applicationCategory": "BusinessApplication", "operatingSystem": "Web",
        "url": "https://geekatyourspot.com/tools/marketing/hubspot-ai", "@context": "https://schema.org", "headline": "HubSpot AI",
        "description": "HubSpot AI boosts SEO blog and article creation, automating content for better search rankings and efficiency.",
        "image": ["https://geekatyourspot.com/images/GeekAtYourSpot.svg"],
        "author": {"@type": "Person", "name": "Geek At Your Spot Editorial Team"},
        "publisher": {"@type": "Organization", "name": "Geek At Your Spot", "logo": {"@type": "ImageObject", "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"}},
        "datePublished": "2026-08-23T15:33:34.0502990Z", "dateModified": "2026-08-23T15:33:34.0502990Z",
        "mainEntityOfPage": {"@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/hubspot-ai"},
        "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
        "subjectOf": {"@type": "TechArticle", "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"}
    }
    return {
        title: "HubSpot AI | Geek At Your Spot", description: "HubSpot AI boosts SEO blog and article creation, automating content for better search rankings and efficiency.",
        keywords: ["HubSpot AI", "SEO content generation", "AI content tools"], authors: [{ name: 'Geek At Your Spot Editorial Team' }],
        creator: 'Geek at Your Spot Llc', publisher: 'Geek at Your Spot Llc', metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {canonical: '/tools/marketing/hubspot-ai'},
        openGraph: {title: 'HubSpot AI | Geek At Your Spot', description: "HubSpot AI boosts SEO blog and article creation, automating content for better search rankings and efficiency.",
            url: 'https://geekatyourspot.com/tools/marketing/hubspot-ai', siteName: 'Geek at Your Spot', locale: 'en_US', type: 'website',
            images: [{url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot'}]},
        twitter: {card: 'summary_large_image', title: 'HubSpot AI | Geek At Your Spot', description: "HubSpot AI boosts SEO blog and article creation, automating content for better search rankings and efficiency.",
            creator: 'Geek at Your Spot', images: ['/images/GeekAtYourSpot.svg']},
        robots: {index: true, follow: true}, other: {'script:ld+json': JSON.stringify(jsonLd)},
    };
};

export default async function Page() {
    const title = "HubSpot AI";
    const summary = "Enhance your SEO content with HubSpot AI, the tool that streamlines blog and article generation for better search engine performance.";
    return (
        <> <ToolsHeroSection title={title} summary={summary} />
            <OverviewSection /> <KeyCapabilitiesSection /> <ImplementationSection /> <WhenToUseSection /> <SchedulerShell />
        </>
    );
}
