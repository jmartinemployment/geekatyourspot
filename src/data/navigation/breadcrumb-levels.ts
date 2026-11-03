/**
 * The name each level of the URL hierarchy shows in the breadcrumb trail, keyed by the level's
 * path. The navbar's trail shows the levels above the page, and the page's structured data adds
 * the page itself under its H1, which its hero passes in, so only the levels above a page are
 * listed here. Every level that sits above a page must be in this table: the trail is left off
 * a page when one of its levels is missing, rather than showing a made-up name.
 *
 * Whether a level has a page is not recorded here. The trail checks the app directory at build
 * time (`src/lib/navigation/linked-levels.ts`), links the levels that have a page and
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
  ["/blog/business-operations", "Business Operations"],
  ["/blog/marketing", "Marketing"],
  ["/blog/marketing/ad-spend-optimization", "Ad Spend Optimization"],
  ["/blog/marketing/marketing-automation-platforms", "Marketing Automation Platforms (MAP)"],

  ["/glossary", "Glossary"],

  ["/tools", "Tools"],
  ["/tools/accounting", "Accounting"],
  ["/tools/accounting/accounts-payable", "Accounts Payable"],
  ["/tools/accounting/accounts-payable/ai-invoice-approval-workflows", "AI Invoice Approval Workflows"],
  ["/tools/accounting/accounts-payable/ai-data-entry-processing", "AI Data Entry & Processing"],
  ["/tools/accounting/accounts-payable/ai-fraud-duplicate-payment-controls", "AI Fraud & Duplicate Payment Controls"],
  ["/tools/accounting/accounts-payable/ai-payment-execution", "AI Payment Execution"],
  ["/tools/accounting/cash-flow-forecasting", "Cash Flow Forecasting"],
  ["/tools/accounting/cash-flow-forecasting/ai-accounts-receivable", "AI Accounts Receivable"],
  ["/tools/accounting/cash-flow-forecasting/ai-spreadsheet-data", "AI Spreadsheet Data"],
  ["/tools/accounting/cash-flow-forecasting/ai-resource-planning", "AI Resource Planning"],
  ["/tools/accounting/tax-compliance-regulations", "Tax Compliance & Regulations"],
  ["/tools/accounting/tax-compliance-regulations/ai-tax-law", "AI Tax Law"],
  ["/tools/accounting/tax-compliance-regulations/ai-multi-state-sales-tax", "AI Multi-State Sales Tax"],
  ["/tools/accounting/tax-compliance-regulations/ai-payroll-tax", "AI Payroll Tax"],
  ["/tools/business-operations", "Business Operations"],
  ["/tools/business-operations/ai-chatbot", "AI Chatbot"],
  ["/tools/business-operations/ai-data-quality-assessments", "AI Data Quality Assessments"],
  ["/tools/business-operations/ai-receptionist", "AI Receptionist"],
  ["/tools/marketing", "Marketing"],
  ["/tools/marketing/ad-spend-optimization", "Ad Spend Optimization"],
  ["/tools/marketing/ad-spend-optimization/ai-precision-lead-acquisition", "AI Precision Lead Acquisition"],
  ["/tools/marketing/marketing-automation-platforms", "Marketing Automation Platforms (MAP)"],
  ["/tools/marketing/marketing-automation-platforms/ai-content-generation", "AI Content Generation"],
  ["/tools/marketing/marketing-automation-platforms/ai-content-planning", "AI Content Planning"],
  ["/tools/marketing/marketing-automation-platforms/ai-lead-enrichment-predictive-scoring", "AI Lead Enrichment & Predictive Scoring"],
  ["/tools/marketing/marketing-automation-platforms/ai-personalized-email-campaigns", "AI Personalized Email Campaigns"],

  ["/use-cases", "Use Cases"],
  ["/use-cases/accounting", "Accounting"],
  ["/use-cases/accounting/accounts-payable", "Accounts Payable"],
  ["/use-cases/accounting/cash-flow-forecasting", "Cash Flow Forecasting"],
  ["/use-cases/accounting/tax-compliance-regulations", "Tax Compliance & Regulations"],
  ["/use-cases/business-operations", "Business Operations"],
  ["/use-cases/marketing", "Marketing"],
  ["/use-cases/marketing/ad-spend-optimization", "Ad Spend Optimization"],
  ["/use-cases/marketing/marketing-automation-platforms", "Marketing Automation Platforms (MAP)"],
]);
