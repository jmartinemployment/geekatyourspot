import type { Metadata } from "next";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import OverviewSection from '@/components/use-cases/marketing/ai-marketing-systems/overview-section'
import IntroductionSection from '@/components/use-cases/marketing/ai-marketing-systems/introduction-section'
import BenefitsSection from "@/components/use-cases/marketing/ai-marketing-systems/benefits-section";
import KeyImplementationStrategiesSection from "@/components/use-cases/marketing/ai-marketing-systems/key-implementation-strategies";
import MeasuringSuccessRoiSection from "@/components/use-cases/marketing/ai-marketing-systems/measuring-sucess-roi";
import FAQSection from "@/components/use-cases/marketing/ai-marketing-systems/faq-section";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": "AI Marketing Systems",
            "description": "Explore AI Marketing Systems that strengthen small business strategy in Miami-Dade, Broward, and Palm Beach and boost efficiency and sales with practical AI.",
            "image": [
                "https://geekatyourspot.com/images/marketing/use-cases/ai-marketing-systems/ai-marketing-systems-pillar-hero.avif"
            ],
            "author": {
                "@type": "Organization",
                "url": "https://geekatyourspot.com",
                "name": "Geek @ Your Spot LLC"
            },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-07-29T11:33:50.5819023Z",
            "dateModified": "2026-07-29T11:33:50.5819023Z",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://geekatyourspot.com/use-cases/marketing"
            },
            "keywords": "AI Marketing Systems, small business AI, AI implementation, marketing automation, B2B marketing, AI tools, workflow optimization, lead scoring, dynamic creative optimization, automated bidding",
            "wordCount": 3561,
            "mentions": [
                { "@type": "Thing", "name": "HubSpot", "url": "https://www.hubspot.com/" },
                { "@type": "Thing", "name": "Hootsuite", "url": "https://www.hootsuite.com/" }
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "AI Marketing Systems",
        description: "Explore AI Marketing Systems that strengthen small business strategy in Miami-Dade, Broward, and Palm Beach and boost efficiency and sales with practical AI.",
        keywords: ["AI Marketing Systems, small business AI, AI implementation, marketing automation, B2B marketing, AI tools, workflow optimization, lead scoring, dynamic creative optimization, automated bidding"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: {
            canonical: '/use-cases/marketing',
        },
        openGraph: {
            title: "AI Marketing Systems",
            description: "Explore AI Marketing Systems that strengthen small business strategy in Miami-Dade, Broward, and Palm Beach and boost efficiency and sales with practical AI.",
            url: 'https://geekatyourspot.com/use-cases/marketing',
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: "AI Marketing Systems",
            description: "Explore AI Marketing Systems that strengthen small business strategy in Miami-Dade, Broward, and Palm Beach and boost efficiency and sales with practical AI.",
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
    const title = "AI Marketing Systems";
    const heroSummary = "Elevate your marketing game with AI systems that automate processes and enhance decision-making for better results."
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
                <OverviewSection />
                <IntroductionSection />
                <BenefitsSection />
                <KeyImplementationStrategiesSection />
                <MeasuringSuccessRoiSection />
                <FAQSection />
            </article>

            <SchedulerShell />

        </>
    );
}