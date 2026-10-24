/**
 * The name each level of the URL hierarchy shows in the breadcrumb trail, keyed by the level's
 * path. A page's own name is its H1, which its hero passes in, so only the levels above a page
 * are listed here. Every level that sits above a page must be in this table: the trail is
 * left off a page when one of its levels is missing, rather than showing a made-up name.
 *
 * Whether a level has a page is not recorded here. The trail checks the app directory at build
 * time (`src/components/shared/breadcrumb-trail.tsx`), links the levels that have a page and
 * shows the others as plain text.
 *
 * Hand-maintained, like the menus in `site-menus.ts`. When you add a page under a new level,
 * add the level here. The names match the navbar's.
 */
export const BREADCRUMB_LEVELS: ReadonlyMap<string, string> = new Map([
  ["/blog", "Blog"],
  ["/blog/accounting", "Accounting"],
  ["/blog/accounting/accounts-payable", "Accounts Payable"],
  ["/blog/accounting/cash-flow-forecasting", "Cash Flow Forecasting"],
  ["/blog/accounting/tax-compliance-regulations", "Tax Compliance & Regulations"],
  ["/blog/marketing", "Marketing"],
  ["/blog/marketing/ad-spend-optimization", "Ad Spend Optimization"],
  ["/blog/marketing/content-creation-workflow", "Content Creation Workflow"],
  ["/blog/marketing/lead-capture-pipeline", "Lead Capture Pipeline"],

  ["/glossary", "Glossary"],

  ["/tools", "Tools"],
  ["/tools/accounting", "Accounting"],
  ["/tools/accounting/accounts-payable", "Accounts Payable"],
  ["/tools/accounting/accounts-payable/automated-approval-workflows", "Intelligent Approval Workflows"],
  ["/tools/accounting/accounts-payable/automated-data-entry-processing", "Intelligent Data Entry & Processing"],
  ["/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls", "Intelligent Fraud & Duplicate Payment Controls"],
  ["/tools/accounting/accounts-payable/automated-payment-execution-streamlining-accounts-payable-with-ai", "Intelligent Payment Execution"],
  ["/tools/accounting/cash-flow-forecasting", "Cash Flow Forecasting"],
  ["/tools/accounting/cash-flow-forecasting/automated-accounts-receivable", "Intelligent Accounts Receivable"],
  ["/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data", "Intelligent Spreadsheet Data"],
  ["/tools/accounting/cash-flow-forecasting/intelligent-resource-planning", "Intelligent Resource Planning"],
  ["/tools/accounting/tax-compliance-regulations", "Tax Compliance & Regulations"],
  ["/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws", "Automating Complex & Changing Laws"],
  ["/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus", "Multi-State Sales Tax Nexus"],
  ["/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification", "Payroll Tax & Worker Misclassification"],
  ["/tools/marketing", "Marketing"],
  ["/tools/marketing/ad-spend-optimization", "Ad Spend Optimization"],
  ["/tools/marketing/ad-spend-optimization/budget-local-ad-spending", "Budget Local Ad Spending"],
  ["/tools/marketing/content-creation-workflow", "Content Creation Workflow"],
  ["/tools/marketing/content-creation-workflow/intelligent-content-generation", "Intelligent Content Generation"],
  ["/tools/marketing/content-creation-workflow/intelligent-content-planning", "Intelligent Content Planning"],
  ["/tools/marketing/lead-capture-pipeline", "Lead Capture Pipeline"],
  ["/tools/marketing/lead-capture-pipeline/cross-platform-chatbot", "Cross-Platform Chatbot"],
  ["/tools/marketing/lead-capture-pipeline/intelligent-receptionist", "Intelligent Receptionist"],
  ["/tools/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring", "Lead Enrichment & Predictive Scoring"],

  ["/use-cases", "Use Cases"],
  ["/use-cases/accounting", "Accounting"],
  ["/use-cases/accounting/accounts-payable", "Accounts Payable"],
  ["/use-cases/accounting/cash-flow-forecasting", "Cash Flow Forecasting"],
  ["/use-cases/accounting/tax-compliance-regulations", "Tax Compliance & Regulations"],
  ["/use-cases/marketing", "Marketing"],
  ["/use-cases/marketing/ad-spend-optimization", "Ad Spend Optimization"],
  ["/use-cases/marketing/content-creation-workflow", "Content Creation Workflow"],
  ["/use-cases/marketing/lead-capture-pipeline", "Lead Capture Pipeline"],
]);
