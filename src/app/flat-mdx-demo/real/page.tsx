import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { parseMdxToFlatArray } from "@/lib/content-writer/mdxFlatParser";
import { FlatMdxViewer } from "@/components/content-writer/flat-mdx-viewer";

const MDX_PATH = path.join(
  process.cwd(),
  "content-writer-output/use-cases/optimizing-business-with-predictive-cash-flow-forecasting.mdx",
);

export default function FlatMdxRealDemoPage() {
  const raw = fs.readFileSync(MDX_PATH, "utf-8");
  const { content } = matter(raw);
  const elements = parseMdxToFlatArray(content);

  return <FlatMdxViewer elements={elements} activeSectionId="key-strategies-for-accurate-cash-flow-predictions" />;
}
