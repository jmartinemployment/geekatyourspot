import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deciding if TaxJar fits your business comes down to a few concrete questions: Does it handle the
        complexity you face? Is the pricing predictable and manageable for a small team? And does it actually
        remove the risk and manual work that are slowing you down today?</p>
      <p className="text-md text-white shadow-text pt-3">
        Start with fit. TaxJar is built for businesses that cross state lines, especially those that sell in
        enough states to trigger economic nexus but do not have a dedicated tax department. If you are running a
        small e-commerce operation in South Florida and your sales are climbing past $100,000 or 200
        transactions in other states, TaxJar’s real-time threshold monitoring and automated filing are designed
        for your situation. The platform tracks your exposure as you approach each state’s nexus rules, issues
        alerts before you cross a threshold, and updates you when new obligations arise. This is not just a
        reporting tool, it is a compliance engine that acts before you are exposed, not after.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform’s integrations are a key test of fit. TaxJar connects directly to Shopify, Salesforce,
        Amazon, Squarespace, Square, WooCommerce, and other major e-commerce
        and&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems.
        If your business runs on these platforms, setup is straightforward. For custom environments, the
        TaxJar&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;allows
        deeper integration, but this requires some technical work. Geek @ Your Spot helps map your environment
        and ensures every sales channel is connected. If you are still manually exporting transactions from
        multiple platforms and reconciling them in spreadsheets, TaxJar’s unified dashboard and automatic data
        aggregation will be a game-changer.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is transparent at the entry level. TaxJar offers a 30-day free trial, so you can see the
        platform in action before making a commitment. The free trial covers the full compliance platform,
        calculations, reporting, and filing, so you can test it with your own data and workflows. After the
        trial, pricing is published on TaxJar’s site. There are no hidden fees for basic integrations or
        reporting, but advanced features, custom integrations, or high transaction volumes can affect the cost.
        For most small businesses, the standard plan is enough. Geek @ Your Spot walks you through the pricing
        tiers, matches them to your sales volume and channel count, and flags any likely overages before you
        sign up.</p>
      <p className="text-md text-white shadow-text pt-3">
        Judge TaxJar by the time and risk it removes, not just the feature list. If you are spending hours each
        week tracking state thresholds, preparing separate filings for each jurisdiction, or worrying about
        double-paying taxes on marketplace sales, TaxJar’s automation will return those hours to your team. The
        platform’s AutoFile feature submits returns on time, every time, and its reporting matches what each
        state wants to see. For businesses that sell on marketplaces and their own website, TaxJar separates
        facilitator-collected sales from direct sales, so you do not pay tax twice or miss a filing obligation.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform is not for everyone. If you only sell in Florida, or your out-of-state sales are well below
        any state’s nexus threshold, TaxJar may be more than you need. If your sales channels are all
        custom-built and you lack in-house technical support, setup will require more work. Geek @ Your Spot
        evaluates your current tech stack, sales footprint, and compliance risk before recommending TaxJar. The
        goal is not to sell software, but to solve the specific problem of multi-state sales tax complexity
        without adding cost or confusion.</p>
      <p className="text-md text-white shadow-text pt-3">
        Support and reliability matter.
        TaxJar’s&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;and
        calculation engine are built for speed and uptime, with sub-25ms response times and 99.99% or better
        availability. This means your customers get instant, accurate tax calculations at checkout, and your
        team can rely on the platform during peak sales periods. The dashboard is user-friendly, praised by
        clients for its clarity and ease of use, and the system is designed to scale as your business grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        When judging TaxJar, ask these questions:</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Does the platform support all the states where you have or may soon have nexus?</li>
        <li>Can it integrate with every sales channel you use, including marketplaces and direct e-commerce?</li>
        <li>Are the reporting and filing features detailed enough for your accountant or bookkeeper to rely on?</li>
        <li>Does the pricing model match your transaction volume and growth plans, without surprise fees?</li>
        <li>Will it reduce your audit risk and free up time for your team, not just create new tasks?</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        For a small business in West Palm Beach, Broward, or Miami-Dade, the real value of TaxJar is in making
        multi-state
        sales&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>&nbsp;invisible. If your team is already stretched thin, the right fit means
        fewer errors, less time spent on compliance, and no more scrambling to meet deadlines. Geek @ Your
        Spot’s role is to make sure the platform is set up to deliver on that promise, and to step in if your
        needs change as you scale.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-to-judge-if-taxjar-fits-your-business-and-budget" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge If TaxJar Fits Your Business and Budget
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
              <h2 id="how-to-judge-if-taxjar-fits-your-business-and-budget" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How to Judge If TaxJar Fits Your Business and Budget
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
