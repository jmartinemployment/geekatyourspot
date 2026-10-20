import { GLOSSARY_TERMS } from "@/data/glossary/terms";
import type { GlossaryTerm } from "@/types/glossary";

/**
 * The glossary is served from the repo, not GeekAPI.
 *
 * The GeekAPI glossary store was removed, so `src/data/glossary/terms.ts` holds
 * the corpus exported from it and is the only copy of those definitions.
 * Editing a term is a code change and a deploy, not a database update.
 *
 * These stay `async` so every caller keeps its shape: the term page awaits
 * them, `generateStaticParams` and `sitemap.ts` await them, and the index
 * awaits the list.
 */

const BY_SLUG: ReadonlyMap<string, GlossaryTerm> = new Map(
  GLOSSARY_TERMS.map((term) => [term.slug, term]),
);

export async function getAllGlossaryTerms(): Promise<GlossaryTerm[]> {
  return GLOSSARY_TERMS.map((term) => ({ ...term }));
}

export async function getAllGlossarySlugs(): Promise<string[]> {
  return GLOSSARY_TERMS.map((term) => term.slug);
}

export async function getGlossaryTerm(
  slug: string,
): Promise<GlossaryTerm | null> {
  return BY_SLUG.get(slug) ?? null;
}

/**
 * The one DefinedTermSet the glossary index describes. Every letter page names this id, and every
 * term page points its DefinedTerm at it through inDefinedTermSet.
 */
export const GLOSSARY_SET_ID = "https://geekatyourspot.com/glossary#glossary";

/** The definition a term page shows, as one string: the index cards and structured data read it too. */
export function definitionText(term: GlossaryTerm): string {
  const fromDefinitions = term.definitions
    ?.map((definition) => definition.text.trim())
    .filter((text) => text.length > 0)
    .join(" ");

  return (fromDefinitions || term.definition || "").replace(/\s+/g, " ").trim();
}

/**
 * The visible definition cut to fit a meta description: as many whole sentences as fit in max
 * characters, or, when the first sentence alone is longer, that sentence cut at a word boundary
 * with an ellipsis. Search engines then quote the same definition the page shows.
 */
export function definitionSummary(term: GlossaryTerm, max = 160): string {
  const text = definitionText(term);
  if (text.length <= max) return text;

  const sentences = text.match(/[^.!?]+[.!?]+(?=\s|$)/g) ?? [];
  let summary = "";
  for (const sentence of sentences) {
    const next = `${summary} ${sentence.trim()}`.trim();
    if (next.length > max) break;
    summary = next;
  }
  if (summary) return summary;

  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.]$/, "")}…`;
}

/** Everything a term page says about the term, as one string to search for other terms' names. */
function termText(term: GlossaryTerm): string {
  return [definitionText(term), term.whyItMatters ?? "", term.systemsContext ?? ""].join(" ");
}

function escapeRegExp(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** A term's name as a whole word or phrase, case-insensitive, plural allowed. */
const NAME_PATTERNS: ReadonlyMap<string, RegExp> = new Map(
  GLOSSARY_TERMS.map((term) => [
    term.slug,
    new RegExp(`(^|[^A-Za-z0-9])${escapeRegExp(term.title)}s?(?![A-Za-z0-9])`, "i"),
  ]),
);

/**
 * The terms a term page links to as related: first the terms its own text names, then the terms
 * whose text names it, each group alphabetical, at most `limit` in all. The terms carry no
 * relation data of their own, so a mention is the relation.
 */
export function relatedTerms(term: GlossaryTerm, limit = 6): GlossaryTerm[] {
  const text = termText(term);
  const others = [...GLOSSARY_TERMS]
    .filter((other) => other.slug !== term.slug)
    .sort((a, b) => a.title.localeCompare(b.title));
  const named = others.filter((other) => NAME_PATTERNS.get(other.slug)?.test(text));
  const naming = others.filter(
    (other) => !named.includes(other) && NAME_PATTERNS.get(term.slug)?.test(termText(other)),
  );
  return [...named, ...naming].slice(0, limit);
}
