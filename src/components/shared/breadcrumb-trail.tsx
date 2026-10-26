import { LINKED_LEVELS } from "@/lib/navigation/linked-levels";
import { BreadcrumbTrailClient } from "@/components/shared/breadcrumb-trail-client";

type BreadcrumbTrailProps = Readonly<{
  /** The page's own name, its H1. */
  current: string;
  /** Set on the first breakpoint copy only, so the page carries one BreadcrumbList. */
  withJsonLd?: boolean;
}>;

/**
 * The hierarchy-based trail at the top of every page's hero except the home page's: the grid's
 * first row, spanning every column, naming Home and the levels of the URL above the page. The
 * first breakpoint copy also carries the page's BreadcrumbList structured data.
 */
export function BreadcrumbTrail({ current, withJsonLd = false }: BreadcrumbTrailProps) {
  return <BreadcrumbTrailClient current={current} linkedLevels={LINKED_LEVELS} withJsonLd={withJsonLd} />;
}
