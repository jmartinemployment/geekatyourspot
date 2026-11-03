/**
 * Use Cases, Blog and Tools group their pages by the same categories the home page cards use
 * (Accounts Payable, Cash Flow Forecasting, Tax Compliance & Regulations, Marketing Automation
 * Platforms (MAP), Ad Spend Optimization, Front Desk, Data Infrastructure). The navbar renders all
 * three, and every department and item is a link.
 *
 * Every href below is hand-maintained and points at a route that exists in src/app. A category
 * with no page of its own carries its department page's href, and the navbar shows it as a
 * heading, not a link. When you add a page, add its link here by hand; npm run check:nav fails
 * the build on a link with no page.
 */
export interface MenuLink {
  label: string;
  href: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  /** The category's page, or the department page when the category has no page of its own. */
  href: string;
  items: MenuLink[];
}

export interface MenuDepartment {
  id: string;
  name: string;
  /** The department page, so its heading is a link. */
  href: string;
  categories: MenuCategory[];
}

export interface SiteMenuConfiguration {
  departments: MenuDepartment[];
}

export const USE_CASES_MENU: SiteMenuConfiguration = {
  departments: [
    {
      id: "marketing",
      name: "Marketing",
      href: "/use-cases/marketing",
      categories: [
        {
          id: "use-cases-marketing-marketing-automation-platforms",
          label: "Marketing Automation Platforms (MAP)",
          href: "/use-cases/marketing/marketing-automation-platforms",
          items: [
            { href: "/use-cases/marketing/marketing-automation-platforms/ai-content-planning", label: "AI Content Planning" },
            { href: "/use-cases/marketing/marketing-automation-platforms/ai-content-generation", label: "AI Content Generation" },
            { href: "/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns", label: "AI Personalized Email Campaigns" },
            { href: "/use-cases/marketing/ai-seo-tools", label: "SEO Blog and Article Generation" },
            { href: "/use-cases/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring", label: "AI Lead Enrichment & Predictive Scoring" },
          ],
        },
        {
          id: "use-cases-marketing-ad-spend-optimization",
          label: "Ad Spend Optimization",
          href: "/use-cases/marketing/ad-spend-optimization",
          items: [
            { href: "/use-cases/marketing/ad-spend-optimization/ai-precision-lead-acquisition", label: "AI Precision Lead Acquisition" },
          ],
        },
      ],
    },
    {
      id: "accounting",
      name: "Accounting",
      href: "/use-cases/accounting",
      categories: [
        {
          id: "use-cases-accounting-accounts-payable",
          label: "Accounts Payable",
          href: "/use-cases/accounting/accounts-payable",
          items: [
            { href: "/use-cases/accounting/accounts-payable/ai-data-entry-processing", label: "AI Data Entry & Processing" },
            { href: "/use-cases/accounting/accounts-payable/ai-invoice-approval-workflows", label: "AI Invoice Approval Workflows" },
            { href: "/use-cases/accounting/accounts-payable/ai-payment-execution", label: "AI Payment Execution" },
            { href: "/use-cases/accounting/accounts-payable/ai-fraud-duplicate-payment-controls", label: "AI Fraud & Duplicate Payment Controls" },
          ],
        },
        {
          id: "use-cases-accounting-cash-flow-forecasting",
          label: "Cash Flow Forecasting",
          href: "/use-cases/accounting/cash-flow-forecasting",
          items: [
            { href: "/use-cases/accounting/cash-flow-forecasting/ai-accounts-receivable", label: "AI Accounts Receivable" },
            { href: "/use-cases/accounting/cash-flow-forecasting/ai-spreadsheet-data", label: "AI Spreadsheet Data" },
            { href: "/use-cases/accounting/cash-flow-forecasting/ai-resource-planning", label: "AI Resource Planning" },
          ],
        },
        {
          id: "use-cases-accounting-tax-compliance-regulations",
          label: "Tax Compliance & Regulations",
          href: "/use-cases/accounting/tax-compliance-regulations",
          items: [
            { href: "/use-cases/accounting/tax-compliance-regulations/ai-tax-law", label: "AI Tax Law" },
            { href: "/use-cases/accounting/tax-compliance-regulations/ai-payroll-tax", label: "AI Payroll Tax" },
            { href: "/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax", label: "AI Multi-State Sales Tax" },
          ],
        },
      ],
    },
    {
      id: "business-operations",
      name: "Business Operations",
      href: "/use-cases/business-operations",
      categories: [
        {
          id: "use-cases-business-operations-front-desk",
          label: "Front Desk",
          href: "/use-cases/business-operations/front-desk",
          items: [
            { href: "/use-cases/business-operations/ai-receptionist", label: "AI Receptionist" },
            { href: "/use-cases/business-operations/ai-chatbot", label: "AI Chatbot" },
          ],
        },
        {
          id: "use-cases-business-operations-data-infrastructure",
          label: "Data Infrastructure",
          href: "/use-cases/business-operations",
          items: [
            { href: "/use-cases/business-operations/ai-data-quality-assessments", label: "AI Data Quality Assessments" },
          ],
        },
      ],
    },
  ],
};

