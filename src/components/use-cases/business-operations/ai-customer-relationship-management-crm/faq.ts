/**
 * The FAQ for the AI Customer Relationship Management (CRM) use-case page. The visible FAQ and the
 * FAQPage markup in page.tsx both read this list, so they cannot drift apart.
 */
export type FaqItem = { question: string; answer: string };

export const CRM_FAQ: FaqItem[] = [
  {
    question: "What is an AI CRM?",
    answer:
      "An AI CRM is a customer relationship management system that keeps every customer, conversation and appointment in one record and uses rules and AI to handle routine follow-up, such as the first reply to a new lead, appointment reminders and review requests.",
  },
  {
    question: "Why does a CRM matter for a small business?",
    answer:
      "Leads arrive from forms, calls, texts and messages, and customers often ask several companies at once. A CRM makes sure every lead gets a fast reply and a follow-up, and it keeps the customer history in one place when staff change.",
  },
  {
    question: "Which CRM tools do you work with?",
    answer:
      "We set up GoHighLevel and Pipedrive, and we choose between them according to how your business sells. GoHighLevel suits businesses that live on inbound conversations and appointments, and Pipedrive suits teams focused on tracking deals through a sales pipeline.",
  },
  {
    question: "What does an AI assistant in a CRM actually answer?",
    answer:
      "Only what you approve. We give it your services, hours, service areas and common answers, decide whether it books a time or lets the customer request one for your office to confirm, and test it with questions it should hand off, such as exact code requirements or firm prices. Anything outside its approved information goes to a person.",
  },
  {
    question: "How long does it take to set up a CRM?",
    answer:
      "A basic setup with a pipeline, an instant reply to new leads, reminders and review requests usually takes a few weeks. Business texting registration often sets the pace, so we start it first.",
  },
];
