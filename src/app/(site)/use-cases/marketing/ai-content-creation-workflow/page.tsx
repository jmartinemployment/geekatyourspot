import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import LedeSection from '@/components/use-cases/marketing/ai-content-creation-workflow/lede-section'
import AutomatedContentGenerationSection from '@/components/use-cases/marketing/ai-content-creation-workflow/automated-content-generation-section'
import AIContentRepurposingSection from '@/components/use-cases/marketing/ai-content-creation-workflow/ai-content-repurposing-section'
import BulkSocialMediaSchedulingSection from '@/components/use-cases/marketing/ai-content-creation-workflow/bulk-social-media-scheduling-section'
import SEOBlogArticleGenerationSection from '@/components/use-cases/marketing/ai-content-creation-workflow/seo-blog-article-generation-section'
import PersonalizedEmailCampaignsSection from '@/components/use-cases/marketing/ai-content-creation-workflow/personalized-email-campaigns'
import PAASection from '@/components/use-cases/marketing/ai-content-creation-workflow/paa-section'

import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "AI Content Creation Workflow",
            "description": "Explore how AI Content Creation Workflow boosts efficiency by automating content generation, repurposing, social media scheduling, and more.",
            "image": [
                "https://geekatyourspot.com/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif"
            ],
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
            "datePublished": "2026-08-18T11:42:58.9278075Z",
            "dateModified": "2026-08-18T11:42:58.9278075Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow"
            },
            "keywords": "AI Content Creation Workflow, Automated Content Generation, AI Content Repurposing, Bulk Social Media Scheduling, SEO Blog Generation, Personalized Email Campaigns",
            "wordCount": 4379,
            "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow#article",
            "mentions": [
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/copyai#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/chatgpt#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/claude#software"
                },
                {
                    "@id": "https://geekatyourspot.com/tools/marketing/contentstudio#software"
                }
            ]
        },
        {
            "@type": "SoftwareApplication",
            "name": "Jasper AI",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Enhance your AI content creation workflow with Jasper AI for seamless integration and productivity.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/jasper-ai#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "Copy.ai",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Boost content creation efficiency with Copy.ai's AI workflow. Integrate seamlessly and enhance productivity.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/copyai"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/copyai#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "ChatGPT",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Enhance your content workflow with ChatGPT, ensuring efficient, secure, and on-brand AI-generated content.",
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
            "description": "Boost your content creation with Claude's AI workflow automation for efficient and creative text generation.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/claude"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/claude#software"
        },
        {
            "@type": "SoftwareApplication",
            "name": "ContentStudio",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": "Optimize your AI content creation workflow with ContentStudios automation and scheduling features for social media.",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/tools/marketing/contentstudio"
            },
            "@id": "https://geekatyourspot.com/tools/marketing/contentstudio#software"
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "AI Content Creation Workflow",
        description: "Explore how AI Content Creation Workflow boosts efficiency by automating content generation, repurposing, social media scheduling, and more.",
        keywords: ["AI Content Creation Workflow, Automated Content Generation, AI Content Repurposing, Bulk Social Media Scheduling, SEO Blog Generation, Personalized Email Campaigns"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/AI-content-creation-workflow',
        },
        openGraph: {
            title: "AI Content Creation Workflow",
            description: "Explore how an automated content creation workflow boosts efficiency in B2B marketing, reducing errors and saving time.",
            url: 'https://geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow',
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
            title: "AI Content Creation Workflow",
            description: "Explore how an AI content creation workflow boosts efficiency in B2B marketing, reducing errors and saving time.",
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
        appleWebApp: {
            capable: true,
            statusBarStyle: 'default',
            title: 'Geek at Your Spot',
        },
    };
};

export default async function Page() {
    const title = "AI Content Creation Workflow";
    const heroSummary = "Enhance your marketing strategy with streamlined AI Content Creation Workflow, automating tasks to save time and improve results."
    const heroImage = "/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif";
    const imgAlt = "Streamline the chaos"
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
            />
            <SharedHeroSection
                title={title}
                summary={heroSummary}
                image={heroImage}
                imgAlt={imgAlt} />
            <article>
                <LedeSection />
                <AutomatedContentGenerationSection />
                <AIContentRepurposingSection />
                <BulkSocialMediaSchedulingSection />
                <SEOBlogArticleGenerationSection />
                <PersonalizedEmailCampaignsSection />
                <PAASection />
                <SchedulerShell />
            </article>

        </>
    );
}