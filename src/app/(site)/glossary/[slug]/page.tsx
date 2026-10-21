import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import {
  definitionSummary,
  definitionText,
  getAllGlossarySlugs,
  getGlossaryTerm,
  relatedTerms,
} from "@/lib/glossary";
import { TermDetail } from "@/components/glossary/term-detail";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { DefinedTerm, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

export const revalidate = 3600;
export const dynamicParams = true;

/**
 * "Term Definition" while it fits the 36 characters the title template leaves under 60; a term
 * longer than that is titled by its name alone.
 */
const TITLE_MAX = 36;

function termTitle(title: string): string {
  const withSuffix = `${title} Definition`;
  return withSuffix.length <= TITLE_MAX ? withSuffix : title;
}

export async function generateStaticParams() {
  const slugs = await getAllGlossarySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = await getGlossaryTerm(slug);

  if (!term) {
    return {};
  }

  const title = termTitle(term.title);
  const description = definitionSummary(term);

  return {
    title,
    description,
    alternates: {
      canonical: `https://geekatyourspot.com/glossary/${term.slug}`,
    },
    openGraph: {
      type: "website",
      title: `${title} | Geek @ Your Spot LLC`,
      description,
      url: `https://geekatyourspot.com/glossary/${term.slug}`,
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

export default async function TermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = await getGlossaryTerm(slug);

  if (!term) {
    notFound();
  }

  const related = relatedTerms(term);

  const jsonLd: WithContext<DefinedTerm> = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.title,
    description: definitionText(term),
    url: `https://geekatyourspot.com/glossary/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossary",
      url: "https://geekatyourspot.com/glossary",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }}
      />

      {/*
        The whole term page is the hero colour, not just the term block. The
        back link and the scheduler sat on the lighter body blue
        (rgb(2,48,89)), which put a seam right under the hero -- there is no
        body content on a term page for that lighter blue to belong to.
      */}
      <div className="bg-[#0B162A] text-white">
        {/*
          The term and its definitions ARE this page's hero, so these two
          headers are GlossaryHeroSection's own shell, class for class, with
          TermDetail where its h1 and summary go: one column on mobile, two
          on desktop (`col-span-7` text + the same `faBookOpen` in
          `col-span-5` that GlossaryHeroSection uses). Width comes from
          `col-span-7`, which is why TermDetail carries no max-w-* -- a max
          width there is what pushed the article off the container gutter so
          it stopped lining up with the back link below.
        */}
        <header className="min-h-screen lg:hidden">
          <div className="container min-h-screen">
            <div className="grid min-h-screen grid-cols-1 place-items-center">
              <div className="col-span-full">
                <TermDetail term={term} />
              </div>
            </div>
          </div>
        </header>

        <header className="hidden min-h-screen lg:block">
          <div className="container min-h-screen">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-7">
                <TermDetail term={term} />
              </div>
              <div className="col-span-5 flex min-h-screen flex-col items-center justify-center">
                <FontAwesomeIcon
                  icon={faBookOpen}
                  className="text-[#C83803]"
                  style={{ width: "16rem", height: "16rem" }}
                />
              </div>
            </div>
          </div>
        </header>

        {related.length > 0 && (
          <section className="container pt-12">
            <h2 className="text-white text-[6vw] sm:text-3xl lg:text-4xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Related Terms
            </h2>
            <ul className="flex flex-wrap gap-3 pt-6">
              {related.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={`/glossary/${other.slug}`}
                    className="inline-flex rounded-lg bg-[#132340] px-4 py-2 text-base font-bold text-white transition-colors hover:bg-[#C83803]"
                  >
                    {other.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="container py-12">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-x-2 text-base font-bold text-[#C83803] text-shadow-2xs text-shadow-white hover:underline"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              width={16}
              height={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to the glossary
          </Link>
        </section>

        <SchedulerShell />
      </div>
    </>
  );
}
