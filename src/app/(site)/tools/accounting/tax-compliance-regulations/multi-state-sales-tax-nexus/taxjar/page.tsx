import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const TITLE = "TaxJar";
const PAGE_TITLE = "TaxJar for Multi-State Sales Tax Nexus";
const DESCRIPTION =
    "Multi-State Sales Tax Nexus is simplified for South Florida small businesses with TaxJar, offering automated compliance, tracking, and filing solutions.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "TechArticle",
            "@id": `${PAGE_URL}#article`,
            "headline": PAGE_TITLE,
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "TaxJar, multi-state sales tax nexus, economic nexus, sales tax compliance, sales tax automation, sales tax filing, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-taxjar",
                "name": TITLE,
                "url": "https://www.taxjar.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How does TaxJar track my economic and physical nexus across multiple states?", "acceptedAnswer": {"@type": "Answer", "text": "TaxJar automatically tracks your sales and transaction volume in each state. It sends alerts when you are close to or have passed a state's economic nexus threshold, like $100,000 in sales or 200 transactions."}},
                {"@type": "Question", "name": "Can TaxJar handle multi-channel sales if I sell on multiple platforms?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. TaxJar connects with major e-commerce platforms such as Amazon, Shopify, and WooCommerce. It combines your transaction data from all channels into one dashboard, so you can see your total multi-state nexus exposure."}},
                {"@type": "Question", "name": "Does TaxJar automatically register my business for new tax permits?", "acceptedAnswer": {"@type": "Answer", "text": "No. TaxJar shows you where you have nexus, but it does not register your business with state governments. It offers resources and guides to help you register for a sales tax permit yourself before you start collecting tax in a new state."}},
                {"@type": "Question", "name": "How does the tool manage different state taxability laws for specific products?", "acceptedAnswer": {"@type": "Answer", "text": "TaxJar uses AI to categorize your products and apply the right tax codes in over 11,000 jurisdictions. This covers complex rules, including exemptions for digital goods, SaaS, or food items, and applies them in real time at checkout based on the state."}},
                {"@type": "Question", "name": "Will TaxJar automatically file my multi-state returns?", "acceptedAnswer": {"@type": "Answer", "text": "TaxJar offers an optional AutoFile feature. When you enroll, it pulls your tax data, prepares each state's return, and files and pays your sales tax directly to the states for you."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["TaxJar", "multi-state sales tax nexus", "economic nexus", "sales tax compliance", "sales tax automation", "sales tax filing", "South Florida small business"],
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
        "TaxJar streamlines Multi-State Sales Tax Nexus compliance for South Florida small businesses, reducing manual work and minimizing audit risks.";
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
