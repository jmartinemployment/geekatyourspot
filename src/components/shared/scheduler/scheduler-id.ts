import { gtmLinkId } from "@/lib/gtm/link-id";

/**
 * The scheduler section's element id. Every scheduler link on the site is a plain
 * `<a href="#consultationAppointment2xl">`, the one # URL the site uses: a real destination on
 * every page, and the address an outside listing can send a visitor to. A plain anchor, not
 * next/link: the browser scrolls to the fragment on every press, while Link does nothing when
 * the address already carries the hash.
 */
export const SCHEDULER_ID = "consultationAppointment2xl";

/**
 * The analytics id of a link to the scheduler, `gys-link-anchor-consultationappointment2xl-<suffix>`,
 * the id these links have always had, so GTM triggers keyed on it keep firing.
 */
export function schedulerLinkId(suffix: string): string {
  return gtmLinkId(["anchor", SCHEDULER_ID], suffix);
}

/** The hero's "Get Your Free AI Assessment" link. */
export const SCHEDULER_HERO_LINK_ID = schedulerLinkId("hero-assessment");
