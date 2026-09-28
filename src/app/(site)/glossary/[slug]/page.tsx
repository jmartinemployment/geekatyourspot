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

      <div className="bg-[rgb(2,48,89)] text-white">
        <section className="container py-16 lg:py-24">
          <TermDetail term={term} />

          <Link
            href="/glossary"
            className="mt-12 inline-flex items-center gap-x-2 text-md font-bold text-[#C83803]"
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
