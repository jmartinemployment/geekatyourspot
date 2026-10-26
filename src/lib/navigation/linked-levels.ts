import fs from "node:fs";
import path from "node:path";
import { BREADCRUMB_LEVELS } from "@/data/navigation/breadcrumb-levels";

/**
 * The levels in BREADCRUMB_LEVELS whose route has a page, checked against the app directory at
 * build time the way the tools hubs check their cards. A level without one, such as
 * /tools/accounting/accounts-payable, stays plain text in the navbar's trail and out of the
 * structured data until its page is built. Server only: it reads the file system.
 */
export const LINKED_LEVELS: readonly string[] = [...BREADCRUMB_LEVELS.keys()].filter((level) =>
  fs.existsSync(path.join(process.cwd(), "src", "app", "(site)", ...level.split("/").filter(Boolean), "page.tsx")),
);
