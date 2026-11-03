/**
 * Checks the navbar's menu data against the app directory before the build.
 *
 * Reads only source files: src/data/navigation/site-menus.ts, the page files under src/app/(site)
 * and the exported blog posts under content-writer-output. It fails when
 *   - a department, category or item href has no page (a page.tsx, or for a blog post, an export
 *     whose canonical link is that route),
 *   - an item href is listed twice in one menu (a category may share its own department's href,
 *     which is how a category with no page of its own links to its department),
 *   - a category id or a department id is used twice,
 *   - a page under use-cases or tools is in no menu and is not on the short list below.
 *
 * Usage: npm run check:nav   (npm run build runs it before next build)
 * Exit code 1 when anything is found, so the check fails closed. Nothing is changed.
 */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { BLOG_MENU, TOOLS_MENU, USE_CASES_MENU } from "../src/data/navigation/site-menus.ts";
import type { SiteMenuConfiguration } from "../src/data/navigation/site-menus.ts";

const ROOT = process.cwd();
const APP = join(ROOT, "src", "app", "(site)");
const EXPORTS = join(ROOT, "content-writer-output");

/** Index pages are reached from their own sections and are not menu entries. */
const INDEX_PAGES: readonly string[] = ["/use-cases", "/tools"];

/**
 * Pages that are deliberately in no menu, each with the page that links to it. A page not on this
 * list and not in a menu is reported, so a new page cannot be left out by accident. None today.
 */
const NOT_IN_MENU: ReadonlyMap<string, string> = new Map<string, string>();

const MENUS: ReadonlyArray<readonly [string, SiteMenuConfiguration]> = [
  ["USE_CASES_MENU", USE_CASES_MENU],
  ["BLOG_MENU", BLOG_MENU],
  ["TOOLS_MENU", TOOLS_MENU],
];

const problems: string[] = [];

function pageFiles(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...pageFiles(full));
    else if (name === "page.tsx") out.push(full);
  }
  return out;
}

function exportFiles(dir: string): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...exportFiles(full));
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

const routeOf = (file: string): string => {
  const rel = relative(APP, file).split(sep).slice(0, -1);
  return "/" + rel.join("/");
};

const pageRoutes = new Set(pageFiles(APP).map(routeOf));

const exportedRoutes = new Set<string>();
for (const file of exportFiles(EXPORTS)) {
  const match = /rel="canonical" href="https:\/\/geekatyourspot\.com([^"]+)"/.exec(readFileSync(file, "utf8"));
  if (match) exportedRoutes.add(match[1].replace(/\/$/, ""));
}

function hasPage(href: string): boolean {
  if (pageRoutes.has(href)) return true;
  return href.startsWith("/blog/") && exportedRoutes.has(href);
}

const seenCategoryIds = new Map<string, string>();
const menuHrefs = new Set<string>();

for (const [name, menu] of MENUS) {
  const seenItems = new Map<string, string>();
  const seenDepartments = new Set<string>();

  for (const department of menu.departments) {
    if (seenDepartments.has(department.id)) problems.push(`${name}: department id "${department.id}" appears twice`);
    seenDepartments.add(department.id);
    menuHrefs.add(department.href);
    if (!hasPage(department.href)) problems.push(`${name}: department "${department.name}" links ${department.href}, which has no page`);

    for (const category of department.categories) {
      const previous = seenCategoryIds.get(category.id);
      if (previous) problems.push(`category id "${category.id}" is used in ${previous} and ${name}`);
      seenCategoryIds.set(category.id, name);

      menuHrefs.add(category.href);
      if (!hasPage(category.href)) problems.push(`${name}: category "${category.label}" links ${category.href}, which has no page`);

      for (const item of category.items) {
        menuHrefs.add(item.href);
        if (!hasPage(item.href)) problems.push(`${name}: item "${item.label}" links ${item.href}, which has no page`);
        const first = seenItems.get(item.href);
        if (first) problems.push(`${name}: ${item.href} is listed twice ("${first}" and "${item.label}")`);
        seenItems.set(item.href, item.label);
      }
    }
  }
}

for (const route of [...pageRoutes].sort()) {
  const inScope = route.startsWith("/use-cases/") || route.startsWith("/tools/");
  if (!inScope || INDEX_PAGES.includes(route) || menuHrefs.has(route) || NOT_IN_MENU.has(route)) continue;
  problems.push(`${route} is a page in no menu; add it to site-menus.ts or to NOT_IN_MENU with the reason`);
}

for (const [route] of NOT_IN_MENU) {
  if (!existsSync(join(APP, ...route.split("/").filter(Boolean), "page.tsx"))) {
    problems.push(`NOT_IN_MENU lists ${route}, which has no page; remove it from the list`);
  }
  if (menuHrefs.has(route)) problems.push(`NOT_IN_MENU lists ${route}, which is in a menu; remove it from the list`);
}

const linkCount = (menu: SiteMenuConfiguration): number =>
  menu.departments.reduce(
    (total, department) =>
      total + 1 + department.categories.reduce((n, category) => n + 1 + category.items.length, 0),
    0,
  );
const links = MENUS.reduce((total, [, menu]) => total + linkCount(menu), 0);

if (problems.length > 0) {
  console.error(`check:nav found ${problems.length} problem${problems.length === 1 ? "" : "s"}:`);
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}
console.log(`check:nav ok: ${links} menu links, every one has a page, no duplicates, no page left out.`);
