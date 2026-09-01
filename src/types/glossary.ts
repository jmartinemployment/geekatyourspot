export interface GlossaryDefinition {
  partOfSpeech: string; // e.g. "noun", "verb", "adjective"
  text: string;
  example?: string;
}

export interface GlossaryTerm {
  /** Display title, e.g. "A/B Testing" */
  title: string;
  /** URL slug, e.g. "a-b-testing" */
  slug: string;
  /** Simple definition string (for quick entries) OR array of definitions with examples */
  definition?: string;
  definitions?: GlossaryDefinition[];
  /** Optional category for grouping/filtering, e.g. "AI & Automation" */
  category?: string;
  /** Optional short one-line summary for index view */
  shortSummary?: string;
}
