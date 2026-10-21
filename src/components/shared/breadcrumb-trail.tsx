import fs from "node:fs";
import path from "node:path";
import { BREADCRUMB_LEVELS } from "@/data/navigation/breadcrumb-levels";
import { BreadcrumbTrailClient } from "@/components/shared/breadcrumb-trail-client";

/**
 * The levels in BREADCRUMB_LEVELS whose route has a page, checked against the app directory at
 * build time the way the tools hubs check their cards. A level without one, such as
 * /tools/accounting/accounts-payable, stays plain text in the trail and out of the markup until
 * its page is built.
 */
const LINKED_LEVELS: readonly string[] = [...BREADCRUMB_LEVELS.keys()].filter((level) =>
  fs.existsSync(path.join(process.cwd(), "src", "app", "(site)", ...level.split("/").filter(Boolean), "page.tsx")),
);

type BreadcrumbTrailProps = Readonly<{
  /** The page's own name, its H1. */
  current: string;
  /** Set on the first breakpoint copy only, so the page carries one BreadcrumbList. */
  withJsonLd?: boolean;
}>;

/**
 * The hierarchy-based trail above every page's H1 except the home page's: Home, then one step
 * per level of the URL, then the page itself.
 */
export function BreadcrumbTrail({ current, withJsonLd = false }: BreadcrumbTrailProps) {
  return <BreadcrumbTrailClient current={current} linkedLevels={LINKED_LEVELS} withJsonLd={withJsonLd} />;
}
