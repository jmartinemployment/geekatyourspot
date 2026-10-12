import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Implementing a&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;solution in a
        real-world environment involves a series of deliberate steps that ensure the process is smooth and
        effective. At Geek @ Your Spot, the implementation begins with a comprehensive analysis of the
        business’s current tax compliance status. This assessment identifies existing gaps and potential areas
        for improvement, such as overlooked nexus thresholds or outdated compliance methods.</p>
      <p className="text-md text-white shadow-text pt-3">
        Following the initial assessment, the next phase involves selecting and configuring the appropriate
        tools. This might include setting up Zamp for handling complex multi-state sales tax compliance or
        integrating TaxJar for automated filing solutions. Each tool is configured to align with the
        business&#39;s specific compliance needs and operational workflows. This step is crucial as it ensures
        that the technology fits seamlessly into the existing business infrastructure without causing
        disruptions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Data integration follows, where tax compliance tools are connected to existing financial systems like
        QuickBooks or Shopify. This step ensures that all financial data is synchronized, allowing for real-time
        tax calculations and reporting. TaxCloud’s multi-channel consolidation capability is particularly
        beneficial here, as it normalizes sales data from various platforms into a single audit-ready format.</p>
      <p className="text-md text-white shadow-text pt-3">
        The implementation process also includes a pilot phase, where the systems are tested in a controlled
        environment to ensure they function as expected. This phase allows for adjustments and fine-tuning
        before full deployment. It’s at this stage that businesses can measure the return on investment and
        ensure that the solution meets the predefined business objectives.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, continuous monitoring and support are integral to the rollout process. Once the system is live,
        tools like TaxValet provide ongoing audit protection and compliance monitoring. This ensures that any
        issues are addressed promptly, and the business remains compliant with ever-changing tax regulations.
        Regular updates and support are provided to adapt to new tax laws, ensuring that the compliance solution
        remains effective over time.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="rolling-out-tax-compliance-solutions-in-practice" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Tax Compliance Solutions in Practice
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="rolling-out-tax-compliance-solutions-in-practice" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Tax Compliance Solutions in Practice
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
