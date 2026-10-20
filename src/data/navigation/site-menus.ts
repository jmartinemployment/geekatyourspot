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
    href: "/use-cases/marketing/ai-marketing-systems",
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
        ],
      },
      {
        id: "use-cases-marketing-content-creation-workflow",
        label: "Content Creation Workflow",
        items: [
          { href: "/use-cases/marketing/ai-content-creation-workflow", label: "Content Creation Workflow" },
          { href: "/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai", label: "Intelligent Content Planning" },
          { href: "/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses", label: "Intelligent Content Generation" },
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

export const BLOG_MENU: readonly MenuDepartment[] = [
  {
    href: "/blog/marketing/how-ai-marketing-systems-transform-small-business-growth",
    label: "Marketing",
    categories: [
      {
        id: "blog-marketing-lead-capture-pipeline",
        label: "Lead Capture Pipeline",
        items: [
          { href: "/blog/marketing/why-your-b2b-sales-need-an-intelligent-lead-capture-pipeline", label: "Why Your B2B Sales Need an Intelligent Lead Capture Pipeline" },
          { href: "/blog/marketing/lead-capture-pipeline/intelligent-receptionist-how-miami-small-businesses-can-stop-losing-leads-after-hours", label: "How to Stop Losing Leads After Hours" },
          { href: "/blog/marketing/lead-capture-pipeline/cross-platform-chatbot-the-missing-link-in-your-south-florida-lead-capture-pipeline", label: "The Missing Link in Your Lead Capture Pipeline" },
          { href: "/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-smbs-can-turn-more-leads-into-sales", label: "Turn More Leads Into Sales" },
          { href: "/blog/marketing/how-ai-powered-lead-scoring-can-boost-your-sales-funnel", label: "How AI-Powered Lead Scoring Can Boost Your Sales Funnel" },
          { href: "/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses", label: "AI-Driven Lead Scoring for Small Businesses" },
          { href: "/blog/marketing/are-smart-chatbots-the-secret-weapon-for-marketing-success", label: "Are Smart Chatbots the Secret Weapon for Marketing Success?" },
          { href: "/blog/marketing/smart-chatbots-for-marketing-transforming-customer-engagement", label: "Transforming Customer Engagement" },
        ],
      },
      {
        id: "blog-marketing-content-creation-workflow",
        label: "Content Creation Workflow",
        items: [
          { href: "/blog/marketing/content-creation-workflow/intelligent-content-planning-how-south-florida-smbs-can-save-hours-and-drive-more-sales", label: "Intelligent Content Planning" },
          { href: "/blog/marketing/content-creation-workflow/intelligent-content-generation-for-miami-smbs-how-to-save-time-and-scale-without-extra-hires", label: "Intelligent Content Generation" },
          { href: "/blog/marketing/how-to-streamline-your-content-workflow-with-ai", label: "How to Streamline Your Content Workflow with AI" },
          { href: "/blog/marketing/unlocking-the-potential-of-automated-content-generation-for-small-businesses", label: "Unlocking the Potential of Automated Content Generation for Small Businesses" },
          { href: "/blog/marketing/unlocking-the-power-of-automated-content-generation", label: "Unlocking the Power of Automated Content Generation" },
          { href: "/blog/marketing/content-creation-workflow/automated-content-generation-transforming-small-business-marketing", label: "Transforming Small Business Marketing" },
          { href: "/blog/marketing/unlocking-the-power-of-ai-for-content-repurposing", label: "Unlocking the Power of AI for Content Repurposing" },
          { href: "/blog/marketing/content-creation-workflow/ai-content-repurposing", label: "AI Content Repurposing" },
          { href: "/blog/marketing/unlocking-the-potential-of-ai-in-seo-content-creation", label: "Unlocking the Potential of AI in SEO Content Creation" },
          { href: "/blog/marketing/how-personalized-email-campaigns-drive-real-results", label: "How Personalized Email Campaigns Drive Real Results" },
        ],
      },
      {
        id: "blog-marketing-automated-ad-spend-optimization",
        label: "Automated Ad Spend Optimization",
        items: [
          { href: "/blog/marketing/how-ai-transforms-ad-spend-4-key-strategies", label: "4 Key Strategies" },
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
          { href: "/blog/accounting/how-ai-transforms-accounts-payable-automated-data-entry-processing", label: "Automated Data Entry & Processing" },
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
          { href: "/blog/accounting/cash-flow-forecasting/intelligent-resource-planning-for-small-businesses-how-to-fix-cash-flow-headaches-in-south-florida", label: "How to Fix Cash Flow Headaches" },
        ],
      },
      {
        id: "blog-accounting-tax-compliance-regulations",
        label: "Tax Compliance & Regulations",
        items: [
          { href: "/blog/accounting/how-ai-is-revolutionizing-tax-compliance-what-you-need-to-know", label: "How AI is Revolutionizing Tax Compliance" },
          { href: "/blog/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification-what-miami-smbs-must-know-before-choosing-compliance-solutions", label: "What Miami SMBs Must Know" },
          { href: "/blog/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus-what-south-florida-smbs-need-to-know-and-fix-before-expanding", label: "What South Florida SMBs Need to Know" },
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
