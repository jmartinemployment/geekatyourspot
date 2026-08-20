import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { listEntries } from "@/lib/content-writer/content";

const BASE_URL = "https://geekatyourspot.com";
const APP_DIR = path.join(process.cwd(), "src", "app");

/**
 * Walks the app directory for `page.tsx` files and derives their public URL paths, so adding a
 * page puts it in the sitemap without anyone remembering to. Route groups like `(site)` are
 * stripped, and dynamic segments are skipped -- those come from their own content source below.
 */
function staticRoutes(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === "page.tsx") {
      routes.push("/" + segments.join("/"));
      continue;
    }
    if (!entry.isDirectory()) continue;

    const name = entry.name;
    // Private folders (_foo), parallel/intercepted routes (@foo), and API handlers never render.
    if (name.startsWith("_") || name.startsWith("@") || name === "api") continue;
    // Dynamic segments ([slug], [...all]) can't be enumerated from the filesystem.
    if (name.startsWith("[")) continue;

    // Route groups -- (site), (newspaper-blog) -- organize files without affecting the URL.
    const isGroup = name.startsWith("(") && name.endsWith(")");
    routes.push(
      ...staticRoutes(path.join(dir, name), isGroup ? segments : [...segments, name]),
    );
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = staticRoutes(APP_DIR).map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    // The homepage outranks section indexes, which outrank leaf pages.
    priority: route === "/" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));

  const posts = listEntries("blog").map((post) => ({
    url: post.href.startsWith("http") ? post.href : `${BASE_URL}${post.href}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...pages, ...posts].sort((a, b) => a.url.localeCompare(b.url));
}
