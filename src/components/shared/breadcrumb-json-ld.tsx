import { LINKED_LEVELS } from "@/lib/navigation/linked-levels";
import { BreadcrumbJsonLdClient } from "@/components/shared/breadcrumb-json-ld-client";

type BreadcrumbJsonLdProps = Readonly<{
  /** The page's own name, its H1. */
  current: string;
}>;

/**
 * The page's BreadcrumbList structured data: Home, each level of the URL that has a page, then the
 * page itself. It sits once in the hero, on the first breakpoint copy. The visible trail is the
 * navbar's second row (owner, 2026-10-26), which names the levels above the page.
 */
export function BreadcrumbJsonLd({ current }: BreadcrumbJsonLdProps) {
  return <BreadcrumbJsonLdClient current={current} linkedLevels={LINKED_LEVELS} />;
}
