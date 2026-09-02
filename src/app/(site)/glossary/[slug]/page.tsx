import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllGlossaryTerms, getGlossaryTerm } from "@/lib/glossary";
import { TermDetail } from "@/components/glossary/term-detail";
import type { GlossaryTerm } from "@/types/glossary";

function getTermDescription(term: GlossaryTerm): string {
  if (term.definitions && term.definitions.length > 0) {
    return term.definitions.map((d) => d.text).join(" ");
  }
  return term.definition || "";
}

export function generateStaticParams() {
  return getAllGlossaryTerms().map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);

  if (!term) {
    return {};
  }

  const description = (
    term.shortSummary || getTermDescription(term)
  ).substring(0, 160);

  return {
    title: `${term.title} — Glossary`,
    description,
    alternates: {
      canonical: `https://geekatyourspot.com/glossary/${term.slug}`,
    },
    openGraph: {
      type: "website",
      title: term.title,
      description,
      url: `https://geekatyourspot.com/glossary/${term.slug}`,
    },
    twitter: {
      card: "summary",
      title: term.title,
      description,
    },
  };
}

export default async function TermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);

  if (!term) {
    notFound();
  }

  // JSON-LD DefinedTerm schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.title,
    description: getTermDescription(term),
    url: `https://geekatyourspot.com/glossary/${term.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <TermDetail term={term} />
      </div>
    </>
  );
}
