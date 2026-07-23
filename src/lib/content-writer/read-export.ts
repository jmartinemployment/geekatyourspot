import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content-writer-output");

export interface ExportedPage {
  slug: string;
  meta: Record<string, string>;
  bodyHtml: string;
}

function decodeEntities(value: string): string {
  return value
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export function listExportSlugs(collection: string): string[] {
  const dir = path.join(CONTENT_DIR, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".html"))
    .map((file) => file.replace(/\.html$/, ""));
}

export function readExport(collection: string, slug: string): ExportedPage | null {
  const filePath = path.join(CONTENT_DIR, collection, `${slug}.html`);
  if (!fs.existsSync(filePath)) return null;

  const html = fs.readFileSync(filePath, "utf-8");

  const meta: Record<string, string> = {};
  for (const match of html.matchAll(/<meta name="([^"]+)" content="([^"]*)">/g)) {
    meta[match[1]] = decodeEntities(match[2]);
  }

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  if (titleMatch) meta.title = decodeEntities(titleMatch[1]);

  const bodyMatch = html.match(/<body>([\s\S]*)<\/body>/);
  const bodyHtml = bodyMatch ? bodyMatch[1] : "";

  return { slug, meta, bodyHtml };
}
