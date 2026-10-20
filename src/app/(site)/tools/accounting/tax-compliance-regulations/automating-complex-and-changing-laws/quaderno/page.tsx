import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Quaderno";
const PAGE_TITLE = "Quaderno for Automating Complex & Changing Laws";
const DESCRIPTION =
    "Quaderno automates tax compliance for South Florida businesses, tackling complex, changing laws efficiently.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno";
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
            "keywords": "Quaderno, tax compliance automation, complex and changing laws, sales tax, economic nexus, Florida sales tax, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek at Your Spot" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-quaderno",
                "name": TITLE,
                "url": "https://quaderno.io/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What's the best tax compliance software for a small SaaS company selling internationally?", "acceptedAnswer": {"@type": "Answer", "text": "For small SaaS companies selling internationally, it's crucial to have tax compliance software that simplifies VAT, GST, and sales tax processes. Quaderno automates tax calculations, invoicing, threshold monitoring, and filing workflows, all in one platform. Designed for digital businesses and SaaS teams, Quaderno helps you stay compliant across various countries without adding manual accounting tasks. With integrations for Stripe and other billing platforms, it supports your growth by automating tax compliance."}},
                {"@type": "Question", "name": "I run a SaaS on Stripe with customers in the US, UK, and EU. Can Quaderno handle sales tax, VAT, invoicing, and filing for me?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Quaderno integrates seamlessly with Stripe Billing to automate tax calculations, subscription invoicing, and compliance workflows. It manages VAT, GST, and US sales tax obligations across multiple jurisdictions, helping you monitor tax thresholds and generate reports ready for filing."}},
                {"@type": "Question", "name": "Does Quaderno integrate with LearnWorlds?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, Quaderno integrates with LearnWorlds to calculate taxes on your sales. Once connected, it calculates tax directly during checkout and generates a tax-compliant invoice for each sale."}},
                {"@type": "Question", "name": "Can my prices include tax?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, you can choose whether your product prices include taxes or have taxes added on top. This setting is available under Settings, Financial, VAT Management."}},
                {"@type": "Question", "name": "Why am I getting duplicate invoices?", "acceptedAnswer": {"@type": "Answer", "text": "Duplicate invoices can occur if payment processors in your LearnWorlds account are also connected to Quaderno. Ensure that only one connection is active to prevent this issue."}},
                {"@type": "Question", "name": "What billing details does LearnWorlds collect?", "acceptedAnswer": {"@type": "Answer", "text": "LearnWorlds collects billing details such as address, country, postal code, and city at checkout. Quaderno uses this information to accurately calculate taxes."}},
                {"@type": "Question", "name": "How does Quaderno track real-time tax rate changes across multi-channel sales pipelines?", "acceptedAnswer": {"@type": "Answer", "text": "Quaderno connects to your payment processors, shopping carts, and subscription billing systems like Stripe. It totals your sales by customer location in real time and tracks these totals against US economic nexus, EU OSS, and VAT and GST registration thresholds in over 150 countries. Quaderno sends you email alerts at 90% and 100% of each threshold, ensuring you can register before needing to collect tax."}},
                {"@type": "Question", "name": "How does the software alert local businesses before they violate out-of-state \"Economic Nexus\" laws?", "acceptedAnswer": {"@type": "Answer", "text": "Quaderno provides real-time alerts when sellers approach US economic nexus or international VAT and GST registration thresholds. This allows businesses to register before they are legally required to collect tax, helping them avoid penalties for uncollected back-taxes."}},
                {"@type": "Question", "name": "How does Quaderno handle product-specific tax regulations, such as software versus physical goods?", "acceptedAnswer": {"@type": "Answer", "text": "Quaderno assigns the correct tax code to every line item, ensuring that SaaS, digital downloads, physical goods, and services are taxed appropriately. This prevents overcharging or undercharging customers by applying the correct tax rate for each product type."}},
                {"@type": "Question", "name": "Does Quaderno handle tax filing automatically when complex regional laws shift?", "acceptedAnswer": {"@type": "Answer", "text": "Quaderno automatically consolidates your sales and tax collected into jurisdiction-specific summaries and tracks every deadline. It can file tax returns directly on your behalf, covering local formats across US states, EU OSS, UK VAT, and more than 50 countries worldwide."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Quaderno", "tax compliance automation", "complex and changing laws", "sales tax", "economic nexus", "Florida sales tax", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: PAGE_TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            creator: 'Geek at Your Spot',
            images: ['/images/GeekAtYourSpot.svg'],
        },
        robots: {
            index: true, follow: true, nocache: false,
            googleBot: {
                index: true, follow: true, noimageindex: false,
                'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1,
            },
        },
        appleWebApp: { capable: true, statusBarStyle: 'default', title: 'Geek at Your Spot' },
    };
};

export default async function Page() {
    const heroSummary =
        "Quaderno automates tax compliance, helping South Florida businesses navigate complex and changing laws effortlessly.";
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
