import type { Metadata } from "next";
import { getGlossaryTermsGroupedByLetter, getAllGlossaryTerms } from "@/lib/glossary";
import { GlossaryBookLeather } from "@/components/glossary/glossary-book-leather";
import GlossaryHeroSection from "@/components/glossary/shared/glossary-hero";

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
  const title = "Glossary";
  const heroSummary = "Essential terms and definitions for customer experience, automation, and business technology."

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
    <>
      <GlossaryHeroSection
        title={title}
        summary={heroSummary} />
        <GlossaryBookLeather 
          groupedTerms={groupedTerms} />
    </>
  );
}
