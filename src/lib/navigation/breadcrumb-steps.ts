import { BREADCRUMB_LEVELS } from "@/data/navigation/breadcrumb-levels";

export type Step = Readonly<{ name: string; href: string; linked: boolean }>;

/**
 * Home, then one step per level of the URL above the page, in order. Returns null on the home page
 * and when a level has no name in BREADCRUMB_LEVELS, so no trail ever shows a guessed name. A level
 * is linked only when its route has a page, which the server finds at build time.
 */
export function levelStepsFor(pathname: string, linkedLevels: readonly string[]): Step[] | null {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const steps: Step[] = [{ name: "Home", href: "/", linked: true }];
  for (let depth = 1; depth < segments.length; depth += 1) {
    const href = `/${segments.slice(0, depth).join("/")}`;
    const name = BREADCRUMB_LEVELS.get(href);
    if (!name) return null;
    steps.push({ name, href, linked: linkedLevels.includes(href) });
  }
  return steps;
}

/** The levels above the page, then the page itself under its own name, its H1. */
export function stepsFor(pathname: string, current: string, linkedLevels: readonly string[]): Step[] | null {
  const levels = levelStepsFor(pathname, linkedLevels);
  if (!levels) return null;
  const segments = pathname.split("/").filter(Boolean);
  return [...levels, { name: current, href: `/${segments.join("/")}`, linked: false }];
}
