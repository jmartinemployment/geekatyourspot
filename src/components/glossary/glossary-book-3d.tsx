"use client";

import Link from "next/link";
import type { GlossaryTerm } from "@/types/glossary";
import { LetterJumpNav } from "./letter-jump-nav";

interface GlossaryBook3DProps {
  groupedTerms: Record<string, GlossaryTerm[]>;
  currentSpread?: number;
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

export function GlossaryBook3D({ groupedTerms }: GlossaryBook3DProps) {
  const letters = Object.keys(groupedTerms).sort();
  const spreads = [];

  // Create spreads (pairs of letters)
  for (let i = 0; i < letters.length; i += 2) {
    spreads.push({
      left: letters[i],
      right: letters[i + 1] || null,
    });
  }

  return (
    <div className="space-y-8">
      <LetterJumpNav letters={letters} />

      {/* 3D Book Container */}
      <div className="flex justify-center items-center py-12">
        <div
          style={{
            perspective: "1200px",
          }}
          className="w-full max-w-5xl"
        >
          {spreads.map((spread, idx) => (
            <div
              key={`spread-${idx}`}
              id={`letter-${spread.left}`}
              className="scroll-mt-32 mb-16"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* 3D Book */}
              <div
                style={{
                  transformStyle: "preserve-3d",
                  transform: "rotateX(0deg)",
                }}
                className="relative mx-auto"
              >
                {/* Book container with perspective shadow */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl"
                  style={{
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3), inset -2px 0 8px rgba(0, 0, 0, 0.1)",
                  }}>
                  <div className="flex bg-white relative h-96">
                    {/* Left Page */}
                    <div
                      className="flex-1 bg-gradient-to-r from-yellow-50 to-white relative"
                      style={{
                        boxShadow: "inset 2px 0 4px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <LetterPage letter={spread.left} terms={groupedTerms[spread.left]} />
                    </div>

                    {/* Spine with grey gradient - darker middle, transparent edges */}
                    <div
                      className="w-10 relative overflow-hidden"
                      style={{
                        background: "linear-gradient(to right, rgba(200, 200, 200, 0), rgba(220, 220, 220, 0.4), rgba(200, 200, 200, 0))",
                        boxShadow: "inset -1px 0 2px rgba(0, 0, 0, 0.05), inset 1px 0 2px rgba(255, 255, 255, 0.2)",
                      }}
                    >
                      {/* Curved surface effect using radial gradient */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "radial-gradient(ellipse at 50% 0%, rgba(255, 255, 255, 0.1), transparent 70%)",
                        }}
                      />

                      {/* Center binding line */}
                      <div
                        className="absolute left-1/2 top-0 bottom-0 w-0.5"
                        style={{
                          transform: "translateX(-50%)",
                          background: "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2), transparent)",
                        }}
                      />
                    </div>

                    {/* Right Page */}
                    {spread.right ? (
                      <div
                        className="flex-1 bg-gradient-to-l from-yellow-50 to-white relative"
                        style={{
                          boxShadow: "inset -2px 0 4px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <LetterPage letter={spread.right} terms={groupedTerms[spread.right]} />
                      </div>
                    ) : (
                      <div className="flex-1 bg-gradient-to-l from-yellow-50 to-white" />
                    )}
                  </div>

                  {/* Bottom edge depth */}
                  <div
                    className="h-2 bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400"
                    style={{
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
