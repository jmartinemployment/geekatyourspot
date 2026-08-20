import type { MetadataRoute } from "next";

const BASE_URL = "https://geekatyourspot.com";

export default function robots(): MetadataRoute.Robots {
  const allowIndexing = process.env.ALLOW_INDEXING === "true";

  // Crawling stays allowed even before launch. The `X-Robots-Tag: noindex` header in
  // next.config.ts is what keeps us out of the results, and a crawler has to be able to
  // fetch the page to see it -- a `Disallow: /` here would hide that header and let bare
  // URLs get indexed anyway. Pre-launch we just withhold the sitemap.
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(allowIndexing
      ? { sitemap: `${BASE_URL}/sitemap.xml`, host: BASE_URL }
      : {}),
  };
}
