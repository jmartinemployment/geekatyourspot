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

export const generateMetadata = async (): Promise<Metadata> => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "headline": "AI Content Creation Workflow",
                "description": "Explore how AI Content Creation Workflow boosts efficiency by automating content generation, repurposing, social media scheduling, and more.",
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
                "datePublished": "2026-08-18T11:42:58.9278075Z",
                "dateModified": "2026-08-18T11:42:58.9278075Z",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow"
                },
                "keywords": "AI Content Creation Workflow, Automated Content Generation, AI Content Repurposing, Bulk Social Media Scheduling, SEO Blog Generation, Personalized Email Campaigns",
                "wordCount": 4379,
                "proficiencyLevel": "Beginner",
                "citation": [
                    {
                        "@type": "BlogPosting",
                        "url": "https://geekatyourspot.com/blog/marketing/how-to-streamline-your-content-workflow-with-ai"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "name": "Jasper AI",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Enhance your AI content creation workflow with Jasper AI for seamless integration and productivity.",
                "url": "https://geekatyourspot.com/tools/marketing/jasper-ai"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Copy.ai",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Boost content creation efficiency with Copy.ai\u0027s AI workflow. Integrate seamlessly and enhance productivity.",
                "url": "https://geekatyourspot.com/tools/marketing/copyai"
            },
            {
                "@type": "SoftwareApplication",
                "name": "ChatGPT",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Enhance your content workflow with ChatGPT, ensuring efficient, secure, and on-brand AI-generated content.",
                "url": "https://geekatyourspot.com/tools/marketing/chatgpt"
            },
            {
                "@type": "SoftwareApplication",
                "name": "Claude",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Boost your content creation with Claude\u0027s AI workflow automation for efficient and creative text generation.",
                "url": "https://geekatyourspot.com/tools/marketing/claude"
            },
            {
                "@type": "SoftwareApplication",
                "name": "ContentStudio",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "description": "Optimize your AI content creation workflow with ContentStudios automation and scheduling features for social media.",
                "url": "https://geekatyourspot.com/tools/marketing/contentstudio"
            }
        ]
    }
    return {
        title: {
            default: 'Geek at Your Spot',
            template: '%s | Geek at Your Spot', // Appends to child page titles automatically
        },
        description: "Explore how AI Content Creation Workflow boosts efficiency by automating content generation, repurposing, social media scheduling, and more.",
        keywords: ["AI Content Creation Workflow, Automated Content Generation, AI Content Repurposing, Bulk Social Media Scheduling, SEO Blog Generation, Personalized Email Campaigns"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/AI-content-creation-workflow',
            languages: {
                'en-US': '/en-US',
                'es-ES': '/es-ES',
            },
        },
        openGraph: {
            title: 'Geek at Your Spot | AI Content Creation Workflow',
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
            title: 'Geek at Your Spot | AI Content Creation Workflow',
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
        verification: {
            google: '_-qUvWhC_7YB2xCo9XYrMclpfDQZsSVTJuv-7pI4dYI',
            yandex: 'yandex-verification-token',
            yahoo: 'yahoo-verification-token',
        },
        icons: {
            icon: '/favicon.ico',
            // shortcut: '/shortcut-icon.png',
            // apple: '/apple-icon.png',
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
    const title = "AI Content Creation Workflow";
    const heroSummary = "Enhance your marketing strategy with streamlined AI Content Creation Workflow, automating tasks to save time and improve results."
    const heroImage = "/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif";
    const imgAlt = "Streamline the chaos"
    return (
        <>
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