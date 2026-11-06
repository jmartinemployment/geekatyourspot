"use client";

import { useEffect, useRef, useState } from "react";

interface MethogologyRevealOnScrollProps {
  readonly children: React.ReactNode;
  readonly delay?: number;
  readonly direction?: "up" | "down" | "left" | "right";
  readonly className?: string;
}

// Where each direction starts. The element slides from here to its place, and the browser
// interpolates `translate: none` as no offset, so it ends with no transform at all.
const START_OFFSET = {
  up: "0px 40px",
  down: "0px -40px",
  left: "40px 0px",
  right: "-40px 0px",
} as const;

export function MethogologyRevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
}: MethogologyRevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  // Reveal once, when the element is 100px inside the viewport, then stop watching.
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-100px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        translate: revealed ? "none" : START_OFFSET[direction],
        transition: `translate 0.5s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
