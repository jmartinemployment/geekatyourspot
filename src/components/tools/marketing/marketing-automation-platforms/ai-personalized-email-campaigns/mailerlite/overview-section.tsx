import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Why are our email campaigns missing the mark, even when we send updates every week? For most small
        businesses, the real problem is that messages go out to everyone in the same batch, so customers skim,
        ignore or <GlossaryLink slug="opt-out">unsubscribe</GlossaryLink> when they do not see anything that speaks
        to them. <Link id={`tools-marketing-personalized-email-campaigns-mailerlite-overview-personalized-email-campaigns${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-personalized-email-campaigns" className="text-[#C83803] hover:underline">Personalized
        Email Campaigns</Link> sound like the answer, but actually hand-writing every message for each segment is
        impossible with a small team and limited hours. The result is lost sales, weak follow-up and a list that
        slowly stops caring.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI-powered <GlossaryLink slug="email-automation">email automation</GlossaryLink> changes this: it lets you
        send messages tailored to each customer’s interests, behaviors and stage in the buying journey, with almost
        no extra effort. A platform like MailerLite makes it simple to segment your list, <GlossaryLink slug="trigger">trigger</GlossaryLink> the
        right messages at the right time and use <GlossaryLink slug="dynamic-content">dynamic content</GlossaryLink> blocks
        so every subscriber sees what matters to them. The evidence shows this works, segmenting and automating
        campaigns means higher <GlossaryLink slug="open-rate">open rates</GlossaryLink>, more clicks, fewer
        unsubscribes and stronger sales, all without the need for a big marketing department or expensive enterprise
        tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in Miami-Dade, Broward and Palm Beach counties, this means you can finally run the kind
        of professional, relevant email marketing that big brands use, but sized and priced for a local team. If you
        are tired of blasting out one-size-fits-all emails and seeing little in return, you do not have to settle
        for that anymore. This approach gives you real <GlossaryLink slug="customer-engagement">customer engagement</GlossaryLink> and
        growth, without hours of manual work or a platform that overwhelms your budget and staff. This page explains
        exactly how to make that switch, and what results you can expect when you do.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
