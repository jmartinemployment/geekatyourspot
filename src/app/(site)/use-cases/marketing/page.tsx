import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFunnelDollar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { CollectionPage, WithContext } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "Marketing Use Cases";
const PAGE_DESCRIPTION =
  "Discover practical use cases for marketing automation, from AI-powered lead capture to content creation and marketing systems.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "marketing use cases",
    "lead capture",
    "marketing automation",
    "content creation",
    "AI marketing",
  ],
  alternates: {
    canonical: "/use-cases/marketing",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases/marketing`,
    siteName: "Geek @ Your Spot LLC",
    locale: "en_US",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PAGE_TITLE} | Geek @ Your Spot LLC`,
    description: PAGE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
};

interface UseCase {
  title: string;
  slug: string;
  description: string;
  href: string;
}

export default function MarketingUseCasesPage() {
  const useCases: UseCase[] = [
    {
      title: "AI Marketing Systems",
      slug: "ai-marketing-systems",
      description:
        "Elevate your marketing game with AI systems that automate processes and enhance decision-making for better results.",
      href: "/use-cases/marketing/ai-marketing-systems",
    },
    {
      title: "Content Creation Workflow",
      slug: "ai-content-creation-workflow",
      description:
        "Streamline your content creation with AI-driven workflows that improve design efficiency and reduce time-to-market.",
      href: "/use-cases/marketing/ai-content-creation-workflow",
    },
    {
      title: "Intelligent Content Planning",
      slug: "intelligent-content-planning",
      description:
        "Intelligent Content Planning streamlines content creation for small businesses, saving time and reducing errors. See how local AI implementation works.",
      href: "/use-cases/marketing/content-creation-workflow/intelligent-content-planning-for-small-businesses-real-results-with-ai",
    },
    {
      title: "Intelligent Content Generation",
      slug: "intelligent-content-generation",
      description:
        "Intelligent Content Generation helps Miami-Dade, Broward, and West Palm Beach businesses automate content creation, repurposing, scheduling, and approvals.",
      href: "/use-cases/marketing/content-creation-workflow/intelligent-content-generation-streamlining-content-creation-for-south-florida-businesses",
    },
    {
      title: "Intelligent Lead Capture Pipeline",
      slug: "intelligent-lead-capture-pipeline",
      description:
        "Build smarter lead capture strategies with AI-powered tools that improve qualification and conversion rates.",
      href: "/use-cases/marketing/intelligent-lead-capture-pipeline",
    },
    {
      title: "Intelligent Receptionist",
      slug: "intelligent-receptionist",
      description:
        "Intelligent Receptionist solutions for South Florida small businesses: automate lead capture, qualify prospects, and reduce missed opportunities with AI.",
      href: "/use-cases/marketing/lead-capture-pipeline/intelligent-receptionist-streamline-lead-capture-for-south-florida-small-businesses",
    },
    {
      title: "Cross-Platform Chatbot",
      slug: "cross-platform-chatbot",
      description:
        "Cross-Platform Chatbot solutions help small businesses in Miami-Dade, Broward, and West Palm Beach capture more leads and automate follow-ups efficiently.",
      href: "/use-cases/marketing/lead-capture-pipeline/cross-platform-chatbot-for-lead-capture-local-implementation-guide",
    },
    {
      title: "Lead Enrichment and Predictive Scoring",
      slug: "lead-enrichment-and-predictive-scoring",
      description:
        "Lead Enrichment and Predictive Scoring for South Florida small businesses: capture better leads, reduce manual work, and close more sales with AI.",
      href: "/use-cases/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-smarter-lead-capture-for-south-florida",
    },
  ];

  const jsonLd: WithContext<CollectionPage> = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/use-cases/marketing`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: useCases.map((useCase, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${useCase.href}`,
        name: useCase.title,
        description: useCase.description,
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
            icon={faFunnelDollar}
            width={64}
            height={64}
            className="text-[#C83803]"
          />
          <h1 className="font-black font-(--font-sora) leading-[0.95] text-white shadow-text text-[9vw] sm:text-6xl lg:text-[4.0rem]">
            Marketing Use Cases
          </h1>
        </div>
        <p className="pt-5 max-w-3xl text-xl text-white shadow-text lg:text-2xl">
          Explore practical use cases for marketing automation that help South
          Florida small businesses drive growth and improve efficiency.
        </p>

        <div className="pt-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <Link
                key={useCase.slug}
                href={useCase.href}
                className="group flex flex-col rounded-xl bg-[#0B162A] p-6 shadow-md transition-colors hover:bg-[#132340]"
              >
                <h3 className="text-2xl font-black font-(--font-sora) text-white shadow-text-dark-blue">
                  {useCase.title}
                </h3>
                <p className="pt-3 text-md font-normal text-white/80">
                  {useCase.description}
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
