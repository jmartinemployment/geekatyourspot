import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/claude/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/claude/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/claude/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/claude/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "Claude",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://geekatyourspot.com/tools/marketing/claude",
        "@context": "https://schema.org",
        "headline": "Claude",
        "description": "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
        "image": ["https://geekatyourspot.com/images/GeekAtYourSpot.svg"],
        "author": {"@type": "Person", "name": "Geek At Your Spot Editorial Team"},
        "publisher": {"@type": "Organization", "name": "Geek At Your Spot", "logo": {"@type": "ImageObject", "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"}},
        "datePublished": "2026-08-23T15:33:00.2360922Z",
        "dateModified": "2026-08-23T15:33:00.2360922Z",
        "mainEntityOfPage": {"@type": "WebPage", "@id": "https://geekatyourspot.com/tools/marketing/claude"},
        "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
        "subjectOf": {"@type": "TechArticle", "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"}
    }
    return {
        title: "Claude | Geek At Your Spot",
        description: "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
        keywords: ["Claude", "SEO content generation", "AI content tools", "content automation"],
        authors: [{ name: 'Geek At Your Spot Editorial Team' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {canonical: '/tools/marketing/claude'},
        openGraph: {
            title: 'Claude | Geek At Your Spot',
            description: "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
            url: 'https://geekatyourspot.com/tools/marketing/claude',
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot'}],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Claude | Geek At Your Spot',
            description: "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {index: true, follow: true},
        other: {'script:ld+json': JSON.stringify(jsonLd)},
    };
};

export default async function Page() {
    const title = "Claude";
    const summary = "Streamline SEO blog and article creation with Claude, an AI tool designed for high-quality, optimized content.";
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
