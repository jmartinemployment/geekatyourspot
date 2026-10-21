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
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "Content Creation Workflow",
            "description": "Explore how AI Content Creation Workflow boosts efficiency by automating content generation, repurposing, social media scheduling, and more.",
            "image": [
                "https://geekatyourspot.com/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif"
            ],
            "author": {
                "@type": "Organization",
                "url": "https://geekatyourspot.com",
                "name": "Geek @ Your Spot LLC"
            },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-08-18T11:42:58.9278075Z",
            "dateModified": "2026-08-18T11:42:58.9278075Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow"
            },
            "keywords": "AI Content Creation Workflow, Automated Content Generation, AI Content Repurposing, Bulk Social Media Scheduling, SEO Blog Generation, Personalized Email Campaigns",
            "wordCount": 4379,
            "mentions": [
                { "@type": "Thing", "name": "Jasper", "url": "https://www.jasper.ai/" },
                { "@type": "Thing", "name": "Copy.ai", "url": "https://www.copy.ai/" },
                { "@type": "Thing", "name": "ChatGPT", "url": "https://chatgpt.com/" },
                { "@type": "Thing", "name": "Claude", "url": "https://claude.ai/" },
                { "@type": "Thing", "name": "ContentStudio", "url": "https://contentstudio.io/" }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "Content Creation Workflow",
        description: "Explore how AI Content Creation Workflow boosts efficiency by automating content generation, repurposing, social media scheduling, and more.",
        keywords: ["AI Content Creation Workflow, Automated Content Generation, AI Content Repurposing, Bulk Social Media Scheduling, SEO Blog Generation, Personalized Email Campaigns"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing/ai-content-creation-workflow',
        },
        openGraph: {
            title: "Content Creation Workflow",
            description: "Explore how an automated content creation workflow boosts efficiency in B2B marketing, reducing errors and saving time.",
            url: 'https://geekatyourspot.com/use-cases/marketing/ai-content-creation-workflow',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "Content Creation Workflow",
            description: "Explore how an AI content creation workflow boosts efficiency in B2B marketing, reducing errors and saving time.",
            images: [SHARE_IMAGE],
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
            title: 'Geek @ Your Spot LLC',
        },
    };
};

export default async function Page() {
    const title = "Content Creation Workflow";
    const heroSummary = "Stop letting manual content creation bottleneck your growth."
    const heroImage = "/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif";
    const imgAlt = "A computer with an AI brain on its screen is surrounded by marketing icons for email, social media, video, analytics and targeting."
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