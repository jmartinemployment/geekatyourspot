import type { Metadata } from "next";
import UseCasesHeroSection from "@/components/use-cases/shared/use-cases-hero";
import LedeSection from "@/components/use-cases/accounting/accounting-guide/lede-section";
import FailurePointsSection from "@/components/use-cases/accounting/accounting-guide/failure-points-section";
import CloudLedgerSection from "@/components/use-cases/accounting/accounting-guide/cloud-ledger-section";
import AccountsPayableSection from "@/components/use-cases/accounting/accounting-guide/accounts-payable-section";
import ForecastingReceivablesSection from "@/components/use-cases/accounting/accounting-guide/forecasting-receivables-section";
import TaxPayrollNexusSection from "@/components/use-cases/accounting/accounting-guide/tax-payroll-nexus-section";
import ConditionalWorkflowsSection from "@/components/use-cases/accounting/accounting-guide/conditional-workflows-section";
import MethodologySection from "@/components/use-cases/accounting/accounting-guide/methodology-section";
import ConclusionSection from "@/components/use-cases/accounting/accounting-guide/conclusion-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const SITE_URL = "https://geekatyourspot.com";
const LOGO_IMAGE = `${SITE_URL}/images/GeekAtYourSpot.svg`;
const PAGE_TITLE = "Accounting & Finance Use Cases";
const PAGE_DESCRIPTION =
  "A guide for South Florida small businesses on where manual accounting fails, the tools that close each gap, and how to automate without losing control of the books.";
const CANONICAL = "/use-cases/accounting";
const PAGE_URL = `${SITE_URL}${CANONICAL}`;
const TOOLS_BASE = `${SITE_URL}/tools/accounting`;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "accounting automation",
    "small business accounting South Florida",
    "accounts payable automation",
    "cash flow forecasting",
    "sales tax nexus",
    "payroll tax compliance",
    "QuickBooks Online Advanced",
    "AI for small business Miami",
    "Broward",
    "Palm Beach",
  ],
  alternates: {
    canonical: CANONICAL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "article",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Geek @ Your Spot LLC",
    locale: "en_US",
    images: [{ url: LOGO_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    images: [LOGO_IMAGE],
  },
};

const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "headline": PAGE_TITLE,
            "description": PAGE_DESCRIPTION,
            "author": { "@type": "Organization", "@id": `${SITE_URL}/#organization`, "name": "Geek @ Your Spot LLC" },
            "publisher": {
                "@type": "Organization",
                "name": "Geek @ Your Spot LLC",
                "logo": { "@type": "ImageObject", "url": LOGO_IMAGE }
            },
            "datePublished": "2026-10-15T00:00:00Z",
            "dateModified": "2026-10-15T00:00:00Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "accounting automation, small business accounting South Florida, accounts payable automation, cash flow forecasting, sales tax nexus, payroll tax compliance, QuickBooks Online Advanced, AI for small business Miami, Broward, Palm Beach",
            "@id": `${PAGE_URL}#article`,
            "mentions": [
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/intelligent-resource-planning/quickbooks#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-approval-workflows/approvalmax#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-data-entry-processing/dext#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-data-entry-processing/avidxchange#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-data-entry-processing/bill#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-approval-workflows/stampli#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-approval-workflows/bill#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-approval-workflows/melio#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-approval-workflows/ramp#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-fraud-duplicate-payment-controls/medius#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti#software` },
                { "@id": `${TOOLS_BASE}/accounts-payable/automated-fraud-duplicate-payment-controls/bill#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/intelligent-resource-planning/jirav#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/intelligent-resource-planning/fathomhq#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/intelligent-resource-planning/takethehelm#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-spreadsheet-data/floatapp#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-spreadsheet-data/dryrun#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-spreadsheet-data/clockwork#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-spreadsheet-data/takethehelm#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-accounts-receivable/chaserhq#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-accounts-receivable/invoiced#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-accounts-receivable/upflow#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-accounts-receivable/versapay#software` },
                { "@id": `${TOOLS_BASE}/cash-flow-forecasting/automated-accounts-receivable/bill#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/automating-complex-and-changing-laws/zamp#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/automating-complex-and-changing-laws/thetaxvalet#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/payroll-tax-worker-misclassification/adp#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/payroll-tax-worker-misclassification/deel#software` },
                { "@id": `${TOOLS_BASE}/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks#software` }
            ]
        }
    ]
};

export default function AccountingUseCasesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <UseCasesHeroSection
        department="accounting"
        title="Accounting Use Cases"
        summary="This guide shows South Florida small businesses where manual accounting fails, which tools close each gap, and how we put those tools in place without losing control of the books."
      />
      <article>
        <LedeSection />
        <FailurePointsSection />
        <CloudLedgerSection />
        <AccountsPayableSection />
        <ForecastingReceivablesSection />
        <TaxPayrollNexusSection />
        <ConditionalWorkflowsSection />
        <MethodologySection />
        <ConclusionSection />
        <SchedulerShell />
      </article>
    </>
  );
}
