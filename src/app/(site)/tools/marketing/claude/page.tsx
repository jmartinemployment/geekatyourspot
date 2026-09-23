import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/claude/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/claude/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/claude/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/claude/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@type": "SoftwareApplication",
    "name": "Claude",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/claude"
    },
    "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/claude#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Claude",
        description: "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
        keywords: ["Claude", "SEO content generation", "AI content tools", "content automation"],
        authors: [{ name: 'Geek At Your Spot Editorial Team' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {canonical: '/tools/marketing/claude'},
        openGraph: {
            title: "Claude",
            description: "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
            url: 'https://geekatyourspot.com/tools/marketing/claude',
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot'}],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Claude",
            description: "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {index: true, follow: true},
    };
};

export default async function Page() {
    const title = "Claude";
    const summary = "Streamline SEO blog and article creation with Claude, an AI tool designed for high-quality, optimized content.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ToolsHeroSection title={title} summary={summary} />
            <OverviewSection />
            <KeyCapabilitiesSection />
            <ImplementationSection />
            <WhenToUseSection />
            <SchedulerShell />
        </>
    );
}
