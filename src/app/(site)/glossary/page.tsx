import type { Metadata } from "next";
import Link from "next/link";
import { getAllGlossaryTerms } from "@/lib/glossary";
import type { GlossaryTerm } from "@/types/glossary";
import type { DefinedTermSet, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

const SITE_URL = "https://geekatyourspot.com";
const LOGO_IMAGE = `${SITE_URL}/images/GeekAtYourSpot.svg`;
const PAGE_TITLE = "Glossary";
const PAGE_DESCRIPTION =
  "Plain-language definitions of the AI, automation, marketing, and accounting terms that come up when a small business starts putting AI to work.";

/** Matches the term pages, so the index and its entries expire together. */
export const revalidate = 3600;

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "AI glossary",
    "automation terms",
    "marketing glossary",
    "accounting glossary",
    "small business AI",
  ],
  alternates: {
    canonical: "/glossary",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | Geek at Your Spot`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/glossary`,
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

/** Terms that do not start with a letter collect under this heading, sorted last. */
const NON_ALPHA_KEY = "#";

function bucketKey(term: GlossaryTerm): string {
  const first = term.title.trim().charAt(0).toUpperCase();
  return first >= "A" && first <= "Z" ? first : NON_ALPHA_KEY;
}

/** "#" is not a usable fragment, so the non-alphabetic group gets a named anchor. */
function anchorFor(key: string): string {
  return key === NON_ALPHA_KEY ? "letter-other" : `letter-${key}`;
}

function groupByLetter(terms: GlossaryTerm[]): [string, GlossaryTerm[]][] {
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

  return Array.from(groups.entries()).sort(([a], [b]) => {
    if (a === NON_ALPHA_KEY) return 1;
    if (b === NON_ALPHA_KEY) return -1;
    return a.localeCompare(b);
  });
}

export default async function GlossaryPage() {
  const terms = await getAllGlossaryTerms();
  const groups = groupByLetter(terms);

  const jsonLd: WithContext<DefinedTermSet> = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/glossary`,
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm" as const,
      name: term.title,
      url: `${SITE_URL}/glossary/${term.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-8 font-serif">
          <header className="border-b-4 border-black dark:border-white pb-6">
            <h1 className="text-6xl font-black text-black dark:text-white tracking-tight">
              {PAGE_TITLE}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              {PAGE_DESCRIPTION}
            </p>
          </header>

          <nav
            aria-label="Jump to letter"
            className="flex flex-wrap gap-x-4 gap-y-2"
          >
            {groups.map(([letter]) => (
              <a
                key={letter}
                href={`#${anchorFor(letter)}`}
                className="text-base font-bold text-black underline-offset-4 hover:underline dark:text-white"
              >
                {letter}
              </a>
            ))}
          </nav>

          {groups.map(([letter, letterTerms]) => (
            <section
              key={letter}
              id={anchorFor(letter)}
              className="scroll-mt-8 space-y-4"
            >
              <h2 className="border-b-2 border-gray-400 pb-2 text-3xl font-black tracking-tight text-black dark:border-gray-600 dark:text-white">
                {letter}
              </h2>

              <ul className="space-y-3">
                {letterTerms.map((term) => (
                  <li key={term.slug}>
                    <Link
                      href={`/glossary/${term.slug}`}
                      className="text-base font-bold text-black underline-offset-4 hover:underline dark:text-white"
                    >
                      {term.title}
                    </Link>
                    {term.category && (
                      <span className="ml-3 text-sm font-semibold italic text-gray-600 dark:text-gray-400">
                        {term.category}
                      </span>
                    )}
                    {term.shortSummary && (
                      <p className="ml-6 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                        {term.shortSummary}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
