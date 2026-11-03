import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting the data structure and mapping right at the start is what makes Google Performance Max effective for
        precision lead acquisition. The system relies on clear, accurate data about your campaigns,
        audiences, and creative assets. If these are not mapped correctly, the automation cannot optimize spend or
        validate messages in real time. Upfront decisions about what data to connect, how to categorize it, and how
        to keep it current determine how well Google Performance Max adapts to your local market and budget
        constraints.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first mapping decision is which ad accounts and channels to connect. Google Performance Max is designed
        for direct integration with Google Ads, Meta, and other major platforms. You need to decide which accounts
        hold your primary campaigns and which should be excluded from automation. For small businesses running
        multiple local campaigns, this means mapping only the accounts that target your core service areas, not test
        or legacy accounts that could skew results. Getting this step right ensures that Google Performance Max
        optimizes the budgets that matter, not old or irrelevant data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next is audience and location mapping. Google Performance Max uses detailed geographic and demographic data
        to narrow ad delivery to high-intent buyers within your service area. This requires mapping your customer
        data, such as zip codes, city boundaries, or even custom radius targets, to the platform’s targeting fields.
        If you run campaigns across Miami-Dade, Broward, and West Palm Beach, each zone needs to be mapped to its
        own set of rules. Google Performance Max’s location-level controls allow you to set these boundaries
        precisely, but only if your data is structured to match. A mismatch here means ads could leak into areas you
        do not serve, wasting budget on clicks that will never convert.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative asset mapping is just as critical. Google Performance Max automates the rotation and testing of ad
        copy, headlines, and images. For this to work, each asset must be tagged and categorized by campaign,
        audience, and message type. If your data does not distinguish between promotion types or seasonal messages,
        the system cannot run effective A/B tests or adapt to ad fatigue. Setting up a clear taxonomy, such as
        labeling assets by offer, headline variant, or target segment, gives Google Performance Max the structure it
        needs to generate and validate new creative combinations without manual oversight.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget mapping is another key step. Google Performance Max works best when it has access to your real spend
        data, <GlossaryLink slug="daily-budget">daily budget</GlossaryLink> caps, and campaign flight dates. This
        information must be mapped from your ad accounts into the platform’s budget optimization engine. If you set
        budgets at the wrong level, such as at the account instead of the campaign, or vice versa, the automation
        can either overspend or underspend, missing your goals. Upfront mapping ensures that every dollar is tracked
        and allocated where it delivers the most value.</p>
      <p className="text-base text-white shadow-text pt-3">
        Conversion and performance data also need careful mapping. Google Performance Max uses real-time signals,
        such as clicks, form fills, and purchases, to decide when to pause, rotate, or push ad variations. If your
        conversion tracking is inconsistent or mapped to the wrong events, the system cannot make informed
        decisions. You need to define which actions count as a conversion, map these to the right metrics in your ad
        platforms, and ensure the data flows without delay. This is especially important for small teams, where a
        single missed conversion can mean a week’s budget is spent on the wrong message.</p>
      <p className="text-base text-white shadow-text pt-3">
        Keeping the data structure current is not a one-time job. As your campaigns evolve, new products launch, or
        service areas change, you need to update your mapping to reflect the latest reality. Google Performance Max
        is built to adapt, but only if the underlying data stays accurate. Regular audits, checking that your
        audience lists, creative assets, and budget caps match your real-world priorities, are essential. For
        clients working with Geek @ Your Spot, this ongoing mapping is part of the managed service, so you are not
        left to troubleshoot data issues on your own.</p>
      <p className="text-base text-white shadow-text pt-3">
        The upfront investment in data structure and mapping pays off in speed and results. When Google Performance
        Max knows exactly where your ads should run, who should see them, and which messages to test, it can
        automate the work that would take a human manager hours each day. You avoid the common pitfalls of wasted
        spend, missed audiences, and stale creative. Instead, you get a system that learns from your real results
        and adapts your campaigns in real time, keeping every dollar focused on what works.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, the decisions you make about data structure and mapping before deploying Google Performance Max
        set the foundation for everything that follows. With the right setup, the automation delivers on its
        promise: less manual work, lower costs, and faster validation of what actually drives sales in your local
        market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-data-structure-and-mapping-choices-that-set-google-performance-max-up-for-success" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data structure and mapping choices that set Google Performance Max up for success
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
              <h2 id="the-data-structure-and-mapping-choices-that-set-google-performance-max-up-for-success-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The data structure and mapping choices that set Google Performance Max up for success
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
