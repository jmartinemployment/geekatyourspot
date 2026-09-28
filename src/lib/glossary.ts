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
