import type { GlossaryTerm } from "@/types/glossary";

interface TermDetailProps {
  term: GlossaryTerm;
}

export function TermDetail({ term }: TermDetailProps) {
  const hasDefinitions = term.definitions && term.definitions.length > 0;
  const simpleDefinition = !hasDefinitions && term.definition;

  return (
    <article className="space-y-8 font-serif max-w-4xl">
      {/* Dictionary Entry Header */}
      <header className="border-b-4 border-black dark:border-white pb-6">
        <div className="flex items-baseline gap-6 mb-2">
          <h1 className="text-6xl font-black text-black dark:text-white tracking-tight">
            {term.title}
          </h1>
          {term.category && (
            <span className="italic text-sm font-semibold text-gray-600 dark:text-gray-400">
              {term.category}
            </span>
          )}
        </div>
      </header>

      {/* Multiple Definitions - Dictionary Style */}
      {hasDefinitions && term.definitions && (
        <section className="space-y-6">
          {term.definitions.map((def, index) => (
            <div key={index} className="space-y-2">
              <div className="flex gap-3 items-baseline">
                <span className="font-bold text-base text-black dark:text-white">
                  {index + 1}.
                </span>
                <span className="italic text-sm text-gray-700 dark:text-gray-300 font-semibold">
                  {def.partOfSpeech}
                </span>
              </div>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base ml-6">
                {def.text}
              </p>
              {def.example && (
                <p className="text-gray-700 dark:text-gray-300 text-sm ml-6 pl-4 border-l-3 border-gray-400 dark:border-gray-600 italic">
                  "{def.example}"
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Simple Definition Fallback */}
      {simpleDefinition && (
        <section>
          <div className="flex gap-3 items-baseline mb-2">
            <span className="font-bold text-base text-black dark:text-white">
              1.
            </span>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-base ml-6">
            {simpleDefinition}
          </p>
        </section>
      )}
    </article>
  );
}
