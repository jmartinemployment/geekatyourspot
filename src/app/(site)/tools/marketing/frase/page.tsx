import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/frase/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/frase/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/frase/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/frase/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "Frase",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://geekatyourspot.com/tools/marketing/frase",
        "@context": "https://schema.org",
        "headline": "Frase",
        "description": "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
        "image": ["https://geekatyourspot.com/images/GeekAtYourSpot.svg"],
        "author": {"@type": "Person", "name": "Geek At Your Spot Editorial Team"},
        "publisher": {"@type": "Organization", "name": "Geek At Your Spot", "logo": {"@type": "ImageObject", "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"}},
        "datePublished": "2026-08-23T15:33:18.4976567Z",
        "dateModified": "2026-08-23T15:33:18.4976567Z",
        "mainEntityOfPage": {"@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/frase"},
        "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
        "subjectOf": {"@type": "TechArticle", "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"}
    }
    return {
        title: "Frase | Geek At Your Spot",
        description: "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
        keywords: ["Frase", "SEO content generation", "AI content tools", "content automation"],
        authors: [{ name: 'Geek At Your Spot Editorial Team' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {canonical: '/tools/marketing/frase'},
        openGraph: {
            title: 'Frase | Geek At Your Spot',
            description: "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
            url: 'https://geekatyourspot.com/tools/marketing/frase',
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot'}],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Frase | Geek At Your Spot',
            description: "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {index: true, follow: true},
        other: {'script:ld+json': JSON.stringify(jsonLd)},
    };
};

export default async function Page() {
    const title = "Frase";
    const summary = "Frase enhances SEO content creation, automating key tasks for optimized blogs and articles.";
    return (
        <>
            <ToolsHeroSection title={title} summary={summary} />
            <OverviewSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <WhenToUseSection />
            <SchedulerShell />
        </>
    );
}
