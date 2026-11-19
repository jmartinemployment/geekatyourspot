import type { CSSProperties } from "react";

interface MethogologyRevealOnScrollProps {
  readonly children: React.ReactNode;
  readonly delay?: number;
  readonly direction?: "up" | "down" | "left" | "right";
  readonly className?: string;
}

// Server component. The reveal is pure CSS: `.reveal-on-scroll` in globals.css binds a slide-in
// keyframe to the element's own position in the viewport with `animation-timeline: view()`, so no
// JavaScript, state, ref or IntersectionObserver is needed and this file stays server-rendered.
// A browser without scroll-driven animations, or a visitor who prefers reduced motion, simply gets
// the element in its final place with no animation.
//
// `direction` picks the slide origin (a data attribute the CSS reads); `delay` staggers a group by
// shifting where in the scroll range the slide starts, passed through as a CSS custom property.
export function MethogologyRevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
}: MethogologyRevealOnScrollProps) {
  return (
    <div
      className={className ? `reveal-on-scroll ${className}` : "reveal-on-scroll"}
      data-reveal-direction={direction}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
