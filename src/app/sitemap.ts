import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { listEntries } from "@/lib/content-writer/content";
import { HAND_CODED_POSTS } from "@/data/blog/hand-coded-posts";
import { getAllGlossaryTerms } from "@/lib/glossary";
import { DEFAULT_LETTER, groupByLetter, letterHref } from "@/lib/glossary-letters";

const BASE_URL = "https://geekatyourspot.com";
const APP_DIR = path.join(process.cwd(), "src", "app");

/**
 * A page that tells search engines not to index it does not belong in the sitemap, or the two
 * signals contradict each other. Pages opt out with `robots: { index: false, ... }` in their
 * metadata, so that is what this looks for.
 */
function isNoindex(pageFile: string): boolean {
  return /robots:\s*\{\s*index:\s*false/.test(fs.readFileSync(pageFile, "utf8"));
}

function staticRoutes(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isFile() && entry.name === "page.tsx") {
      if (!isNoindex(path.join(dir, entry.name))) routes.push("/" + segments.join("/"));
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

/**
 * `lastModified` is set only where the page carries a real date: a post's own date. Every other
 * page has none to give, so it is left out rather than stamped with the build time, which would
 * mark all of them modified on every deploy.
 */
const HAND_CODED_POST_DATES = new Map(HAND_CODED_POSTS.map((post) => [post.href, post.date]));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = staticRoutes(APP_DIR).map((route) => {
    const date = HAND_CODED_POST_DATES.get(route);

    return {
      url: `${BASE_URL}${route === "/" ? "" : route}`,
      ...(date ? { lastModified: new Date(date) } : {}),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : route.split("/").length <= 2 ? 0.8 : 0.6,
    };
  });

  const posts = listEntries("blog").map((post) => ({
    url: post.href.startsWith("http") ? post.href : `${BASE_URL}${post.href}`,
    ...(post.date ? { lastModified: new Date(post.date) } : {}),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const glossaryTerms = await getAllGlossaryTerms();
  const glossaryPages = glossaryTerms.map((term) => ({
    url: `${BASE_URL}/glossary/${term.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Letters past A each have their own page and canonical; A is the bare /glossary, listed above.
  const letterPages = [...groupByLetter(glossaryTerms).keys()]
    .filter((letter) => letter !== DEFAULT_LETTER)
    .map((letter) => ({
      url: `${BASE_URL}${letterHref(letter)}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  return [...pages, ...posts, ...glossaryPages, ...letterPages].sort((a, b) =>
    a.url.localeCompare(b.url),
  );
}
