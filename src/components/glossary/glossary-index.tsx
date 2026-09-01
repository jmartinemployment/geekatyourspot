import Link from "next/link";
import type { GlossaryTerm } from "@/types/glossary";
import { LetterJumpNav } from "./letter-jump-nav";

interface GlossaryIndexProps {
  groupedTerms: Record<string, GlossaryTerm[]>;
}

function getTermPreview(term: GlossaryTerm): string {
  if (term.shortSummary) {
    return term.shortSummary;
  }
  if (term.definitions && term.definitions.length > 0) {
    return term.definitions[0].text;
  }
  return term.definition || "";
}

function LetterPage({ letter, terms }: { letter: string; terms: GlossaryTerm[] }) {
  return (
    <div className="space-y-6 px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b border-gray-300 dark:border-gray-600 pb-2">
        {letter}
      </h2>
      <div className="space-y-5">
        {terms.map((term) => (
          <Link
            key={term.slug}
            href={`/glossary/${term.slug}`}
            className="group block transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              {term.title}
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
              {getTermPreview(term)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function GlossaryIndex({ groupedTerms }: GlossaryIndexProps) {
  const letters = Object.keys(groupedTerms).sort();

  return (
    <div className="space-y-8">
      <LetterJumpNav letters={letters} />

      {/* Book spread layout */}
      <div className="space-y-8">
        {letters.map((letter, index) => {
          const nextLetter = letters[index + 1];

          if (!nextLetter) {
            // Odd letter at end - show full width
            return (
              <section
                key={letter}
                id={`letter-${letter}`}
                className="scroll-mt-32"
              >
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <LetterPage letter={letter} terms={groupedTerms[letter]} />
                </div>
              </section>
            );
          }

          // Skip if this is already processed as right page
          if (index % 2 === 1) return null;

          // Book spread: two pages side by side
          return (
            <section
              key={`spread-${letter}-${nextLetter}`}
              id={`letter-${letter}`}
              className="scroll-mt-32"
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="flex shadow-2xl">
                  {/* Left page with depth */}
                  <div className="flex-1 relative">
                    <LetterPage letter={letter} terms={groupedTerms[letter]} />
                    {/* Right edge shadow for depth */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-r from-transparent to-black opacity-10"></div>
                  </div>

                  {/* Book spine - page edges visible */}
                  <div className="w-8 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50 dark:from-yellow-950 dark:via-yellow-900 dark:to-yellow-950 relative overflow-hidden border-l border-r border-gray-400 dark:border-gray-600">
                    {/* Visible page edges - stacked pages */}
                    <div className="absolute inset-0 bg-repeat-y" style={{backgroundImage: "repeating-linear-gradient(0deg, #d4a574 0px, #d4a574 1px, #f5deb3 1px, #f5deb3 6px)"}}></div>
                    {/* Binding shadow in center */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-r from-black to-transparent opacity-30"></div>
                  </div>

                  {/* Right page with depth */}
                  <div className="flex-1 relative">
                    <LetterPage
                      letter={nextLetter}
                      terms={groupedTerms[nextLetter]}
                    />
                    {/* Left edge shadow for depth */}
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-l from-transparent to-black opacity-10"></div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
