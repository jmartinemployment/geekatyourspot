import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with TaxCloud involves a streamlined process that integrates seamlessly into your existing
        systems. The journey begins with understanding your current setup and identifying the specific needs of
        your business. Geek @ Your Spot LLC, based in South Florida, specializes in configuring TaxCloud for small
        businesses, ensuring a smooth transition with minimal disruption.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is a comprehensive assessment of your
        current&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;processes. This
        involves identifying the platforms you currently use, such as Shopify or WooCommerce, and understanding
        how they manage sales tax. Geek @ Your Spot LLC evaluates these systems to determine the best integration
        approach, leveraging TaxCloud&#39;s pre-built connectors for a quick setup. These connectors enable
        TaxCloud to integrate with popular e-commerce platforms, reducing the time and effort required to get
        started.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the initial assessment is complete, the next phase is data mapping. This involves aligning your
        existing data structures with TaxCloud&#39;s requirements. Geek @ Your Spot LLC assists in mapping your
        product categories and tax codes to ensure accurate tax calculations across all jurisdictions. This step
        is crucial for ensuring that TaxCloud can accurately calculate taxes based on your specific product
        offerings and sales channels.</p>
      <p className="text-md text-white shadow-text pt-3">
        Following data mapping, the configuration phase begins. Geek @ Your Spot LLC configures TaxCloud&#39;s
        settings to match your business&#39;s unique needs. This includes setting up automated tax calculations,
        nexus tracking, and filing schedules. By tailoring these configurations, Geek @ Your Spot LLC ensures that
        TaxCloud operates efficiently within your business environment, minimizing manual intervention and
        reducing the risk of errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final step in the implementation process is testing and validation. Geek @ Your Spot LLC conducts
        thorough testing to ensure that TaxCloud is functioning correctly and that all tax calculations are
        accurate. This phase includes running test transactions and reviewing reports to verify that everything
        is working as expected. Once testing is complete, TaxCloud goes live, automatically handling your tax
        compliance needs and freeing up your team to focus on other critical business tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, implementing TaxCloud with Geek @ Your Spot LLC involves a structured approach that leverages
        pre-built connectors, detailed data mapping, and customized configurations. This process ensures that
        your business can quickly adapt to the complexities of tax compliance, reducing manual workloads and
        enhancing accuracy across all sales channels.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="implementing-taxcloud-in-your-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing TaxCloud in Your Business Environment
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
              <h2 id="implementing-taxcloud-in-your-business-environment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Implementing TaxCloud in Your Business Environment
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
