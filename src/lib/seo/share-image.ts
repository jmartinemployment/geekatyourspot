/**
 * The one share image every page names in its openGraph and twitter metadata. It is the PNG that
 * src/app/opengraph-image.tsx renders. A page that sets its own openGraph replaces the inherited
 * object whole, so a page that leaves images out shares no image at all; naming this constant is
 * how each page keeps it.
 */
export const SHARE_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Geek @ Your Spot LLC - Future-Proof Your Business. Increase efficiency and reduce costs. Let's automate your processes.",
  type: "image/png",
} as const;
