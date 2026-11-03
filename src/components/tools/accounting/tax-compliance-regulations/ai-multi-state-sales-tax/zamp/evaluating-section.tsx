
export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Zamp is built for small businesses that need to solve multi-state
        sales&nbsp;tax
        compliance&nbsp;without hiring a dedicated tax team. The right fit is a company selling
        across state lines, often through multiple channels, that cannot risk missing a filing or misclassifying
        a product, but also cannot afford the overhead or complexity of a big-enterprise solution. If you are
        running
        e-commerce,&nbsp;SaaS,
        or wholesale distribution in South Florida and your sales are growing beyond Florida’s borders, Zamp is
        designed to make the compliance side invisible, not just easier.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first question to ask: does Zamp cover all the states and channels you operate in, and can it handle
        the complexity of your product catalog? Zamp’s platform manages economic and physical nexus for every
        state, tracks thresholds in real time, and supports direct integration with Shopify, Amazon,
        BigCommerce, Magento, QuickBooks, and
        leading&nbsp;ERP&nbsp;systems.
        If your business sells through a mix of direct, marketplace, and wholesale channels, Zamp’s unified
        workflow ensures nothing falls through the cracks. This is not just about plugging in a tax engine, it
        is about having one system reconcile all your sales data, product mapping, and filings, so you do not
        have to manage exceptions by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        Pricing is a core differentiator. Zamp offers a flat, predictable fee that covers filings,
        registrations, home-rule jurisdictions, and ongoing compliance. There are no per-state, per-filing, or
        per-registration add-ons that inflate your bill as you grow. This means you can forecast your compliance
        costs even as your footprint expands, and you do not have to worry about surprise invoices or
        usage-based escalation. For small businesses, this removes the budgeting uncertainty that comes with
        tools that charge by
        transaction,&nbsp;API&nbsp;call,
        or filing event. Zamp’s pricing structure is designed so you can scale without penalty.</p>
      <p className="text-base text-white shadow-text pt-3">
        Support is another area where Zamp stands out. Instead of ticket queues and rotating agents, Zamp
        provides direct access to tax professionals by phone and email, with full context on your account. This
        matters when you need a real answer on a Friday afternoon, not a knowledge base link or a callback next
        week. The service model is hands-on: Zamp’s team manages notices, audits, and state communication end to
        end, so you are not left interpreting legal letters or chasing deadlines. For small teams, this is the
        difference between compliance as a background task and compliance as a weekly headache.</p>
      <p className="text-base text-white shadow-text pt-3">
        When weighing Zamp, consider the internal effort required. Zamp is not a self-service dashboard where
        you configure everything yourself. Your role is oversight and sign-off. The platform and its specialists
        handle monitoring, filings, registrations, and agency communication. If your team is stretched thin,
        Zamp removes the need for internal project management and follow-up. The only ongoing task for your
        staff is to review and approve, not to coordinate or execute.</p>
      <p className="text-base text-white shadow-text pt-3">
        Switching to Zamp from another provider or from manual processes is straightforward. Historical filings,
        state accounts, certificates, and integrations are migrated and validated, with filings continuing
        uninterrupted. Most teams are fully live within a week. There is no long transition or risk of missed
        filings during the switch. Geek @ Your Spot LLC manages the onboarding and migration, so you do not have to
        learn a new system on your own or risk data loss in the move.</p>
      <p className="text-base text-white shadow-text pt-3">
        Zamp is not for everyone. If your business is entirely local, with no out-of-state sales or plans to
        expand, the platform’s multi-state capabilities may be more than you need. If you have a dedicated
        in-house tax team or require custom scripting and deep internal control over every compliance rule,
        Zamp’s managed approach may feel too hands-off. But for the typical small business in South Florida
        scaling across state lines, Zamp’s combination of automation, expert oversight, and predictable cost
        structure is hard to match.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the end, judging Zamp comes down to your risk tolerance and appetite for manual work. If you want to
        remove the burden of monitoring thresholds, registering in new states, handling notices, and reconciling
        sales data across channels, Zamp is purpose-built to take those tasks off your plate. The pricing model
        means you will not be penalized as you grow, and the support model means you will not be left alone when
        a state comes calling. For small businesses facing multi-state sales tax nexus, Zamp is the rare
        platform that makes compliance a solved problem rather than an ongoing project.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="judging-zamp-fit-predictable-pricing-and-what-to-weigh-before-you-buy" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging Zamp: Fit, Predictable Pricing, and What to Weigh Before You Buy
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
              <h2 id="judging-zamp-fit-predictable-pricing-and-what-to-weigh-before-you-buy-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Judging Zamp: Fit, Predictable Pricing, and What to Weigh Before You Buy
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
