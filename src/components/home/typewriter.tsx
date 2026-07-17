"use client";
import { useMotionValue, animate, useMotionValueEvent } from "motion/react";
import { useEffect, useState, useMemo } from "react";

interface TypewriterProps {
  readonly words: string[];
}

function getSlicedText(word: string, progress: number): string {
  return word.slice(0, Math.round(progress));
}

export default function Typewriter({ words }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const count = useMotionValue(0);

  // Find the longest word once to reserve its space (No layout shift)
  const longestWord = useMemo(
    () => [...words].sort((a, b) => b.length - a.length)[0] || "",
    [words],
  );

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayText(getSlicedText(words[index] || "", latest));
  });

  useEffect(() => {
    if (!words.length) return;
    const controls = animate(count, words[index].length, {
      duration: 1.5,
      ease: "easeInOut",
      onComplete: () => {
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
          count.set(0);
        }, 1500);
      },
    });
    return () => controls.stop();
  }, [index, words, count]);

  return (
    <>
      <div className="lg:hidden">
        <span style={{ position: "relative", display: "inline-block" }}>
          {/* Ghost text: Invisible, but reserves exact width/height */}
          <span
            className="sm:text-6xl md:text-7xl font-black font-[var(--font-sora)] shadow-text invisible pointer-events-none"
            aria-hidden="true"
          >
            {longestWord}
          </span>

          {/* Actual animated text: Positioned over the ghost */}

          <span className="text-[#8C2703] sm:text-6xl md:text-7xl font-black font-[var(--font-sora)] shadow-text absolute left-0 top-0">
            {displayText}
          </span>
        </span>
      </div>

      <div className="hidden lg:block">
        <span style={{ position: "relative", display: "inline-block" }}>
          {/* Ghost text: Invisible, but reserves exact width/height */}
          <span
            className="lg:7xl xl:text-[6.5rem] leading-[0.625]  font-black font-[var(--font-sora)] shadow-text invisible pointer-events-none"
            aria-hidden="true"
          >
            {longestWord}
          </span>

          {/* Actual animated text: Positioned over the ghost */}

          <span className="text-[#8C2703] lg:text-7xl xl:text-[6.5rem] leading-[0.625] font-black font-[var(--font-sora)] shadow-text absolute left-0 top-0">
            {displayText}
          </span>
        </span>
      </div>
    </>
  );
}
