/**
 * Publication dates are rendered the same way on the index and the article, so
 * the formatting lives here rather than as a copy in each page.
 */
export function formatDate(value: string | null): string | null {
  if (!value) return null;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** "marketing" reads as a label, not a slug, once the hyphens are gone. */
export function departmentLabel(department: string): string {
  return department.replace(/-/g, " ");
}
