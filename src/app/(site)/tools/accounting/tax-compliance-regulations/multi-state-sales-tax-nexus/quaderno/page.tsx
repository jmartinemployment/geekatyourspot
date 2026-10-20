import type { Metadata } from "next";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import OverviewSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/overview-section";
import ChallengesSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/challenges-section";
import TransformsSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/transforms-section";
import HowItWorksSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/how-it-works-section";
import ArchitectureSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/architecture-section";
import ImplementingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/implementing-section";
import DataMappingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/data-mapping-section";
import ConfiguringSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/configuring-section";
import EvaluatingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/evaluating-section";
import ComparingSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/comparing-section";
import RightFitSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/right-fit-section";
import FaqSection from "@/components/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno/faq-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const TITLE = "Quaderno";
const PAGE_TITLE = "Quaderno for Multi-State Sales Tax Nexus";
const DESCRIPTION =
    "Multi-State Sales Tax Nexus compliance is easy with Quaderno, the tool for small businesses in Miami-Dade, Broward, and West Palm Beach counties.";
const CANONICAL = "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno";
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
            "keywords": "Quaderno, multi-state sales tax nexus, economic nexus, sales tax compliance, sales tax automation, sales tax filing, South Florida small business",
            "author": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "about": {
                "@type": "Thing",
                "@id": "https://geekatyourspot.com/#software-quaderno",
                "name": TITLE,
                "url": "https://quaderno.io/",
                "subjectOf": { "@type": "Article", "@id": "https://geekatyourspot.com/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida#article" }
            }
        },
        {
            "@type": "FAQPage",
            "@id": `${PAGE_URL}#faq`,
            "mainEntity": [
                {"@type": "Question", "name": "Who should collect sales tax?", "acceptedAnswer": {"@type": "Answer", "text": "You need to collect sales tax if your business has a nexus in a state. Nexus can mean a physical location, employees, inventory, or even using local marketing affiliates or online ads. Economic nexus also counts, which is when your sales volume in a state passes a certain threshold. Each state has its own rules, so always check local policies. Once you have nexus, you should register and start collecting sales tax from customers in that state."}},
                {"@type": "Question", "name": "Do you have to charge sales tax for online sales?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on your sales volume and where your customers are. Many states require online sellers to charge sales tax if you pass their economic nexus threshold. If you meet that threshold, you must register and start charging sales tax. Some buyers may be exempt if they have a valid certificate, and some online marketplaces handle tax for you under marketplace facilitator laws."}},
                {"@type": "Question", "name": "How do I get a seller's permit or sales tax number?", "acceptedAnswer": {"@type": "Answer", "text": "Once you know you need to collect sales tax, you can use Quaderno’s sales tax registration guides for step-by-step help registering in each state. After you complete the process, you’ll receive your seller’s permit or sales tax number."}},
                {"@type": "Question", "name": "What is the sales tax in my area?", "acceptedAnswer": {"@type": "Answer", "text": "Sales tax rates change from state to state and sometimes even by city or region. States set their own base rates, and local taxes may be added on top. The total rate can also depend on whether your state uses destination-based or origin-based rules. Always check your local and state guidelines for the most accurate rate."}},
                {"@type": "Question", "name": "What's the difference between WooCommerce Tax and Quaderno's Tax Automation Plugin?", "acceptedAnswer": {"@type": "Answer", "text": "Quaderno’s plugin works with WooCommerce’s built-in tax features. It shows the right taxes at checkout, then handles tax-compliant invoices, credit notes, and reports for VAT, GST, and sales tax. It also alerts you when you are close to or reach a registration threshold. WooCommerce Tax handles just the calculation, while Quaderno manages the full compliance process after the sale."}},
                {"@type": "Question", "name": "How does Quaderno integrate with WooCommerce, and what compatibility features should I know about?", "acceptedAnswer": {"@type": "Answer", "text": "Flexible pricing: Calculate taxes based on your customer’s location, with prices shown as tax-inclusive or tax-exclusive.Multiple tax codes: Apply the right tax rate for different product types, including physical goods, digital products, ebooks, or online courses.Payment methods: Accept payments through PayPal, Braintree, Stripe, Square, GoCardless, and more. Make sure not to connect these payment processors directly to Quaderno to avoid duplicate invoices.Zero-rate taxes for B2B: The plugin can automatically apply reverse-charge for B2B sales."}},
                {"@type": "Question", "name": "I have several WooCommerce stores, is there a way to integrate them all to one Quaderno account?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, you can link as many WooCommerce stores as you want to your Quaderno account, as long as they are all under the same legal entity."}},
                {"@type": "Question", "name": "What happens when I refund a WooCommerce order?", "acceptedAnswer": {"@type": "Answer", "text": "When you refund an order in WooCommerce, Quaderno automatically creates a credit note for any order marked as Paid or Completed. Make sure to process the refund in WooCommerce, not just change the order status, to generate the credit note."}},
                {"@type": "Question", "name": "Does Quaderno work with the WooCommerce Checkout Blocks?", "acceptedAnswer": {"@type": "Answer", "text": "No, Quaderno does not currently support the new WooCommerce Checkout Blocks. You’ll need to use the classic checkout option for full compatibility."}},
                {"@type": "Question", "name": "Does Quaderno monitor economic nexus across all US states?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Quaderno Monitor tracks both revenue-based and transaction-based rules in real time for all 45-plus states that have a sales tax."}},
                {"@type": "Question", "name": "How will I know when I've triggered a multi-state nexus?", "acceptedAnswer": {"@type": "Answer", "text": "Quaderno adds up your sales across all connected platforms and sends automatic email alerts when you reach 90 percent and 100 percent of an economic nexus threshold in any state. This helps you register before you have tax exposure."}},
                {"@type": "Question", "name": "Does it account for non-taxable states?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Quaderno covers the five states with no state-level sales tax: New Hampshire, Oregon, Montana, Alaska, and Delaware."}},
                {"@type": "Question", "name": "Can Quaderno track nexus if I sell through multiple checkout tools?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Quaderno connects to Stripe, PayPal, Shopify, WooCommerce, and more at the same time. It brings all your sales data together for a single, unified multi-state revenue calculation."}},
                {"@type": "Question", "name": "How does it handle Marketplace Facilitator Laws?", "acceptedAnswer": {"@type": "Answer", "text": "You need to confirm if your marketplace, like Amazon, collects tax for you. These totals can affect your gross threshold tracking, but you will need to set this up differently in your Quaderno dashboard."}},
                {"@type": "Question", "name": "How does Quaderno differentiate between origin- and destination-based sourcing?", "acceptedAnswer": {"@type": "Answer", "text": "The Quaderno Tax Engine API checks customer location markers to apply the right state, county, and local city tax rates at checkout. It determines sourcing laws instantly in under 50 milliseconds."}},
                {"@type": "Question", "name": "Does Quaderno automatically register my business once a nexus is triggered?", "acceptedAnswer": {"@type": "Answer", "text": "Quaderno tracks when you need to register. Through managed compliance services, it can handle the full registration process with state tax authorities using its network of compliance partners."}},
                {"@type": "Question", "name": "How are returns handled for multiple states?", "acceptedAnswer": {"@type": "Answer", "text": "Once you register, you enter your tax ID on the jurisdictions page. Quaderno formats your multi-state data into audit-ready, location-specific reports. You can file manually or use Quaderno's automatic filing service to submit returns for you."}}
            ]
        }
    ]
};

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: PAGE_TITLE,
        description: DESCRIPTION,
        keywords: ["Quaderno", "multi-state sales tax nexus", "economic nexus", "sales tax compliance", "sales tax automation", "sales tax filing", "South Florida small business"],
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
        "Quaderno streamlines sales tax compliance for South Florida small businesses expanding across state lines, automating threshold tracking and filings.";
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
