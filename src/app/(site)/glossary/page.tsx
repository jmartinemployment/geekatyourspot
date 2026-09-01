import type { Metadata } from "next";
import { getGlossaryTermsGroupedByLetter, getAllGlossaryTerms } from "@/lib/glossary";
import { GlossaryBookLeather } from "@/components/glossary/glossary-book-leather";

const SITE_URL = "https://geekatyourspot.com";
const LOGO_IMAGE = `${SITE_URL}/images/GeekAtYourSpot.svg`;
const PAGE_TITLE = "Glossary";
const PAGE_DESCRIPTION =
  "A comprehensive glossary of customer experience, AI, and business automation terms. Look up definitions for key concepts in chatbots, marketing automation, and customer support.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "glossary",
    "business terms",
    "AI terminology",
    "chatbot",
    "marketing automation",
    "customer experience",
    "automation",
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

export default function GlossaryPage() {
  const groupedTerms = getGlossaryTermsGroupedByLetter();
  const allTerms = getAllGlossaryTerms();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/glossary`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: allTerms.map((term, index) => ({
        "@type": "DefinedTerm",
        position: index + 1,
        name: term.title,
        description: term.definition || term.shortSummary || "",
        url: `${SITE_URL}/glossary/${term.slug}`,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Glossary
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Essential terms and definitions for customer experience,
            automation, and business technology.
          </p>
        </div>

        {/* Index */}
        <GlossaryBookLeather groupedTerms={groupedTerms} />
      </div>
    </div>
  );
}
