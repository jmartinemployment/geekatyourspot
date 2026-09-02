import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { listEntries } from "@/lib/content-writer/content";
import { getAllGlossaryTerms } from "@/lib/glossary";

const BASE_URL = "https://geekatyourspot.com";
const APP_DIR = path.join(process.cwd(), "src", "app");

function staticRoutes(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === "page.tsx") {
      routes.push("/" + segments.join("/"));
      continue;
    }
    if (!entry.isDirectory()) continue;

    const name = entry.name;
    if (name.startsWith("_") || name.startsWith("@") || name === "api") continue;
    if (name.startsWith("[")) continue;

    const isGroup = name.startsWith("(") && name.endsWith(")");
    routes.push(
      ...staticRoutes(path.join(dir, name), isGroup ? segments : [...segments, name]),
    );
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const pages = staticRoutes(APP_DIR).map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
  }));

  const posts = listEntries("blog").map((post) => ({
    url: post.href.startsWith("http") ? post.href : `${BASE_URL}${post.href}`,
    lastModified: post.date ? new Date(post.date) : now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const glossaryTerms = await getAllGlossaryTerms();
  const glossaryPages = glossaryTerms.map((term) => ({
    url: `${BASE_URL}/glossary/${term.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...pages, ...posts, ...glossaryPages].sort((a, b) =>
    a.url.localeCompare(b.url),
  );
}
