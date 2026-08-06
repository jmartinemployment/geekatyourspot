export interface ToolSubSection {
  heading: string;
  content?: string[];
  bullets?: string[];
  items?: Array<{
    title: string;
    description: string;
  }>;
}

export interface ToolSection {
  title: string;
  description?: string;
  bullets?: string[];
  subsections?: ToolSubSection[];
}

export interface ToolPageContent {
  title: string;
  slug: string;
  department: string;
  description: string;
  heroSummary: string;
  image?: string;
  /** SEO keywords string carried over from the source page. */
  keywords?: string;
  /** ISO timestamp the source page was first published. */
  datePublished?: string;
  /** ISO timestamp the source page was last modified. */
  dateModified?: string;
  /** @id of the related use-case TechArticle (JSON-LD subjectOf). */
  relatedArticleId?: string;
  /**
   * The full JSON-LD object exactly as produced by Content Writer v2,
   * preserved verbatim and emitted unchanged on the detail page.
   */
  jsonLd?: Record<string, unknown>;
  sections: ToolSection[];
}
