import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/frase/overview-section";
import KeyCapabilitiesSection from "@/components/tools/marketing/frase/key-capabilities-section";
import ImplementationSection from "@/components/tools/marketing/frase/implementation-section";
import WhenToUseSection from "@/components/tools/marketing/frase/when-to-use-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { SoftwareApplication, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: WithContext<SoftwareApplication> = {
    "@type": "SoftwareApplication",
    "name": "Frase",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "@context": "https://schema.org",
    "description": "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://geekatyourspot.com/tools/marketing/frase"
    },
    "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
    "subjectOf": {
        "@type": "Article",
        "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"
    },
    "@id": "https://geekatyourspot.com/tools/marketing/frase#software"
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Frase",
        description: "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
        keywords: ["Frase", "SEO content generation", "AI content tools", "content automation"],
        authors: [{ name: 'Geek At Your Spot Editorial Team' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {canonical: '/tools/marketing/frase'},
        openGraph: {
            title: "Frase",
            description: "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
            url: 'https://geekatyourspot.com/tools/marketing/frase',
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot'}],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Frase",
            description: "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {index: true, follow: true},
    };
};

export default async function Page() {
    const title = "Frase";
    const summary = "Frase enhances SEO content creation, automating key tasks for optimized blogs and articles.";
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
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
