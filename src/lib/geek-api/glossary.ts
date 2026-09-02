import { geekApiFetch } from "./client";
import type { GlossaryDefinition, GlossaryTerm } from "@/types/glossary";

const GLOSSARY_TAG = "glossary";

type ApiGlossaryDefinition = {
  sortOrder: number;
  partOfSpeech: string;
  text: string;
  example?: string | null;
};

type ApiGlossaryTermSummary = {
  slug: string;
  title: string;
  category?: string | null;
  shortSummary?: string | null;
};

type ApiGlossaryTerm = ApiGlossaryTermSummary & {
  id: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  definitions: ApiGlossaryDefinition[];
};

function mapDefinition(def: ApiGlossaryDefinition): GlossaryDefinition {
  return {
    partOfSpeech: def.partOfSpeech,
    text: def.text,
    example: def.example ?? undefined,
  };
}

function mapTerm(term: ApiGlossaryTerm): GlossaryTerm {
  const definitions = term.definitions?.map(mapDefinition) ?? [];

  return {
    title: term.title,
    slug: term.slug,
    category: term.category ?? undefined,
    shortSummary: term.shortSummary ?? undefined,
    definitions: definitions.length > 0 ? definitions : undefined,
    definition:
      definitions.length === 1 && !definitions[0].example
        ? definitions[0].text
        : undefined,
  };
}

export async function getAllGlossaryTerms(): Promise<GlossaryTerm[]> {
  const summaries = await geekApiFetch<ApiGlossaryTermSummary[]>(
    "/api/glossary/terms",
    { tags: [GLOSSARY_TAG], revalidate: 3600 },
  );

  return summaries.map((summary) => ({
    title: summary.title,
    slug: summary.slug,
    category: summary.category ?? undefined,
    shortSummary: summary.shortSummary ?? undefined,
  }));
}

export async function getAllGlossarySlugs(): Promise<string[]> {
  const terms = await getAllGlossaryTerms();
  return terms.map((term) => term.slug);
}

export async function getGlossaryTerm(
  slug: string,
): Promise<GlossaryTerm | null> {
  try {
    const term = await geekApiFetch<ApiGlossaryTerm>(
      `/api/glossary/terms/${encodeURIComponent(slug)}`,
      { tags: [GLOSSARY_TAG, `glossary-${slug}`], revalidate: 3600 },
    );
    return mapTerm(term);
  } catch {
    return null;
  }
}
