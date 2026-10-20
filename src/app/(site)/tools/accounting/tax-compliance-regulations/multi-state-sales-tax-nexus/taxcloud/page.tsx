import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "TaxCloud";
const PAGE_TITLE = "TaxCloud for Multi-State Sales Tax Nexus";
const DESCRIPTION =
    "Multi-State Sales Tax Nexus is a major challenge for South Florida small businesses. TaxCloud automates compliance, registration, and filing across states.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud";
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
            "keywords": "TaxCloud, multi-state sales tax nexus, economic nexus, sales tax compliance, sales tax automation, sales tax filing, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-taxcloud",
                "name": TITLE,
                "url": "https://taxcloud.com/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "How do I know if I have nexus in Florida?", "acceptedAnswer": {"@type": "Answer", "text": "You have nexus in Florida if your business has a physical presence in the state, such as an office, warehouse, employees, or inventory stored in an Amazon FBA center. You also have nexus if your taxable remote sales into Florida were over $100,000 in the previous calendar year. Florida only counts taxable sales for this threshold, exempt items like SaaS do not count. Marketplace sales where the facilitator collects tax are also excluded. TaxCloud’s nexus tracking helps you monitor your exposure across all states in real time."}},
                {"@type": "Question", "name": "Does Florida charge sales tax on shipping?", "acceptedAnswer": {"@type": "Answer", "text": "Florida does not charge sales tax on separately stated shipping charges for delivering tangible goods. If shipping is bundled into the product price or combined with handling charges that include taxable items, then the entire charge is taxable."}},
                {"@type": "Question", "name": "What happens if I miss a Florida sales tax filing deadline?", "acceptedAnswer": {"@type": "Answer", "text": "If you miss a Florida sales tax filing deadline, the state charges a late filing penalty of 10% of the tax due, with a minimum of $50, plus interest. This penalty applies even if you had zero sales for the period, you still need to file a zero-return. Electronic filers have until the 20th of the month to file, while paper filers must file by the 1st."}},
                {"@type": "Question", "name": "Does Florida tax SaaS and digital products?", "acceptedAnswer": {"@type": "Answer", "text": "No. Florida does not tax SaaS or digital products like eBooks, music downloads, or streaming services. SaaS delivered electronically is treated as an intangible service. However, prewritten software delivered on physical media, such as a CD or USB drive, is taxable at the standard 6% state rate plus any county surtax."}},
                {"@type": "Question", "name": "Do I need to collect Florida sales tax on Amazon FBA sales?", "acceptedAnswer": {"@type": "Answer", "text": "If you store inventory in a Florida FBA warehouse, you have physical nexus and must register with the Department of Revenue. Amazon collects and remits tax for your marketplace sales, but you are still responsible for collecting tax on sales made through your own website (like Shopify or WooCommerce) to Florida customers. Amazon marketplace sales do not count toward your $100,000 economic nexus threshold."}},
                {"@type": "Question", "name": "Does TaxCloud handle Florida sales tax filing?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. TaxCloud manages Florida sales tax calculation, filing, and remittance for ecommerce and SaaS businesses selling into the state. Florida is not an SST member, but TaxCloud still handles Florida compliance alongside your SST-funded states."}},
                {"@type": "Question", "name": "How does TaxCloud track economic nexus across multiple states?", "acceptedAnswer": {"@type": "Answer", "text": "TaxCloud uses automated economic nexus tracking to watch your sales and transaction counts in every state. It alerts you as soon as you get close to or pass a state’s nexus threshold."}},
                {"@type": "Question", "name": "How does TaxCloud handle the Streamlined Sales Tax (SST) program?", "acceptedAnswer": {"@type": "Answer", "text": "TaxCloud is a certified SST Service Provider. Eligible businesses can use it for free sales tax calculation and free filing in 24 SST member states."}},
                {"@type": "Question", "name": "Can TaxCloud help register my business in new states once nexus is established?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. TaxCloud manages state tax registrations and follow-ups so your sales tax permits are active and compliant before filings are due."}},
                {"@type": "Question", "name": "How accurate are calculations across complex local jurisdictions?", "acceptedAnswer": {"@type": "Answer", "text": "TaxCloud gives real-time tax calculations for over 13,000 U.S. jurisdictions. It updates rates automatically for every order."}},
                {"@type": "Question", "name": "Does TaxCloud automate monthly or quarterly state returns?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. TaxCloud prepares, files, and remits sales tax returns directly to state authorities on schedule. If you enroll through SST, it can cut your total filings by up to 60%."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["TaxCloud", "multi-state sales tax nexus", "economic nexus", "sales tax compliance", "sales tax automation", "sales tax filing", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
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
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek @ Your Spot LLC' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: PAGE_TITLE,
            description: DESCRIPTION,
            creator: 'Geek @ Your Spot LLC',
            images: ['/images/GeekAtYourSpot.svg'],
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
        "TaxCloud simplifies compliance for South Florida small businesses facing Multi-State Sales Tax Nexus, automating registration, collection, and filing requirements across states.";
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