export const BLOG_MENU: SiteMenuConfiguration = {
  departments: [
    {
      id: "marketing",
      name: "Marketing",
      href: "/blog/marketing",
      categories: [
        {
          id: "blog-marketing-marketing-automation-platforms",
          label: "Marketing Automation Platforms (MAP)",
          href: "/blog/marketing",
          items: [
            { href: "/blog/marketing/marketing-automation-platforms/intelligent-content-planning-how-south-florida-can-save-hours-and-drive-more-sales", label: "Content Planning That Saves Hours" },
            { href: "/blog/marketing/marketing-automation-platforms/intelligent-content-generation-for-miami-how-to-save-time-and-scale-without-extra-hires", label: "Content Generation Without New Hires" },
            { href: "/blog/marketing/how-to-streamline-your-content-workflow-with-ai", label: "Streamline Content Workflows with AI" },
            { href: "/blog/marketing/marketing-automation-platforms/ai-content-repurposing", label: "AI Content Repurposing" },
            { href: "/blog/marketing/unlocking-the-potential-of-ai-in-seo-content-creation", label: "AI in SEO Content Creation" },
            { href: "/blog/marketing/marketing-automation-platforms/what-miami-businesses-miss-without-local-ai-automation", label: "What Miami Businesses Miss Without AI" },
            { href: "/blog/marketing/why-your-b2b-sales-need-an-intelligent-lead-capture-pipeline", label: "Lead Capture Pipelines for B2B Sales" },
            { href: "/blog/marketing/marketing-automation-platforms/lead-enrichment-and-predictive-scoring-how-south-florida-can-turn-more-leads-into-sales", label: "Lead Enrichment to Close More Sales" },
            { href: "/blog/marketing/marketing-automation-platforms/ai-lead-scoring", label: "AI Lead Scoring" },
            { href: "/blog/marketing/smart-chatbots-for-marketing-transforming-customer-engagement", label: "Smart Chatbots That Engage Customers" },
          ],
        },
        {
          id: "blog-marketing-ad-spend-optimization",
          label: "Ad Spend Optimization",
          href: "/blog/marketing",
          items: [
            { href: "/blog/marketing/how-ai-transforms-ad-spend-4-key-strategies", label: "How AI Transforms Ad Spend in 4 Ways" },
            { href: "/blog/marketing/ad-spend-optimization/how-miami-businesses-can-stop-wasting-ad-dollars-now", label: "Stop Wasting Ad Dollars in Miami" },
            { href: "/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend", label: "Stop Wasting Ad Spend in South Florida" },
            { href: "/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns", label: "Stop Wasting Ad Budget and Start Seeing Real Returns" },
          ],
        },
      ],
    },
    {
      id: "accounting",
      name: "Accounting",
      href: "/blog/accounting",
      categories: [
        {
          id: "blog-accounting-accounts-payable",
          label: "Accounts Payable",
          href: "/blog/accounting",
          items: [
            { href: "/blog/accounting/how-ai-transforms-accounts-payable-automated-data-entry-processing", label: "AI Data Entry for Accounts Payable" },
            { href: "/blog/accounting/accounts-payable/how-automated-approval-workflows-transform-accounts-payable", label: "Accounts Payable Approval Automation" },
            { href: "/blog/accounting/accounts-payable/how-automated-payment-execution-transforms-your-bottom-line", label: "AI Payment Execution Benefits" },
            { href: "/blog/accounting/accounts-payable/how-ai-streamlines-fraud-detection-in-accounts-payable", label: "AI Accounts Payable Fraud Detection" },
          ],
        },
        {
          id: "blog-accounting-cash-flow-forecasting",
          label: "Cash Flow Forecasting",
          href: "/blog/accounting",
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
          href: "/blog/accounting",
          items: [
            { href: "/blog/accounting/how-ai-is-revolutionizing-tax-compliance-what-you-need-to-know", label: "AI Tax Compliance, What to Know" },
            { href: "/blog/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-what-miami-must-know-before-choosing-compliance-solutions", label: "Misclassified Workers & Payroll Tax" },
            { href: "/blog/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-what-south-florida-need-to-know-and-fix-before-expanding", label: "Sales Tax Nexus Before You Expand" },
          ],
        },
      ],
    },
    {
      id: "business-operations",
      name: "Business Operations",
      href: "/blog/business-operations",
      categories: [
        {
          id: "blog-business-operations-front-desk",
          label: "Front Desk",
          href: "/blog/business-operations",
          items: [
            { href: "/blog/business-operations/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after-hours", label: "Intelligent After-Hours Receptionist" },
            { href: "/blog/business-operations/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipeline", label: "AI Chatbot Lead Capture" },
          ],
        },
        {
          id: "blog-business-operations-data-infrastructure",
          label: "Data Infrastructure",
          href: "/blog/business-operations",
          items: [],
        },
      ],
    },
  ],
};

