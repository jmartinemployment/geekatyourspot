import type { Metadata } from "next";
import Link from "next/link";
import SharedHeroSection from "@/components/shared/shared-hero-section";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import type { Graph } from "schema-dts";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { SHARE_IMAGE } from "@/lib/seo/share-image";

const SITE_URL = "https://geekatyourspot.com";
const PAGE_TITLE = "Marketing";
const PAGE_DESCRIPTION =
  "How South Florida small businesses use AI to capture leads, run marketing automation and spend ad budgets well. Read the Geek blog on each.";

const jsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "headline": PAGE_TITLE,
      "description": PAGE_DESCRIPTION,
      "author": { "@type": "Person", "name": "Jeff Martin" },
      "publisher": { "@type": "Organization", "url": SITE_URL, "name": "Geek @ Your Spot LLC" },
      "mainEntityOfPage": { "@type": "WebPage", "@id": `${SITE_URL}/blog/marketing` },
      "keywords":
        "marketing, marketing automation platforms, lead capture, lead enrichment, content planning, personalized email campaigns, ad spend optimization",
    },
  ],
};

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      "marketing",
      "marketing automation platforms",
      "lead capture",
      "lead enrichment",
      "content planning",
      "personalized email campaigns",
      "ad spend optimization",
      "South Florida",
    ],
    authors: [{ name: "Jeff Martin" }],
    creator: "Geek @ Your Spot LLC",
    publisher: "Geek @ Your Spot LLC",
    metadataBase: new URL("https://geekatyourspot.com"),
    alternates: { canonical: "/blog/marketing" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: `${SITE_URL}/blog/marketing`,
      siteName: "Geek @ Your Spot LLC",
      locale: "en_US",
      type: "website",
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [SHARE_IMAGE],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    appleWebApp: { capable: true, statusBarStyle: "default", title: "Geek @ Your Spot LLC" },
  };
};

const LINK_CLASS = "text-[#C83803] font-bold hover:underline";

export default async function Page() {
  const heroSummary =
    "Marketing is where a small team loses the most hours to work a system can do. These Geek blog posts show how AI captures leads, runs the content and the email, and finds wasted ad spend.";
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <SharedHeroSection title={PAGE_TITLE} summary={heroSummary} image="" imgAlt="" />
      <article>
        <section className="min-h-screen bg-[#023059] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <p className="text-base font-normal text-white shadow-text">
                  Start here:{" "}
                  <Link href="/blog/marketing/how-ai-marketing-systems-transform-small-business-growth" className={LINK_CLASS}>
                    AI Marketing Systems for Growth
                  </Link>.
                </p>
                <h2 className="pt-6 text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
                  Marketing Automation Platforms (MAP)
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Content planning, content creation, email and lead scoring all work from the same contact
                  records. These posts cover how AI runs each of those jobs and how they fit together on one
                  platform.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-base font-normal text-white shadow-text pt-4">
                  <li>
                    <Link href="/blog/marketing/content-creation-workflow/intelligent-content-planning-how-south-florida-can-save-hours-and-drive-more-sales" className={LINK_CLASS}>
                      Content Planning That Saves Hours
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/content-creation-workflow/intelligent-content-generation-for-miami-how-to-save-time-and-scale-without-extra-hires" className={LINK_CLASS}>
                      Content Generation Without New Hires
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/how-to-streamline-your-content-workflow-with-ai" className={LINK_CLASS}>
                      Streamline Content Workflows with AI
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/content-creation-workflow/ai-content-repurposing" className={LINK_CLASS}>
                      AI Content Repurposing
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/unlocking-the-potential-of-ai-in-seo-content-creation" className={LINK_CLASS}>
                      AI in SEO Content Creation
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/marketing-automation-platforms/what-miami-businesses-miss-without-local-ai-automation" className={LINK_CLASS}>
                      What Miami Businesses Miss Without AI
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/why-your-b2b-sales-need-an-intelligent-lead-capture-pipeline" className={LINK_CLASS}>
                      Lead Capture Pipelines for B2B Sales
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/lead-capture-pipeline/lead-enrichment-and-predictive-scoring-how-south-florida-can-turn-more-leads-into-sales" className={LINK_CLASS}>
                      Lead Enrichment to Close More Sales
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/lead-capture-pipeline/ai-lead-scoring" className={LINK_CLASS}>
                      AI Lead Scoring
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/smart-chatbots-for-marketing-transforming-customer-engagement" className={LINK_CLASS}>
                      Smart Chatbots That Engage Customers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="min-h-screen bg-[#024059] text-white py-5">
          <div className="container">
            <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
              <div className="col-span-12">
                <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-(--font-sora) shadow-text">
                  Ad Spend Optimization
                </h2>
                <p className="pt-3 text-base font-normal text-white shadow-text">
                  Ad budgets leak through weak copy, loose targeting and campaigns nobody has time to watch.
                  These posts cover how AI finds the waste and moves the money to what brings in leads.
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 text-base font-normal text-white shadow-text pt-4">
                  <li>
                    <Link href="/blog/marketing/how-ai-transforms-ad-spend-4-key-strategies" className={LINK_CLASS}>
                      How AI Transforms Ad Spend in 4 Ways
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/ad-spend-optimization/how-miami-businesses-can-stop-wasting-ad-dollars-now" className={LINK_CLASS}>
                      Stop Wasting Ad Dollars in Miami
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend" className={LINK_CLASS}>
                      Stop Wasting Ad Spend in South Florida
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/marketing/ad-spend-optimization/how-local-miami-small-businesses-can-stop-wasting-ad-budget-and-start-seeing-real-returns" className={LINK_CLASS}>
                      Stop Wasting Ad Budget and Start Seeing Real Returns
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <SchedulerShell />
      </article>
    </>
  );
}
