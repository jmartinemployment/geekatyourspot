"use client";

import { cn } from "@/lib/utils";

interface LetterJumpNavProps {
  letters: string[];
  currentLetter?: string;
  sticky?: boolean;
}

export function LetterJumpNav({ letters, currentLetter, sticky = true }: LetterJumpNavProps) {
  return (
    <nav className={cn("flex flex-wrap gap-1 rounded-lg border border-gray-200 bg-yellow-50 p-3 shadow-sm dark:border-gray-800 dark:bg-gray-950", sticky && "sticky top-20 z-40")}>
      {letters.map((letter) => (
        <a
          key={letter}
          href={`#letter-${letter}`}
          className={cn(
            "inline-flex h-8 w-8 items-center justify-center rounded font-semibold text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 text-black",
            currentLetter === letter
              ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
              : "",
          )}
        >
          {letter}
        </a>
      ))}
    </nav>
  );
}
