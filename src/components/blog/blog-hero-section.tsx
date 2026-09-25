import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";
import { DEPARTMENT_ICONS, type DepartmentName } from "@/types/department";

type BlogHeroSectionProps = Readonly<{
  title: string;
  summary: string;
  /** Department and publication date, when the page has them. */
  meta?: string;
  /** Icon column is dropped rather than substituted when the department is unmapped. */
  department?: string;
}>;

function iconFor(department: string | undefined) {
  if (!department) return null;
  return DEPARTMENT_ICONS[department as DepartmentName] ?? null;
}

export function BlogHeroSection({
  title,
  summary,
  meta,
  department,
}: BlogHeroSectionProps): React.JSX.Element {
  const icon = iconFor(department);

  return (
    <header className="min-h-screen bg-[#0B162A]">
      <div className="container min-h-screen">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12 lg:col-span-7">
            {meta && (
              <p className="pb-3 font-sans text-xs font-bold tracking-widest text-[#C83803] uppercase">
                {meta}
              </p>
            )}

            <h1 className="text-[9vw] leading-[0.95] font-black font-[var(--font-sora)] text-white shadow-text sm:text-6xl md:text-7xl lg:text-[4.0rem]">
              {title}
            </h1>

            <p className="pt-3 text-xl text-white shadow-text lg:text-2xl">{summary}</p>

            <div className="pt-6">
              <Link
                id={gtmLinkIdFromHref("#consultationAppointment2xl", "hero-assessment")}
                href="#consultationAppointment2xl"
                className="btn btn-primary"
              >
                Get Your Free AI Assessment
              </Link>
            </div>
          </div>

          {icon && (
            <div className="hidden min-h-screen flex-col items-center justify-center lg:col-span-5 lg:flex">
              <FontAwesomeIcon
                icon={icon}
                className="text-[#C83803]"
                style={{ width: "16rem", height: "16rem" }}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
