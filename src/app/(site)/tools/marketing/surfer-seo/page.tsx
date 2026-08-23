import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/surfer-seo/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/surfer-seo/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/surfer-seo/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/surfer-seo/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication", "name": "Surfer SEO", "applicationCategory": "BusinessApplication", "operatingSystem": "Web",
        "url": "https://geekatyourspot.com/tools/marketing/surfer-seo", "@context": "https://schema.org", "headline": "Surfer SEO",
        "description": "Optimize your SEO blog and article generation with Surfer SEO for improved rankings and content quality.",
        "image": ["https://geekatyourspot.com/images/GeekAtYourSpot.svg"],
        "author": {"@type": "Person", "name": "Geek At Your Spot Editorial Team"},
        "publisher": {"@type": "Organization", "name": "Geek At Your Spot", "logo": {"@type": "ImageObject", "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"}},
        "datePublished": "2026-08-23T15:32:21.7309483Z", "dateModified": "2026-08-23T15:32:21.7309483Z",
        "mainEntityOfPage": {"@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/surfer-seo"},
        "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
        "subjectOf": {"@type": "TechArticle", "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"}
    }
    return {
        title: "Surfer SEO | Geek At Your Spot", description: "Optimize your SEO blog and article generation with Surfer SEO for improved rankings and content quality.",
        keywords: ["Surfer SEO", "SEO content generation", "AI content tools"], authors: [{ name: 'Geek At Your Spot Editorial Team' }],
        creator: 'Geek at Your Spot Llc', publisher: 'Geek at Your Spot Llc', metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {canonical: '/tools/marketing/surfer-seo'},
        openGraph: {title: 'Surfer SEO | Geek At Your Spot', description: "Optimize your SEO blog and article generation with Surfer SEO for improved rankings and content quality.",
            url: 'https://geekatyourspot.com/tools/marketing/surfer-seo', siteName: 'Geek at Your Spot', locale: 'en_US', type: 'website',
            images: [{url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot'}]},
        twitter: {card: 'summary_large_image', title: 'Surfer SEO | Geek At Your Spot', description: "Optimize your SEO blog and article generation with Surfer SEO for improved rankings and content quality.",
            creator: 'Geek at Your Spot', images: ['/images/GeekAtYourSpot.svg']},
        robots: {index: true, follow: true}, other: {'script:ld+json': JSON.stringify(jsonLd)},
    };
};

export default async function Page() {
    const title = "Surfer SEO";
    const summary = "Enhance your SEO content strategy with Surfer SEO, designed to optimize blogs and articles effortlessly.";
    return (
        <> <ToolsHeroSection title={title} summary={summary} />
            <OverviewSection /> <KeyCapabilitiesSection /> <ImplementationSection /> <WhenToUseSection /> <SchedulerShell />
        </>
    );
}
