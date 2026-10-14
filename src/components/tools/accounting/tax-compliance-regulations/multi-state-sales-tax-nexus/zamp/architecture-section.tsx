import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Zamp’s technical foundation is built for businesses that sell across multiple states and channels,
        without the luxury of a dedicated IT or tax team. Its architecture is not just cloud-based software; it
        is an integrated compliance engine that connects directly to the platforms where your sales and
        financial data already live. This is how Zamp keeps your compliance current, your filings accurate, and
        your risk low, even as your business grows into new markets.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the integration layer, Zamp plugs into major e-commerce platforms like Shopify, Amazon, BigCommerce,
        and Magento, as well as ERPs and accounting systems through direct connectors and
        its&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>. This
        means your sales, refunds, and adjustments flow automatically into Zamp’s system, covering both DTC and
        B2B transactions. There is no need to manually export spreadsheets or reconcile data from different
        portals. Every channel feeds into a unified compliance workspace, so Zamp always has a complete picture
        of your sales footprint.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Unified Data Model: Zamp harmonizes disparate transaction streams, web, marketplace, wholesale, and&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>, into a single, normalized structure. This allows for real-time nexus tracking and accurate tax calculations across every state and local jurisdiction.</li>
        <li>Jurisdiction Logic: The platform applies location accuracy and tax code mapping at the product and shipping level, so state-specific exemptions and rules are reflected in every return. This is critical for businesses with custom SKUs or products that are taxed differently by state.</li>
        <li>Continuous Monitoring Engine: Zamp’s backend tracks both economic and physical nexus triggers, updating your exposure status as new sales or remote employees create obligations in additional states. Thresholds are monitored in real time, not just at month-end.</li>
        <li>Notice Management System: Zamp digitizes and indexes every notice, letter, or audit request from state and local agencies. The system links each notice to the relevant transaction and filing history, so resolution is fast and defensible.</li>
        <li>Audit-Ready Documentation: All filings, payments, and correspondence are stored in a secure, searchable repository. This ensures every compliance action is traceable and ready for audit defense without scrambling for old emails or paper records.</li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        What sets Zamp’s architecture apart is the way it centralizes control without demanding technical
        expertise from your team. The
        platform’s&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;and
        direct integrations mean that when your sales systems change, adding a new channel, switching ERPs, or
        launching a marketplace, the compliance logic adapts. There is no need to rebuild workflows or manually
        bridge data gaps. Zamp’s system is designed to handle complex business models, supporting DTC,
        wholesale, B2B, returns, exempt transactions, and even partial shipments without duplication or missed
        filings.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses worried about data security and accuracy, Zamp’s infrastructure includes AI-powered
        validation and anomaly detection. Before any return is filed, the system checks for outliers and
        inconsistencies, flagging them for review by Zamp’s tax professionals. This layer of review catches
        errors that could trigger audits or penalties if left unchecked. Returns and liabilities are reconciled
        to
        your&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;or
        general ledger, so your finance team can close the books with confidence.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp’s commitment to predictable, all-in pricing is built into its architecture as well. Every
        integration, registration, and filing is included in a single contract, with no extra fees for
        additional states or home-rule jurisdictions. As your footprint grows, the system expands with you,
        there is no per-state or per-filing escalation. This matters for small teams who need to plan cash flow
        and avoid surprise costs as they scale.</p>
      <p className="text-md text-white shadow-text pt-3">
        When the South Florida retailer from the opening scenario links their Shopify and QuickBooks accounts to
        Zamp, they see every sale, return, and tax obligation feed directly into their compliance dashboard. If
        they open a new channel or hire a remote employee in another state, Zamp’s architecture tracks the new
        exposure instantly. Notices, registrations, and filings are all visible in one place, with the
        underlying data and documentation ready for any state inquiry. This is not just a technical upgrade, it
        is the backbone that lets small businesses grow across state lines without falling behind
        on&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="zamp-s-architecture-what-it-connects-how-it-holds-your-data-and-why-that-matters-for-multi-state-nexus" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Zamp’s Architecture: What It Connects, How It Holds Your Data, and Why That Matters for Multi-State Nexus
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
              <h2 id="zamp-s-architecture-what-it-connects-how-it-holds-your-data-and-why-that-matters-for-multi-state-nexus" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Zamp’s Architecture: What It Connects, How It Holds Your Data, and Why That Matters for Multi-State Nexus
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
