import Link from "next/link";
import type { GlossaryTerm } from "@/types/glossary";
import { linkGlossaryTerms } from "@/lib/glossary-linker";

interface TermDetailProps {
  term: GlossaryTerm;
}

export function TermDetail({ term }: TermDetailProps) {
  // Link glossary terms in the definition, but not this term itself
  const linkedDefinition = linkGlossaryTerms(term.definition, {
    skipSlug: term.slug,
  });

  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="space-y-4 border-b-2 border-gray-200 pb-8 dark:border-gray-700">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {term.title}
        </h1>
        {term.category && (
          <div className="flex items-center gap-2">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 dark:bg-blue-900/30 dark:text-blue-200">
              {term.category}
            </span>
          </div>
        )}
      </header>

      {/* Definition */}
      <section className="prose prose-sm max-w-none dark:prose-invert">
        <div
          className="space-y-4 text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: linkedDefinition }}
        />
      </section>

      {/* Navigation */}
      <div className="flex gap-4 border-t border-gray-200 pt-6 dark:border-gray-700">
        <Link
          href="/glossary"
          className="inline-flex items-center gap-2 font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          ← Back to Glossary
        </Link>
      </div>
    </article>
  );
}
