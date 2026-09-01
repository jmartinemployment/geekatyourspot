import Link from "next/link";
import type { GlossaryTerm } from "@/types/glossary";
import { linkGlossaryTerms } from "@/lib/glossary-linker";

interface TermDetailProps {
  term: GlossaryTerm;
}

export function TermDetail({ term }: TermDetailProps) {
  const hasDefinitions = term.definitions && term.definitions.length > 0;
  const simpleDefinition = !hasDefinitions && term.definition;

  return (
    <article className="space-y-8">
      {/* Header */}
      <header className="border-b-2 border-gray-200 pb-8 dark:border-gray-700">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          {term.title}
        </h1>
        {term.category && (
          <div className="mt-4 flex items-center gap-2">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-900 dark:bg-blue-900/30 dark:text-blue-200">
              {term.category}
            </span>
          </div>
        )}
      </header>

      {/* Dictionary-style definitions (new format with examples) */}
      {hasDefinitions && term.definitions && (
        <section className="space-y-8">
          {term.definitions.map((def, index) => (
            <div key={index} className="space-y-3">
              <div className="flex gap-6 items-start">
                <div className="flex gap-2">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 min-w-fit">
                    {def.partOfSpeech}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {index + 1}.
                  </span>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed ml-10">
                {def.text}
              </p>
              {def.example && (
                <p className="ml-10 pl-4 text-gray-600 dark:text-gray-400 italic border-l-2 border-gray-300 dark:border-gray-600">
                  "{def.example}"
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Simple definition (fallback for entries without examples) */}
      {simpleDefinition && (
        <section className="prose prose-sm max-w-none dark:prose-invert">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {simpleDefinition}
          </p>
        </section>
      )}

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
