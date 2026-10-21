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
const PAGE_TITLE = "AI Accounting";
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
            "author": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "publisher": { "@type": "Organization", "url": "https://geekatyourspot.com", "name": "Geek @ Your Spot LLC" },
            "datePublished": "2026-10-15T00:00:00Z",
            "dateModified": "2026-10-15T00:00:00Z",
            "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
            "keywords": "accounting automation, small business accounting South Florida, accounts payable automation, cash flow forecasting, sales tax nexus, payroll tax compliance, QuickBooks Online Advanced, AI for small business Miami, Broward, Palm Beach",
            "mentions": [
                { "@type": "Thing", "name": "QuickBooks Online Advanced", "url": "https://quickbooks.intuit.com/online/advanced/" },
                { "@type": "Thing", "name": "ApprovalMax", "url": "https://approvalmax.com/" },
                { "@type": "Thing", "name": "Dext", "url": "https://dext.com/" },
                { "@type": "Thing", "name": "AvidXchange", "url": "https://www.avidxchange.com/" },
                { "@type": "Thing", "name": "Bill", "url": "https://www.bill.com/" },
                { "@type": "Thing", "name": "Stampli", "url": "https://www.stampli.com/" },
                { "@type": "Thing", "name": "Bill", "url": "https://www.bill.com/" },
                { "@type": "Thing", "name": "Melio", "url": "https://melio.com/" },
                { "@type": "Thing", "name": "Ramp", "url": "https://ramp.com/" },
                { "@type": "Thing", "name": "Bill", "url": "https://www.bill.com/" },
                { "@type": "Thing", "name": "Melio", "url": "https://melio.com/" },
                { "@type": "Thing", "name": "Ramp", "url": "https://ramp.com/" },
                { "@type": "Thing", "name": "AvidXchange", "url": "https://www.avidxchange.com/" },
                { "@type": "Thing", "name": "Tipalti", "url": "https://tipalti.com/" },
                { "@type": "Thing", "name": "Medius", "url": "https://www.medius.com/" },
                { "@type": "Thing", "name": "Tipalti", "url": "https://tipalti.com/" },
                { "@type": "Thing", "name": "Bill", "url": "https://www.bill.com/" },
                { "@type": "Thing", "name": "Jirav", "url": "https://www.jirav.com/" },
                { "@type": "Thing", "name": "Fathom", "url": "https://www.fathomhq.com/" },
                { "@type": "Thing", "name": "Cashflowfrog", "url": "https://cashflowfrog.com/" },
                { "@type": "Thing", "name": "Take the Helm", "url": "https://takethehelm.app/" },
                { "@type": "Thing", "name": "Floatapp", "url": "https://floatapp.com/" },
                { "@type": "Thing", "name": "Dryrun", "url": "https://www.dryrun.com/" },
                { "@type": "Thing", "name": "Clockwork", "url": "https://www.clockwork.ai/" },
                { "@type": "Thing", "name": "Cashflowfrog", "url": "https://cashflowfrog.com/" },
                { "@type": "Thing", "name": "Take the Helm", "url": "https://takethehelm.app/" },
                { "@type": "Thing", "name": "Chaserhq", "url": "https://www.chaserhq.com/" },
                { "@type": "Thing", "name": "Invoiced", "url": "https://www.invoiced.com/" },
                { "@type": "Thing", "name": "Upflow", "url": "https://upflow.io/" },
                { "@type": "Thing", "name": "Versapay", "url": "https://www.versapay.com/" },
                { "@type": "Thing", "name": "Bill", "url": "https://www.bill.com/" },
                { "@type": "Thing", "name": "TaxCloud", "url": "https://taxcloud.com/" },
                { "@type": "Thing", "name": "TaxJar", "url": "https://www.taxjar.com/" },
                { "@type": "Thing", "name": "Quaderno", "url": "https://quaderno.io/" },
                { "@type": "Thing", "name": "Zamp", "url": "https://zamp.com/" },
                { "@type": "Thing", "name": "TaxValet", "url": "https://thetaxvalet.com/" },
                { "@type": "Thing", "name": "TaxJar", "url": "https://www.taxjar.com/" },
                { "@type": "Thing", "name": "TaxCloud", "url": "https://taxcloud.com/" },
                { "@type": "Thing", "name": "Zamp", "url": "https://zamp.com/" },
                { "@type": "Thing", "name": "TaxValet", "url": "https://thetaxvalet.com/" },
                { "@type": "Thing", "name": "Quaderno", "url": "https://quaderno.io/" },
                { "@type": "Thing", "name": "Gusto", "url": "https://gusto.com/" },
                { "@type": "Thing", "name": "Rippling", "url": "https://www.rippling.com/" },
                { "@type": "Thing", "name": "ADP", "url": "https://www.adp.com/" },
                { "@type": "Thing", "name": "Deel", "url": "https://www.deel.com/" },
                { "@type": "Thing", "name": "Justworks", "url": "https://www.justworks.com/" }
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
        title="AI Accounting"
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
