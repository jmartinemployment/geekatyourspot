import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar’s foundation is a cloud-native platform designed for high-volume, multi-channel
        sales&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>. Unlike legacy tools that require manual data uploads or complex on-premise
        installs, TaxJar operates entirely in the cloud, which means it can scale instantly as a business grows.
        Every component is built for speed, reliability, and adaptability, essential for South Florida small
        businesses that might see order spikes or add new sales channels overnight.</p>
      <p className="text-base text-white shadow-text pt-3">
        At its core, TaxJar uses a
        robust&nbsp;API&nbsp;layer
        to connect with a wide range of e-commerce platforms, ERPs, and marketplaces. Out-of-the-box
        integrations are available for Shopify, Salesforce, Amazon, Squarespace, Square, and Woo, among others.
        These integrations are certified and maintained by TaxJar’s own team, so businesses do not have to worry
        about compatibility issues or broken connections after a platform update. For unique workflows, TaxJar
        offers a
        flexible&nbsp;API&nbsp;that
        allows custom connections to in-house systems or less common sales channels.</p>
      <p className="text-base text-white shadow-text pt-3">
        The architecture is not just about pulling data in. TaxJar’s calculation engine is built to handle
        real-time tax rate lookups and product classification at scale. The engine applies tax rules based on
        the precise delivery address, not just the ZIP code, so sales tax is calculated correctly down to the
        city, county, and special district. Product tax codes and AI-driven categorization ensure that every
        item is taxed (or exempted) according to the latest rules in each state. This is critical for businesses
        selling digital goods
        or&nbsp;SaaS, where
        taxability can change with new legislation.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security is built in at every level. TaxJar is compliant with GDPR and SOC II frameworks, and it uses
        AWS security analytics to monitor for unusual activity. All logs, alerts, and access events are
        aggregated in a single source of truth, so the business can trust that sensitive sales and customer data
        is protected. This is not just a checkbox, data security is part of the platform’s core design, which
        matters when handling financial records across multiple states.</p>
      <p className="text-base text-white shadow-text pt-3">
        TaxJar’s reporting engine unifies all e-commerce orders, regardless of channel, into a single dashboard.
        This dashboard is not just a static report. It provides live, drill-down views of sales tax exposure,
        state-by-state liabilities, and transaction-level detail. The reporting engine aggregates and cleans
        data from every integration, so leadership always sees a complete, current picture, no more reconciling
        data across disconnected systems. For a business that sells on both its own website and through
        marketplaces, this means every sale is counted once, and marketplace-facilitated sales are automatically
        excluded from direct liability calculations.</p>
      <p className="text-base text-white shadow-text pt-3">
        The Economic Nexus Insights dashboard is a key architectural feature. It tracks cumulative sales and
        transaction counts for every state, issuing proactive alerts as thresholds approach. This dashboard is
        not a bolt-on, it is woven into the platform’s data flows, so it always reflects the latest activity.
        When a new state is added, the system begins monitoring instantly, and the dashboard updates filing
        frequencies and deadlines as needed. This is how TaxJar keeps the team ahead of new compliance triggers,
        rather than reacting after the fact.</p>
      <p className="text-base text-white shadow-text pt-3">
        Filing automation is handled by TaxJar’s AutoFile service. The architecture supports electronic
        submission of returns to multiple states, each with its own required formats and schedules. The platform
        compiles all transaction data, applies the correct breakdowns (such as interstate versus intrastate
        sales), and submits returns backed by an accuracy guarantee. If a business prefers to file manually,
        TaxJar still produces reports tailored to each state’s requirements, so the team can file confidently
        without extra research or formatting work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marketplace facilitator laws are built into the core logic. TaxJar tracks which sales are handled by
        marketplaces like Amazon or Etsy and ensures only the correct transactions are included in the
        business’s own filings. This prevents double-payment and keeps filings accurate, even as marketplace
        rules change state by state. The platform also accounts for scenarios where a business sells both
        through a marketplace and its own direct channels in the same state, calculating exactly what must be
        reported and paid.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with complex needs, TaxJar’s architecture supports custom integrations and advanced
        product mapping.
        The&nbsp;API&nbsp;gives
        developers access to all major functions, from real-time tax calculation to transaction retrieval and
        report generation. This means a business can extend TaxJar to fit unique workflows or integrate with
        in-house analytics, without losing the benefits of certified, out-of-the-box connectors for mainstream
        platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the platform’s cloud-native design means updates to tax rates, product codes, and filing rules
        are rolled out immediately across all customers. There is no need for manual patching or waiting for a
        quarterly update. When a state changes its tax laws or a new marketplace facilitator rule goes into
        effect, TaxJar’s system applies the change automatically, keeping every business current and compliant.
        For a small team in South Florida, this is the difference between scrambling to keep up with legislation
        and knowing compliance is handled, no matter how many states they sell into.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-makes-taxjar-s-architecture-work-for-multi-state-e-commerce" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Makes TaxJar’s Architecture Work for Multi-State E-Commerce
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-makes-taxjar-s-architecture-work-for-multi-state-e-commerce-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Makes TaxJar’s Architecture Work for Multi-State E-Commerce
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
