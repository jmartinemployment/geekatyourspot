"use client";

import { useState } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/types/glossary";

interface GlossaryBookLeatherProps {
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
    <div className="space-y-6 px-6 py-8 h-full overflow-y-auto font-serif">
      <h2 className="text-3xl font-black text-gray-900 border-b-2 border-gray-300 pb-3">
        {letter}
      </h2>
      <div className="space-y-4">
        {terms.map((term) => (
          <Link
            key={term.slug}
            href={`/glossary/${term.slug}`}
            className="group block transition-colors hover:text-blue-600"
          >
            <h3 className="font-bold text-base text-gray-900 group-hover:text-blue-600">
              {term.title}
            </h3>
            {term.category && (
              <p className="text-xs italic text-gray-600 mt-1">
                {term.category}
              </p>
            )}
            <p className="text-xs text-gray-700 mt-1 line-clamp-2 leading-relaxed">
              {getTermPreview(term)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function GlossaryBookLeather({ groupedTerms }: GlossaryBookLeatherProps) {
  const [currentSpread, setCurrentSpread] = useState(0);

  const letters = Object.keys(groupedTerms).sort();
  const spreads: Array<{ left: string; right: string | null }> = [];

  for (let i = 0; i < letters.length; i += 2) {
    spreads.push({
      left: letters[i],
      right: letters[i + 1] || null,
    });
  }

  const spread = spreads[currentSpread];

  if (!spread || !letters.length) {
    return <div className="w-full bg-[#025E73] min-h-screen py-5" />;
  }

  return (
    <>
      <section id="glossary-book-section" className="w-full bg-[#025E73] min-h-screen py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 mb-8">
            {/* Left Page */}
            <div className="col-span-6 w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden"
              onClick={() => setCurrentSpread(Math.max(0, currentSpread - 1))}
              style={{
                boxShadow: "inset 2px 0 4px rgba(0, 0, 0, 0.1)",
                scrollbarWidth: "none",
              }}
            >
              <div className="bg-neutral-100 dark:bg-neutral-950 relative overflow-y-auto [&::-webkit-scrollbar]:hidden cursor-pointer hover:opacity-95 transition-opacity w-full h-full">
                <LetterPage letter={spread.left} terms={groupedTerms[spread.left]} />
              </div>
            </div>

            {/* Right Page */}
            <div className="col-span-6 w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden"
              onClick={() => setCurrentSpread(Math.min(spreads.length - 1, currentSpread + 1))}
              style={{
                boxShadow: "inset -2px 0 4px rgba(0, 0, 0, 0.1)",
                scrollbarWidth: "none",
              }}
            >
              <div className="bg-neutral-100 dark:bg-neutral-950 relative overflow-y-auto [&::-webkit-scrollbar]:hidden cursor-pointer hover:opacity-95 transition-opacity w-full h-full">
                {spread.right ? (
                  <LetterPage letter={spread.right} terms={groupedTerms[spread.right]} />
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>

          {/* Letter Jump Navigation */}
          <nav className="flex flex-wrap gap-2 justify-center rounded-lg border border-gray-300 bg-white p-4 shadow-md">
            {letters.map((letter) => {
              const spreadIndex = spreads.findIndex(s => s.left === letter);
              const hasItems = spreadIndex !== -1;
              return (
                <button
                  key={letter}
                  onClick={() => {
                    if (hasItems) {
                      setCurrentSpread(spreadIndex);
                    }
                  }}
                  disabled={!hasItems}
                  className={`inline-flex h-10 w-10 items-center justify-center rounded font-semibold text-sm transition-colors ${
                    hasItems
                      ? spreadIndex === currentSpread
                        ? "bg-[#025E73] text-white"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                      : "bg-gray-50 text-gray-300 cursor-not-allowed"
                  }`}
                >
                  {letter}
                </button>
              );
            })}
          </nav>
        </div>
      </section>
    </>
  );
}
