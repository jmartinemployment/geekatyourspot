import { ToolPageContent } from "@/types/tool";

/**
 * Listing metadata for /tools/accounting. The hand-coded page under
 * `src/components/tools/accounting/accounts-payable/automated-fraud-duplicate-payment-controls/medius/`
 * is the content of record; `sections` here carries each section's heading and
 * opening paragraph so the registry stays readable, not a second copy.
 */
export const mediusContent: ToolPageContent = {
  "title": "Medius",
  "slug": "medius",
  "department": "accounting",
  "useCase": "accounts-payable/automated-fraud-duplicate-payment-controls",
  "description":
    "Medius automates fraud & duplicate payment controls, enhancing financial security with AI-driven solutions.",
  "heroSummary":
    "Medius streamlines fraud detection and duplicate payment control, safeguarding financial operations with AI-driven precision.",
  "keywords":
    "Medius, automated fraud and duplicate payment controls, accounts payable automation, fraud detection, duplicate invoice detection, anomaly detection, risk scoring, statement reconciliation, three-way matching, supplier change monitoring, ERP integration, AI implementation",
  "datePublished": "2026-10-09T12:48:41.4190450Z",
  "dateModified": "2026-10-09T12:48:41.4190450Z",
  "relatedArticleId":
    "https://geekatyourspot.com/use-cases/accounting/accounts-payable/automated-fraud-duplicate-payment-controls-boosting-efficiency-for-smbs",
  "sections": [
    { "title": "Overview", "description": "An accounts payable team checking invoice numbers against purchase orders by hand still misses duplicate submissions with minor formatting changes. Medius's fraud detection software, trained on over a decade of real AP outcomes, detects duplicate invoices, mismatched payment details, and unauthorized supplier changes." },
    { "title": "The Cost of Manual Automated Fraud & Duplicate Payment Controls", "description": "Resubmitted invoices with slight formatting differences, branches paying the same supplier invoice independently, and unmonitored vendor payment-detail changes all slip past manual checks; Medius adds risk scoring, anomaly detection, and supplier-change monitoring." },
    { "title": "How Medius Transforms Automated Fraud & Duplicate Payment Controls", "description": "Touchless invoice processing captures and verifies invoice data, real-time monitoring flags supplier-information changes, and intelligent anomaly detection catches unexpected charges or duplicate submissions early." },
    { "title": "How Medius Works: Real Mechanics and Architecture", "description": "ERP integration captures invoices from paper, PDF, or a supplier portal; AI-driven statement reconciliation, real-time alerts with risk scoring, three-way matching, and support for over 180 currencies." },
    { "title": "Deploying Medius in Your Existing Environment", "description": "Geek @ Your Spot assesses current systems, integrates Medius with the ERP, maps data structures and approval chains, configures alerts and risk scoring, and trains the team." },
    { "title": "Evaluating Medius for Automated Fraud & Duplicate Payment Controls", "description": "Flexible pricing that scales with transaction volume, ERP integration without overhauls, and a platform that continuously learns from new data set Medius apart from other tools." },
    { "title": "Is Medius Right for Your Business?", "description": "Well-suited to small and medium-sized businesses with significant transaction volume; less suited to those with low volume or an already highly customized accounts payable system." }
  ]
};
