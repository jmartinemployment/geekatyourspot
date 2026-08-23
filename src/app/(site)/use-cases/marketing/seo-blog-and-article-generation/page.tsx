import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/lede-section'
import AIDrivenWorkflowSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/ai-driven-workflow-section'
import BenefitsSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/benefits-section'
import ToolsSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/tools-section'
import IntegrationSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/integration-section'
import PAASection from '@/components/use-cases/marketing/seo-blog-and-article-generation/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "headline": "SEO Blog and Article Generation",
                "description": "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
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
                "datePublished": "2026-08-23T15:34:00.2547546Z",
                "dateModified": "2026-08-23T15:34:00.2547546Z",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation"
                },
                "keywords": "SEO Blog and Article Generation, AI content tools, content automation, SEO optimization, marketing AI",
                "wordCount": 2745,
                "proficiencyLevel": "Beginner",
                "citation": [
                    {
                        "@type": "BlogPosting",
                        "url": "https://geekatyourspot.com/blog/marketing/unlocking-the-potential-of-ai-in-seo-content-creation"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "Surfer SEO",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Optimize your SEO blog and article generation with Surfer SEO for improved rankings and content quality.",
                "url": "https://geekatyourspot.com/tools/marketing/surfer-seo"
            },
            {
                "@type": "SoftwareApplication",
                "name": "ChatGPT",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Automate SEO blog and article generation with ChatGPT, boosting efficiency and search rankings effortlessly.",
                "url": "https://geekatyourspot.com/tools/marketing/chatgpt"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Claude",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
                "url": "https://geekatyourspot.com/tools/marketing/claude"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Frase",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
                "url": "https://geekatyourspot.com/tools/marketing/frase"
            },
            {
                "@type": "SoftwareApplication",
                "name": "HubSpot AI",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "HubSpot AI boosts SEO blog and article creation, automating content for better search rankings and efficiency.",
                "url": "https://geekatyourspot.com/tools/marketing/hubspot-ai"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Keyword Insights",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Automate SEO blog and article creation with Keyword Insights for improved content quality and search rankings.",
                "url": "https://geekatyourspot.com/tools/marketing/keyword-insights"
            }
        ]
    }
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot',
        },
        description: "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
        keywords: ["SEO Blog and Article Generation", "AI content tools", "content automation", "SEO optimization", "marketing AI"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/seo-blog-and-article-generation',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | SEO Blog and Article Generation',
            description: "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
            url: 'https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation',
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
            title: 'Geek at Your Spot | SEO Blog and Article Generation',
            description: "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
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
        verification: {
            google: '_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI',
            yandex: 'yandex-verification-token',
            yahoo: 'yahoo-verification-token',
        },
        icons: {
            icon: '/favicon.ico',
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
        },
        other: {
            'script:ld+json': JSON.stringify(jsonLd),
        },
    };
};

export default async function Page() {
    const title = "SEO Blog and Article Generation";
    const heroSummary = "Harness AI technology to streamline your SEO blog and article generation, boosting content quality and search engine performance."
    const heroImage = "";
    const imgAlt = ""
    return (
        <>
            <SharedHeroSection
                title={title}
                summary={heroSummary}
                image={heroImage}
                imgAlt={imgAlt} />
            <article>
                <LedeSection />
                <AIDrivenWorkflowSection />
                <BenefitsSection />
                <ToolsSection />
                <IntegrationSection />
                <PAASection />
                <SchedulerShell />
            </article>

        </>
    );
}
