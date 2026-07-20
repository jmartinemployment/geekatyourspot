import { COLLECTIONS, listEntries } from "../src/lib/content-writer/content.ts";

const BASE_PATH: Record<(typeof COLLECTIONS)[number], string> = {
  "use-cases": "/use-cases",
  blog: "/blog",
  tools: "/tools",
};

for (const collection of COLLECTIONS) {
  const entries = listEntries(collection);
  if (entries.length === 0) continue;

  console.log(`\n${collection} (${entries.length}):`);
  for (const entry of entries) {
    console.log(`  ${BASE_PATH[collection]}/${entry.department}/${entry.slug}`);
  }
}
