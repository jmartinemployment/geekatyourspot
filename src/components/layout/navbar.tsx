"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { gtmClickId, gtmLinkIdFromHref } from "@/lib/gtm/link-id";

type MenuSection = "use-cases" | "blog" | "tools" | "glossary";

/**
 * Every href below is hand-maintained and points at a route that exists in
 * src/app. When you add a page, add its link here by hand.
 */

function MenuHeading({
  href,
  label,
  onNavigate,
}: Readonly<{ href: string; label: string; onNavigate: () => void }>): React.JSX.Element {
  return (
    <Link
      href={href}
      id={gtmLinkIdFromHref(href, "nav-dept")}
      className="block text-base font-bold leading-tight text-black no-underline hover:text-[#8C2703] sm:text-lg"
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}

function MenuLink({
  href,
  label,
  onNavigate,
}: Readonly<{ href: string; label: string; onNavigate: () => void }>): React.JSX.Element {
  return (
    <li>
      <Link
        href={href}
        id={gtmLinkIdFromHref(href, "nav")}
        className="block text-xs leading-snug text-black no-underline hover:text-[#8C2703] sm:text-sm"
        onClick={onNavigate}
      >
        {label}
      </Link>
    </li>
  );
}

const COLUMN_CLASS =
  "min-w-0 px-0 md:px-6 md:first:pl-0 md:last:pr-0 [&:not(:first-child)]:mt-4 [&:not(:first-child)]:border-t [&:not(:first-child)]:border-black/10 [&:not(:first-child)]:pt-4 md:[&:not(:first-child)]:mt-0 md:[&:not(:first-child)]:border-t-0 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pt-0";

const LIST_CLASS = "m-0 mt-2 list-none space-y-1 p-0";

/**
 * Use Cases, Blog and Tools group their pages by category, the same categories the home page
 * cards use (Lead Capture Pipeline, Content Creation Workflow, Automated Ad Spend Optimization;
 * Accounts Payable, Cash Flow Forecasting, Tax Compliance & Regulations). A category shows its
 * pages on hover with a mouse and on tap on a touch screen. Below lg its pages open under it; from
 * lg up they open beside the category list, so hovering one never moves the others.
 */
type MenuItem = Readonly<{ href: string; label: string }>;

type MenuCategory = Readonly<{ id: string; label: string; items: readonly MenuItem[] }>;

type MenuDepartment = Readonly<{
  href: string;
  label: string;
  categories: readonly MenuCategory[];
  /** Pages that sit in no category. */
  items: readonly MenuItem[];
}>;

const USE_CASES_MENU: readonly MenuDepartment[] = [
  {
    href: "/use-cases/marketing",
    label: "Marketing",
    categories: [
      {
        id: "use-cases-marketing-lead-capture-pipeline",
        label: "Lead Capture Pipeline",
        items: [
          { href: "/use-cases/marketing/intelligent-lead-capture-pipeline", label: "Intelligent Lead Capture Pipeline" },
          { href: "/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses", label: "Intelligent Receptionist" },
          { href: "/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-smb-implementation-guide", label: "Cross-Platform Chatbot" },
          { href: "/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida-smbs", label: "Lead Enrichment and Predictive Scoring" },
          { href: "/use-cases/marketing/ai-driven-lead-scoring-for-small-businesses", label: "AI-Driven Lead Scoring for Small Businesses" },
        ],
      },
      {
        id: "use-cases-marketing-content-creation-workflow",
        label: "Content Creation Workflow",
        items: [
          { href: "/use-cases/marketing/ai-content-creation-workflow", label: "Content Creation Workflow" },
          { href: "/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai", label: "Intelligent Content Planning" },
          { href: "/use-cases/marketing/automated-content-generation-transforming-small-business-marketing", label: "Automated Content Generation" },
          { href: "/use-cases/marketing/ai-content-repurposing", label: "AI Content Repurposing" },
          { href: "/use-cases/marketing/seo-blog-and-article-generation", label: "SEO Blog and Article Generation" },
        ],
      },
      {
        id: "use-cases-marketing-automated-ad-spend-optimization",
        label: "Automated Ad Spend Optimization",
        items: [
          { href: "/use-cases/marketing/automated-ad-spend-optimization", label: "Automated Ad Spend Optimization" },
        ],
      },
    ],
    items: [
      { href: "/use-cases/marketing/ai-marketing-systems", label: "AI Marketing Systems" },
    ],
  },
  {
    href: "/use-cases/accounting",
    label: "Accounting",
    categories: [
      {
        id: "use-cases-accounting-accounts-payable",
        label: "Accounts Payable",
        items: [
          { href: "/use-cases/accounting/accounts-payable/automated-accounts-payable", label: "Accounts Payable" },
          { href: "/use-cases/accounting/accounts-payable/automated-data-entry-processing", label: "Intelligent Data Entry & Processing" },
          { href: "/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable", label: "Intelligent Approval Workflows" },
          { href: "/use-cases/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai", label: "Intelligent Payment Execution" },
          { href: "/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs", label: "Intelligent Fraud & Duplicate Payment Controls" },
        ],
      },
      {
        id: "use-cases-accounting-cash-flow-forecasting",
        label: "Cash Flow Forecasting",
        items: [
          { href: "/use-cases/accounting/cash-flow-forecasting/automated-cash-flow-forecasting", label: "Intelligent Cash Flow Forecasting" },
          { href: "/use-cases/accounting/cash-flow-forecasting/automated-accounts-receivable-boost-cash-flow-with-ai", label: "Intelligent Accounts Receivable" },
          { href: "/use-cases/accounting/cash-flow-forecasting/automated-spreadsheet-data-transforming-cash-flow-forecasting-for-smbs", label: "Intelligent Spreadsheet Data" },
          { href: "/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business", label: "Intelligent Resource Planning" },
        ],
      },
      {
        id: "use-cases-accounting-tax-compliance-regulations",
        label: "Tax Compliance & Regulations",
        items: [
          { href: "/use-cases/accounting/tax-compliance-regulations", label: "Tax Compliance & Regulations" },
          { href: "/use-cases/accounting/tax-compliance-regulations/automating-complex-and-changing-laws", label: "Automating Complex & Changing Laws" },
          { href: "/use-cases/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-ai-implementation-for-local-smb-compliance", label: "Payroll Tax & Worker Misclassification" },
          { href: "/use-cases/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-ai-driven-compliance-for-south-florida-smbs", label: "Multi-State Sales Tax Nexus" },
        ],
      },
    ],
    items: [],
  },
];

const BLOG_MENU: readonly MenuDepartment[] = [
  {
    href: "/blog",
    label: "Marketing",
    categories: [
      {
        id: "blog-marketing-lead-capture-pipeline",
        label: "Lead Capture Pipeline",
        items: [
          { href: "/blog/marketing/why-your-b2b-sales-need-an-intelligent-lead-capture-pipeline", label: "Why Your B2B Sales Need an Intelligent Lead Capture Pipeline" },
          { href: "/blog/marketing/lead-capture-pipeline/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after-hours", label: "Intelligent Receptionist: How to Stop Losing Leads After Hours" },
          { href: "/blog/marketing/lead-capture-pipeline/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipeline", label: "Cross-Platform Chatbot: The Missing Link in Your Lead Capture Pipeline" },
          { href: "/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-smbs-can-turn-more-leads-into-sales", label: "Lead Enrichment and Predictive Scoring: Turn More Leads Into Sales" },
          { href: "/blog/marketing/how-ai-powered-lead-scoring-can-boost-your-sales-funnel", label: "How AI-Powered Lead Scoring Can Boost Your Sales Funnel" },
          { href: "/blog/marketing/are-smart-chatbots-the-secret-weapon-for-marketing-success", label: "Are Smart Chatbots the Secret Weapon for Marketing Success?" },
          { href: "/blog/marketing/smart-chatbots-for-marketing-transforming-customer-engagement", label: "Smart Chatbots for Marketing: Transforming Customer Engagement" },
        ],
      },
      {
        id: "blog-marketing-content-creation-workflow",
        label: "Content Creation Workflow",
        items: [
          { href: "/blog/marketing/content-creation-workflow/intelligent-content-planning-how-south-florida-smbs-can-save-hours-and-drive-more-sales", label: "Intelligent Content Planning" },
          { href: "/blog/marketing/how-to-streamline-your-content-workflow-with-ai", label: "How to Streamline Your Content Workflow with AI" },
          { href: "/blog/marketing/unlocking-the-potential-of-automated-content-generation-for-small-businesses", label: "Unlocking the Potential of Automated Content Generation for Small Businesses" },
          { href: "/blog/marketing/unlocking-the-power-of-automated-content-generation", label: "Unlocking the Power of Automated Content Generation" },
          { href: "/blog/marketing/unlocking-the-power-of-ai-for-content-repurposing", label: "Unlocking the Power of AI for Content Repurposing" },
          { href: "/blog/marketing/unlocking-the-potential-of-ai-in-seo-content-creation", label: "Unlocking the Potential of AI in SEO Content Creation" },
          { href: "/blog/marketing/how-personalized-email-campaigns-drive-real-results", label: "How Personalized Email Campaigns Drive Real Results" },
        ],
      },
      {
        id: "blog-marketing-automated-ad-spend-optimization",
        label: "Automated Ad Spend Optimization",
        items: [
          { href: "/blog/marketing/how-ai-transforms-ad-spend-4-key-strategies", label: "How AI Transforms Ad Spend: 4 Key Strategies" },
        ],
      },
    ],
    items: [
      { href: "/blog/marketing/how-ai-marketing-systems-transform-small-business-growth", label: "How AI Marketing Systems Transform Small Business Growth" },
    ],
  },
  {
    href: "/blog",
    label: "Accounting",
    categories: [
      {
        id: "blog-accounting-accounts-payable",
        label: "Accounts Payable",
        items: [
          { href: "/blog/accounting/how-ai-transforms-accounts-payable-automated-data-entry-processing", label: "How AI Transforms Accounts Payable: Automated Data Entry & Processing" },
          { href: "/blog/accounting/accounts-payable/how-automated-approval-workflows-transform-accounts-payable", label: "How Automated Approval Workflows Transform Accounts Payable" },
          { href: "/blog/accounting/accounts-payable/how-automated-payment-execution-transforms-your-bottom-line", label: "How Automated Payment Execution Transforms Your Bottom Line" },
          { href: "/blog/accounting/accounts-payable/how-ai-streamlines-fraud-detection-in-accounts-payable", label: "How AI Streamlines Fraud Detection in Accounts Payable" },
        ],
      },
      {
        id: "blog-accounting-cash-flow-forecasting",
        label: "Cash Flow Forecasting",
        items: [
          { href: "/blog/accounting/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai", label: "Unlocking the Secrets to Effective Cash Flow Forecasting with AI" },
          { href: "/blog/accounting/cash-flow-forecasting/how-automated-accounts-receivable-can-transform-your-cash-flow", label: "How Automated Accounts Receivable Can Transform Your Cash Flow" },
          { href: "/blog/accounting/cash-flow-forecasting/how-automating-spreadsheet-data-boosts-cash-flow-forecasting", label: "How Automating Spreadsheet Data Boosts Cash Flow Forecasting" },
          { href: "/blog/accounting/cash-flow-forecasting/how-automated-spreadsheet-data-transforms-cash-flow-forecasting-for-local-smbs", label: "How Automated Spreadsheet Data Transforms Cash Flow Forecasting for Local SMBs" },
          { href: "/blog/accounting/cash-flow-forecasting/intelligent-resource-planning-for-small-businesses-how-to-fix-cash-flow-headaches-in-south-florida", label: "Intelligent Resource Planning: How to Fix Cash Flow Headaches" },
        ],
      },
      {
        id: "blog-accounting-tax-compliance-regulations",
        label: "Tax Compliance & Regulations",
        items: [
          { href: "/blog/accounting/how-ai-is-revolutionizing-tax-compliance-what-you-need-to-know", label: "How AI is Revolutionizing Tax Compliance" },
          { href: "/blog/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-what-miami-smbs-must-know-before-choosing-compliance-solutions", label: "Payroll Tax & Worker Misclassification: What Miami SMBs Must Know" },
          { href: "/blog/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-what-south-florida-smbs-need-to-know-and-fix-before-expanding", label: "Multi-State Sales Tax Nexus: What South Florida SMBs Need to Know" },
        ],
      },
    ],
    items: [],
  },
];

const TOOLS_MENU: readonly MenuDepartment[] = [
  {
    href: "/tools/marketing",
    label: "Marketing",
    categories: [
      {
        id: "tools-marketing-lead-capture-pipeline",
        label: "Lead Capture Pipeline",
        items: [
          { href: "/tools/marketing/6sense", label: "6sense" },
          { href: "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/apollo", label: "Apollo" },
          { href: "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/botpenguin", label: "BotPenguin" },
          { href: "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/dapta", label: "Dapta" },
          { href: "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/factors", label: "Factors" },
          { href: "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/leadfeeder", label: "Leadfeeder" },
          { href: "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/lobbystack", label: "LobbyStack" },
          { href: "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/lusha", label: "Lusha" },
          { href: "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/manychat", label: "Manychat" },
          { href: "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/myaifrontdesk", label: "My AI Front Desk (Cross-Platform Chatbot)" },
          { href: "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/myaifrontdesk", label: "My AI Front Desk (Intelligent Receptionist)" },
          { href: "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/nextiva", label: "Nextiva" },
          { href: "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/smith", label: "Smith.ai" },
          { href: "/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring/snitcher", label: "Snitcher" },
          { href: "/tools/marketing/lead-capture-pipeline/cross-platform-chatbot/tidio", label: "Tidio" },
          { href: "/tools/marketing/lead-capture-pipeline/intelligent-receptionist/voksha", label: "Voksha" },
        ],
      },
      {
        id: "tools-marketing-content-creation-workflow",
        label: "Content Creation Workflow",
        items: [
          { href: "/tools/marketing/active-campaign", label: "ActiveCampaign" },
          { href: "/tools/marketing/contentstudio", label: "ContentStudio" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite", label: "Hootsuite" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai", label: "HyperWrite" },
          { href: "/tools/marketing/jasper-ai", label: "Jasper AI" },
          { href: "/tools/marketing/mailchimp", label: "Mailchimp" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse", label: "MarketMuse" },
          { href: "/tools/marketing/pipedrive", label: "Pipedrive" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut", label: "Scalenut" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush", label: "Semrush" },
          { href: "/tools/marketing/zapier", label: "Zapier" },
        ],
      },
      {
        id: "tools-marketing-automated-ad-spend-optimization",
        label: "Automated Ad Spend Optimization",
        items: [
          { href: "/tools/marketing/adobe-mix-modeler", label: "Adobe Mix Modeler" },
          { href: "/tools/marketing/anomalo", label: "Anomalo" },
          { href: "/tools/marketing/great-expectations", label: "Great Expectations" },
          { href: "/tools/marketing/madgicx", label: "Madgicx" },
          { href: "/tools/marketing/monte-carlo", label: "Monte Carlo" },
          { href: "/tools/marketing/optimove", label: "Optimove" },
          { href: "/tools/marketing/pipedrive", label: "Pipedrive" },
          { href: "/tools/marketing/qualytics", label: "Qualytics" },
          { href: "/tools/marketing/zapier", label: "Zapier" },
        ],
      },
    ],
    items: [],
  },
  {
    href: "/tools/accounting",
    label: "Accounting",
    categories: [
      {
        id: "tools-accounting-accounts-payable",
        label: "Accounts Payable",
        items: [
          { href: "/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax", label: "ApprovalMax" },
          { href: "/tools/accounting/accounts-payable/automated-data-entry-processing/avidxchange", label: "AvidXchange (Data Entry)" },
          { href: "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/avidxchange", label: "AvidXchange (Payment Execution)" },
          { href: "/tools/accounting/accounts-payable/automated-approval-workflows/bill", label: "Bill (Approval Workflows)" },
          { href: "/tools/accounting/accounts-payable/automated-data-entry-processing/bill", label: "Bill (Data Entry)" },
          { href: "/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/bill", label: "Bill (Fraud Controls)" },
          { href: "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/bill", label: "Bill (Payment Execution)" },
          { href: "/tools/accounting/accounts-payable/automated-data-entry-processing/dext", label: "Dext" },
          { href: "/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius", label: "Medius" },
          { href: "/tools/accounting/accounts-payable/automated-approval-workflows/melio", label: "Melio (Approval Workflows)" },
          { href: "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/melio", label: "Melio (Payment Execution)" },
          { href: "/tools/accounting/accounts-payable/automated-approval-workflows/ramp", label: "Ramp (Approval Workflows)" },
          { href: "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/ramp", label: "Ramp (Payment Execution)" },
          { href: "/tools/accounting/accounts-payable/automated-approval-workflows/stampli", label: "Stampli" },
          { href: "/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/tipalti", label: "Tipalti (Fraud Controls)" },
          { href: "/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai/tipalti", label: "Tipalti (Payment Execution)" },
        ],
      },
      {
        id: "tools-accounting-cash-flow-forecasting",
        label: "Cash Flow Forecasting",
        items: [
          { href: "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/bill", label: "Bill (Accounts Receivable)" },
          { href: "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/cashflowfrog", label: "Cashflowfrog (Resource Planning)" },
          { href: "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog", label: "Cashflowfrog (Spreadsheet Data)" },
          { href: "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq", label: "Chaserhq" },
          { href: "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/clockwork", label: "Clockwork" },
          { href: "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/dryrun", label: "Dryrun" },
          { href: "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq", label: "Fathom" },
          { href: "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp", label: "Floatapp" },
          { href: "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced", label: "Invoiced" },
          { href: "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav", label: "Jirav" },
          { href: "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks", label: "QuickBooks Online Advanced" },
          { href: "/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/takethehelm", label: "Take the Helm (Resource Planning)" },
          { href: "/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/takethehelm", label: "Take the Helm (Spreadsheet Data)" },
          { href: "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/upflow", label: "Upflow" },
          { href: "/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay", label: "Versapay" },
        ],
      },
      {
        id: "tools-accounting-tax-compliance-regulations",
        label: "Tax Compliance & Regulations",
        items: [
          { href: "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/adp", label: "ADP" },
          { href: "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/deel", label: "Deel" },
          { href: "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto", label: "Gusto" },
          { href: "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/justworks", label: "Justworks" },
          { href: "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/quaderno", label: "Quaderno (Sales Tax Nexus)" },
          { href: "/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/quaderno", label: "Quaderno (Tax Laws)" },
          { href: "/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling", label: "Rippling" },
          { href: "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud", label: "TaxCloud (Sales Tax Nexus)" },
          { href: "/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxcloud", label: "TaxCloud (Tax Laws)" },
          { href: "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar", label: "TaxJar (Sales Tax Nexus)" },
          { href: "/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar", label: "TaxJar (Tax Laws)" },
          { href: "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/thetaxvalet", label: "TaxValet (Sales Tax Nexus)" },
          { href: "/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/thetaxvalet", label: "TaxValet (Tax Laws)" },
          { href: "/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/zamp", label: "Zamp (Sales Tax Nexus)" },
          { href: "/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/zamp", label: "Zamp (Tax Laws)" },
        ],
      },
    ],
    items: [],
  },
];

/** How a category was chosen: a mouse hover or click opens it, a tap or a key toggles it. */
type CategoryInput = "pointer" | "toggle";

function MenuCategoryButton({
  category,
  open,
  onSelect,
}: Readonly<{
  category: MenuCategory;
  open: boolean;
  onSelect: (id: string, input: CategoryInput) => void;
}>): React.JSX.Element {
  // A tap fires pointerdown before click, so the click knows whether a finger or a mouse sent it.
  const pointerType = useRef("");

  return (
    <button
      type="button"
      id={gtmClickId(["nav", "category", category.id])}
      aria-expanded={open}
      className={clsx(
        "flex w-full cursor-pointer items-center justify-between gap-x-2 border-0 bg-transparent p-0 py-0.5 text-left text-sm font-semibold leading-snug no-underline sm:text-base",
        open ? "text-[#8C2703]" : "text-black hover:text-[#8C2703]",
      )}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") onSelect(category.id, "pointer");
      }}
      onPointerDown={(event) => {
        pointerType.current = event.pointerType;
      }}
      onClick={() => {
        const input: CategoryInput = pointerType.current === "mouse" ? "pointer" : "toggle";
        pointerType.current = "";
        onSelect(category.id, input);
      }}
    >
      <span>{category.label}</span>
      <svg
        width="12"
        height="12"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
        className={clsx("shrink-0 transition-transform", open && "rotate-90")}
      >
        <path
          fillRule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </button>
  );
}

