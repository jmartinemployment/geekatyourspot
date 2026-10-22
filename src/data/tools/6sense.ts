import { ToolPageContent } from "@/types/tool";

/**
 * Listing metadata for /tools and /tools/marketing. The hand-coded page under
 * `src/app/(site)/tools/marketing/6sense/` is the content of record; `sections` here carries each
 * section's heading and opening sentence so the registry stays readable, not a second copy.
 */
export const sixsenseContent: ToolPageContent = {
  "title": "6sense",
  "slug": "6sense",
  "department": "marketing",
  "description": "Optimize sales with 6sense's AI-powered lead scoring, prioritizing high-potential leads efficiently.",
  "heroSummary": "Transform your sales process with 6sense's AI-powered lead scoring, focusing on high-conversion leads.",
  "keywords": "Lead Scoring",
  "relatedArticleId": "https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-lead-scoring",
  "sections": [
    {
      "title": "Overview",
      "description": "6sense is an AI-driven platform built to transform lead scoring by accurately identifying and prioritizing high-potential prospects."
    },
    {
      "title": "Key Capabilities",
      "description": "6sense delivers a focused set of AI-powered capabilities that improve how teams score, prioritize, and engage leads, turning raw behavioral data into sales-ready insights."
    },
    {
      "title": "Implementation Considerations",
      "description": "Implementing 6sense for AI-powered lead scoring can streamline your sales process, but it requires careful planning around data, workflows, and system integration to achieve reliable results."
    },
    {
      "title": "When to Use",
      "description": "6sense is most valuable when your sales team is overwhelmed by manual lead scoring and struggles to distinguish high-intent prospects from routine inquiries."
    }
  ]
};
