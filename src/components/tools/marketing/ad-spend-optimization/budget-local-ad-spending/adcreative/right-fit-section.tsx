import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative is designed for small businesses, startups, e-commerce sellers, and agencies that need
        high-performing ad creative without the overhead of a dedicated marketing team or agency. If your business
        is running local campaigns on a budget under $500 a month, and you need every ad to pull its weight,
        AdCreative fits that need (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-right-fit-source-adcreative-ai${idSuffix}`} href="https://www.adcreative.ai/use-case/e-commerce" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). The platform’s AI handles both the heavy lifting of creative production and the ongoing
        validation that keeps your ads converting, so you are not left guessing what works.</p>
      <p className="text-base text-white shadow-text pt-3">
        This is especially relevant for teams in Miami-Dade, Broward, and West Palm Beach counties who lack the time
        or resources to manually write, design, and test dozens of ad variants. AdCreative’s workflow lets you
        upload your brand assets, input your campaign details, and get back hundreds of conversion-focused ad
        options, scored, ranked, and ready to launch. The system is accessible to both marketing beginners and more
        experienced teams, with controls for brand colors, fonts, and messaging tone built in, so you never have to
        worry about off-brand or inconsistent creative.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business owner or marketing lead who has struggled with platform defaults draining budget, or
        with the frustration of seeing ads ignored because they look generic or lack a clear value proposition,
        AdCreative provides a way forward. The platform’s AI is trained on over 500 million high-performing ad texts
        and layouts, so every asset it generates is grounded in what actually works (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-right-fit-source-adcreative-ai-2${idSuffix}`} href="https://www.adcreative.ai/use-case/e-commerce" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). You do not need to become an expert in copywriting frameworks or spend hours A/B
        testing headlines, AdCreative brings that expertise to you, instantly.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, AdCreative is not the right fit for every scenario. If your business requires highly bespoke,
        one-off creative concepts for national brand campaigns, or if you need deep integration with niche,
        industry-specific ad platforms not currently supported, you may find the system’s focus on scalable,
        conversion-driven creative too structured. AdCreative is optimized for businesses that want to move fast,
        test often, and keep costs predictable. It is not a replacement for a full-service agency when you need
        custom video shoots, influencer campaigns, or experiential marketing assets that fall outside the platform’s
        automated workflows.</p>
      <p className="text-base text-white shadow-text pt-3">
        For South Florida small businesses considering whether to do it themselves, hire an agency, or use an AI
        platform, the decision comes down to control, speed, and cost. AdCreative gives you the ability to generate,
        test, and launch creative in minutes, with no minimum spend and no waiting on outside vendors. You keep your
        campaigns in-house, retain full control over your brand, and avoid the delays and markups that come with
        third-party services. The platform’s pricing is transparent and scales with your needs, so you can start
        small and grow as your campaigns succeed.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step for a business in this position is to assess whether your current creative process is holding
        you back. If you are spending too much time producing ads, missing out on leads because your creative is
        stale or off-brand, or watching your budget disappear with little return, AdCreative makes those problems
        solvable. The platform is built to plug into your existing ad accounts, work with your brand assets, and
        deliver validated, conversion-focused creative on demand. For small businesses wanting to compete in a
        crowded local market without agency overhead, this is a practical, proven path forward.</p>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-marketing-ad-spend-optimization-budget-local-ad-spending-adcreative-xlink-blog${idSuffix}`} href="/blog/marketing/ad-spend-optimization/how-miami-businesses-can-stop-wasting-ad-dollars-now" className="text-[#C83803] hover:underline">How Miami Businesses Can Stop Wasting Ad Dollars Now</Link> places AdCreative on the design side of the budget problem: it applies your brand colors and fonts to every variant, produces new creative batches in seconds, and rotates fresh assets in when click-through rates start to slide, so a banner is not left running for months unchecked. The post also gives the condition that makes this work: a defined brand kit set at the start, because without one the AI defaults to whatever looks generic and trust and conversion suffer. Setting those rules, and the objectives the creative has to serve, is the first phase of the four-phase assessment in our <Link id={`tools-marketing-ad-spend-optimization-budget-local-ad-spending-adcreative-xlink-pillar${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-budget-ad-copy-message-validation" className="text-[#C83803] hover:underline">AI Budget Ad Copy &amp; Message Validation</Link> guide.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`tools-marketing-budget-ad-copy-message-validation-adcreative-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What is your comfortable monthly ad spend right now, and what are you currently paying a human or agency to
          manage it?</li>
        <li>If we double your current volume of inbound leads next month, does your business have the internal staff to
          pick up the phone within 5 minutes, or will they sit in an inbox?</li>
        <li>Does your business draw customers from a tight 5-to-10 mile radius around a physical storefront, or are you
          chasing high-ticket contracts across all of Miami-Dade, Broward, and Palm Beach or nationally?</li>
        <li>How often do you refresh your ad graphics and text, and how do you currently figure out which image actually
          made money versus just getting empty clicks?</li>
        <li>When a new client pays you, can you track that specific invoice back to the exact Facebook ad or Google
          keyword they clicked three weeks ago, or is that a complete black box?</li>
        <li>Where is your customer data stored right now? Is it scattered across Gmail and paper folders, or do you have
          a <GlossaryLink slug="crm">CRM</GlossaryLink> like Hubspot or Salesforce that updates automatically?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-adcreative-is-built-for-who-should-look-elsewhere-and-the-next-step-for-south-florida-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who AdCreative is built for, who should look elsewhere, and the next step for South Florida small businesses
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
              <h2 id="who-adcreative-is-built-for-who-should-look-elsewhere-and-the-next-step-for-south-florida-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who AdCreative is built for, who should look elsewhere, and the next step for South Florida small businesses
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