function MenuDepartmentColumn({
  department,
  openCategory,
  onSelect,
  onNavigate,
}: Readonly<{
  department: MenuDepartment;
  openCategory: string | null;
  onSelect: (id: string, input: CategoryInput) => void;
  onNavigate: () => void;
}>): React.JSX.Element {
  const open = department.categories.find((category) => category.id === openCategory);

  return (
    <div className={COLUMN_CLASS}>
      <MenuHeading href={department.href} label={department.label} onNavigate={onNavigate} />
      <div className="lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-x-6">
        <ul className={LIST_CLASS}>
          {department.categories.map((category) => (
            <li key={category.id}>
              <MenuCategoryButton
                category={category}
                open={category.id === openCategory}
                onSelect={onSelect}
              />
              {category.id === openCategory && (
                <ul className={clsx(LIST_CLASS, "mb-2 pl-3 lg:hidden")}>
                  {category.items.map((item) => (
                    <MenuLink key={item.href} href={item.href} label={item.label} onNavigate={onNavigate} />
                  ))}
                </ul>
              )}
            </li>
          ))}
          {department.items.map((item) => (
            <MenuLink key={item.href} href={item.href} label={item.label} onNavigate={onNavigate} />
          ))}
        </ul>
        {open && (
          <ul className={clsx(LIST_CLASS, "hidden lg:block")}>
            {open.items.map((item) => (
              <MenuLink key={item.href} href={item.href} label={item.label} onNavigate={onNavigate} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Navbar(): React.JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<MenuSection>("use-cases");
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  function closeSidebar(): void {
    setSidebarOpen(false);
    setOpenCategory(null);
  }

  function showSection(section: MenuSection): void {
    setActiveSection(section);
    setOpenCategory(null);
  }

  function selectCategory(id: string, input: CategoryInput): void {
    setOpenCategory((current) => (input === "toggle" && current === id ? null : id));
  }

  function sectionButtonClass(section: MenuSection): string {
    return `cursor-pointer border-0 bg-transparent p-0 text-base font-semibold no-underline sm:text-lg ${
      activeSection === section ? "text-[#8C2703]" : "text-black hover:text-[#8C2703]"
    }`;
  }

  return (
    <header className="sticky top-0 z-[60] bg-white shadow-sm">
      <div className="container">
        <nav className="w-full" aria-label="Site">
          <div className="flex h-16 w-full items-center">
            <Link href="/" id={gtmLinkIdFromHref("/", "logo")} className="flex items-center">
              <Image
                src="/images/GeekAtYourSpot.svg"
                alt="Geek @ Your Spot logo"
                width={116}
                height={48}
                priority
              />
            </Link>
            <button
              id={gtmClickId(["nav", "menu-toggle"])}
              type="button"
              className="ml-auto cursor-pointer rounded border-0 bg-transparent p-2"
              aria-label={sidebarOpen ? "Close menu" : "Open menu"}
              aria-expanded={sidebarOpen}
              aria-controls="site-menu"
              onClick={() => setSidebarOpen((open) => !open)}
            >
              <svg
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                {sidebarOpen ? (
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      <Sheet
        open={sidebarOpen}
        onOpenChange={(open) => {
          setSidebarOpen(open);
          if (!open) setOpenCategory(null);
        }}
      >
        <SheetContent
          id="site-menu"
          side="top"
          showCloseButton={false}
          className="!inset-x-0 !top-16 !bottom-auto !h-auto !w-full !max-w-none gap-0 overflow-hidden border-x-0 border-b border-t-0 bg-white p-0 text-foreground shadow-md"
        >
          <SheetTitle className="sr-only">Site menu</SheetTitle>

          <nav className="container max-h-[calc(100dvh-4rem)] overflow-x-hidden overflow-y-auto py-4 sm:py-5">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-black/10 pb-3 sm:gap-x-8 sm:pb-4">
              <Link
                href="/"
                id={gtmLinkIdFromHref("/", "nav")}
                className="text-base font-semibold text-black no-underline hover:text-[#8C2703] sm:text-lg"
                onClick={closeSidebar}
              >
                Home
              </Link>
              <button
                type="button"
                id={gtmClickId(["nav", "use-cases"])}
                className={sectionButtonClass("use-cases")}
                onClick={() => showSection("use-cases")}
              >
                Use Cases
              </button>
              <button
                type="button"
                id={gtmClickId(["nav", "blog"])}
                className={sectionButtonClass("blog")}
                onClick={() => showSection("blog")}
              >
                Blog
              </button>
              <button
                type="button"
                id={gtmClickId(["nav", "tools"])}
                className={sectionButtonClass("tools")}
                onClick={() => showSection("tools")}
              >
                Tools
              </button>
              <button
                type="button"
                id={gtmClickId(["nav", "glossary"])}
                className={sectionButtonClass("glossary")}
                onClick={() => showSection("glossary")}
              >
                Glossary
              </button>
            </div>

            {activeSection === "use-cases" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                {USE_CASES_MENU.map((department) => (
                  <MenuDepartmentColumn
                    key={department.label}
                    department={department}
                    openCategory={openCategory}
                    onSelect={selectCategory}
                    onNavigate={closeSidebar}
                  />
                ))}
              </div>
            )}

            {activeSection === "blog" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                {BLOG_MENU.map((department) => (
                  <MenuDepartmentColumn
                    key={department.label}
                    department={department}
                    openCategory={openCategory}
                    onSelect={selectCategory}
                    onNavigate={closeSidebar}
                  />
                ))}
              </div>
            )}

            {activeSection === "tools" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                {TOOLS_MENU.map((department) => (
                  <MenuDepartmentColumn
                    key={department.label}
                    department={department}
                    openCategory={openCategory}
                    onSelect={selectCategory}
                    onNavigate={closeSidebar}
                  />
                ))}
              </div>
            )}

            {activeSection === "glossary" && (
              <div className="mt-4 grid grid-cols-1 md:mt-5 md:grid-cols-2">
                <div className={COLUMN_CLASS}>
                  <MenuHeading href="/glossary" label="Browse by letter" onNavigate={closeSidebar} />
                  {/*
                    The index pages by `?letter=`, and A is its default, so A
                    links to the bare /glossary. X and Y have no terms in
                    src/data/glossary/terms.ts -- the index renders those as
                    disabled, so they are omitted here rather than linking to a
                    page that silently falls back to A.
                  */}
                  <ul className={`${LIST_CLASS} columns-4 gap-x-4 sm:columns-6`}>
                    <MenuLink href="/glossary" label="A" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=B" label="B" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=C" label="C" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=D" label="D" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=E" label="E" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=F" label="F" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=G" label="G" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=H" label="H" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=I" label="I" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=J" label="J" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=K" label="K" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=L" label="L" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=M" label="M" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=N" label="N" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=O" label="O" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=P" label="P" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=Q" label="Q" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=R" label="R" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=S" label="S" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=T" label="T" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=U" label="U" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=V" label="V" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=W" label="W" onNavigate={closeSidebar} />
                    <MenuLink href="/glossary?letter=Z" label="Z" onNavigate={closeSidebar} />
                  </ul>
                </div>
              </div>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
