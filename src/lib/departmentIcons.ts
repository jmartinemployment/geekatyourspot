import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBellConcierge,
  faCalculator,
  faFunnelDollar,
  faTag,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";

import { type HomeDepartmentSlug, isHomeDepartmentSlug } from "@/lib/departments";

const DEPARTMENT_ICONS: Record<HomeDepartmentSlug, IconDefinition> = {
  accounting: faCalculator,
  marketing: faFunnelDollar,
  sales: faTag,
  "customer-service": faBellConcierge,
  "human-resources": faUsersBetweenLines,
};

export function departmentIcon(departmentSlug: string): IconDefinition | null {
  return isHomeDepartmentSlug(departmentSlug) ? DEPARTMENT_ICONS[departmentSlug] : null;
}
