import { gtmLinkId } from "@/lib/gtm/link-id";

/**
 * The scheduler section's element id. A button marked `data-scheduler-link` scrolls the page to
 * it without changing the URL: the site uses no # URLs.
 */
export const SCHEDULER_ID = "consultationAppointment2xl";

/**
 * The analytics id of a button that scrolls to the scheduler. It is the id the button had when it
 * was a link to the section, so GTM triggers keyed on it keep firing.
 */
export function schedulerLinkId(suffix: string): string {
  return gtmLinkId(["anchor", SCHEDULER_ID], suffix);
}

/** The hero's "Get Your Free AI Assessment" button. */
export const SCHEDULER_HERO_LINK_ID = schedulerLinkId("hero-assessment");
