import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllGlossaryTerms, getGlossaryTerm } from "@/lib/glossary";
import { TermDetail } from "@/components/glossary/term-detail";

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

  return {
    title: `${term.title} — Glossary`,
    description:
      term.shortSummary || term.definition.substring(0, 160),
    alternates: {
      canonical: `https://geekatyourspot.com/glossary/${term.slug}`,
    },
    openGraph: {
      type: "website",
      title: term.title,
      description: term.shortSummary || term.definition.substring(0, 160),
      url: `https://geekatyourspot.com/glossary/${term.slug}`,
    },
    twitter: {
      card: "summary",
      title: term.title,
      description: term.shortSummary || term.definition.substring(0, 160),
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
    description: term.definition,
    url: `https://geekatyourspot.com/glossary/${term.slug}`,
    inDefinedTermSet: "https://geekatyourspot.com/glossary",
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
