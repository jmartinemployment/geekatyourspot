import type { Metadata } from "next";
import Link from "next/link";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "AI Accounting";
const PAGE_DESCRIPTION =
  "How South Florida small businesses use AI to automate the finance back office: accounts payable, cash flow forecasting, and tax compliance. Read the Geek blog on each.";

const jsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "headline": PAGE_TITLE,
      "description": PAGE_DESCRIPTION,
      "author": { "@type": "Person", "name": "Jeff Martin" },
      "publisher": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/accounting` },
      "keywords":
        "AI accounting, accounts payable automation, cash flow forecasting, tax compliance, small business AI",
    },
  ],
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      "AI accounting",
      "accounts payable automation",
      "cash flow forecasting",
      "tax compliance",
      "small business AI",
      "South Florida",
    ],
    authors: [{ name: "Jeff Martin" }],
    creator: "Geek @ Your Spot LLC",
    publisher: "Geek @ Your Spot LLC",
    metadataBase: new URL("https://geekatyourspot.com"),
    alternates: { canonical: "/blog/accounting" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: `${SITE_URL}/blog/accounting`,
      siteName: "Geek @ Your Spot LLC",
      locale: "en_US",
      type: "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [SHARE_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    appleWebApp: { capable: true, statusBarStyle: "default", title: "Geek @ Your Spot LLC" },
  };
};

export default async function Page() {
  const heroSummary =
    "The finance back office is where manual work piles up fastest. These Geek blog posts show how AI automates it, from payables to tax compliance.";
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <SharedHeroSection title={PAGE_TITLE} summary={heroSummary} image="" imgAlt="" />
      <article>
        <section className="min-h-screen bg-[#023059] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
                  Accounts Payable
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Invoices keyed by hand, approvals chased by email, payments run one at a time, and duplicate or
                  fraudulent bills that slip through. These posts cover how AI takes each of those jobs off your plate in
                  accounts payable.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-base font-normal text-white shadow-text pt-4">
                  <li>
                    <Link href="/blog/accounting/how-ai-transforms-accounts-payable-automated-data-entry-processing" className="text-[#C83803] font-bold hover:underline">
                      AI Data Entry for Accounts Payable
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/accounting/accounts-payable/how-automated-approval-workflows-transform-accounts-payable" className="text-[#C83803] font-bold hover:underline">
                      Accounts Payable Approval Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/accounting/accounts-payable/how-automated-payment-execution-transforms-your-bottom-line" className="text-[#C83803] font-bold hover:underline">
                      Automated Payment Execution Benefits
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/accounting/accounts-payable/how-ai-streamlines-fraud-detection-in-accounts-payable" className="text-[#C83803] font-bold hover:underline">
                      AI Accounts Payable Fraud Detection
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-[#024059] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
                  Cash Flow Forecasting
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Seeing around corners so you never run out of cash. These posts cover AI forecasting and the pieces
                  that feed it: collecting receivables, replacing fragile spreadsheets, and planning resources.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-base font-normal text-white shadow-text pt-4">
                  <li>
                    <Link href="/blog/accounting/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai" className="text-[#C83803] font-bold hover:underline">
                      Cash Flow Forecasting with AI
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/accounting/cash-flow-forecasting/how-automated-accounts-receivable-can-transform-your-cash-flow" className="text-[#C83803] font-bold hover:underline">
                      Automated Receivables and Cash Flow
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/accounting/cash-flow-forecasting/how-automated-spreadsheet-data-transforms-cash-flow-forecasting" className="text-[#C83803] font-bold hover:underline">
                      Automated Spreadsheets for Cash Flow
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/accounting/cash-flow-forecasting/intelligent-resource-planning-for-small-businesses-how-to-fix-cash-flow-headaches-in-south-florida" className="text-[#C83803] font-bold hover:underline">
                      AI Resource Planning for Cash Flow
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-[#025E73] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
                  Tax Compliance &amp; Regulations
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Tax rules change by county and by state, and the penalties for getting them wrong fall hardest on small
                  teams. These posts cover using AI to keep up with changing law, payroll tax and worker classification,
                  and multi-state sales tax.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-base font-normal text-white shadow-text pt-4">
                  <li>
                    <Link href="/blog/accounting/how-ai-is-revolutionizing-tax-compliance-what-you-need-to-know" className="text-[#C83803] font-bold hover:underline">
                      AI Tax Compliance, What to Know
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-what-miami-must-know-before-choosing-compliance-solutions" className="text-[#C83803] font-bold hover:underline">
                      Misclassified Workers &amp; Payroll Tax
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-what-south-florida-need-to-know-and-fix-before-expanding" className="text-[#C83803] font-bold hover:underline">
                      Sales Tax Nexus Before You Expand
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <SchedulerShell />
      </article>
    </>
  );
}
