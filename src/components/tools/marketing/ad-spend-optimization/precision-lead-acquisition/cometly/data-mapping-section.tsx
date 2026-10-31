import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting the most out of Cometly depends on the data structure and mapping decisions you make before and during
        deployment. The platform&rsquo;s power comes from its ability to tie ad spend to real business outcomes, but
        that only works when every conversion event is clearly defined, consistently tagged, and mapped to the right
        revenue source. This upfront work is what turns Cometly from a reporting add-on into a true optimization
        engine.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first decision is which events count as conversions in your funnel. For some small businesses, it is a
        purchase or a booked call; for others, it is a form fill or a discovery call. Cometly lets you define these
        events at a granular level, so you are not stuck with generic metrics like clicks or impressions. Each event
        must carry a unique identifier, such as an order ID or a hashed email, so the system can match it back to the
        original ad click. This is essential for accurate attribution and for deduplicating events that are captured by
        both browser pixels and server-side tracking.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is mapping every conversion to its source across platforms. Cometly relies on standardized <GlossaryLink slug="utm-parameters">UTM
        parameters</GlossaryLink> to trace traffic and conversions back to the exact campaign, ad set, and creative.
        Consistency is critical. If your team uses different naming conventions or incomplete UTMs, you will end up with
        fragmented data that cannot be stitched together. Before going live, audit all your campaigns and update tags to
        a single standard. This step alone can prevent most downstream attribution errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        CRM integration is where Cometly links marketing data to actual sales outcomes. You need to ensure that every
        new lead or sale in your CRM carries the original source data, UTMs, click IDs, or other identifiers, so that
        when a deal closes, Cometly can tie it back to the ad that started the journey. This may require updating your
        CRM forms or workflows to capture and store these fields. The payoff is that you see not just which ads drive
        leads, but which drive revenue and high-value customers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Deduplication logic is another upfront decision point. When you run both pixel and server-side tracking, Cometly
        needs to know which events are the same and which are unique. This is handled by assigning a consistent event ID
        across both sources. For Meta, this is the event_id parameter; for Google, it is the order_id or
        transaction_id. Getting this right means you avoid double-counting conversions and can trust your numbers when
        comparing browser and server data during rollout.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data enrichment is a final mapping step. Cometly can send enriched conversion events back to ad platforms, but
        only if you map additional fields, like revenue amount, product details, or <GlossaryLink slug="customer-lifetime-value">customer
        lifetime value</GlossaryLink>, to each conversion. This is what lets the algorithms optimize for real outcomes,
        not just generic form completions. You decide which fields to include based on what matters for your business.
        The more context you provide, the smarter your optimization cycle becomes.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with longer sales cycles, <GlossaryLink slug="offline-conversions">offline conversion</GlossaryLink>
        imports are part of the mapping plan. You must ensure that when a lead closes days or weeks after the initial
        click, that event is sent back to Cometly and then to the ad platform. This closes the loop and lets algorithms
        learn from the full customer journey, not just immediate conversions.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last mapping decision is how frequently to sync data. Cometly recommends sending conversion data back to
        platforms within 24 to 48 hours of the event (<a id={`tools-marketing-precision-lead-acquisition-cometly-data-mapping-source-cometly-com${idSuffix}`} href="https://www.cometly.com/post/centralized-ad-performance-dashboard" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Cometly</a>,
        as of Oct 29, 2026). This timing keeps platform algorithms up to date and ensures your budget allocation
        decisions are based on the latest results, not last week&rsquo;s numbers. Setting up automated syncs prevents
        lags and removes the need for manual uploads.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Cometly&rsquo;s value depends on clear event definitions, consistent UTM tagging, CRM-source mapping,
        deduplication logic, data enrichment, offline conversion handling, and timely data syncs. Each of these is a
        one-time decision with long-term impact. Small teams that get these right up front see a unified, accurate view
        of every dollar spent and every dollar earned, no more guessing, no more wasted budget.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-choices-that-make-or-break-cometlys-value" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data structure and mapping choices that make or break Cometly&rsquo;s value
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
              <h2 id="the-data-structure-and-mapping-choices-that-make-or-break-cometlys-value-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data structure and mapping choices that make or break Cometly&rsquo;s value
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
