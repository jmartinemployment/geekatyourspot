/**
 * Use Cases, Blog and Tools group their pages by category, the same categories the home page
 * cards use (Lead Capture Pipeline, Content Creation Workflow, Automated Ad Spend Optimization;
 * Accounts Payable, Cash Flow Forecasting, Tax Compliance & Regulations). The navbar renders all
 * three.
 *
 * Every href below is hand-maintained and points at a route that exists in src/app. When you add
 * a page, add its link here by hand.
 */
export type MenuItem = Readonly<{ href: string; label: string }>;

export type MenuCategory = Readonly<{ id: string; label: string; items: readonly MenuItem[] }>;

export type MenuDepartment = Readonly<{
  href: string;
  label: string;
  categories: readonly MenuCategory[];
  /** Pages that sit in no category. */
  items: readonly MenuItem[];
}>;

export const USE_CASES_MENU: readonly MenuDepartment[] = [
  {
    href: "/use-cases/marketing",
    label: "Marketing",
    categories: [
      {
        id: "use-cases-marketing-lead-capture-pipeline",
        label: "Lead Capture Pipeline",
        items: [
          { href: "/use-cases/marketing/ai-sales-force-automation-software", label: "Intelligent Lead Capture Pipeline" },
          { href: "/use-cases/marketing/lead-capture-pipeline/ai-receptionist", label: "Intelligent Receptionist" },
          { href: "/use-cases/marketing/lead-capture-pipeline/ai-chatbot", label: "Cross-Platform Chatbot" },
          { href: "/use-cases/marketing/lead-capture-pipeline/lead-enrichment-predictive-scoring", label: "Lead Enrichment & Predictive Scoring" },
        ],
      },
      {
        id: "use-cases-marketing-content-creation-workflow",
        label: "Content Creation Workflow",
        items: [
          { href: "/use-cases/marketing/ai-content-marketing-platforms", label: "Content Creation Workflow" },
          { href: "/use-cases/marketing/content-creation-workflow/ai-content-planning", label: "Intelligent Content Planning" },
          { href: "/use-cases/marketing/content-creation-workflow/ai-seo-content-generator", label: "Intelligent Content Generation" },
          { href: "/use-cases/marketing/ai-seo-tools", label: "SEO Blog and Article Generation" },
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
    items: [],
  },
  {
    href: "/use-cases/accounting",
    label: "Accounting",
    categories: [
      {
        id: "use-cases-accounting-accounts-payable",
        label: "Accounts Payable",
        items: [
          { href: "/use-cases/accounting/accounts-payable/ai-ap-automation-software", label: "Accounts Payable" },
          { href: "/use-cases/accounting/accounts-payable/ai-document-processing", label: "Intelligent Data Entry & Processing" },
          { href: "/use-cases/accounting/accounts-payable/ai-approval-workflow", label: "Intelligent Approval Workflows" },
          { href: "/use-cases/accounting/accounts-payable/ai-automatic-bill-pay", label: "Intelligent Payment Execution" },
          { href: "/use-cases/accounting/accounts-payable/ai-fraud-duplicate-payment-controls", label: "Intelligent Fraud & Duplicate Payment Controls" },
        ],
      },
      {
        id: "use-cases-accounting-cash-flow-forecasting",
        label: "Cash Flow Forecasting",
        items: [
          { href: "/use-cases/accounting/cash-flow-forecasting/ai-cash-flow-forecasting", label: "Intelligent Cash Flow Forecasting" },
          { href: "/use-cases/accounting/cash-flow-forecasting/ai-accounts-receivable-software", label: "Intelligent Accounts Receivable" },
          { href: "/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data", label: "Intelligent Spreadsheet Data" },
          { href: "/use-cases/accounting/cash-flow-forecasting/ai-financial-planning-software", label: "Intelligent Resource Planning" },
        ],
      },
      {
        id: "use-cases-accounting-tax-compliance-regulations",
        label: "Tax Compliance & Regulations",
        items: [
          { href: "/use-cases/accounting/tax-compliance-regulations", label: "Tax Compliance & Regulations" },
          { href: "/use-cases/accounting/tax-compliance-regulations/ai-tax-law", label: "Automating Complex & Changing Laws" },
          { href: "/use-cases/accounting/tax-compliance-regulations/ai-payroll-software", label: "Payroll Tax & Worker Misclassification" },
          { href: "/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax", label: "Multi-State Sales Tax Nexus" },
        ],
      },
    ],
    items: [],
  },
];

export const BLOG_MENU: readonly MenuDepartment[] = [
  {
    href: "/blog/marketing/how-ai-marketing-systems-transform-small-business-growth",
    label: "Marketing",
    categories: [
      {
        id: "blog-marketing-lead-capture-pipeline",
        label: "Lead Capture Pipeline",
        items: [
          { href: "/blog/marketing/why-your-b2b-sales-need-an-intelligent-lead-capture-pipeline", label: "Lead Capture Pipelines for B2B Sales" },
          { href: "/blog/marketing/lead-capture-pipeline/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after-hours", label: "Intelligent After-Hours Receptionist" },
          { href: "/blog/marketing/lead-capture-pipeline/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipeline", label: "Cross-Platform Chatbot Lead Capture" },
          { href: "/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-can-turn-more-leads-into-sales", label: "Lead Enrichment to Close More Sales" },
          { href: "/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses", label: "AI Lead Scoring for Small Businesses" },
          { href: "/blog/marketing/smart-chatbots-for-marketing-transforming-customer-engagement", label: "Smart Chatbots That Engage Customers" },
        ],
      },
      {
        id: "blog-marketing-content-creation-workflow",
        label: "Content Creation Workflow",
        items: [
          { href: "/blog/marketing/content-creation-workflow/intelligent-content-planning-how-south-florida-can-save-hours-and-drive-more-sales", label: "Content Planning That Saves Hours" },
          { href: "/blog/marketing/content-creation-workflow/intelligent-content-generation-for-miami-how-to-save-time-and-scale-without-extra-hires", label: "Content Generation Without New Hires" },
          { href: "/blog/marketing/how-to-streamline-your-content-workflow-with-ai", label: "Streamline Content Workflows with AI" },
          { href: "/blog/marketing/content-creation-workflow/ai-content-repurposing", label: "AI Content Repurposing" },
          { href: "/blog/marketing/unlocking-the-potential-of-ai-in-seo-content-creation", label: "AI in SEO Content Creation" },
          { href: "/blog/marketing/how-personalized-email-campaigns-drive-real-results", label: "Personalized Email Campaign Results" },
        ],
      },
      {
        id: "blog-marketing-automated-ad-spend-optimization",
        label: "Automated Ad Spend Optimization",
        items: [
          { href: "/blog/marketing/how-ai-transforms-ad-spend-4-key-strategies", label: "How AI Transforms Ad Spend in 4 Ways" },
        ],
      },
    ],
    items: [],
  },
  {
    href: "/blog",
    label: "Accounting",
    categories: [
      {
        id: "blog-accounting-accounts-payable",
        label: "Accounts Payable",
        items: [
          { href: "/blog/accounting/how-ai-transforms-accounts-payable-automated-data-entry-processing", label: "AI Data Entry for Accounts Payable" },
          { href: "/blog/accounting/accounts-payable/how-automated-approval-workflows-transform-accounts-payable", label: "Accounts Payable Approval Automation" },
          { href: "/blog/accounting/accounts-payable/how-automated-payment-execution-transforms-your-bottom-line", label: "Automated Payment Execution Benefits" },
          { href: "/blog/accounting/accounts-payable/how-ai-streamlines-fraud-detection-in-accounts-payable", label: "AI Accounts Payable Fraud Detection" },
        ],
      },
      {
        id: "blog-accounting-cash-flow-forecasting",
        label: "Cash Flow Forecasting",
        items: [
          { href: "/blog/accounting/unlocking-the-secrets-to-effective-cash-flow-forecasting-with-ai", label: "Cash Flow Forecasting with AI" },
          { href: "/blog/accounting/cash-flow-forecasting/how-automated-accounts-receivable-can-transform-your-cash-flow", label: "Automated Receivables and Cash Flow" },
          { href: "/blog/accounting/cash-flow-forecasting/how-automated-spreadsheet-data-transforms-cash-flow-forecasting", label: "Automated Spreadsheets for Cash Flow" },
          { href: "/blog/accounting/cash-flow-forecasting/intelligent-resource-planning-for-small-businesses-how-to-fix-cash-flow-headaches-in-south-florida", label: "AI Resource Planning for Cash Flow" },
        ],
      },
      {
        id: "blog-accounting-tax-compliance-regulations",
        label: "Tax Compliance & Regulations",
        items: [
          { href: "/blog/accounting/how-ai-is-revolutionizing-tax-compliance-what-you-need-to-know", label: "AI Tax Compliance, What to Know" },
          { href: "/blog/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-what-miami-must-know-before-choosing-compliance-solutions", label: "Misclassified Workers & Payroll Tax" },
          { href: "/blog/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-what-south-florida-need-to-know-and-fix-before-expanding", label: "Sales Tax Nexus Before You Expand" },
        ],
      },
    ],
    items: [],
  },
];

export const TOOLS_MENU: readonly MenuDepartment[] = [
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
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/anyword", label: "Anyword" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/castmagic", label: "Castmagic" },
          { href: "/tools/marketing/contentstudio", label: "ContentStudio" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/copy", label: "Copy.ai" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/frase", label: "Frase" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/hootsuite", label: "Hootsuite (Intelligent Content Generation)" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/hootsuite", label: "Hootsuite (Intelligent Content Planning)" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/hyperwriteai", label: "HyperWrite" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/imagine", label: "ImagineArt" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/jasper", label: "Jasper" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/koala", label: "Koala" },
          { href: "/tools/marketing/mailchimp", label: "Mailchimp" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/marketmuse", label: "MarketMuse" },
          { href: "/tools/marketing/pipedrive", label: "Pipedrive" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/rytr", label: "Rytr" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/scalenut", label: "Scalenut (Intelligent Content Generation)" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/scalenut", label: "Scalenut (Intelligent Content Planning)" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-planning/semrush", label: "Semrush" },
          { href: "/tools/marketing/content-creation-workflow/intelligent-content-generation/writesonic", label: "Writesonic" },
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

/**
 * The name each tool hub card shows, keyed by the tool page's href. A tool with more than one page
 * carries its use: the navbar writes "Bill (Data Entry)" and the card writes "Bill for Data Entry".
 */
const TOOL_CARD_LABELS: ReadonlyMap<string, string> = new Map(
  TOOLS_MENU.flatMap((department) => [
    ...department.items,
    ...department.categories.flatMap((category) => category.items),
  ]).map((item) => [item.href, item.label.replace(/^(.+) \((.+)\)$/, "$1 for $2")]),
);

export function toolCardLabel(href: string): string | undefined {
  return TOOL_CARD_LABELS.get(href);
}
