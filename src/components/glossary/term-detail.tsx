import type { GlossaryTerm } from "@/types/glossary";

interface TermDetailProps {
  term: GlossaryTerm;
}

export function TermDetail({ term }: TermDetailProps) {
  const hasDefinitions = term.definitions && term.definitions.length > 0;
  const simpleDefinition = !hasDefinitions && term.definition;

  return (
    <article className="space-y-8">
      {/* Dictionary Entry Header */}
      <header className="border-b-4 border-white/25 pb-6">
        <div className="mb-2 flex flex-wrap items-baseline gap-x-6 gap-y-2">
          <h1 className="font-black font-(--font-sora) text-[9vw] leading-[0.95] text-white shadow-text sm:text-6xl md:text-7xl lg:text-[4.0rem]">
            {term.title}
          </h1>
          {term.category && (
            <span className="text-base font-bold uppercase tracking-wide text-[#C83803]">
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
                <span className="text-xl font-bold text-white shadow-text lg:text-2xl">
                  {index + 1}.
                </span>
                <span className="text-lg font-semibold italic text-white/70 lg:text-xl">
                  {def.partOfSpeech}
                </span>
              </div>
              <p className="ml-6 text-xl leading-relaxed text-white shadow-text lg:text-2xl">
                {def.text}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Simple Definition Fallback */}
      {simpleDefinition && (
        <section>
          <div className="mb-2 flex items-baseline gap-3">
            <span className="text-xl font-bold text-white shadow-text lg:text-2xl">1.</span>
          </div>
          <p className="ml-6 text-xl leading-relaxed text-white shadow-text lg:text-2xl">
            {simpleDefinition}
          </p>
        </section>
      )}

      {term.whyItMatters && (
        <section className="space-y-3">
          <h2 className="text-white text-[6vw] sm:text-3xl lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
            Why It Matters
          </h2>
          <p className="text-xl leading-relaxed text-white shadow-text lg:text-2xl">
            {term.whyItMatters}
          </p>
        </section>
      )}

      {term.systemsContext && (
        <section className="space-y-3">
          <h2 className="text-white text-[6vw] sm:text-3xl lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
            Systems Context
          </h2>
          <p className="text-xl leading-relaxed text-white shadow-text lg:text-2xl">
            {term.systemsContext}
          </p>
        </section>
      )}
    </article>
  );
}
