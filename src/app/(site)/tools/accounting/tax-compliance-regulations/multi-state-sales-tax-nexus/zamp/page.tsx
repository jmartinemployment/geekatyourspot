import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Zamp";
const DESCRIPTION =
    "Multi-State Sales Tax Nexus is simple with Zamp: local South Florida experts help small businesses stay compliant as they expand sales across state lines.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp";
const PAGE_URL = `https://geekatyourspot.com${CANONICAL}`;

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "SoftwareApplication",
            "name": TITLE,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "description": DESCRIPTION,
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "Zamp, multi-state sales tax nexus, economic nexus, sales tax compliance, sales tax automation, sales tax filing, South Florida small business",
            "subjectOf": {
                "@type": "Article",
                "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida-smbs"
            },
            "@id": `${PAGE_URL}#software`
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "What does “fully managed” actually mean in practice?", "acceptedAnswer": {"@type": "Answer", "text": "With Zamp, your entire tax compliance process is handled by a dedicated team and platform. This includes nexus analysis, registrations, filings, remittance, notice handling, and audit support. Your only job is to review and approve, no need to coordinate or execute tasks yourself."}},
                {"@type": "Question", "name": "Who handles state and local tax notices?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp tracks, classifies, reviews, and resolves tax notices using automation and expert oversight. Your team does not have to manage deadlines or communicate with agencies, Zamp owns the process from start to finish."}},
                {"@type": "Question", "name": "How does this support international and cross-border expansion?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp manages U.S. sales tax and global VAT/GST in one system. You get expert guidance, so expanding into new countries or provinces does not mean adding new tools or vendors. Compliance stays simple as you grow."}},
                {"@type": "Question", "name": "How does this reduce risk at close and during audits?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp builds returns and liabilities to reconcile with your ERP and general ledger. You get audit-ready documentation and specialist review, so you can defend your compliance with confidence."}},
                {"@type": "Question", "name": "What internal effort is still required from our team?", "acceptedAnswer": {"@type": "Answer", "text": "Your team only needs to oversee and approve. Zamp takes care of monitoring, filings, registrations, and agency communication. You do not need to manage projects or follow up on tasks."}},
                {"@type": "Question", "name": "How does switching from Yonda work?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp migrates your historical filings, state accounts, certificates, and integrations. Filings continue without interruption, and most teams are fully live within a week."}},
                {"@type": "Question", "name": "How is pricing structured as our footprint grows?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp’s pricing is clear and upfront, designed to support multi-state and international growth. Your compliance costs stay predictable as your business expands."}},
                {"@type": "Question", "name": "Can Shopify tax settings change without breaking filings?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. If you change Shopify collection rules, Zamp syncs the new data and updates compliance workflows. This keeps your filings accurate and continuous."}},
                {"@type": "Question", "name": "Does Shopify file and remit sales tax automatically?", "acceptedAnswer": {"@type": "Answer", "text": "No. Shopify calculates and collects tax, but does not file or remit it. Zamp prepares and submits returns and payments based on your actual collections."}},
                {"@type": "Question", "name": "How are marketplace-facilitated orders treated?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp identifies and classifies marketplace transactions, like those from Amazon or TikTok Shop, to match facilitator rules. This prevents double-filing or missing tax on these orders."}},
                {"@type": "Question", "name": "How are product taxability rules applied by state?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp maps your products and shipping to each state’s tax codes. State-level exemptions and special rules are handled automatically in your reporting and filings."}},
                {"@type": "Question", "name": "How are state notices and audits handled?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp supports you by providing transaction history and filing documentation at the jurisdiction level. This helps resolve state correspondence and audit requests quickly."}},
                {"@type": "Question", "name": "How is nexus determined and monitored?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp analyzes your Shopify and other channel transactions against each state’s nexus thresholds. This shows where you need to register and file, so you stay compliant."}},
                {"@type": "Question", "name": "How long does historical data backfill take?", "acceptedAnswer": {"@type": "Answer", "text": "Once connected, Zamp imports your prior orders, refunds, and adjustments. This gives you a complete picture for nexus analysis and filing coverage."}},
                {"@type": "Question", "name": "Why does Zamp use your registered business address for tax mail instead of a virtual mailbox?", "acceptedAnswer": {"@type": "Answer", "text": "State and local agencies treat tax notices as legal correspondence with strict deadlines. Using your registered business address ensures you get these notices as expected. Zamp’s platform then tracks and manages each notice to handle responses on time."}},
                {"@type": "Question", "name": "Who actually handles state and local tax notices?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp’s automation and tax specialists receive, review, and resolve notices directly with agencies. Your team does not have to interpret letters or manage deadlines, Zamp closes out each notice with full context."}},
                {"@type": "Question", "name": "What happens when something looks off before a return is filed?", "acceptedAnswer": {"@type": "Answer", "text": "Tax professionals review and reconcile your data, using AI to detect and validate anomalies. Any discrepancies are investigated and resolved before your return is submitted."}},
                {"@type": "Question", "name": "How does Zamp support audits and state inquiries?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp prepares audit-ready documentation, supports your nexus and filing positions, and communicates directly with state agencies. This reduces the workload and risk for your finance team."}},
                {"@type": "Question", "name": "What does “fully managed” mean compared to a software platform with white-glove support?", "acceptedAnswer": {"@type": "Answer", "text": "With Zamp, one integrated system and team handle everything, registrations, filings, remittance, notices, and audit readiness. You do not have to split responsibility between a tool and outside service providers."}},
                {"@type": "Question", "name": "How does pricing behave as we add states and volume?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp’s pricing stays predictable as your business grows. It covers filings, registrations, and compliance without extra costs for each state or filing."}},
                {"@type": "Question", "name": "What role does our internal team play day to day?", "acceptedAnswer": {"@type": "Answer", "text": "Your team reviews and stays informed. Zamp’s specialists and platform handle all execution, registrations, filings, remittance, notices, and audit support."}},
                {"@type": "Question", "name": "How disruptive is switching from Numeral?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp migrates your historical data, validates current obligations, connects systems, and keeps filings going without interruption. Most teams are fully live within a week."}},
                {"@type": "Question", "name": "Can I sync historical transactions from QuickBooks?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. During setup, you can choose a date range to import past sales. This ensures your filings cover all prior periods."}},
                {"@type": "Question", "name": "Does Zamp provide me liability coverage?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Zamp offers the Zamp Commitment, which covers calculation and filing accuracy for your peace of mind."}},
                {"@type": "Question", "name": "Does Zamp work across all my sales channels?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Zamp integrates with Shopify, Amazon, BigCommerce, Magento, and more. All channels sync into QuickBooks for unified compliance."}},
                {"@type": "Question", "name": "I’m already using another tax tool. Can I switch?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Your Onboarding Manager will guide you through switching from your current provider, including migrating registrations and historical data."}},
                {"@type": "Question", "name": "What happens to my existing QuickBooks tax settings?", "acceptedAnswer": {"@type": "Answer", "text": "Once Zamp is connected, it takes over all tax calculations. Your old QuickBooks tax settings will not interfere, Zamp’s calculations override them to ensure accuracy."}},
                {"@type": "Question", "name": "Can the tool differentiate between crossing revenue thresholds vs. establishing physical presence (like remote employees or Amazon FBA inventory)?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp connects to your historical order data from platforms like Shopify or Stripe to build a detailed exposure analysis. It tracks each state's economic thresholds and lets you manually tag states where you have a physical presence, such as remote employees or inventory in Amazon FBA warehouses."}},
                {"@type": "Question", "name": "Many states are eliminating the 200-transaction threshold in favor of purely revenue-based metrics. Does the tool stay updated in real time?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp automates updates to state nexus rules. As states change from transaction counts to revenue-only thresholds, the tool updates its logic so you are not incorrectly flagged for nexus in states that have changed their criteria."}},
                {"@type": "Question", "name": "Does Zamp automatically start collecting tax when a threshold is crossed?", "acceptedAnswer": {"@type": "Answer", "text": "No. When you cross a nexus threshold, Zamp alerts you and guides you to register for a valid state sales tax permit. Only after you have the permit does Zamp activate tax calculation and collection at checkout."}},
                {"@type": "Question", "name": "If we sell on Amazon/Etsy (where the marketplace handles tax) and our own site, does Zamp mix up the data?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp filters your sales data to evaluate nexus thresholds correctly, including marketplace sales where required. It ensures you do not double-collect tax on transactions where the marketplace is already responsible for remitting the tax."}},
                {"@type": "Question", "name": "Once nexus is established and tax is collected, do we have to manually file returns in 20 different states?", "acceptedAnswer": {"@type": "Answer", "text": "Zamp is a managed service. After your multi-state nexus is set up, the software calculates tax at checkout, and their team handles all preparation, filing, and remittance of funds to each state treasury according to their deadlines."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: TITLE,
        description: DESCRIPTION,
        keywords: ["Zamp", "multi-state sales tax nexus", "economic nexus", "sales tax compliance", "sales tax automation", "sales tax filing", "South Florida small business"],
        authors: [{ name: 'Development Team', url: 'https://geekatyourspot.com/' }],
        creator: 'Geek at Your Spot Llc',
        publisher: 'Geek at Your Spot Llc',
        metadataBase: new URL('https://geekatyourspot.com'),
        alternates: { canonical: CANONICAL },
        openGraph: {
            title: TITLE,
            description: DESCRIPTION,
            url: PAGE_URL,
            siteName: 'Geek at Your Spot',
            locale: 'en_US',
            type: 'website',
            images: [{ url: '/images/GeekAtYourSpot.svg', width: 116, height: 48, alt: 'Geek at Your Spot' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: TITLE,
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
        "Zamp streamlines Multi-State Sales Tax Nexus compliance for small businesses in Miami-Dade, Broward, and West Palm Beach, offering hands-off filings and proactive risk management.";
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
            <ToolsHeroSection title={TITLE} summary={heroSummary} />
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
