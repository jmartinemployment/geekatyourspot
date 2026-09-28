import type { GlossaryTerm } from "@/types/glossary";

interface TermDetailProps {
  term: GlossaryTerm;
}

export function TermDetail({ term }: TermDetailProps) {
  const hasDefinitions = term.definitions && term.definitions.length > 0;
  const simpleDefinition = !hasDefinitions && term.definition;

  return (
    <article className="max-w-4xl space-y-8">
      {/* Dictionary Entry Header */}
      <header className="border-b-4 border-white/25 pb-6">
        <div className="mb-2 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h1 className="font-black font-(--font-sora) text-[9vw] leading-[0.95] tracking-tight text-white shadow-text sm:text-5xl lg:text-6xl">
            {term.title}
          </h1>
          {term.category && (
            <span className="text-sm font-bold uppercase tracking-wide text-[#C83803]">
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
              <div className="flex items-baseline gap-3">
                <span className="text-base font-bold text-white">
                  {index + 1}.
                </span>
                <span className="text-sm font-semibold italic text-white/70">
                  {def.partOfSpeech}
                </span>
              </div>
              <p className="ml-6 text-base leading-relaxed text-white/80">
                {def.text}
              </p>
              {def.example && (
                <p className="ml-6 border-l-3 border-[#C83803] pl-4 text-sm italic text-white/70">
                  &ldquo;{def.example}&rdquo;
                </p>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Simple Definition Fallback */}
      {simpleDefinition && (
        <section>
          <div className="mb-2 flex items-baseline gap-3">
            <span className="text-base font-bold text-white">1.</span>
          </div>
          <p className="ml-6 text-base leading-relaxed text-white/80">
            {simpleDefinition}
          </p>
        </section>
      )}
    </article>
  );
}
