import Link from "next/link";
import type { GlossaryTerm } from "@/types/glossary";
import { LetterJumpNav } from "./letter-jump-nav";

interface GlossaryIndexProps {
  groupedTerms: Record<string, GlossaryTerm[]>;
}

export function GlossaryIndex({ groupedTerms }: GlossaryIndexProps) {
  const letters = Object.keys(groupedTerms).sort();

  return (
    <div className="space-y-8">
      <LetterJumpNav letters={letters} />

      {letters.map((letter) => (
        <section key={letter} id={`letter-${letter}`} className="scroll-mt-32">
          <h2 className="mb-6 border-b-2 border-gray-200 pb-3 text-2xl font-bold text-gray-900 dark:border-gray-700 dark:text-white">
            {letter}
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
            {groupedTerms[letter].map((term) => (
              <Link
                key={term.slug}
                href={`/glossary/${term.slug}`}
                className="group rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-400 hover:bg-blue-50 dark:border-gray-700 dark:hover:border-blue-600 dark:hover:bg-blue-950/30"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {term.title}
                </h3>
                {term.shortSummary && (
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {term.shortSummary}
                  </p>
                )}
                {!term.shortSummary && term.definition && (
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                    {term.definition}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
