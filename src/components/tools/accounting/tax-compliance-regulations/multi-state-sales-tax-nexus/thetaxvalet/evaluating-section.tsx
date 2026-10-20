import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Choosing TaxValet for multi-state
        sales&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>&nbsp;is not about finding the tool with the most features or the lowest
        sticker price. It is about matching the platform to your real-world risks, workload, and the way your
        team operates. For small businesses in South Florida, the right fit comes down to three things: how well
        the tool covers your actual compliance footprint, what it removes from your weekly work, and whether its
        cost structure matches your growth path.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first question is coverage. TaxValet is built for businesses that sell across state lines and risk
        crossing nexus thresholds before they are ready. If you are running a single retail location or only
        selling within Florida, the platform is more than you need. But if your revenue or transaction count in
        other states is approaching $100,000 or 200 per state, or if you use multiple sales channels (like
        Amazon, Shopify, and wholesale), TaxValet’s full-service approach is what keeps you from missing a
        filing or getting blindsided by an audit. Its onboarding includes a complete nexus analysis, so you know
        exactly where you are exposed before a state comes asking. This is not a generic software package that
        leaves you to figure out which states matter, it is a managed service that closes every compliance gap
        it finds.</p>
      <p className="text-md text-white shadow-text pt-3">
        The second factor is the workload you reclaim. TaxValet is not just a filing engine. It is a service
        that takes over the entire compliance cycle: nexus tracking, permit registration, product taxability
        setup, filings, payments, and audit defense. If your team is spending hours each week tracking sales
        across channels, reconciling returns, or responding to state notices, TaxValet’s value is in removing
        those jobs entirely. It is not about automating a single step or providing a dashboard of alerts, it is
        about never having to touch a tax return or chase a filing deadline again. The difference shows up on
        Friday afternoon, when your team is closing sales or planning next week’s promotions, not scrambling to
        fix a missing return or answer a state notice.</p>
      <p className="text-md text-white shadow-text pt-3">
        On pricing, TaxValet stands apart from most competitors. The platform uses a flat monthly fee, with
        plans starting at $560 per month according to its published pricing. There are no hidden fees, overage
        charges, or surprise add-ons. This is not a pay-per-filing or transaction-tiered model that spikes
        during busy months. You know exactly what your compliance costs will be, which makes budgeting and
        forecasting much simpler. For a small business, this predictability is critical. It means you can scale
        sales without worrying that a few big orders will trigger a sudden jump in compliance costs. The flat
        fee covers the full service, nexus analysis, filings, audit defense, and ongoing monitoring. You do not
        pay extra for support, and you do not get hit with surprise bills if you add a new channel or cross into
        another state mid-year.</p>
      <p className="text-md text-white shadow-text pt-3">
        When weighing TaxValet, consider what you are comparing it to. Off-the-shelf tax software may have a
        lower monthly fee, but it leaves you responsible for setup, data mapping, and fixing mistakes. It will
        not track inventory movement, reconcile multi-channel data, or handle local filings in home-rule states.
        If you miss a threshold or file late, you are on the hook for penalties, and audit support is usually
        limited or nonexistent. TaxValet, by contrast, provides an audit guarantee, if a penalty arises from
        their error, they cover it. For a small business, this is the difference between a manageable risk and a
        business-threatening one.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fit is also about support. TaxValet assigns a dedicated team of multi-state tax experts to your account.
        You get unlimited live support, by phone, email, or web meeting. For teams that have struggled to get
        clear answers from software vendors or have been left to troubleshoot compliance problems on their own,
        this is a major shift. Questions about new products, state notices, or unusual transactions get answered
        by someone who knows your business, not by searching a knowledge base or waiting for a ticket to be
        picked up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, judge TaxValet by its boundaries. If your business needs API-level control, deep customization,
        or integration with highly specialized internal systems, the platform’s managed approach may not be a
        fit. It is not designed for custom extensions or for companies that want to build their own compliance
        logic on top of a toolkit. But for the vast majority of small businesses in Miami-Dade, Broward, and
        West Palm Beach counties, the tradeoff is clear: you exchange control for certainty and speed. You get a
        system where compliance is handled, not just tracked, and where the cost is fixed and transparent.</p>
      <p className="text-md text-white shadow-text pt-3">
        When Geek @ Your Spot LLC implements TaxValet, they handle the upfront mapping, data review, and system
        connection, so you start with a clean slate and a clear compliance roadmap. They work with you to keep
        your profile current as you grow, so the platform’s automation always matches your real operations. The
        result is a compliance process that scales with your business, without scaling your workload or your
        risk.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-taxvalet-fit-pricing-and-what-matters-for-small-teams" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge TaxValet: Fit, Pricing, and What Matters for Small Teams
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-taxvalet-fit-pricing-and-what-matters-for-small-teams" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge TaxValet: Fit, Pricing, and What Matters for Small Teams
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
