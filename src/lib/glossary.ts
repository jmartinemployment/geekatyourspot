import { glossaryTerms } from "@/data/glossary";
import type { GlossaryTerm } from "@/types/glossary";

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return glossaryTerms;
}

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}
