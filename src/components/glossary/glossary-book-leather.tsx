"use client";

import { useState } from "react";
import Link from "next/link";
import type { GlossaryTerm } from "@/types/glossary";
import { LetterJumpNav } from "./letter-jump-nav";

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
    <div className="space-y-6 px-6 py-8 h-full">
      <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-2">
        {letter}
      </h2>
      <div className="space-y-5">
        {terms.map((term) => (
          <Link
            key={term.slug}
            href={`/glossary/${term.slug}`}
            className="group block transition-colors hover:text-blue-600"
          >
            <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600">
              {term.title}
            </h3>
            <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
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

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8 px-4">
      {/* Book Spread */}
      <div
        key={`spread-${currentSpread}`}
        id={`letter-${spread.left}`}
        className="scroll-mt-32"
      >
        <div className="flex bg-white rounded-lg shadow-2xl overflow-hidden min-h-screen">
          {/* Left Page */}
          <div
            onClick={() => setCurrentSpread(Math.max(0, currentSpread - 1))}
            className="flex-1 bg-neutral-100 dark:bg-neutral-950 relative overflow-y-auto [&::-webkit-scrollbar]:hidden cursor-pointer hover:opacity-95 transition-opacity"
            style={{
              boxShadow: "inset 2px 0 4px rgba(0, 0, 0, 0.1)",
              scrollbarWidth: "none",
            }}
          >
            <LetterPage letter={spread.left} terms={groupedTerms[spread.left]} />
          </div>

          {/* Right Page */}
          {spread.right ? (
            <div
              onClick={() => setCurrentSpread(Math.min(spreads.length - 1, currentSpread + 1))}
              className="flex-1 bg-neutral-100 dark:bg-neutral-950 relative overflow-y-auto [&::-webkit-scrollbar]:hidden cursor-pointer hover:opacity-95 transition-opacity"
              style={{
                boxShadow: "inset -2px 0 4px rgba(0, 0, 0, 0.1)",
                scrollbarWidth: "none",
              }}
            >
              <LetterPage letter={spread.right} terms={groupedTerms[spread.right]} />
            </div>
          ) : (
            <div
              onClick={() => setCurrentSpread(Math.min(spreads.length - 1, currentSpread + 1))}
              className="flex-1 bg-neutral-100 dark:bg-neutral-950 cursor-pointer hover:opacity-95 transition-opacity"
            />
          )}
        </div>

      </div>

      {/* Letter Jump Navigation */}
      <nav className="flex flex-wrap gap-1 rounded-lg border border-gray-200 bg-neutral-100 dark:bg-neutral-950 p-3 shadow-sm">
        {letters.map((letter) => {
          const spreadIndex = spreads.findIndex(s => s.left === letter);
          return (
            <button
              key={letter}
              onClick={() => setCurrentSpread(Math.max(0, spreadIndex))}
              className="inline-flex h-8 w-8 items-center justify-center rounded font-semibold text-sm transition-colors hover:bg-gray-100 text-black"
            >
              {letter}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
