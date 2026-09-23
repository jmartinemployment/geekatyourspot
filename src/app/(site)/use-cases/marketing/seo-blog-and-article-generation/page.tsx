import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/lede-section'
import AIDrivenWorkflowSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/ai-driven-workflow-section'
import BenefitsSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/benefits-section'
import ToolsSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/tools-section'
import IntegrationSection from '@/components/use-cases/marketing/seo-blog-and-article-generation/integration-section'
import PAASection from '@/components/use-cases/marketing/seo-blog-and-article-generation/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "SEO Blog and Article Generation",
            "description": "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
            "author": {
                "@type": "Organization",
                "@id": "https://geekatyourspot.com/#organization",
                "name": "Geek at Your Spot"
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
            "@id": "https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation#article",
            "relatedLink": "https://geekatyourspot.com/blog/marketing/unlocking-the-potential-of-ai-in-seo-content-creation",
            "mentions": [
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/surfer-seo#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/chatgpt#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/claude#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/frase#software"
                },
                {
                    "@id": "#software-hubspotai"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/keyword-insights#software"
                }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "Surfer SEO",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize your SEO blog and article generation with Surfer SEO for improved rankings and content quality.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/surfer-seo"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/surfer-seo#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "ChatGPT",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate SEO blog and article generation with ChatGPT, boosting efficiency and search rankings effortlessly.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/chatgpt"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/chatgpt#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Claude",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "AI tool Claude automates SEO blog and article creation, boosting quality and efficiency for small businesses.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/claude"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/claude#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Frase",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Frase automates SEO blog and article creation, enhancing content quality and search rankings with AI.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/frase"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/frase#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "HubSpot AI",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "HubSpot AI boosts SEO blog and article creation, automating content for better search rankings and efficiency.",
            "@id": "#software-hubspotai"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Keyword Insights",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Automate SEO blog and article creation with Keyword Insights for improved content quality and search rankings.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/keyword-insights"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/keyword-insights#software"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "SEO Blog and Article Generation",
        description: "Explore AI-driven SEO blog and article generation to automate content creation, enhance efficiency, and boost marketing results.",
        keywords: ["SEO Blog and Article Generation", "AI content tools", "content automation", "SEO optimization", "marketing AI"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/seo-blog-and-article-generation' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/seo-blog-and-article-generation',
        },
        openGraph: {
            title: "SEO Blog and Article Generation",
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
            title: "SEO Blog and Article Generation",
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
        icons: {
            icon: '/favicon.ico',
        },
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
