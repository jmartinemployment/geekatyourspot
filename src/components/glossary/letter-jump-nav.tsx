"use client";

import { cn } from "@/lib/utils";

interface LetterJumpNavProps {
  letters: string[];
  currentLetter?: string;
}

export function LetterJumpNav({ letters, currentLetter }: LetterJumpNavProps) {
  return (
    <nav className="sticky top-20 z-40 flex flex-wrap gap-1 rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      {letters.map((letter) => (
        <a
          key={letter}
          href={`#letter-${letter}`}
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded font-semibold text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800",
            currentLetter === letter
              ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
              : "text-gray-600 dark:text-gray-400",
          )}
        >
          {letter}
        </a>
      ))}
    </nav>
  );
}
