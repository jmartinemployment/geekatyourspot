import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GlossaryHeroSection from "@/components/glossary/glossary-hero";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { GLOSSARY_SET_ID, definitionText, getAllGlossaryTerms } from "@/lib/glossary";
import type { GlossaryTerm } from "@/types/glossary";
import { cn } from "@/lib/utils";
import type { DefinedTermSet, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import {
  ALPHABET,
  DEFAULT_LETTER,
  NON_ALPHA_KEY,
  groupByLetter,
  letterHref,
  resolveLetter,
} from "@/lib/glossary-letters";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "Glossary";
const PAGE_DESCRIPTION =
  "Plain-language definitions of the AI, automation, marketing, and accounting terms that come up when a small business starts putting AI to work.";

/** Matches the term pages, so the index and its entries expire together. */
export const revalidate = 3600;

const BLURB_MAX = 170;

/** Trim to a word boundary so a card never ends mid-word. */
function clamp(text: string): string {
  const collapsed = text.replace(/\s+/g, " ").trim();
  if (collapsed.length <= BLURB_MAX) return collapsed;
  const cut = collapsed.slice(0, BLURB_MAX);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).replace(/[,;:.]$/, "")}…`;
}

interface CardTerm extends GlossaryTerm {
  /** Full definition text, for structured data. */
  description: string;
  /** Same text, clamped for the card. */
  blurb?: string;
}

function withDefinitions(terms: GlossaryTerm[]): CardTerm[] {
  return terms.map((term) => {
    const description = definitionText(term);
    return {
      ...term,
      description,
      blurb: description ? clamp(description) : undefined,
    };
  });
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

  const title =
    active === DEFAULT_LETTER ? PAGE_TITLE : `Glossary Terms Starting With ${active}`;
  const description =
    active === DEFAULT_LETTER
      ? PAGE_DESCRIPTION
      : `The glossary defines the AI, automation, marketing, and accounting terms that start with ${active} in plain language for small businesses putting AI to work.`;

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
      title: `${title} | Geek @ Your Spot LLC`,
      description,
      url: `${SITE_URL}${letterHref(active)}`,
      siteName: "Geek @ Your Spot LLC",
      locale: "en_US",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Geek @ Your Spot LLC`,
      description,
      images: [SHARE_IMAGE],
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
  const visible = withDefinitions(groups.get(active) ?? []);

  const jsonLd: WithContext<DefinedTermSet> = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": GLOSSARY_SET_ID,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}${letterHref(active)}`,
    hasDefinedTerm: visible.map((term) => ({
      "@type": "DefinedTerm" as const,
      name: term.title,
      ...(term.description ? { description: term.description } : {}),
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
        summary="The AI, automation, marketing, and accounting terms that come up when a small business starts putting AI to work, defined in plain language."
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
              {term.blurb && (
                <p className="pt-3 text-md font-normal text-white/80">
                  {term.blurb}
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
