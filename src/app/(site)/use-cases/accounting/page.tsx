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
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "Accounting & Finance Use Cases";
const PAGE_DESCRIPTION =
  "This guide shows South Florida small businesses where manual accounting fails, which tools close each gap, and how to automate without losing control.";
const CANONICAL = "/use-cases/accounting";
const PAGE_URL = `${SITE_URL}${CANONICAL}`;

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
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    images: [SHARE_IMAGE],
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
            "publisher": { "@type": "Organization", "@id": "https://geekatyourspot.com/#organization", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-15T00:00:00Z",
            "dateModified": "2026-10-15T00:00:00Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "accounting automation, small business accounting South Florida, accounts payable automation, cash flow forecasting, sales tax nexus, payroll tax compliance, QuickBooks Online Advanced, AI for small business Miami, Broward, Palm Beach",
            "@id": `${PAGE_URL}#article`,
            "mentions": [
                { "@id": "https://geekatyourspot.com/#software-quickbooks-online-advanced" },
                { "@id": "https://geekatyourspot.com/#software-approvalmax" },
                { "@id": "https://geekatyourspot.com/#software-dext" },
                { "@id": "https://geekatyourspot.com/#software-avidxchange" },
                { "@id": "https://geekatyourspot.com/#software-bill" },
                { "@id": "https://geekatyourspot.com/#software-stampli" },
                { "@id": "https://geekatyourspot.com/#software-bill" },
                { "@id": "https://geekatyourspot.com/#software-melio" },
                { "@id": "https://geekatyourspot.com/#software-ramp" },
                { "@id": "https://geekatyourspot.com/#software-bill" },
                { "@id": "https://geekatyourspot.com/#software-melio" },
                { "@id": "https://geekatyourspot.com/#software-ramp" },
                { "@id": "https://geekatyourspot.com/#software-avidxchange" },
                { "@id": "https://geekatyourspot.com/#software-tipalti" },
                { "@id": "https://geekatyourspot.com/#software-medius" },
                { "@id": "https://geekatyourspot.com/#software-tipalti" },
                { "@id": "https://geekatyourspot.com/#software-bill" },
                { "@id": "https://geekatyourspot.com/#software-jirav" },
                { "@id": "https://geekatyourspot.com/#software-fathom" },
                { "@id": "https://geekatyourspot.com/#software-cashflowfrog" },
                { "@id": "https://geekatyourspot.com/#software-take-the-helm" },
                { "@id": "https://geekatyourspot.com/#software-floatapp" },
                { "@id": "https://geekatyourspot.com/#software-dryrun" },
                { "@id": "https://geekatyourspot.com/#software-clockwork" },
                { "@id": "https://geekatyourspot.com/#software-cashflowfrog" },
                { "@id": "https://geekatyourspot.com/#software-take-the-helm" },
                { "@id": "https://geekatyourspot.com/#software-chaserhq" },
                { "@id": "https://geekatyourspot.com/#software-invoiced" },
                { "@id": "https://geekatyourspot.com/#software-upflow" },
                { "@id": "https://geekatyourspot.com/#software-versapay" },
                { "@id": "https://geekatyourspot.com/#software-bill" },
                { "@id": "https://geekatyourspot.com/#software-taxcloud" },
                { "@id": "https://geekatyourspot.com/#software-taxjar" },
                { "@id": "https://geekatyourspot.com/#software-quaderno" },
                { "@id": "https://geekatyourspot.com/#software-zamp" },
                { "@id": "https://geekatyourspot.com/#software-taxvalet" },
                { "@id": "https://geekatyourspot.com/#software-taxjar" },
                { "@id": "https://geekatyourspot.com/#software-taxcloud" },
                { "@id": "https://geekatyourspot.com/#software-zamp" },
                { "@id": "https://geekatyourspot.com/#software-taxvalet" },
                { "@id": "https://geekatyourspot.com/#software-quaderno" },
                { "@id": "https://geekatyourspot.com/#software-gusto" },
                { "@id": "https://geekatyourspot.com/#software-rippling" },
                { "@id": "https://geekatyourspot.com/#software-adp" },
                { "@id": "https://geekatyourspot.com/#software-deel" },
                { "@id": "https://geekatyourspot.com/#software-justworks" }
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
