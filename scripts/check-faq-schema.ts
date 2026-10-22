/**
 * Checks every prerendered page's FAQPage markup against the page's visible text.
 *
 * After `next build`, each static page is written to .next/server/app as HTML. For each one, the
 * script reads every application/ld+json block, finds the FAQPage nodes, and looks for each
 * Question's name in the page's visible text with scripts and styles removed. A question that is
 * in the markup but not on the page is reported, and so is a block that does not parse as JSON.
 * Both are the mismatch the audits found once on the approval workflows pillar, which carried a
 * data entry FAQ.
 *
 * Usage: npm run check:faq   (after next build; npm run build runs it itself)
 *        npm run check:faq -- <folder of html files>   to check another folder
 * Exit code 1 when any page has a missing question or an unparseable block, so the check fails
 * closed. Nothing is changed.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.argv[2] ? join(process.cwd(), process.argv[2]) : join(process.cwd(), ".next", "server", "app");

type Finding = { page: string; kind: "missing" | "parse"; detail: string };

function htmlFiles(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      out.push(...htmlFiles(full));
    } else if (name.endsWith(".html") && !name.startsWith("_")) {
      out.push(full);
    }
  }
  return out;
}

const ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
};

function decodeEntities(text: string): string {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec: string) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-z]+);/gi, (match, name: string) => ENTITIES[name.toLowerCase()] ?? match);
}

/** Lowercase, straight quotes, single spaces: the same form for the question and for the page. */
function normalize(text: string): string {
  return decodeEntities(text)
    .replace(/[‘’‚]/g, "'")
    .replace(/[“”„]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function visibleText(html: string): string {
  return normalize(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  );
}

function faqQuestions(value: unknown, out: string[]): void {
  if (Array.isArray(value)) {
    for (const item of value) faqQuestions(item, out);
    return;
  }
  if (value === null || typeof value !== "object") return;
  const record = value as Record<string, unknown>;
  const type = record["@type"];
  const isFaq = type === "FAQPage" || (Array.isArray(type) && type.includes("FAQPage"));
  if (isFaq && Array.isArray(record.mainEntity)) {
    for (const question of record.mainEntity) {
      if (question !== null && typeof question === "object") {
        const name = (question as Record<string, unknown>).name;
        if (typeof name === "string") out.push(name);
      }
    }
  }
  for (const nested of Object.values(record)) faqQuestions(nested, out);
}

function check(file: string): { findings: Finding[]; questions: number } {
  const page = "/" + relative(ROOT, file).replace(/\.html$/, "").replace(/^\(site\)\//, "");
  const html = readFileSync(file, "utf8");
  const findings: Finding[] = [];
  const questions: string[] = [];
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      faqQuestions(JSON.parse(decodeEntities(match[1])), questions);
    } catch {
      findings.push({ page, kind: "parse", detail: "an application/ld+json block is not valid JSON" });
    }
  }
  if (questions.length === 0) return { findings, questions: 0 };
  const text = visibleText(html);
  for (const question of questions) {
    if (!text.includes(normalize(question))) {
      findings.push({ page, kind: "missing", detail: question });
    }
  }
  return { findings, questions: questions.length };
}

function main(): number {
  let files: string[];
  try {
    files = htmlFiles(ROOT);
  } catch {
    console.error(`No prerendered pages under ${ROOT}. Run npm run build first.`);
    return 1;
  }
  const findings: Finding[] = [];
  let pagesWithFaq = 0;
  let total = 0;
  for (const file of files) {
    const result = check(file);
    if (result.questions > 0) pagesWithFaq += 1;
    total += result.questions;
    findings.push(...result.findings);
  }
  for (const finding of findings) {
    console.log(`${finding.kind.toUpperCase()}  ${finding.page}  ${finding.detail}`);
  }
  console.log(
    `${files.length} pages, ${pagesWithFaq} with FAQPage, ${total} questions, ${findings.length} findings.`,
  );
  return findings.length === 0 ? 0 : 1;
}

process.exitCode = main();
