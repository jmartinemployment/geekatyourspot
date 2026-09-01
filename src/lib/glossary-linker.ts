import { getAllGlossaryTerms } from "./glossary";

interface LinkGlossaryTermsOptions {
  skipSlug?: string;
}

let linkRegexCache: RegExp | null = null;
let termMapCache: Map<string, string> | null = null;

function buildLinkRegex(): { regex: RegExp; termMap: Map<string, string> } {
  if (linkRegexCache && termMapCache) {
    return { regex: linkRegexCache, termMap: termMapCache };
  }

  const terms = getAllGlossaryTerms();
  const termMap = new Map<string, string>();

  // Build a map of term titles to slugs, sorted by length (longest first for better matching)
  const sortedTerms = [...terms].sort((a, b) => b.title.length - a.title.length);

  for (const term of sortedTerms) {
    termMap.set(term.title, term.slug);
  }

  // Escape special regex characters and build pattern for whole-word matching
  const patterns = sortedTerms.map((term) =>
    term.title
      .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      .replace(/\s+/g, "\\s+"),
  );

  // Create regex with word boundaries
  const pattern = `\\b(${patterns.join("|")})\\b`;
  const regex = new RegExp(pattern, "gi");

  linkRegexCache = regex;
  termMapCache = termMap;

  return { regex, termMap };
}

export function linkGlossaryTerms(
  html: string,
  options?: LinkGlossaryTermsOptions,
): string {
  const { regex, termMap } = buildLinkRegex();

  // Track which terms we've already linked on this page
  const linkedTerms = new Set<string>();

  // Parse HTML to avoid touching content inside tags, links, scripts, etc.
  let result = "";
  let inTag = false;
  let inLink = false;
  let inScript = false;
  let currentTag = "";
  let i = 0;

  while (i < html.length) {
    const char = html[i];

    if (char === "<") {
      inTag = true;
      const tagMatch = html.slice(i).match(/^<(\/?)(script|a|h[1-6]|style)[\s>]/i);

      if (tagMatch) {
        const isClosing = tagMatch[1] === "/";
        const tagName = tagMatch[2].toLowerCase();

        if (tagName === "script") {
          inScript = !isClosing;
        } else if (tagName === "a") {
          inLink = !isClosing;
        }
      }

      // Find the end of the tag
      const tagEnd = html.indexOf(">", i);
      if (tagEnd !== -1) {
        result += html.slice(i, tagEnd + 1);
        i = tagEnd + 1;
        inTag = false;
        continue;
      }
    }

    if (inTag || inLink || inScript) {
      result += char;
      i++;
      continue;
    }

    // Try to match a glossary term at this position
    regex.lastIndex = i;
    const match = regex.exec(html);

    if (match && match.index === i) {
      const termTitle = match[0];
      const matchingKey = Array.from(termMap.keys()).find(
        (key) => key.toLowerCase() === termTitle.toLowerCase(),
      );
      const slug = matchingKey ? termMap.get(matchingKey) : undefined;

      // Only link if: 1) not already linked on this page, 2) not the skip term
      if (slug && !linkedTerms.has(slug) && slug !== options?.skipSlug) {
        result += `<a href="/glossary/${slug}">${termTitle}</a>`;
        linkedTerms.add(slug);
        i += match[0].length;
        continue;
      }
    }

    result += char;
    i++;
  }

  return result;
}
