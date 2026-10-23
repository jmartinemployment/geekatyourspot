/**
 * The business as structured data. The site layout prints SITE_GRAPH on every page. The site uses
 * no # URLs, so no node carries an @id: a node that names the business as its publisher, author or
 * provider identifies it by its name and site URL, as ORGANIZATION_REF does.
 *
 * The name, address, phone and hours must agree with the Google Business Profile, or the two read
 * as different businesses. The profile names the business "Geek @ Your Spot", which is why that
 * form is the alternateName.
 */

export const SITE_URL = "https://geekatyourspot.com";

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
const ORGANIZATION_REF = {
  "@type": "Organization",
  name: "Geek @ Your Spot LLC",
  url: SITE_URL,
};

export const SITE_GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      name: "Geek @ Your Spot LLC",
      legalName: "Geek @ Your Spot LLC",
      // "Geek at Your Spot LLC" is the form Facebook allows; it refuses the @ in a page name (owner, 2026-10-22).
      alternateName: ["Geek @ Your Spot", "Geek at Your Spot LLC"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
        contentUrl: `${SITE_URL}/icon.png`,
        width: 180,
        height: 180,
        caption: "Geek @ Your Spot LLC",
      },
      image: `${SITE_URL}/images/action-figure.jpeg`,
      description:
        "AI consultancy building practical AI tools for South Florida small businesses to scale, reduce errors, and cut manual work.",
      founder: {
        "@type": "Person",
        name: "Jeff Martin",
        url: `${SITE_URL}/about`,
      },
      telephone: "+1-561-526-3512",
      email: "contact@geekatyourspot.com",
      hasMap: GBP_MAP_URL,
      // The Business Profile's pin, so the node says where the business is and not only its address.
      geo: {
        "@type": "GeoCoordinates",
        latitude: 26.48314,
        longitude: -80.09532,
      },
      sameAs: [
        GBP_MAP_URL,
        "https://www.facebook.com/geekatyourspot",
        "https://www.linkedin.com/company/geekatyourspot",
        // The BBB profile (file opened 2026-10-21). Checked 2026-10-23: it carries this node's name,
        // address and phone. A profile goes in this list only after its page returns 200 with the
        // same name, address and phone as the site.
        "https://www.bbb.org/us/fl/delray-beach/profile/automation-consultants/geek-your-spot-llc-0633-92089707",
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
      // 2006 is the year the owner first did business under the name (owner, 2026-10-23: "2006").
      // The LLC was filed on 2026-08-28 (Florida register L26000455335); that is the incorporation
      // date, which BBB shows separately. The directory profiles carry 2026 until the owner changes them.
      foundingDate: "2006",
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "AI Integration",
        "Business Automation",
        "Process Optimization",
      ],
    },
    {
      "@type": "WebSite",
      url: SITE_URL,
      name: "Geek @ Your Spot LLC",
      alternateName: "Geek @ Your Spot",
      description: "AI consulting for South Florida small businesses",
      inLanguage: "en-US",
      publisher: ORGANIZATION_REF,
    },
  ],
};
