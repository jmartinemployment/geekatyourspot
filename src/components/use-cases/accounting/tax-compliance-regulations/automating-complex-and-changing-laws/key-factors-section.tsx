import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function KeyFactorsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        The difference between a
        successful&nbsp;<GlossaryLink slug="tax-compliance" className="text-[#0B162A] hover:underline">tax
        compliance</GlossaryLink>&nbsp;implementation and one that falters often lies in the details. A robust
        implementation starts with a clear understanding of the business&#39;s specific needs and a strategic
        plan that aligns with those needs. This involves not just choosing the right tools, but also
        understanding how they fit into the broader business context.</p>
      <p className="text-md text-white shadow-text pt-3">
        An effective implementation is characterized by proactive planning and flexibility. It&#39;s about
        anticipating potential challenges and having a plan to address them. For
        instance,&nbsp;<Link id="use-cases-accounting-complex-changing-laws-key-factors-taxjar" href="/tools/accounting/tax-compliance-regulations/automating-complex-and-changing-laws/taxjar" className="text-[#0B162A] hover:underline">TaxJar</Link>&nbsp;offers
        a
        SmartCalcs&nbsp;<GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink>&nbsp;that
        provides real-time, precise sales tax calculations, which can prevent issues related to incorrect tax
        rates that often cause compliance failures. By using advanced geolocation parameters, TaxJar ensures
        accurate tax rates down to the street level, eliminating errors from zip-code based calculations.</p>
      <p className="text-md text-white shadow-text pt-3">
        Integration is another critical factor. A seamless integration involves not just connecting new tools
        but ensuring they work harmoniously with existing systems. This reduces disruptions and maintains
        operational continuity. Zamp&#39;s automated platform syncing is a perfect example, as it aggregates
        sales data across platforms like Shopify and Amazon, ensuring accurate ledger mapping and reducing
        reconciliation errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, ongoing support and updates are vital. TaxValet’s approach to providing dedicated human
        support ensures that businesses have access to expert guidance whenever needed. This human element can
        be crucial in navigating complex tax scenarios that automated systems alone might not handle well.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, a successful implementation is scalable. As a business grows, its tax compliance needs will
        evolve. Solutions like TaxCloud’s multi-channel consolidation and proactive nexus alerts allow
        businesses to adapt to changes without overhauling their entire system. This scalability ensures that
        the tax compliance system remains robust and effective, even as the business landscape changes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-sets-a-successful-implementation-apart" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sets a Successful Implementation Apart
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
              <h2 id="what-sets-a-successful-implementation-apart" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Sets a Successful Implementation Apart
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
