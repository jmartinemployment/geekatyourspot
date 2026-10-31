import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/overview-section";
import ChallengesSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/challenges-section";
import TransformsSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/transforms-section";
import HowItWorksSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/how-it-works-section";
import ArchitectureSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/architecture-section";
import ImplementingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/implementing-section";
import DataMappingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/data-mapping-section";
import ConfiguringSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/configuring-section";
import EvaluatingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/evaluating-section";
import ComparingSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/comparing-section";
import RightFitSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/right-fit-section";
import FaqSection from "@/components/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "Cometly";
const PAGE_TITLE = "Cometly for Precision Lead Acquisition";
const DESCRIPTION =
    "Ad Spend Optimization with Cometly lets small South Florida businesses see which ads drive sales, not just clicks. Start making every dollar count.";
const CANONICAL = "/tools/marketing/ad-spend-optimization/precision-lead-acquisition/cometly";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Cometly, precision lead acquisition, ad spend optimization, local advertising, lead generation, South Florida small business",
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-30T11:33:57.5597280Z",
            "dateModified": "2026-10-30T11:33:57.5597280Z",
            "about": {
                "@type": "Thing",
                "name": TITLE,
                "url": "https://www.cometly.com/",
                "subjectOf": { "@type": "Article", "url": "https://geekatyourspot.com/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition" }
            }
        },
        {
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What is ad spend optimization with Cometly?", "acceptedAnswer": {"@type": "Answer", "text": "Ad spend optimization with Cometly means using connected advertising, customer-journey, and revenue data to decide where to increase, reduce, or maintain advertising spend. Cometly is focused on B2B SaaS, linking ad spend to pipeline, closed-won revenue, and customer lifetime value instead of just clicks or form submissions."}},
                {"@type": "Question", "name": "How does Cometly identify which ads are working?", "acceptedAnswer": {"@type": "Answer", "text": "Cometly combines website tracking, server-side events, advertising-platform data, and CRM or payment data. Its attribution reporting connects customer touchpoints to downstream outcomes, helping teams see which sources, campaigns, and ads contribute to revenue, not just platform-reported conversions."}},
                {"@type": "Question", "name": "Which metrics should I use to optimize my budget?", "acceptedAnswer": {"@type": "Answer", "text": "Cometly’s guidance prioritizes business outcomes over engagement metrics. Key measures include return on ad spend, customer acquisition cost, pipeline and closed-won revenue, and customer lifetime value. Clicks, impressions, and conversion rates can help diagnose performance, but Cometly recommends focusing on revenue and profit above those supporting measures."}},
                {"@type": "Question", "name": "How does multi-touch attribution help with budget allocation?", "acceptedAnswer": {"@type": "Answer", "text": "Multi-touch attribution helps assess interactions across a customer’s journey instead of giving all credit to a single click. Cometly lists first-touch, last-touch, linear, U-shaped, and data-driven attribution options. Comparing models can show when a channel introduces customers while another captures the final conversion, giving more context for budget decisions."}},
                {"@type": "Question", "name": "Which advertising platforms and business tools can I connect?", "acceptedAnswer": {"@type": "Answer", "text": "Cometly’s website lists advertising platforms including Meta, Google Ads, LinkedIn Ads, Microsoft Ads, and TikTok Ads. It also highlights connections with Stripe, HubSpot, Salesforce, and other business tools, advertising more than 70 native integrations plus webhooks. Confirm the specific integration and data flows you need, since connecting a platform and sending conversions back to it are distinct capabilities."}},
                {"@type": "Question", "name": "Can Cometly optimize campaign budgets automatically?", "acceptedAnswer": {"@type": "Answer", "text": "Cometly describes its AI Ads Manager as a tool for managing and optimizing campaigns, and its homepage says AI can rebalance spend toward winning campaigns. Its product guide also describes recommendations on budget allocation, audience targeting, and creative performance. The cited pages do not fully specify approval controls or automation availability for every platform, so those details should be confirmed during a demo."}},
                {"@type": "Question", "name": "How does Cometly send better conversion data back to ad platforms?", "acceptedAnswer": {"@type": "Answer", "text": "Through its Conversion API functionality, Cometly sends conversion signals to platforms including Meta, Google, and LinkedIn. These signals can reflect paying customers or downstream revenue events instead of only initial leads, helping advertising platforms optimize toward outcomes closer to the business’s actual goals. This is a supported optimization mechanism, not a guarantee of improved results."}},
                {"@type": "Question", "name": "Does Cometly address gaps in browser-based tracking?", "acceptedAnswer": {"@type": "Answer", "text": "Cometly offers server-side tracking alongside its website pixel and describes cross-device tracking capabilities. Its guidance explains that server-side conversion tracking can capture events that browser-based tracking may miss. These capabilities should not be interpreted as a promise that every customer interaction will be captured perfectly."}},
                {"@type": "Question", "name": "Does Cometly replace my CRM or advertising platforms?", "acceptedAnswer": {"@type": "Answer", "text": "No. Cometly does not replace your CRM or your advertising platforms. It adds attribution and revenue context, then syncs this information with your existing systems. Your advertising platforms will still deliver ads, and your CRM (like HubSpot or Salesforce) will keep managing customer relationships and sales."}},
                {"@type": "Question", "name": "How do I get started?", "acceptedAnswer": {"@type": "Answer", "text": "Audit your current tracking pixels and conversion events. Connect your advertising accounts, website tracking, and CRM or revenue systems. Set up revenue-focused KPIs and attribution settings. Review campaign performance based on attributed business outcomes. Shift budget to better-performing campaigns and test incremental increases. Send enriched conversion data back to supported advertising platforms."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Cometly", "precision lead acquisition", "ad spend optimization", "local advertising", "lead generation", "South Florida small business"],
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
        "Cometly delivers clear, real-time insights so South Florida small businesses can optimize ad spend and drive actual revenue, not just clicks.";
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
