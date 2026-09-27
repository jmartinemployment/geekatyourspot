import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { DEPARTMENT_ICONS, type DepartmentName } from "@/types/department";
import type { CollectionPage, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const SITE_URL = "https://geekatyourspot.com";
const LOGO_IMAGE = `${SITE_URL}/images/GeekAtYourSpot.svg`;
const PAGE_TITLE = "Use Cases";
const PAGE_DESCRIPTION =
  "Practical AI use cases for South Florida small businesses — accounting automation from accounts payable to tax compliance, and marketing automation from lead capture to content creation.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "AI use cases",
    "business automation",
    "accounting automation",
    "marketing automation",
    "small business AI",
    "South Florida",
  ],
  alternates: {
    canonical: "/use-cases",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | Geek at Your Spot`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases`,
    siteName: "Geek at Your Spot",
    locale: "en_US",
    images: [{ url: LOGO_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Geek at Your Spot`,
    description: PAGE_DESCRIPTION,
    images: [LOGO_IMAGE],
  },
};

/**
 * Departments, not individual use cases.
 *
 * Each department page owns its own list of use cases. Repeating those lists
 * here would be a second copy to keep in step, which is how /tools came to
 * advertise pages that were never built. This page links to the department
 * index and lets that page stay the single answer to "what is in it".
 */
interface Department {
  name: DepartmentName;
  title: string;
  description: string;
  href: string;
}

const DEPARTMENTS: Department[] = [
  {
    name: "accounting",
    title: "Accounting",
    description:
      "Automate the finance back office — accounts payable, cash flow forecasting, and tax compliance.",
    href: "/use-cases/accounting",
  },
  {
    name: "marketing",
    title: "Marketing",
    description:
      "Put AI to work across marketing — lead capture, content creation, ad spend, and marketing systems.",
    href: "/use-cases/marketing",
  },
];

export default function UseCasesPage() {
  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: DEPARTMENTS.map((department, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${department.href}`,
        name: department.title,
        description: department.description,
      })),
    },
  };

  return (
    <div className="bg-[rgb(2,48,89)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <section className="container py-16 lg:py-24">
        <div className="flex items-center gap-x-4">
          <FontAwesomeIcon
            icon={faLightbulb}
            width={64}
            height={64}
            className="text-[#C83803]"
          />
          <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text text-[9vw] sm:text-6xl lg:text-[4.0rem]">
            Use Cases
          </h1>
        </div>
        <p className="pt-5 max-w-3xl text-xl text-white shadow-text lg:text-2xl">
          The work we actually do for South Florida small businesses, grouped by
          the department it lands in. Start with the one that owns the problem.
        </p>

        <div className="pt-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((department) => (
              <Link
                key={department.name}
                href={department.href}
                className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
              >
                <FontAwesomeIcon
                  icon={DEPARTMENT_ICONS[department.name]}
                  width={40}
                  height={40}
                  className="text-[#C83803]"
                />
                <h2 className="pt-4 text-2xl font-black font-(--font-sora) text-white shadow-text-dark-blue">
                  {department.title}
                </h2>
                <p className="pt-3 text-md font-normal text-white/80">
                  {department.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-x-2 pt-5 text-md font-bold text-[#C83803]">
                  Learn more
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    width={16}
                    height={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
