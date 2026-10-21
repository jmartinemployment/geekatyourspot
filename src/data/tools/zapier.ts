import { ToolPageContent } from "@/types/tool";

/**
 * Listing metadata for /tools and /tools/marketing. The hand-coded page under
 * `src/app/(site)/tools/marketing/zapier/` is the content of record; `sections` here carries each
 * section's heading and opening sentence so the registry stays readable, not a second copy.
 */
export const zapierContent: ToolPageContent = {
  "title": "Zapier",
  "slug": "zapier",
  "department": "marketing",
  "description": "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
  "heroSummary": "Automate AI content repurposing with Zapier, transforming and distributing content seamlessly across platforms.",
  "keywords": "AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation",
  "relatedArticleId": "https://geekatyourspot.com/blog/marketing/content-creation-workflow/ai-content-repurposing#article",
  "sections": [
    {
      "title": "Overview",
      "description": "Zapier is a powerful automation tool that connects your favorite apps and services, enabling seamless workflow automation."
    },
    {
      "title": "Key Capabilities",
      "description": "Zapier excels in automating workflows by connecting disparate apps and services, making it a versatile tool for content repurposing."
    },
    {
      "title": "Implementation Considerations",
      "description": "Implementing Zapier for AI content repurposing requires careful planning and understanding of its features."
    },
    {
      "title": "When to Use",
      "description": "Zapier is an ideal solution for businesses looking to maximize the lifespan of their content through AI content repurposing."
    }
  ]
};
