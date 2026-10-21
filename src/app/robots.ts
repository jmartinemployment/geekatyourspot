import type { MetadataRoute } from "next";

const BASE_URL = "https://geekatyourspot.com";

export default function robots(): MetadataRoute.Robots {
  const allowIndexing = process.env.ALLOW_INDEXING === "true";

  // Until launch, every crawler is disallowed from the whole site. At launch,
  // ALLOW_INDEXING=true opens crawling and publishes the sitemap, except for
  // Bytespider, ByteDance's training crawler, which stays blocked.
  if (!allowIndexing) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: [
      { userAgent: "Bytespider", disallow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
