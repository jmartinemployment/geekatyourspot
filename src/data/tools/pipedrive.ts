import { ToolPageContent } from "@/types/tool";

/**
 * Listing metadata for /tools and /tools/marketing. The hand-coded page under
 * `src/app/(site)/tools/marketing/pipedrive/` is the content of record; `sections` here carries each
 * section's heading and opening sentence so the registry stays readable, not a second copy.
 */
export const pipedriveContent: ToolPageContent = {
  "title": "Pipedrive",
  "slug": "pipedrive",
  "department": "marketing",
  "description": "Optimize sales with Pipedrive's AI lead scoring, prioritizing high-potential leads for better conversion rates.",
  "heroSummary": "Transform your sales process with Pipedrive's AI-powered lead scoring, ensuring focus on the most promising leads.",
  "keywords": "Lead Scoring",
  "relatedArticleId": "https://geekatyourspot.com/blog/marketing/lead-capture-pipeline/ai-driven-lead-scoring-for-small-businesses#article",
  "sections": [
    {
      "title": "Overview",
      "description": "Pipedrive is a sales management tool designed to help businesses streamline their sales processes and improve lead scoring accuracy."
    },
    {
      "title": "Key Capabilities",
      "description": "Pipedrive leverages AI to enhance lead scoring, helping businesses streamline sales processes and focus on high-potential leads."
    },
    {
      "title": "Implementation Considerations",
      "description": "Implementing Pipedrive for AI-powered lead scoring involves several key considerations to ensure a smooth transition and effective use of the platform's capabilities."
    },
    {
      "title": "When to Use",
      "description": "Pipedrive is an excellent choice for small to medium-sized teams looking to enhance their sales process with AI-powered lead scoring."
    }
  ]
};
