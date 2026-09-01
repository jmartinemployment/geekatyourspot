export interface GlossaryTerm {
  /** Display title, e.g. "A/B Testing" */
  title: string;
  /** URL slug, e.g. "a-b-testing" */
  slug: string;
  /** 2-4 sentence definition, plain text */
  definition: string;
  /** Optional category for grouping/filtering, e.g. "AI & Automation" */
  category?: string;
  /** Optional short one-line summary for index view */
  shortSummary?: string;
}
