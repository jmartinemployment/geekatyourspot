import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { getAllGlossarySlugs, getGlossaryTerm } from "@/lib/glossary";
import { TermDetail } from "@/components/glossary/term-detail";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { GlossaryTerm } from "@/types/glossary";
import type { DefinedTerm, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";

export const revalidate = 3600;
export const dynamicParams = true;

function getTermDescription(term: GlossaryTerm): string {
  if (term.definitions && term.definitions.length > 0) {
    return term.definitions.map((d) => d.text).join(" ");
  }
  return term.definition || "";
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

  const description = (
    term.shortSummary || getTermDescription(term)
  ).substring(0, 160);

  return {
    title: `${term.title} — Glossary`,
    description,
    alternates: {
      canonical: `https://geekatyourspot.com/glossary/${term.slug}`,
    },
    openGraph: {
      type: "website",
      title: term.title,
      description,
      url: `https://geekatyourspot.com/glossary/${term.slug}`,
    },
    twitter: {
      card: "summary",
      title: term.title,
      description,
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

  const jsonLd: WithContext<DefinedTerm> = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.title,
    description: getTermDescription(term),
    url: `https://geekatyourspot.com/glossary/${term.slug}`,
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
          on desktop (`col-span-7` text + an empty `col-span-5`). Width comes from
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
              <div className="col-span-5 flex min-h-screen flex-col items-center justify-center"></div>
            </div>
          </div>
        </header>

        <section className="container py-12">
          <Link
            href="/glossary"
            className="inline-flex items-center gap-x-2 text-md font-bold text-[#C83803]"
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
