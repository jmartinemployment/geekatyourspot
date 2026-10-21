import fs from "node:fs";
import path from "node:path";
import { SITE_URL } from "@/lib/seo/organization";
import { TOOLS_MENU, USE_CASES_MENU } from "@/data/navigation/site-menus";

/**
 * /llms.txt, a short map of the site for AI assistants. The llms.txt format is Markdown by
 * specification; this file is the one published exception to the Markdown rule.
 *
 * Which pages are listed comes from the Use Cases and Tools menus, so a page added to a menu is
 * listed on the next build. Each entry's link text and sentence are the page's own metadata title
 * and description, read from its page.tsx, the same way sitemap.ts reads page files.
 *
 * If a listed page's title or description can't be read, the route serves a 404 rather than a
 * partial file.
 */

export const dynamic = "force-static";

const SITE_DIR = path.join(process.cwd(), "src", "app", "(site)");

const SUMMARY =
  "Geek @ Your Spot LLC is an AI consultancy that builds practical AI tools for South Florida small businesses to scale, reduce errors, and cut manual work.";

type Section = Readonly<{ heading: string; hrefs: readonly string[] }>;

function sections(): Section[] {
  return [
    { heading: "About", hrefs: ["/", "/about", "/methodology"] },
    {
      heading: "Use Cases",
      hrefs: [
        "/use-cases",
        ...USE_CASES_MENU.flatMap((department) => [
          department.href,
          ...department.items.map((item) => item.href),
        ]),
      ],
    },
    ...USE_CASES_MENU.flatMap((department) =>
      department.categories.map((category) => ({
        heading: category.label,
        hrefs: category.items.map((item) => item.href),
      })),
    ),
    { heading: "Tools", hrefs: ["/tools", ...TOOLS_MENU.map((department) => department.href)] },
    { heading: "Blog", hrefs: ["/blog"] },
  ];
}

/** A quoted string starting at `start`, or null when there is none or it holds an escape or a `${}`. */
function readString(source: string, start: number): string | null {
  const quote = source[start];
  if (quote !== '"' && quote !== "'" && quote !== "`") return null;

  let value = "";
  for (let i = start + 1; i < source.length; i++) {
    const ch = source[i];
    if (ch === quote) return value;
    if (ch === "\\") {
      const next = source[i + 1];
      if (next !== '"' && next !== "'" && next !== "`" && next !== "\\") return null;
      value += next;
      i++;
      continue;
    }
    if (quote === "`" && ch === "$" && source[i + 1] === "{") return null;
    value += ch;
  }
  return null;
}

/** A metadata field's value: a string, or a constant in the same file that holds one. */
function readValue(source: string, start: number): string | null {
  const literal = readString(source, start);
  if (literal !== null) return literal;

  const name = /^[A-Z_][A-Z0-9_]*/.exec(source.slice(start))?.[0];
  if (!name) return null;

  const declaration = new RegExp(`(?:^|\\n)(?:export )?const ${name}\\s*=\\s*`).exec(source);
  if (!declaration) return null;
  return readString(source, declaration.index + declaration[0].length);
}

/** The title and description a page sets in its metadata, or null when either can't be read. */
function readPage(href: string): Readonly<{ title: string; description: string }> | null {
  const file = path.join(SITE_DIR, ...href.split("/").filter(Boolean), "page.tsx");
  if (!fs.existsSync(file)) return null;

  const source = fs.readFileSync(file, "utf8");
  const metadataStart = source.search(
    /export const metadata\b|export (?:const|async function) generateMetadata\b/,
  );
  if (metadataStart === -1) return null;

  // The first title and description after the metadata export are its top-level fields.
  const field = (name: string): string | null => {
    const match = new RegExp(`\\n\\s*${name}:\\s*`).exec(source.slice(metadataStart));
    return match ? readValue(source, metadataStart + match.index + match[0].length) : null;
  };

  const title = field("title");
  const description = field("description");
  if (!title || !description) return null;
  return { title, description };
}

export function GET(): Response {
  const listed = new Set<string>();
  const lines = ["# Geek @ Your Spot LLC", "", `> ${SUMMARY}`];

  for (const section of sections()) {
    const entries: string[] = [];
    for (const href of section.hrefs) {
      if (listed.has(href)) continue;
      listed.add(href);

      const page = readPage(href);
      if (page === null) return new Response(null, { status: 404 });
      entries.push(`- [${page.title}](${SITE_URL}${href}): ${page.description}`);
    }
    if (entries.length > 0) lines.push("", `## ${section.heading}`, "", ...entries);
  }

  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