export const TOOLS_MENU: SiteMenuConfiguration = {
  departments: [
    {
      id: "marketing",
      name: "Marketing",
      href: "/tools/marketing",
      categories: [
        {
          id: "tools-marketing-marketing-automation-platforms",
          label: "Marketing Automation Platforms (MAP)",
          href: "/tools/marketing",
          items: [
            { href: "/tools/marketing/6sense", label: "6sense" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-personalized-email-campaigns/activecampaign", label: "ActiveCampaign" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/adcreative", label: "AdCreative" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/anyword", label: "Anyword (AI Content Generation)" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/apollo", label: "Apollo" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-personalized-email-campaigns/brevo", label: "Brevo" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/castmagic", label: "Castmagic" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/contentstudio", label: "ContentStudio" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/copy", label: "Copy.ai" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/factors", label: "Factors" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/frase", label: "Frase" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-personalized-email-campaigns/getresponse", label: "GetResponse" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/hootsuite", label: "Hootsuite (AI Content Generation)" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-planning/hootsuite", label: "Hootsuite (AI Content Planning)" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-planning/hyperwriteai", label: "HyperWrite" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/imagine", label: "ImagineArt" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/jasper", label: "Jasper" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/koala", label: "Koala" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/leadfeeder", label: "Leadfeeder" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/lusha", label: "Lusha" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-personalized-email-campaigns/mailchimp", label: "Mailchimp" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-personalized-email-campaigns/mailerlite", label: "MailerLite" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-planning/marketmuse", label: "MarketMuse" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/marpipe", label: "Marpipe" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-personalized-email-campaigns/moosend", label: "Moosend" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/rytr", label: "Rytr" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/scalenut", label: "Scalenut (AI Content Generation)" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-planning/scalenut", label: "Scalenut (AI Content Planning)" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-planning/semrush", label: "Semrush" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring/snitcher", label: "Snitcher" },
            { href: "/tools/marketing/marketing-automation-platforms/ai-content-generation/writesonic", label: "Writesonic" },
          ],
        },
        {
          id: "tools-marketing-ad-spend-optimization",
          label: "Ad Spend Optimization",
          href: "/tools/marketing",
          items: [
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/adobe-mix-modeler", label: "Adobe Mix Modeler" },
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/adzooma", label: "Adzooma" },
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/bir", label: "Bir" },
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/cometly", label: "Cometly" },
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/localiq", label: "LocaliQ" },
            { href: "/tools/marketing/optimove", label: "Optimove" },
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/optmyzr", label: "Optmyzr" },
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/google-performance-max", label: "Performance Max" },
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/plai", label: "Plai" },
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/triplewhale", label: "Triplewhale" },
            { href: "/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition/wask", label: "Wask" },
          ],
        },
      ],
    },
    {
      id: "accounting",
      name: "Accounting",
      href: "/tools/accounting",
      categories: [
        {
          id: "tools-accounting-accounts-payable",
          label: "Accounts Payable",
          href: "/tools/accounting",
          items: [
            { href: "/tools/accounting/accounts-payable/ai-invoice-approval-workflows/approvalmax", label: "ApprovalMax" },
            { href: "/tools/accounting/accounts-payable/ai-data-entry-processing/avidxchange", label: "AvidXchange (Data Entry)" },
            { href: "/tools/accounting/accounts-payable/ai-payment-execution/avidxchange", label: "AvidXchange (Payment Execution)" },
            { href: "/tools/accounting/accounts-payable/ai-invoice-approval-workflows/bill", label: "Bill (Approval Workflows)" },
            { href: "/tools/accounting/accounts-payable/ai-data-entry-processing/bill", label: "Bill (Data Entry)" },
            { href: "/tools/accounting/accounts-payable/ai-fraud-duplicate-payment-controls/bill", label: "Bill (Fraud Controls)" },
            { href: "/tools/accounting/accounts-payable/ai-payment-execution/bill", label: "Bill (Payment Execution)" },
            { href: "/tools/accounting/accounts-payable/ai-data-entry-processing/dext", label: "Dext" },
            { href: "/tools/accounting/accounts-payable/ai-fraud-duplicate-payment-controls/medius", label: "Medius" },
            { href: "/tools/accounting/accounts-payable/ai-invoice-approval-workflows/melio", label: "Melio (Approval Workflows)" },
            { href: "/tools/accounting/accounts-payable/ai-payment-execution/melio", label: "Melio (Payment Execution)" },
            { href: "/tools/accounting/accounts-payable/ai-invoice-approval-workflows/ramp", label: "Ramp (Approval Workflows)" },
            { href: "/tools/accounting/accounts-payable/ai-payment-execution/ramp", label: "Ramp (Payment Execution)" },
            { href: "/tools/accounting/accounts-payable/ai-invoice-approval-workflows/stampli", label: "Stampli" },
            { href: "/tools/accounting/accounts-payable/ai-fraud-duplicate-payment-controls/tipalti", label: "Tipalti (Fraud Controls)" },
            { href: "/tools/accounting/accounts-payable/ai-payment-execution/tipalti", label: "Tipalti (Payment Execution)" },
          ],
        },
        {
          id: "tools-accounting-cash-flow-forecasting",
          label: "Cash Flow Forecasting",
          href: "/tools/accounting",
          items: [
            { href: "/tools/accounting/cash-flow-forecasting/ai-accounts-receivable/bill", label: "Bill (Accounts Receivable)" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-resource-planning/cashflowfrog", label: "Cashflowfrog (Resource Planning)" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-spreadsheet-data/cashflowfrog", label: "Cashflowfrog (Spreadsheet Data)" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-accounts-receivable/chaserhq", label: "Chaserhq" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-spreadsheet-data/clockwork", label: "Clockwork" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-spreadsheet-data/dryrun", label: "Dryrun" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-resource-planning/fathomhq", label: "Fathom" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-spreadsheet-data/floatapp", label: "Floatapp" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-accounts-receivable/invoiced", label: "Invoiced" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-resource-planning/jirav", label: "Jirav" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-resource-planning/quickbooks", label: "QuickBooks Online Advanced" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-resource-planning/takethehelm", label: "Take the Helm (Resource Planning)" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-spreadsheet-data/takethehelm", label: "Take the Helm (Spreadsheet Data)" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-accounts-receivable/upflow", label: "Upflow" },
            { href: "/tools/accounting/cash-flow-forecasting/ai-accounts-receivable/versapay", label: "Versapay" },
          ],
        },
        {
          id: "tools-accounting-tax-compliance-regulations",
          label: "Tax Compliance & Regulations",
          href: "/tools/accounting",
          items: [
            { href: "/tools/accounting/tax-compliance-regulations/ai-payroll-tax/adp", label: "ADP" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-payroll-tax/deel", label: "Deel" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-payroll-tax/gusto", label: "Gusto" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-payroll-tax/justworks", label: "Justworks" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/quaderno", label: "Quaderno (Sales Tax Nexus)" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-tax-law/quaderno", label: "Quaderno (Tax Laws)" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-payroll-tax/rippling", label: "Rippling" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/taxcloud", label: "TaxCloud (Sales Tax Nexus)" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-tax-law/taxcloud", label: "TaxCloud (Tax Laws)" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/taxjar", label: "TaxJar (Sales Tax Nexus)" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-tax-law/taxjar", label: "TaxJar (Tax Laws)" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/thetaxvalet", label: "TaxValet (Sales Tax Nexus)" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-tax-law/thetaxvalet", label: "TaxValet (Tax Laws)" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax/zamp", label: "Zamp (Sales Tax Nexus)" },
            { href: "/tools/accounting/tax-compliance-regulations/ai-tax-law/zamp", label: "Zamp (Tax Laws)" },
          ],
        },
      ],
    },
    {
      id: "business-operations",
      name: "Business Operations",
      href: "/tools/business-operations",
      categories: [
        {
          id: "tools-business-operations-front-desk",
          label: "Front Desk",
          href: "/tools/business-operations",
          items: [
            { href: "/tools/business-operations/ai-chatbot/botpenguin", label: "BotPenguin" },
            { href: "/tools/business-operations/ai-chatbot/dapta", label: "Dapta (AI Chatbot)" },
            { href: "/tools/business-operations/ai-receptionist/dapta", label: "Dapta (AI Receptionist)" },
            { href: "/tools/business-operations/ai-receptionist/lobbystack", label: "LobbyStack" },
            { href: "/tools/business-operations/ai-chatbot/manychat", label: "Manychat" },
            { href: "/tools/business-operations/ai-chatbot/myaifrontdesk", label: "My AI Front Desk (AI Chatbot)" },
            { href: "/tools/business-operations/ai-receptionist/myaifrontdesk", label: "My AI Front Desk (AI Receptionist)" },
            { href: "/tools/business-operations/ai-receptionist/nextiva", label: "Nextiva" },
            { href: "/tools/business-operations/ai-receptionist/smith", label: "Smith.ai" },
            { href: "/tools/business-operations/ai-chatbot/tidio", label: "Tidio" },
            { href: "/tools/business-operations/ai-receptionist/voksha", label: "Voksha" },
          ],
        },
        {
          id: "tools-business-operations-data-infrastructure",
          label: "Data Infrastructure",
          href: "/tools/business-operations",
          items: [
            { href: "/tools/business-operations/ai-data-quality-assessments/anomalo", label: "Anomalo" },
            { href: "/tools/business-operations/ai-data-quality-assessments/great-expectations", label: "Great Expectations" },
            { href: "/tools/business-operations/ai-data-quality-assessments/monte-carlo", label: "Monte Carlo" },
            { href: "/tools/business-operations/ai-data-quality-assessments/qualytics", label: "Qualytics" },
            { href: "/tools/marketing/zapier", label: "Zapier" },
            { href: "/tools/marketing/pipedrive", label: "Pipedrive" },
          ],
        },
      ],
    },
  ],
};

/**
 * The name each tool hub card shows, keyed by the tool page's href. A tool with more than one page
 * carries its use: the navbar writes "Bill (Data Entry)" and the card writes "Bill for Data Entry".
 */
const TOOL_CARD_LABELS: ReadonlyMap<string, string> = new Map(
  TOOLS_MENU.departments
    .flatMap((department) => department.categories.flatMap((category) => category.items))
    .map((item) => [item.href, item.label.replace(/^(.+) \((.+)\)$/, "$1 for $2")]),
);

export function toolCardLabel(href: string): string | undefined {
  return TOOL_CARD_LABELS.get(href);
}
