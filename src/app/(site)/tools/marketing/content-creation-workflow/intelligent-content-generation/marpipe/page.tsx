import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/overview-section";
import ChallengesSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/challenges-section";
import TransformsSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/architecture-section";
import ImplementingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/implementing-section";
import DataMappingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/evaluating-section";
import ComparingSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/comparing-section";
import RightFitSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/right-fit-section";
import FaqSection from "@/components/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Marpipe";
const PAGE_TITLE = "Marpipe for Measured Lead Generation";
const DESCRIPTION =
    "Measured Lead Generation with Marpipe automates ad creation and campaign management, reducing cost spikes and enabling predictable growth. Compare options now.";
const CANONICAL = "/tools/marketing/content-creation-workflow/intelligent-content-generation/marpipe";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Marpipe, measured lead generation, AI lead generation automation, ad spend optimization, cost per lead, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-25T11:32:40.1839700Z",
            "dateModified": "2026-10-25T11:32:40.1839700Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.marpipe.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/content-creation-workflow/ai-seo-content-generator" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Can we do different designs for different products?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Marpipe lets you set advanced rules and filters so you can match the right design to the right product. This helps you target your ads more precisely and keeps your catalog organized."}},
                {"@type": "Question", "name": "Can we remove the background from product images?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. With one click, Marpipe removes all white backgrounds from your entire product catalog. This can help your products stand out in ads and save you time editing images by hand."}},
                {"@type": "Question", "name": "Do we already need to have our own videos to use the PLV tool?", "acceptedAnswer": {"@type": "Answer", "text": "No. You do not need to supply your own videos. Marpipe lets you create new, custom videos for every SKU in your catalog. This means you can start fresh and build video content that fits your products."}},
                {"@type": "Question", "name": "How much performance increase can we expect from Marpipe?", "acceptedAnswer": {"@type": "Answer", "text": "Marpipe cannot guarantee a specific performance boost, since results depend on each business. On average, clients see Enriched Catalogs perform about 20% better than standard catalog ads. Your results may vary."}},
                {"@type": "Question", "name": "Do product variants count towards the SKU limit?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Every product variant counts as a separate SKU, not just the main or parent SKU. Be sure to include all variants when you plan your catalog size."}},
                {"@type": "Question", "name": "Does Marpipe only work with Meta?", "acceptedAnswer": {"@type": "Answer", "text": "No. Marpipe works with any ad platform that supports catalog ads, also called Dynamic Product Ads. This includes TikTok, Snap, Reddit, Pinterest, and more. You are not limited to Meta platforms."}},
                {"@type": "Question", "name": "Can we use different designs for different products?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Marpipe lets you set advanced rules and filters to control which designs are applied to which products."}},
                {"@type": "Question", "name": "Can we remove the background from product images?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Marpipe allows you to remove white backgrounds from product images across your entire catalog with one click. The tool specifically mentions white backgrounds, so it does not guarantee removal of every background type."}},
                {"@type": "Question", "name": "Do we need existing videos to use the Product Level Video tool?", "acceptedAnswer": {"@type": "Answer", "text": "No. You can create new, custom videos for every SKU in your catalog using Marpipe’s Product Level Video tool."}},
                {"@type": "Question", "name": "How much performance improvement can we expect?", "acceptedAnswer": {"@type": "Answer", "text": "Marpipe reports that enriched catalogs perform about 20% better than raw catalog ads on average. However, it does not guarantee results and says outcomes vary by client. These averages are based on more than 650 advertising accounts using in-platform attribution and are vendor-reported, not a guaranteed return."}},
                {"@type": "Question", "name": "Do product variants count toward the SKU limit?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All product variants count as SKUs, not just parent products. This is important when choosing a plan because catalogs with multiple sizes or colors will have more SKUs than parent products."}},
                {"@type": "Question", "name": "Does Marpipe only work with Meta?", "acceptedAnswer": {"@type": "Answer", "text": "No. Marpipe works with advertising platforms that support catalog ads, also called Dynamic Product Ads. Its FAQ lists TikTok, Snap, Reddit, and Pinterest as examples beyond Meta. The number of available channels depends on your plan."}},
                {"@type": "Question", "name": "Are the ads created by AI?", "acceptedAnswer": {"@type": "Answer", "text": "Marpipe’s FAQ says its catalog ads are automated, not necessarily AI-generated. Users create design treatments, apply them to catalogs, and test them live. The homepage also advertises generative catalogs and AI for image, video, and text. Automated catalog design does not require AI, but separate AI features are available."}},
                {"@type": "Question", "name": "What is Marpipe used for?", "acceptedAnswer": {"@type": "Answer", "text": "Marpipe is a platform for creating, managing, and improving catalog-based advertising. Its main features include catalog design, product-level video, generative catalogs, SKU optimization, and product-feed management. The focus is on turning product-feed data into branded dynamic ads across channels."}},
                {"@type": "Question", "name": "What can Marpipe add to catalog ad creative?", "acceptedAnswer": {"@type": "Answer", "text": "Marpipe offers catalog ad creative options like real-time social proof, countdown clocks, inventory countdowns, buy-now-pay-later pricing, strikethrough prices, percentage-off messaging, product-image-to-video creative, multi-image grids, and dynamic colors. These features use catalog-powered creative and dynamic fields, so you do not need to build each product ad by hand."}},
                {"@type": "Question", "name": "How much does Marpipe cost?", "acceptedAnswer": {"@type": "Answer", "text": "Marpipe's pricing page lists starting options. Enterprise pricing depends on SKU tiers and whether you choose monthly or yearly billing. The $999 shown is not a universal quote."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Marpipe", "measured lead generation", "AI lead generation automation", "ad spend optimization", "cost per lead", "South Florida small business"],
        authors: [{ name: 'Jeff Martin', url: 'https://geekatyourspot.com/about' }],
        creator: 'Geek @ Your Spot LLC',
        publisher: 'Geek @ Your Spot LLC',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek @ Your Spot LLC',
            locale: 'en_US',
            type: 'website',
            images: [SHARE_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            images: [SHARE_IMAGE],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: {
                index: true, follow: true, noimageindex: false,
                'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek @ Your Spot LLC' },
    };
};

export default async function Page() {
    const heroSummary =
        "Marpipe automates creative testing and campaign management, addressing the unique challenges small businesses face in scaling digital lead generation locally.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={PAGE_TITLE} summary={heroSummary} />
            <OverviewSection />
            <ChallengesSection />
            <TransformsSection />
            <HowItWorksSection />
            <ArchitectureSection />
            <ImplementingSection />
            <DataMappingSection />
            <ConfiguringSection />
            <EvaluatingSection />
            <ComparingSection />
            <RightFitSection />
            <FaqSection />
            <SchedulerShell />
        </>
    );
}
