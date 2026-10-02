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
  /**
   * Use-case segment of the tool's URL: /tools/<department>/<useCase>/<slug>.
   * Set it and the tool links three segments deep; leave it off and the tool
   * stays at the flat /tools/<department>/<slug>. See
   * plans/tools-directory-structure.md -- accounting moved first, marketing
   * has not moved yet.
   */
  useCase?: string;
  description: string;
  heroSummary: string;
  image?: string;
  /** SEO keywords string carried over from the source page. */
  keywords?: string;
  /** ISO timestamp the source page was first published. */
  datePublished?: string;
  /** ISO timestamp the source page was last modified. */
  dateModified?: string;
  /** @id of the related use-case Article (JSON-LD subjectOf). */
  relatedArticleId?: string;
  /**
   * The full JSON-LD object exactly as produced by Content Writer v2,
   * preserved verbatim and emitted unchanged on the detail page.
   */
  jsonLd?: Record<string, unknown>;
  sections: ToolSection[];
}
