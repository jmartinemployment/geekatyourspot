import type { Service } from "schema-dts";

/**
 * The business as structured data. The site layout prints SITE_GRAPH on every page, so the
 * Organization, its logo and the WebSite are defined once and every other node points at them by
 * @id: publishers, authors, providers and the founder's worksFor.
 *
 * The name, address, phone and hours must agree with the Google Business Profile, or the two read
 * as different businesses. The profile names the business "Geek @ Your Spot", which is why that
 * form is the alternateName.
 */

export const SITE_URL = "https://geekatyourspot.com";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const LOGO_ID = `${SITE_URL}/#logo`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const FOUNDER_ID = `${SITE_URL}/about#jeff-martin`;

/** The Google Business Profile, opened by its place id. */
const GBP_MAP_URL = "https://www.google.com/maps/place/?q=place_id:ChIJ0_NMl_5-Y24RH4XyLq8Pg3s";

export const AREA_SERVED = [
  { "@type": "City", name: "Delray Beach" },
  { "@type": "AdministrativeArea", name: "Palm Beach County" },
  { "@type": "AdministrativeArea", name: "Broward County" },
  { "@type": "AdministrativeArea", name: "Miami-Dade County" },
  { "@type": "Place", name: "South Florida" },
] as const;

/** How a node names the business as its publisher, author or provider. */
export const ORGANIZATION_REF = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Geek @ Your Spot LLC",
};

export const SITE_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": ORGANIZATION_ID,
      name: "Geek @ Your Spot LLC",
      legalName: "Geek @ Your Spot LLC",
      alternateName: "Geek @ Your Spot",
      url: SITE_URL,
      logo: { "@id": LOGO_ID },
      image: `${SITE_URL}/images/action-figure.jpeg`,
      description:
        "AI consultancy building practical AI tools for South Florida small businesses to scale, reduce errors, and cut manual work.",
      founder: { "@id": FOUNDER_ID },
      telephone: "+1-561-526-3512",
      hasMap: GBP_MAP_URL,
      sameAs: [
        GBP_MAP_URL,
        "https://www.facebook.com/geekatyourspot",
        "https://www.linkedin.com/company/geekatyourspot",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "2025 NW 18th Street",
        addressLocality: "Delray Beach",
        addressRegion: "FL",
        postalCode: "33445",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
      ],
      areaServed: AREA_SERVED,
      priceRange: "$$",
      foundingDate: "2024",
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "AI Integration",
        "Business Automation",
        "Process Optimization",
      ],
    },
    {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: `${SITE_URL}/icon.png`,
      contentUrl: `${SITE_URL}/icon.png`,
      width: 180,
      height: 180,
      caption: "Geek @ Your Spot LLC",
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "Geek @ Your Spot LLC",
      alternateName: "Geek @ Your Spot",
      description: "AI consulting for South Florida small businesses",
      inLanguage: "en-US",
      publisher: { "@id": ORGANIZATION_ID },
    },
  ],
};

/**
 * The service a use case pillar describes, provided by the business across its service area.
 * The pillar's Article names it as `about`, and posts on the same subject can point at its @id.
 */
export function pillarService({
  url,
  name,
  description,
}: Readonly<{ url: string; name: string; description: string }>): Service {
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType: `${name} implementation`,
    description,
    url,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: [...AREA_SERVED],
  };
}
