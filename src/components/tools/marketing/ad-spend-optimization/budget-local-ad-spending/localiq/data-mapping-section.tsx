import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting the data structure right at the start is what makes LocaliQ work for Budget Ad Copy &amp; Message
        Validation. The first step is mapping your existing campaign data, keywords, ads, audiences, and
        conversions, into LocaliQ’s unified platform. This is not a simple import. Each data point needs to match
        LocaliQ’s optimization engine so the AI can make real-time decisions that actually improve your results, not
        just report them.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core decision is how to map your lead sources and conversion events. LocaliQ’s platform tracks phone
        calls, web forms, chat, and even offline events, but only if these are mapped correctly during setup. Geek @
        Your Spot works with you to identify every touchpoint that matters, whether it’s a call from a Google ad, a
        form fill from a Facebook campaign, or a chat inquiry from your website. Each is tagged and linked to the
        right campaign, so you have a single source of truth for what is driving real leads.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses, this mapping process avoids the classic trap of double-counting or missing leads.
        Without it, you risk spending on ads that look good in the platform dashboard but deliver nothing in actual
        sales. LocaliQ’s system pulls all lead data into one dashboard, showing exactly which ad, keyword, or
        audience generated each contact. This lets you stop wasting budget on campaigns that only drive empty clicks
        or spam forms.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another key decision is how to structure your campaigns for LocaliQ’s optimization. The platform can only
        optimize what it can see and measure. Campaigns need to be broken down by location, audience, and intent,
        not just dumped in as a single catch-all. For Budget Ad Copy &amp; Message Validation, this means creating
        clear boundaries around service areas, audience segments, and offer types. Geek @ Your Spot helps you set up
        these structures so LocaliQ’s AI can test and shift spend between them, rather than guessing where to
        allocate your limited dollars.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geographic mapping is especially important. LocaliQ’s strength for South Florida businesses is its ability
        to lock down exact geofencing and smart-radius targeting. This only works if your data is mapped to the
        actual zip codes, cities, or service areas you want to reach. Geek @ Your Spot configures these boundaries
        during deployment, so your ads stop leaking into out-of-area clicks that never convert. Every dollar stays
        focused on the neighborhoods where you can actually win business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Message validation depends on structured data for headlines, copy, images, and offers. LocaliQ’s
        optimization engine runs real-time tests on every creative element, but only if they are set up as discrete,
        testable variables. Geek @ Your Spot helps you break out each message component so the platform can run
        automated A/B tests and shift spend to the winners. This is what lets you see, for example, which headline
        drives more calls or which image pulls in more qualified leads, without running manual tests for weeks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Mapping your CRM and customer data is the final step. LocaliQ can ingest first-party data, call outcomes,
        CRM uploads, and micro-conversions from your website, but only if these are structured and mapped to the
        right campaigns and audiences. This lets the platform’s AI learn from past sales, not just clicks, and
        optimize future campaigns for the actions that matter. Geek @ Your Spot works with your existing CRM or lead
        management tools to ensure this data flows into LocaliQ without manual re-entry or data loss.</p>
      <p className="text-base text-white shadow-text pt-3">
        A missed mapping step is the fastest way to break automation. If a lead source is not connected, or a
        conversion event is not tagged, LocaliQ’s AI cannot optimize for it. That means wasted budget and missed
        opportunities. Geek @ Your Spot’s deployment process includes a full data audit and mapping checklist to
        make sure nothing is dropped. The goal is to give you a live dashboard where every campaign, lead, and
        conversion is tracked and attributed, so you can see exactly what is working and what needs to change.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with messy or incomplete data, Geek @ Your Spot can stage the mapping in phases. Start with
        the channels and campaigns that drive the most volume, then layer in additional sources as <GlossaryLink slug="data-quality">data
        quality</GlossaryLink> improves. LocaliQ’s platform is flexible enough to absorb new data without resetting
        the optimization engine or losing historical performance insights. This phased approach means you see value
        early, even if your data is not perfect from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        The upfront data structure and mapping decisions are what make LocaliQ’s automation possible. When done
        right, you get a single, accurate view of every lead and campaign, with AI-driven optimization that keeps
        your budget working where it matters most. Geek @ Your Spot closes the technical gaps, so your team can
        focus on closing leads instead of chasing down missing data or troubleshooting broken reports.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-mapping-and-structure-decisions-that-shape-your-localiq-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data mapping and structure decisions that shape your LocaliQ deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-mapping-and-structure-decisions-that-shape-your-localiq-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data mapping and structure decisions that shape your LocaliQ deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
