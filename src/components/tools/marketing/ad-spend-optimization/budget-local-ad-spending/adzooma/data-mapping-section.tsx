export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The data structure and mapping decisions you make at the start of an Adzooma deployment set the foundation
        for every automation, alert, and optimization that follows. Adzooma is designed for small businesses that
        need to unify campaign data from Google, Meta, and Microsoft Ads, but the platform’s power depends on how
        well your accounts, budgets, and ad assets are mapped to its dashboard. Upfront choices here are not just
        technical, they determine how clearly you see risks, how fast you can act, and how much manual work you
        remove from your week.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first and most critical step is mapping all ad accounts to the right business units and spend
        categories. Adzooma allows unlimited ad accounts on every plan, but if you do not group campaigns by real
        business priorities, like location, product line, or service area, you lose the ability to monitor spend and
        performance where it matters. For a small business with multiple locations or product lines, this means
        deciding which campaigns belong to which reporting group, and making sure every dollar is tracked to its
        owner. This mapping also lets you set up targeted alerts and rules, so you do not get flooded with noise
        from campaigns that do not matter to your core business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next, you need to structure your campaign and ad group data for cross-platform validation. Adzooma’s
        dashboard surfaces optimization opportunities and flags issues across Google, Meta, and Microsoft, but only
        if the naming and structure of your campaigns are consistent. This does not mean you have to rebuild
        everything, but you do need to ensure that campaigns targeting the same audience or product use matching
        labels and formats. This lets Adzooma’s automation engine compare performance, spot budget pacing errors,
        and surface actionable fixes in a unified view. It also makes it possible to automate rules that work across
        channels, like pausing all ads for a discontinued product or alerting you when a promo code expires.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget mapping is another key decision. Adzooma’s budget pacing and overspend alerts depend on knowing which
        campaigns share a budget, which are capped, and which can flex. You need to decide upfront how budgets are
        allocated, by campaign, by channel, or by business unit, and make sure this is reflected in both your ad
        platforms and in Adzooma’s dashboard. This mapping lets the platform flag overspending or underspending
        before it costs you, and ensures that reallocation rules work as intended. For businesses running
        micro-budgets, even small errors in budget mapping can mean the difference between a week of leads and a
        week of wasted spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ad asset mapping is also essential. Adzooma’s automation can pause underperforming ads, flag outdated copy,
        and surface creative fatigue, but only if each ad asset is tagged and grouped correctly. This means
        reviewing your ad copy, images, and video assets to ensure they are labeled by campaign, promotion, or
        expiration date. Clear asset mapping lets the platform’s automation rules work as intended, pausing ads with
        low click-through rates, alerting you when a promotion is about to end, or surfacing new creative
        opportunities based on performance data.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small teams, the temptation is to skip this upfront work and rely on default account structures. That
        approach leads to missed alerts, noisy dashboards, and automation rules that fire in the wrong place. Geek @
        Your Spot’s role is to walk your team through these mapping decisions, using a structured checklist to
        ensure every campaign, budget, and asset is mapped to your business needs. This is not about adding
        complexity, it is about making sure automation works for you, not against you. The right mapping at the
        start means fewer errors, faster fixes, and a dashboard that actually reflects your real-world priorities.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another mapping decision is how to handle cross-channel reporting. Adzooma unifies reporting across Google,
        Meta, and Microsoft, but only if data fields like campaign names, objectives, and spend categories match
        across platforms. Upfront alignment here lets you see true performance by message, offer, or audience, not
        just by platform. This is especially important for small businesses running limited campaigns, if you cannot
        see which message or copy angle is working across channels, you are flying blind. Consistent data mapping
        means you get actionable, apples-to-apples insights, not just a pile of raw data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, you need to decide which metrics and triggers matter most for your automation rules. Adzooma can
        automate by spend threshold, click-through rate, conversion rate, or custom triggers, but only if those
        metrics are mapped to your campaign structure. Upfront, you need to set thresholds that match your risk
        tolerance, how much budget can you lose before you want an alert, how low can performance drop before an ad
        is paused, and which campaigns need the tightest controls. These decisions are not technical, they are
        operational, and they drive how much value you get from automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, the upfront data structure and mapping decisions are what make Adzooma work for a small business
        in South Florida. The right mapping means you catch spend leaks before they drain your budget, automate
        fixes that would take hours by hand, and see your campaign performance in a way that matches your real
        business needs. Geek @ Your Spot’s job is to guide these decisions, configure the platform to your
        structure, and ensure that the automation engine runs on clean, mapped data, not a jumble of disconnected
        accounts and assets. This is how you turn Adzooma from a generic tool into a fit-for-purpose solution that
        saves time, protects spend, and validates every ad copy and message before it costs you.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="mapping-and-structuring-data-for-adzooma-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Mapping and structuring data for Adzooma deployment
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
              <h2 id="mapping-and-structuring-data-for-adzooma-deployment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Mapping and structuring data for Adzooma deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
