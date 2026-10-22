/**
 * Lists every figure in the given files or folders and says whether a source URL sits next to it.
 *
 * A figure is a percentage, a dollar amount, a number with million, billion or trillion, a
 * multiplier such as 3x, a ratio such as 1 in 9, or a count of businesses, users, apps and the
 * like. The writer attributes a figure in words and writes no URL (GeekBackend GccGenerateService,
 * rule 2), so "beside it" means a URL or an attribution cue such as "according to" or "reports" on
 * the same line or within two lines either side. A figure with neither is marked CHECK and read by
 * hand. JSX and HTML attributes are stripped before matching, so class names never count as figures.
 *
 * Usage: npm run figures -- <file or folder> [more...]
 * Exit code 1 while any figure is marked CHECK, so the rule fails closed until each is read.
 */
import fs from "node:fs";
import path from "node:path";

const PATTERNS: Array<[string, RegExp]> = [
  ["percent", /\b\d{1,3}(?:\.\d+)?\s?(?:%|percent)\b|\b\d{1,3}(?:\.\d+)?%/gi],
  ["currency", /\$\s?\d[\d,]*(?:\.\d+)?(?:\s?(?:k|K|M|million|billion|trillion))?/g],
  ["multiplier", /\b\d+(?:\.\d+)?x\b/g],
  ["magnitude", /\b\d[\d,]*(?:\.\d+)?\s?(?:million|billion|trillion)\b/gi],
  ["ratio", /\b\d+\s(?:in|out of)\s\d+\b/gi],
  ["count", /\b\d[\d,]{2,}\+?\s(?:apps|applications|businesses|companies|customers|users|integrations|employees|invoices|transactions|hours|tasks|shipments|locations|reviews|clients)\b/gi],
];
const URL_PATTERN = /https?:\/\//;
const ATTRIBUTION_CUE =
  /\b(according to|reports?|reported|says|said|states?|found|lists?|cites?|estimates?|per |study|survey|research|pricing page|help center|help centre|documentation|case study|announced|published)\b/i;
const WINDOW = 2;
const EXTENSIONS = new Set([".tsx", ".ts", ".html"]);

function collect(target: string): string[] {
  const stat = fs.statSync(target);
  if (stat.isFile()) return EXTENSIONS.has(path.extname(target)) ? [target] : [];
  return fs
    .readdirSync(target, { withFileTypes: true })
    .flatMap((entry) => collect(path.join(target, entry.name)))
    .sort();
}

/** The line with its JSX and HTML attributes removed, so only text and string content remain. */
function textOnly(line: string): string {
  return line
    .replace(/\s[\w:-]+=\{[^}]*\}/g, "")
    .replace(/\s[\w:-]+="[^"]*"/g, "")
    .replace(/\s[\w:-]+='[^']*'/g, "");
}

const targets = process.argv.slice(2);
if (targets.length === 0) {
  console.log("Usage: npm run figures -- <file or folder> [more...]");
  process.exit(2);
}

let total = 0;
let unsourced = 0;
for (const target of targets) {
  for (const file of collect(target)) {
    const lines = fs.readFileSync(file, "utf8").split("\n");
    lines.forEach((raw, index) => {
      const line = textOnly(raw);
      if (/^\s*(import |export |\/\/|\/\*|\*)/.test(raw)) return;
      for (const [type, pattern] of PATTERNS) {
        pattern.lastIndex = 0;
        let match: RegExpExecArray | null;
        while ((match = pattern.exec(line))) {
          if (/\bFortune\s+500\b/.test(line) && match[0].startsWith("500")) continue;
          total += 1;
          const context = lines
            .slice(Math.max(0, index - WINDOW), index + WINDOW + 1)
            .join("\n");
          const sourced = URL_PATTERN.test(context) || ATTRIBUTION_CUE.test(context);
          if (!sourced) unsourced += 1;
          const text = line.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
          console.log(
            `${sourced ? "sourced" : "CHECK  "} ${file}:${index + 1} [${type}] ${match[0].trim()} | ${text.slice(0, 140)}`
          );
        }
      }
    });
  }
}
console.log(`\n${total} figures, ${unsourced} marked CHECK for a reading.`);
process.exit(unsourced > 0 ? 1 : 0);
