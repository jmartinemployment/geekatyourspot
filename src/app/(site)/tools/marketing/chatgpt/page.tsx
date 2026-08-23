import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/chatgpt/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/chatgpt/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/chatgpt/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/chatgpt/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@type": "SoftwareApplication",
        "name": "ChatGPT",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://geekatyourspot.com/tools/marketing/chatgpt",
        "@context": "https://schema.org",
        "headline": "ChatGPT",
        "description": "Automate SEO blog and article generation with ChatGPT, boosting efficiency and search rankings effortlessly.",
        "image": [
            "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
        ],
        "author": {
            "@type": "Person",
            "name": "Geek At Your Spot Editorial Team"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Geek At Your Spot",
            "logo": {
                "@type": "ImageObject",
                "url": "https://geekatyourspot.com/images/GeekAtYourSpot.svg"
            }
        },
        "datePublished": "2026-08-23T15:32:42.9694402Z",
        "dateModified": "2026-08-23T15:32:42.9694402Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://geekatyourspot.com/tools/marketing/chatgpt"
        },
        "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
        "subjectOf": {
            "@type": "TechArticle",
            "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"
        }
    }
    return {
        title: "ChatGPT | Geek At Your Spot",
        description: "Automate SEO blog and article generation with ChatGPT, boosting efficiency and search rankings effortlessly.",
        keywords: ["ChatGPT", "SEO content generation", "AI content tools", "content automation"],
        authors: [{ name: 'Geek At Your Spot Editorial Team', url: 'https://geekatyourspot.com' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/tools/marketing/chatgpt',
        },
        openGraph: {
            title: 'ChatGPT | Geek At Your Spot',
            description: "Automate SEO blog and article generation with ChatGPT, boosting efficiency and search rankings effortlessly.",
            url: 'https://geekatyourspot.com/tools/marketing/chatgpt',
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
            title: 'ChatGPT | Geek At Your Spot',
            description: "Automate SEO blog and article generation with ChatGPT, boosting efficiency and search rankings effortlessly.",
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {
            index: true,
            follow: true,
        },
        other: {
            'script:ld+json': JSON.stringify(jsonLd),
        },
    };
};

export default async function Page() {
    const title = "ChatGPT";
    const summary = "Leverage ChatGPT to automate your SEO blog and article generation, enhancing content quality and search engine performance.";

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
