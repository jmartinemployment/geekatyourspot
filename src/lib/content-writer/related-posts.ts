import { BLOG_MENU } from "@/data/navigation/site-menus";

/** The hrefs after `href` in `hrefs`, wrapping round to the ones before it. */
function following(hrefs: readonly string[], href: string): string[] {
  const index = hrefs.indexOf(href);
  return [...hrefs.slice(index + 1), ...hrefs.slice(0, index)];
}

/**
 * The posts listed under "More from the Blog": the ones after this post in its navbar category,
 * wrapping round, then the rest of its department taken the same way. Starting after the post,
 * rather than at the top of the category, puts every post in a category under another one.
 * A post the navbar does not list gets none.
 */
export function relatedBlogHrefs(href: string, count: number): string[] {
  for (const department of BLOG_MENU) {
    const groups = [...department.categories.map((category) => category.items), department.items];
    const group = groups.find((items) => items.some((item) => item.href === href));
    if (!group) continue;

    const inGroup = following(group.map((item) => item.href), href);
    const inDepartment = following(groups.flat().map((item) => item.href), href);
    return [...new Set([...inGroup, ...inDepartment])].slice(0, count);
  }

  return [];
}
