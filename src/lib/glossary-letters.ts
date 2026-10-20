import type { GlossaryTerm } from "@/types/glossary";

/**
 * How the glossary index splits its terms into letter pages. The index renders these pages and
 * the sitemap lists them, so both read the grouping from here and cannot disagree about which
 * letter pages exist.
 */

/** Terms that do not start with a letter collect here, sorted last. */
export const NON_ALPHA_KEY = "#";
export const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
export const DEFAULT_LETTER = "A";

function bucketKey(term: GlossaryTerm): string {
  const first = term.title.trim().charAt(0).toUpperCase();
  return first >= "A" && first <= "Z" ? first : NON_ALPHA_KEY;
}

export function groupByLetter(terms: GlossaryTerm[]): Map<string, GlossaryTerm[]> {
  const groups = new Map<string, GlossaryTerm[]>();

  for (const term of terms) {
    const key = bucketKey(term);
    const bucket = groups.get(key);
    if (bucket) {
      bucket.push(term);
    } else {
      groups.set(key, [term]);
    }
  }

  for (const bucket of groups.values()) {
    bucket.sort((a, b) => a.title.localeCompare(b.title));
  }

  return groups;
}

/**
 * The requested letter when it exists, otherwise A. An unknown or empty letter resolves to A
 * rather than an empty page, so /glossary and /glossary?letter=A are the same page, which is why
 * A alone carries the bare canonical.
 */
export function resolveLetter(
  requested: string | undefined,
  groups: Map<string, GlossaryTerm[]>,
): string {
  if (!requested) return DEFAULT_LETTER;
  const upper = requested.trim().toUpperCase();
  return groups.has(upper) ? upper : DEFAULT_LETTER;
}

export function letterHref(letter: string): string {
  return letter === DEFAULT_LETTER
    ? "/glossary"
    : `/glossary?letter=${encodeURIComponent(letter)}`;
}
