import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When a small business in South Florida starts looking for a way out of multi-state sales tax chaos, the
        first stop is usually a self-serve tax app or a software plug-in. The promise is always the same:
        automate tax calculation, file returns, and get back to business. But these tools put the burden on you.
        You are the one configuring rules, connecting systems, and managing exceptions. If a state changes its
        requirements or a plugin stops collecting tax, you may not know until a penalty notice arrives. Most
        small teams do not have a CPA on staff to catch a silent failure, and the software alone does not pick
        up the slack.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp is not another self-guided tax tool. It pairs an intelligent platform with a dedicated team that
        manages every step, registration, filing, remittance, and notice resolution. Where other solutions drop
        support at the first sign of complexity, Zamp’s model is to take full operational responsibility. That
        means you do not have to coordinate filings, chase down notices, or interpret changing state rules. Your
        job is oversight and approval, not day-to-day execution. This is not just a difference in interface; it
        is a difference in who owns the risk.</p>
      <p className="text-md text-white shadow-text pt-3">
        Other platforms in this space,
        like&nbsp;<Link id="tools-accounting-multi-state-sales-tax-nexus-zamp-comparing-taxjar" href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxjar" className="text-[#0B162A] hover:underline">TaxJar</Link>,&nbsp;Avalara,
        and Numeral, require the customer to handle setup, system connections, and ongoing monitoring. They may
        offer ticket-based support or assisted services, but the customer still manages the core compliance
        tasks. Zamp, by contrast, keeps the entire workflow inside one accountable team. That includes automated
        intake and expert review of regulatory notices, proactive monitoring of sales activity against each
        state’s economic and physical nexus thresholds, and direct management of all state and local filings. If
        something goes wrong, Zamp is responsible for fixing it, not you.</p>
      <p className="text-md text-white shadow-text pt-3">
        Flat, predictable pricing is another area where Zamp stands apart. The usual model in this space is a
        base price plus add-ons for each state, each filing, or each new registration. Small businesses often
        find out too late that what looked affordable at first now costs thousands more as they grow. Zamp’s
        one-price model covers all filings, registrations, and growth, so compliance costs remain stable as your
        footprint expands. Teal, a Zamp client, found that other vendors’ hidden fees would have cost $7,000 to
        $8,000 more than Zamp’s all-inclusive approach.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another dividing line. Zamp connects directly to platforms like Shopify, Amazon,
        BigCommerce, Magento, and
        leading&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems.
        This means all sales channels feed into one compliance workflow, eliminating the gaps that happen when
        different tools handle different channels. Marketplace transactions are classified to prevent double
        filing or missed obligations, and product taxability rules are mapped by state so exemptions and special
        rules are always applied correctly. Historical data is imported and reconciled during onboarding, so you
        do not start with missing periods or unfiled liabilities.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a business that has been burned by missed filings, broken plugin logic, or a parade of support
        tickets, Zamp’s model is a shift in responsibility. The platform and its team handle the complexity,
        from the first sale in a new state to the last letter from a tax agency. The difference shows up in the
        week-to-week: owners spend their time reviewing and approving, not firefighting. Where other tools leave
        you exposed the moment a rule changes or a system breaks, Zamp closes the loop.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-zamp-does-that-other-tax-tools-miss" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Zamp Does That Other Tax Tools Miss
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-zamp-does-that-other-tax-tools-miss" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Zamp Does That Other Tax Tools Miss
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
