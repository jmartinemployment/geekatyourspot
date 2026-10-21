import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import type { Graph } from "schema-dts";
import ToolsHeroSection from "@/components/tools/shared/tools-hero";
import { ContactForm } from "@/components/contact/contact-form";
import { SchedulerShell } from "@/components/shared/scheduler/scheduler-shell";
import { safeJsonLd } from "@/lib/seo/json-ld";
import { GBP_MAP_URL, SITE_URL } from "@/lib/seo/organization";
import { SHARE_IMAGE } from "@/lib/seo/share-image";
import { gtmLinkIdFromHref } from "@/lib/gtm/link-id";

const TITLE = "Contact Jeff Martin";
const SUMMARY = "Call, send a message, or book a free AI consultation with Jeff Martin of Geek @ Your Spot LLC in Delray Beach.";
const DESCRIPTION =
  "Call (561) 526-3512, send a message, or book a free AI consultation with Jeff Martin of Geek @ Your Spot LLC, at 2025 NW 18th Street in Delray Beach, Florida.";
const CANONICAL = "/contact";
const PAGE_URL = `${SITE_URL}${CANONICAL}`;
const ORGANIZATION = { "@type": "Organization", name: "Geek @ Your Spot LLC", url: SITE_URL } as const;

const LINK = "text-[#C83803] hover:underline";
const H2_PHONE = "text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text";
const H2_DESKTOP = "text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text";
const ICON_STYLE = { width: "16rem", height: "16rem" };

const jsonLd: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      about: ORGANIZATION,
    },
  ],
};

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  creator: "Geek @ Your Spot LLC",
  publisher: "Geek @ Your Spot LLC",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Geek @ Your Spot LLC",
    locale: "en_US",
    type: "website",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SHARE_IMAGE],
  },
  robots: {
    index: true, follow: true, nocache: false,
    googleBot: {
      index: true, follow: true, noimageindex: false,
      "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1,
    },
  },
};

function CallOrVisitBody({ idSuffix = "" }: Readonly<{ idSuffix?: string }>) {
  return (
    <>
      <p className="pt-3 text-base text-white shadow-text">
        The office is at 2025 NW 18th Street, Delray Beach, FL 33445, and office hours are Monday to Friday, 9 a.m. to 5 p.m. Eastern.
      </p>
      <p className="pt-3 text-base text-white shadow-text">
        Call <a id={`${gtmLinkIdFromHref("tel:+15615263512", "contact")}${idSuffix}`} href="tel:+15615263512" className={LINK}>(561) 526-3512</a>, or open the office
        in <a id={`${gtmLinkIdFromHref(GBP_MAP_URL, "contact")}${idSuffix}`} href={GBP_MAP_URL} target="_blank" rel="noopener noreferrer" className={LINK}>Google Maps</a>.
      </p>
    </>
  );
}

function CallOrVisitSection() {
  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-full">
              <h2 id="call-or-visit" className={H2_PHONE}>Call or Visit</h2>
              <CallOrVisitBody />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="call-or-visit-lg" className={H2_DESKTOP}>Call or Visit</h2>
              <CallOrVisitBody idSuffix="-lg" />
            </div>
            <div className="col-span-5 flex items-center justify-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-[#C83803]" style={ICON_STYLE} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SendAMessageSection() {
  const intro = (
    <p className="pt-3 text-base text-white shadow-text">
      Tell Jeff what you want to automate or fix, and he will reply by email.
    </p>
  );
  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-1 place-items-center">
            <div className="col-span-full w-full">
              <h2 id="send-a-message" className={H2_PHONE}>Send a Message</h2>
              {intro}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center">
              <FontAwesomeIcon icon={faPaperPlane} className="text-[#C83803]" style={ICON_STYLE} />
            </div>
            <div className="col-span-7 w-full">
              <h2 id="send-a-message-lg" className={H2_DESKTOP}>Send a Message</h2>
              {intro}
              <ContactForm idSuffix="-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <ToolsHeroSection title={TITLE} summary={SUMMARY} icon={faEnvelope} />
      <article>
        <CallOrVisitSection />
        <SendAMessageSection />
        <SchedulerShell />
      </article>
    </>
  );
}
