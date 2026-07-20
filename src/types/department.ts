import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBellConcierge,
  faCalculator,
  faFunnelDollar,
  faTag,
  faUsersBetweenLines,
} from "@fortawesome/free-solid-svg-icons";


export const DEPARTMENT_ICONS = {
  accounting: faCalculator,
  marketing: faFunnelDollar,
  sales: faTag,
  "customer-service": faBellConcierge,
  "human-resources": faUsersBetweenLines,
}
export type DepartmentName = keyof typeof DEPARTMENT_ICONS;