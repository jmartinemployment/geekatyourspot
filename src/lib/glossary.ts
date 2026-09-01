import { glossaryTerms } from "@/data/glossary";
import type { GlossaryTerm } from "@/types/glossary";

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return glossaryTerms;
}

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((term) => term.slug === slug);
}

export function getGlossaryTermsGroupedByLetter(): Record<string, GlossaryTerm[]> {
  const grouped: Record<string, GlossaryTerm[]> = {};

  for (const term of glossaryTerms) {
    const letter = term.title.charAt(0).toUpperCase();
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(term);
  }

  return grouped;
}

export function getLettersWithTerms(): string[] {
  const grouped = getGlossaryTermsGroupedByLetter();
  return Object.keys(grouped).sort();
}
