export const HOME_DEPARTMENTS = [
  "accounting",
  "customer-service",
  "human-resources",
  "marketing",
  "sales",
] as const;

export type HomeDepartmentSlug = (typeof HOME_DEPARTMENTS)[number];

export function isHomeDepartmentSlug(slug: string): slug is HomeDepartmentSlug {
  return (HOME_DEPARTMENTS as readonly string[]).includes(slug);
}

export function formatDepartmentLabel(slug: string): string {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
