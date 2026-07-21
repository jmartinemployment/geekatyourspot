import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { toString as mdastToString } from "mdast-util-to-string";
import type { Root, RootContent, Heading, Code, Html } from "mdast";
import type { MdxJsxFlowElement, MdxJsxAttribute } from "mdast-util-mdx-jsx";

/**
 * Additive, separate from `content.ts` — that module reads pre-parsed
 * `sections` off frontmatter (produced by content-writer-v2). This parser
 * instead walks raw MDX body text itself, for callers that need a flat,
 * index-addressable array (e.g. `array.filter(el => el.sectionId === id)`)
 * rather than a nested section tree.
 */

const EXCLUDED_COMPONENTS = new Set(["InternalTracker", "AdBanner", "SecretNotes"]);

export type FlatMdxElementType =
  | "heading"
  | "paragraph"
  | "code"
  | "mdxJsxFlowElement"
  | "html"
  | "other";

export interface FlatMdxHeadingElement {
  type: "heading";
  textContent: string;
  depth: number;
  sectionId: string | null;
  sectionTitle: string | null;
}

export interface FlatMdxJsxElement {
  type: "mdxJsxFlowElement";
  textContent: string;
  componentName: string;
  props: Record<string, string>;
  /** Depth of the most recent heading above this element (any level), or null before the first heading. */
  depth: number | null;
  sectionId: string | null;
  sectionTitle: string | null;
}

export interface FlatMdxCodeElement {
  type: "code";
  textContent: string;
  language: string | null;
  codeValue: string;
  /** Depth of the most recent heading above this element (any level), or null before the first heading. */
  depth: number | null;
  sectionId: string | null;
  sectionTitle: string | null;
}

export interface FlatMdxGenericElement {
  type: "paragraph" | "html" | "other";
  textContent: string;
  /** Depth of the most recent heading above this element (any level), or null before the first heading. */
  depth: number | null;
  sectionId: string | null;
  sectionTitle: string | null;
}

export type FlatMdxElement =
  | FlatMdxHeadingElement
  | FlatMdxJsxElement
  | FlatMdxCodeElement
  | FlatMdxGenericElement;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function attrValueToString(value: MdxJsxAttribute["value"]): string {
  if (value == null) return "true";
  if (typeof value === "string") return value;
  return value.value ?? "";
}

function jsxAttributesToProps(node: MdxJsxFlowElement): Record<string, string> {
  const props: Record<string, string> = {};
  for (const attr of node.attributes) {
    if (attr.type !== "mdxJsxAttribute") continue;
    props[attr.name] = attrValueToString(attr.value);
  }
  return props;
}

function isMdxJsxFlowElement(node: RootContent): node is MdxJsxFlowElement {
  return node.type === "mdxJsxFlowElement";
}

/**
 * Parses raw MDX content into a flat, one-dimensional array. H2 headings
 * are section boundaries: every element after an H2 (including h3-h6
 * headings) carries that H2's sectionId/sectionTitle until the next H2.
 */
export function parseMdxToFlatArray(mdxContent: string, title?: string): FlatMdxElement[] {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(mdxContent) as Root;

  const result: FlatMdxElement[] = [];
  let sectionId: string | null = null;
  let sectionTitle: string | null = null;
  let currentDepth: number | null = null;

  if (title) {
    currentDepth = 1;
    result.push({
      type: "heading",
      textContent: title,
      depth: 1,
      sectionId: null,
      sectionTitle: null,
    });
  }

  for (const node of tree.children) {
    if (isMdxJsxFlowElement(node)) {
      if (EXCLUDED_COMPONENTS.has(node.name ?? "")) continue;

      result.push({
        type: "mdxJsxFlowElement",
        textContent: mdastToString(node),
        componentName: node.name ?? "",
        props: jsxAttributesToProps(node),
        depth: currentDepth,
        sectionId,
        sectionTitle,
      });
      continue;
    }

    if (node.type === "heading") {
      const heading = node as Heading;
      const textContent = mdastToString(heading);
      currentDepth = heading.depth;

      if (heading.depth === 2) {
        sectionTitle = textContent;
        sectionId = slugify(textContent);

        result.push({
          type: "heading",
          textContent,
          depth: heading.depth,
          sectionId: null,
          sectionTitle: null,
        });
        continue;
      }

      result.push({
        type: "heading",
        textContent,
        depth: heading.depth,
        sectionId,
        sectionTitle,
      });
      continue;
    }

    if (node.type === "code") {
      const code = node as Code;
      result.push({
        type: "code",
        textContent: mdastToString(code),
        language: code.lang ?? null,
        codeValue: code.value,
        depth: currentDepth,
        sectionId,
        sectionTitle,
      });
      continue;
    }

    if (node.type === "html") {
      const html = node as Html;
      result.push({
        type: "html",
        textContent: html.value,
        depth: currentDepth,
        sectionId,
        sectionTitle,
      });
      continue;
    }

    if (node.type === "paragraph") {
      result.push({
        type: "paragraph",
        textContent: mdastToString(node),
        depth: currentDepth,
        sectionId,
        sectionTitle,
      });
      continue;
    }

    result.push({
      type: "other",
      textContent: mdastToString(node),
      depth: currentDepth,
      sectionId,
      sectionTitle,
    });
  }

  return result;
}
