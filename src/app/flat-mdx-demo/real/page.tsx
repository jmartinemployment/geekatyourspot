import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseMdxToFlatArray } from "@/lib/content-writer/mdxFlatParser";
import { FlatMdxViewer } from "@/components/content-writer/flat-mdx-viewer";

const SLUG = "optimizing-business-with-predictive-cash-flow-forecasting";
const CONTENT_DIR = path.join(process.cwd(), "content-writer-output");

// The pipeline's export layout has moved more than once (collection-first vs.
// department-first folders) — glob for the slug instead of hardcoding a path,
// so this demo page doesn't crash the whole build when the layout shifts again.
function findMdxFile(dir: string, slug: string): string | null {
  if (!fs.existsSync(dir)) return null;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const found = findMdxFile(entryPath, slug);
      if (found) return found;
    } else if (entry.name === `${slug}.mdx` || entry.name === `${slug}.html`) {
      return entryPath;
    }
  }
  return null;
}

export default function FlatMdxRealDemoPage() {
  const filePath = findMdxFile(CONTENT_DIR, SLUG);
  if (!filePath) {
    return <p>Demo content not found — {SLUG}.mdx/.html has moved or been removed from content-writer-output/.</p>;
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const elements = parseMdxToFlatArray(content, data.title);

  return <FlatMdxViewer elements={elements} activeSectionId="key-strategies-for-accurate-cash-flow-predictions" />;
}
