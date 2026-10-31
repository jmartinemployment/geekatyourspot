import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The success of a Plai deployment rests on how well your data is structured and mapped at the outset.
        Plai&rsquo;s approach is to centralize campaign, audience, and creative data from all your platforms in one
        dashboard, but the value comes from how cleanly that data is organized and how consistently it is mapped across
        sources. Geek @ Your Spot leads this process to ensure your reporting, targeting, and optimization logic line up
        from the start.</p>
      <p className="text-base text-white shadow-text pt-3">
        Each workspace in Plai holds brand-specific data, campaigns, pages, analytics, and audience segments. For a
        business with multiple brands or business units, the first mapping decision is how to divide workspaces. The
        goal is to keep data siloed so there is no overlap between brands or clients. This prevents errors, protects
        sensitive information, and keeps reporting clear. Geek @ Your Spot works with you to define those boundaries
        upfront, so each business unit or client has its own isolated environment within Plai.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience data is next. Plai supports the centralization of audience lists and the creation of niche-specific
        audience packs, such as for realtors, roofers, or ecommerce. Geek @ Your Spot reviews your existing customer
        lists, <GlossaryLink slug="lookalike-audience">lookalike audiences</GlossaryLink>, and behavioral segments, then
        maps them into Plai&rsquo;s structure. This allows for consistent targeting across campaigns and platforms, which
        is critical for optimization. If you have prebuilt targeting or custom segments in your current platforms, those
        can be imported and reused, speeding up the setup and ensuring no high-performing segment is lost in the
        transition.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaign structure is mapped to match proven frameworks. Plai uses templates to bring consistency to campaign
        setup, naming, and reporting. Geek @ Your Spot reviews how your current campaigns are organized, by objective, by
        channel, by product line, and adapts that structure to Plai&rsquo;s system. This is not just a technical step; it
        affects how automation rules are applied, how budgets are grouped, and how performance is tracked. A clear,
        logical campaign structure makes it easier for Plai&rsquo;s AI to optimize spend and for your team to understand
        what is working.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative assets, images, videos, ad copy, are stored and tagged inside Plai. Mapping these assets up front means
        your best-performing ads can be quickly reused as templates for new campaigns, and creative testing can happen
        faster. Geek @ Your Spot helps organize your creative library so that each asset is linked to the right campaign,
        audience, and objective. This reduces duplication, speeds up campaign launches, and ensures every ad is tied to
        the right brand standards.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget mapping is a critical step. Plai lets you monitor and adjust budgets across platforms, so Geek @ Your Spot
        works with you to define budget groups, by channel, by campaign, or by business unit. This mapping allows
        Plai&rsquo;s optimization engine to shift spend to the best-performing ads without manual intervention. It also
        makes budget reporting more transparent, so you can see at a glance where your dollars are going and which
        campaigns are delivering the best return.</p>
      <p className="text-base text-white shadow-text pt-3">
        Conversion tracking and analytics setup are automated in Plai, but only if the right data points are mapped from
        the start. Geek @ Your Spot ensures that your conversion events, pixel placements, and analytics tags are
        connected to the right campaigns and platforms. This step is what enables Plai to provide real-time performance
        reporting and to drive its optimization logic. If conversion tracking is not mapped correctly, you lose the
        ability to measure what is actually working, so this is never left as an afterthought.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, reporting views are configured to match your team&rsquo;s needs. Plai&rsquo;s dashboards can show
        performance by channel, by campaign, by audience, or by business unit. Geek @ Your Spot sets up these views based
        on how you want to see your data and make decisions. This upfront mapping means your team gets actionable
        insights from day one, without having to dig through raw data or wait for manual reports.</p>
      <p className="text-base text-white shadow-text pt-3">
        A well-structured Plai deployment means faster onboarding, fewer errors, and a system that can scale as your
        business grows. Geek @ Your Spot&rsquo;s role is to handle the complexity of data mapping so your team gets the
        benefits of automation and optimization without the technical headaches. The result is a foundation that
        supports smarter ad spend decisions, clearer reporting, and more effective campaigns from the first day Plai goes
        live.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-plais-success-from-day-one" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How data structure and mapping decisions shape Plai&rsquo;s success from day one
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-decisions-shape-plais-success-from-day-one-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How data structure and mapping decisions shape Plai&rsquo;s success from day one
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
