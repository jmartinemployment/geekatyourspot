import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GlossaryHeroSection from "@/components/glossary/glossary-hero";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { getAllGlossaryTerms } from "@/lib/glossary";
import type { GlossaryTerm } from "@/types/glossary";
import { cn } from "@/lib/utils";
import type { DefinedTermSet, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const SITE_URL = "https://geekatyourspot.com";
const LOGO_IMAGE = `${SITE_URL}/images/GeekAtYourSpot.svg`;
const PAGE_TITLE = "Glossary";
const PAGE_DESCRIPTION =
  "Plain-language definitions of the AI, automation, marketing, and accounting terms that come up when a small business starts putting AI to work.";

/** Matches the term pages, so the index and its entries expire together. */
export const revalidate = 3600;

/** Terms that do not start with a letter collect here, sorted last. */
const NON_ALPHA_KEY = "#";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const DEFAULT_LETTER = "A";

function bucketKey(term: GlossaryTerm): string {
  const first = term.title.trim().charAt(0).toUpperCase();
  return first >= "A" && first <= "Z" ? first : NON_ALPHA_KEY;
}

function groupByLetter(terms: GlossaryTerm[]): Map<string, GlossaryTerm[]> {
  const groups = new Map<string, GlossaryTerm[]>();

  for (const term of terms) {
    const key = bucketKey(term);
    const bucket = groups.get(key);
    if (bucket) {
      bucket.push(term);
    } else {
      groups.set(key, [term]);
    }
  }

  for (const bucket of groups.values()) {
    bucket.sort((a, b) => a.title.localeCompare(b.title));
  }

  return groups;
}

/**
 * The requested letter when it exists, otherwise A. An unknown or empty letter
 * resolves to A rather than an empty page, so /glossary and /glossary?letter=A
 * are the same page — which is why A alone carries the bare canonical.
 */
function resolveLetter(
  requested: string | undefined,
  groups: Map<string, GlossaryTerm[]>,
): string {
  if (!requested) return DEFAULT_LETTER;
  const upper = requested.trim().toUpperCase();
  return groups.has(upper) ? upper : DEFAULT_LETTER;
}

function letterHref(letter: string): string {
  return letter === DEFAULT_LETTER
    ? "/glossary"
    : `/glossary?letter=${encodeURIComponent(letter)}`;
}

type GlossaryPageProps = Readonly<{
  searchParams: Promise<{ letter?: string }>;
}>;

export async function generateMetadata({
  searchParams,
}: GlossaryPageProps): Promise<Metadata> {
  const { letter } = await searchParams;
  const terms = await getAllGlossaryTerms();
  const active = resolveLetter(letter, groupByLetter(terms));

  const title = active === DEFAULT_LETTER ? PAGE_TITLE : `${PAGE_TITLE} — ${active}`;
  const description =
    active === DEFAULT_LETTER
      ? PAGE_DESCRIPTION
      : `Glossary terms beginning with ${active}. ${PAGE_DESCRIPTION}`;

  return {
    title,
    description,
    keywords: [
      "AI glossary",
      "automation terms",
      "marketing glossary",
      "accounting glossary",
      "small business AI",
    ],
    alternates: {
      canonical: letterHref(active),
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      title: `${title} | Geek at Your Spot`,
      description,
      url: `${SITE_URL}${letterHref(active)}`,
      siteName: "Geek at Your Spot",
      locale: "en_US",
      images: [{ url: LOGO_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Geek at Your Spot`,
      description,
      images: [LOGO_IMAGE],
    },
  };
}

export default async function GlossaryPage({
  searchParams,
}: GlossaryPageProps) {
  const { letter } = await searchParams;
  const terms = await getAllGlossaryTerms();
  const groups = groupByLetter(terms);
  const active = resolveLetter(letter, groups);
  const visible = groups.get(active) ?? [];

  const jsonLd: WithContext<DefinedTermSet> = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}${letterHref(active)}`,
    hasDefinedTerm: visible.map((term) => ({
      "@type": "DefinedTerm" as const,
      name: term.title,
      url: `${SITE_URL}/glossary/${term.slug}`,
    })),
  };

  const pages = groups.has(NON_ALPHA_KEY)
    ? [...ALPHABET, NON_ALPHA_KEY]
    : ALPHABET;

  return (
    <div className="bg-[rgb(2,48,89)] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />
      <GlossaryHeroSection
        title="Glossary"
        summary="The AI, automation, marketing, and accounting terms that come up when a small business starts putting AI to work — defined in plain language."
      />

      <section className="container py-16 lg:py-24">
        <nav
          aria-label="Glossary pages"
          className="flex flex-wrap gap-x-2 gap-y-2 border-b border-white/15 pb-8"
        >
          {pages.map((page) => {
            const count = groups.get(page)?.length ?? 0;
            const isActive = page === active;

            if (count === 0) {
              return (
                <span
                  key={page}
                  aria-disabled="true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-md font-bold text-white/25"
                >
                  {page}
                </span>
              );
            }

            return (
              <Link
                key={page}
                href={letterHref(page)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-lg text-md font-bold transition-colors",
                  isActive
                    ? "bg-[#C83803] text-white"
                    : "bg-[#0B162A] text-white hover:bg-[#132340]",
                )}
              >
                {page}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-baseline gap-x-4 pt-10">
          <h2 className="text-3xl font-black font-(--font-sora) text-white shadow-text lg:text-4xl">
            {active}
          </h2>
          <p className="text-md font-normal text-white/70">
            {visible.length === 1 ? "1 term" : `${String(visible.length)} terms`}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((term) => (
            <Link
              key={term.slug}
              href={`/glossary/${term.slug}`}
              className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
            >
              <h3 className="text-2xl font-black font-(--font-sora) text-white shadow-text-dark-blue">
                {term.title}
              </h3>
              {term.category && (
                <p className="pt-2 text-sm font-bold uppercase tracking-wide text-[#C83803]">
                  {term.category}
                </p>
              )}
              {term.shortSummary && (
                <p className="pt-3 text-md font-normal text-white/80">
                  {term.shortSummary}
                </p>
              )}
              <span className="mt-auto inline-flex items-center gap-x-2 pt-5 text-md font-bold text-[#C83803]">
                Read the definition
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
      </section>

      <SchedulerShell />
    </div>
  );
}
