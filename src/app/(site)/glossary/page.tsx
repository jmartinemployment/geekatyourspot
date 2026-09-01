import type { Metadata } from "next";
import { getGlossaryTermsGroupedByLetter } from "@/lib/glossary";
import { GlossaryBookLeather } from "@/components/glossary/glossary-book-leather";

export const metadata: Metadata = {
  title: "Glossary",
  description:
    "A comprehensive glossary of customer experience, AI, and business automation terms. Look up definitions for key concepts in chatbots, marketing automation, and customer support.",
  alternates: {
    canonical: "https://geekatyourspot.com/glossary",
  },
};

export default function GlossaryPage() {
  const groupedTerms = getGlossaryTermsGroupedByLetter();

  // JSON-LD DefinedTermSet schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glossary",
    url: "https://geekatyourspot.com/glossary",
    hasDefinedTerm: Object.entries(groupedTerms).flatMap(([, terms]) =>
      terms.map((term) => ({
        "@type": "DefinedTerm",
        name: term.title,
        url: `https://geekatyourspot.com/glossary/${term.slug}`,
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
        <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Glossary
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Essential terms and definitions for customer experience,
            automation, and business technology.
          </p>
        </div>

        {/* Index */}
        <GlossaryBookLeather groupedTerms={groupedTerms} />
        </div>
      </div>
    </>
  );
}
