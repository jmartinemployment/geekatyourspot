/**
 * The FAQ questions for the two Melio tool pages. Each page renders its list in its faq-section.tsx
 * and builds its FAQPage markup from the same list, so the visible questions and the markup cannot
 * drift apart. The facts come from the owner's Melio FAQ notes of 2026-11-13. The commission
 * question is last on every page that carries a Melio referral link.
 */
export type FaqItem = { question: string; answer: string };

const FREE: FaqItem = {
  question: "Is Melio free?",
  answer:
    "Yes. Melio offers a free plan, called Melio Go, with no monthly subscription fee for standard features such as ACH bank transfers. Fees apply only to optional services such as credit card processing, mailed paper checks, and fast international or wire transfers.",
};

const PAY_VENDORS: FaqItem = {
  question: "How do you pay vendors with Melio?",
  answer:
    "You can fund a payment by ACH bank transfer, credit or debit card, or wire transfer. If a vendor only accepts paper checks or bank deposits, Melio can deliver the payment on your behalf.",
};

const VENDOR_ACCOUNT: FaqItem = {
  question: "Do vendors need a Melio account?",
  answer:
    "No. Your vendors do not need to sign up for Melio to receive a bank deposit or a mailed check.",
};

const TIMING: FaqItem = {
  question: "How long do Melio payments take to arrive?",
  answer:
    "Standard domestic ACH transfers typically take a few business days. Same-day wire transfers and fast international options process within 1 to 3 business days, depending on the method.",
};

const ACCOUNTING_SYNC: FaqItem = {
  question: "Does Melio sync with accounting software?",
  answer:
    "Yes. Melio syncs two ways with accounting platforms such as QuickBooks Online, QuickBooks Desktop, Xero, and NetSuite.",
};

const SECURITY: FaqItem = {
  question: "Is Melio safe and secure?",
  answer:
    "Yes. Melio encrypts data at rest with AES-256 and data in transit with TLS 1.3, with a minimum of TLS 1.2.",
};

const XERO: FaqItem = {
  question: "What is happening with Xero and Melio?",
  answer:
    "Xero acquired Melio. Melio continues to operate independently as a standalone platform and app, and users are not forced to switch to Xero.",
};

const COMMISSION: FaqItem = {
  question: "Do you earn a commission from Melio?",
  answer:
    "Yes. If you sign up for Melio through the links on this page, Geek @ Your Spot LLC earns a commission. A sentence saying so sits next to each link, so you know what you are clicking before you click it. The commission does not change what this page says about Melio. Whether you choose Melio or another tool, the recommendations here are based on what solves your actual business problems, not on earning a commission.",
};

export const MELIO_PAYMENT_EXECUTION_FAQ: FaqItem[] = [
  FREE,
  PAY_VENDORS,
  VENDOR_ACCOUNT,
  TIMING,
  ACCOUNTING_SYNC,
  SECURITY,
  XERO,
  COMMISSION,
];

export const MELIO_INVOICE_APPROVAL_FAQ: FaqItem[] = [
  ACCOUNTING_SYNC,
  SECURITY,
  FREE,
  VENDOR_ACCOUNT,
  XERO,
  COMMISSION,
];
