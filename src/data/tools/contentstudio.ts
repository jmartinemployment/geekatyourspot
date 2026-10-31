import { ToolPageContent } from "@/types/tool";

/**
 * Listing metadata for /tools and /tools/marketing. The hand-coded page under
 * `src/app/(site)/tools/marketing/content-creation-workflow/intelligent-content-generation/contentstudio/` is the content of record; `sections` here carries each
 * section's heading and opening sentence so the registry stays readable, not a second copy.
 */
export const contentstudioContent: ToolPageContent = {
  "title": "ContentStudio",
  "slug": "contentstudio",
  "department": "marketing",
  "useCase": "content-creation-workflow/intelligent-content-generation",
  "description": "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
  "heroSummary": "Transform your content with ContentStudio's AI repurposing, enhancing reach and engagement across platforms.",
  "keywords": "AI Content Repurposing, content transformation, Jasper AI, Copy.ai, ContentStudio, workflow automation",
  "relatedArticleId": "https://geekatyourspot.com/blog/marketing/content-creation-workflow/ai-content-repurposing",
  "sections": [
    {
      "title": "Overview",
      "description": "ContentStudio is a versatile platform designed to help businesses maximize the lifespan of their content through AI-driven repurposing strategies."
    },
    {
      "title": "Key Capabilities",
      "description": "ContentStudio offers a range of features designed to enhance the content repurposing process, making it a powerful tool for businesses aiming to extend their content's lifecycle."
    },
    {
      "title": "Implementation Considerations",
      "description": "Implementing ContentStudio effectively requires careful planning and consideration of several factors specific to the platform."
    },
    {
      "title": "When to Use",
      "description": "ContentStudio is particularly beneficial for businesses looking to maximize their content's lifespan without investing heavily in creating new material."
    }
  ]
};
