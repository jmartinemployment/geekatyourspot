import { ToolPageContent } from "@/types/tool";

/**
 * Listing metadata for /tools/accounting. The hand-coded page under
 * `src/components/tools/accounting/accounts-payable/automated-approval-workflows/ramp/`
 * is the content of record; `sections` here carries each section's heading and
 * opening paragraph so the registry stays readable, not a second copy.
 */
export const rampApprovalWorkflowsContent: ToolPageContent = {
  "title": "Ramp",
  "slug": "ramp",
  "department": "accounting",
  "useCase": "accounts-payable/automated-approval-workflows",
  "description":
    "Automate invoice approvals with Ramp to save time, reduce errors, and boost efficiency.",
  "heroSummary":
    "Ramp automates invoice approvals, enhancing efficiency and cutting down on manual tasks.",
  "keywords":
    "Ramp, automated approval workflows, accounts payable automation, invoice approval, OCR invoice capture, PO matching, Ramp Bill Pay, Accounting Agent, ERP integration, AI implementation",
  "datePublished": "2026-10-07T19:50:20.7491120Z",
  "dateModified": "2026-10-07T19:50:20.7491120Z",
  "relatedArticleId":
    "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-approval-workflows-transforming-accounts-payable",
  "sections": [
    { "title": "Overview", "description": "Processing hundreds of invoices a month by hand turns AP into a full-time job; OCR and machine learning cut each invoice from 15–20 minutes to under 3 and route it to the right approver." },
    { "title": "The Pitfalls of Manual Automated Approval Workflows", "description": "Invoices arrive through scattered channels, every bill follows the same path regardless of risk, the owner becomes the bottleneck, and controls arrive only after a loss or audit." },
    { "title": "How Ramp Transforms Automated Approval Workflows", "description": "OCR extracts invoice data, ML matches it to purchase orders and receipts, smart workflows route bills by amount, vendor or department, and the Accounting Agent auto-codes in-policy spend." },
    { "title": "How Ramp's Automated Approval Workflows Operate", "description": "OCR and ML automate extraction, matching and rule-based routing, with ERP integration, a zero-touch lane for in-policy spend, an audit trail, and multi-entity, multi-currency support." },
    { "title": "Implementing Ramp in Your Business Environment", "description": "Map current AP workflows, connect pre-built ERP integrations, define approval rules by threshold, vendor and department, and train the team with Geek @ Your Spot." },
    { "title": "Evaluating Ramp for Your Business Needs", "description": "OCR, ML matching, smart routing, decision confidence levels and QuickBooks Online, Xero and NetSuite integrations, weighed against undisclosed pricing and a 3.5x automation rate over legacy tools." },
    { "title": "Is Ramp Right for Your Business?", "description": "Suits small businesses with a high invoice volume and frequent approval delays; a low-volume business may not need it." }
  ]
};
