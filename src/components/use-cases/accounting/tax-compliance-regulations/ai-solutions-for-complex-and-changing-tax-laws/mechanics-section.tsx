import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Navigating the intricate tax landscape in South Florida demands a meticulous approach. The process
        begins with aligning business objectives with compliance needs. At the core, this involves identifying
        specific inefficiencies—whether it&#39;s mismanaging sales tax filings across county lines or missing
        critical regulatory updates. For instance, if a Miami-based business is expanding into Broward,
        understanding the economic nexus and local tax implications is crucial.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once objectives are set, the next phase is a
        comprehensive&nbsp;<GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>&nbsp;assessment. This involves evaluating the current data&#39;s accuracy,
        completeness, and timeliness. Tools
        like&nbsp;<Link id="use-cases-accounting-complex-changing-laws-mechanics-quaderno" href="/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/quaderno" className="text-[#0B162A] hover:underline">Quaderno</Link>&nbsp;can
        streamline this by automating compliance with local and international tax regulations, ensuring that
        every transaction meets legal standards. Quaderno&#39;s ability to handle real-time tax calculations and
        generate compliant invoices in local languages and currencies is particularly useful for businesses
        operating across multiple jurisdictions.</p>
      <p className="text-md text-white shadow-text pt-3">
        The third step is selecting the right technology stack. Choosing tools that integrate seamlessly with
        existing systems minimizes disruption and maximizes
        efficiency.&nbsp;<Link id="use-cases-accounting-complex-changing-laws-mechanics-zamp" href="/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/zamp" className="text-[#0B162A] hover:underline">Zamp</Link>,
        for example, offers a comprehensive tax management solution that simplifies multi-state compliance by
        providing a dedicated team to handle every aspect of tax management, from registration to notice
        resolution. This eliminates the need for businesses to act like tax attorneys, allowing them to focus on
        growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Implementation follows a pilot strategy, ensuring minimal risk and maximum learning. A small-scale
        rollout allows businesses to test the system&#39;s effectiveness and gather
        insights.&nbsp;<Link id="use-cases-accounting-complex-changing-laws-mechanics-taxcloud" href="/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/taxcloud" className="text-[#0B162A] hover:underline">TaxCloud</Link>’s
        hands-free autofiling feature can be invaluable here, automating the generation and submission of tax
        returns across numerous jurisdictions, reducing the manual burden and potential for error.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, continuous scaling and monitoring ensure that the system remains effective as the business
        grows. This involves regular updates and system checks to adapt to any changes in tax laws or business
        operations. Tools
        like&nbsp;<Link id="use-cases-accounting-complex-changing-laws-mechanics-taxvalet" href="/tools/accounting/tax-compliance-regulations/complex-and-changing-laws/thetaxvalet" className="text-[#0B162A] hover:underline">TaxValet</Link>&nbsp;provide
        complete audit protection and proactive monitoring, ensuring that businesses remain compliant without
        the constant fear of audits.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="complex-and-changing-laws-a-seamless-integration-process" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Complex and Changing Laws: A Seamless Integration Process
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="complex-and-changing-laws-a-seamless-integration-process" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Complex and Changing Laws: A Seamless Integration Process
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
