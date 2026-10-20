export interface GlossaryDefinition {
  partOfSpeech: string; // e.g. "noun", "verb", "adjective"
  text: string;
}

export interface GlossaryTerm {
  /** Display title, e.g. "A/B Testing" */
  title: string;
  /** URL slug, e.g. "a-b-testing" */
  slug: string;
  /** Simple definition string (for quick entries) OR array of definitions */
  definition?: string;
  definitions?: GlossaryDefinition[];
  /** One sentence on the term's direct impact or business value */
  whyItMatters?: string;
  /** One sentence on how the term connects to related terms, tools or dependencies */
  systemsContext?: string;
  /** Optional category for grouping/filtering, e.g. "AI & Automation" */
  category?: string;
  /** Optional short one-line summary for index view */
  shortSummary?: string;
}
