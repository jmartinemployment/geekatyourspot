
export default function DecisionsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The first decisions you make in a multi-state sales tax rollout are the ones that shape your compliance
        risk for years. This is not just about which tax tool you buy or whether to run a pilot, the fundamental
        calls around business objectives, data structure, and operational boundaries will decide what your
        system can and cannot do. These are the moments that set your compliance ceiling. Once you put them in
        place, you cannot easily go back without tearing up what you’ve built.</p>
      <p className="text-base text-white shadow-text pt-3">
        The biggest trap is treating compliance as a bolt-on to your existing systems. Many owners try to “just
        add” a tax engine to Shopify, QuickBooks, or their current checkout, hoping for a quick fix. That
        approach leaves you stuck with piecemeal reporting, missed triggers, and a stack of manual work,
        especially as soon as you add a second sales channel or cross a new state threshold. The right move is
        to scope compliance as a core business objective from the start, not an afterthought. Define what
        “audit-proof” means for your company: is it zero late filings, full exemption certificate management, or
        a single dashboard for all channels? Your answer drives everything downstream.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data quality&nbsp;is the next foundation. If you don’t
        have a clean, validated record of where every sale happened, which products were shipped, and which
        exemptions apply, no software will save you. This is where tools like TaxCloud and Quaderno earn their
        keep. TaxCloud pulls state-specific rules and applies rooftop-level rates, but only if your transaction
        data is mapped right. Quaderno lets you unify sales from Stripe, PayPal, and Braintree, but only if
        those sources are feeding in complete, normalized records. If your data is full of gaps, missing ZIP
        codes, unclear product types, or unmatched refunds, the risk of double-taxing or missing nexus triggers
        rises fast.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another early fork in the road: will you automate compliance across all channels with one system, or
        split tracking, calculation, and filing across multiple apps? The evidence is clear, splitting this
        work, even between best-in-class tools, multiplies your risk. TaxCloud’s own guidance says you can
        technically use different systems for tracking nexus and filing, but warns this “increases the
        likelihood of undercounting sales, which could lead to back taxes and penalties.” Zamp’s approach is to
        centralize every step, so nothing falls through the cracks when you launch a new product, add a channel,
        or start selling B2B. If you make the wrong call early, you may spend years patching together missing
        data and reconciling errors at audit time.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last big decision is about roles and accountability. Who owns compliance? If the answer is “no one,”
        you’re building a silent liability. TaxValet is built for teams that want to offload not just the
        filings but the audit defense, VDA cleanup, and the tangle of local home-rule filings, making sure a
        single missed jurisdiction does not snowball into penalties. TaxJar, on the other hand, is built for
        teams that want real-time alerts and executive dashboards but still want to keep some oversight
        in-house. Once you decide who owns what, you set the path for every process that follows, registration,
        filing, audit defense, and ongoing monitoring.</p>
      <p className="text-base text-white shadow-text pt-3">
        A South Florida retailer with growing e-commerce may not realize that skipping a full data cleanup at
        the start (or letting their accountant “just handle it” in QuickBooks) locks them into months of manual
        reconciliation every quarter. Or that choosing a tool that can’t handle multi-channel sales means
        they’ll miss a threshold in New York while focusing on Texas. These early calls are not reversible
        without pain. Once you set your architecture, it either becomes a force multiplier for compliance, or a
        bottleneck that costs you money and peace of mind every year.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-early-choices-that-lock-in-your-compliance-risk-or-remove-it" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Early Choices That Lock In Your Compliance Risk, Or Remove It
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-early-choices-that-lock-in-your-compliance-risk-or-remove-it-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Early Choices That Lock In Your Compliance Risk, Or Remove It
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
