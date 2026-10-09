import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Bill for automated approval workflows, small businesses should focus on how well it
        fits their specific needs. The platform offers tailored approval workflows that can be customized to
        fit your business rules. This flexibility is crucial for businesses that require precise control over
        their&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes. Bill&#39;s
        ability to handle routing, step tracking, and reminders ensures that invoices are approved
        efficiently, reducing manual intervention and potential errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is another key factor. Bill offers several plans, starting at $49 per user per month for the
        Essentials plan, as reported in&nbsp;
        <a id="tools-accounting-approval-workflows-bill-evaluating-software-comparison"
          href="https://www.bill.com/listicle"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Software Comparison
        </a>. This transparency allows businesses to estimate costs before committing. The Corporate plan
        includes custom approval policies and multi-entity capabilities, which are beneficial for growing
        businesses. However, it&#39;s important to note that certain features, like purchase order creation
        and 2-way matching, are only available on higher-tier plans or as add-ons.</p>
      <p className="text-md text-white shadow-text pt-3">
        In comparison to other platforms like Tipalti and AvidXchange, which are also popular for AP
        automation, Bill stands out for its&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-driven capabilities. The AI invoice coding reduces manual
        time by 20% and captures key invoice fields with 99% accuracy. This level of precision is
        particularly valuable for businesses looking to minimize errors and streamline their processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        For those considering alternatives, it&#39;s worth weighing the benefits of Bill&#39;s automation
        against the specific needs of your business. If your current system involves a high volume of
        invoices and frequent manual errors, Bill&#39;s automation could significantly enhance efficiency.
        However, if your business processes a low volume of invoices, the investment in such a comprehensive
        tool might not be justified.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, choosing Bill should be based on a clear understanding of your business&#39;s workflow
        needs and the potential return on investment from reduced manual labor and increased accuracy. If
        you&#39;re dealing with complex approval processes and need a solution that integrates well with
        existing systems like QuickBooks or Xero, Bill is a strong contender. Evaluate your current pain
        points and project the potential improvements to make an informed decision.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-for-automated-approval-workflows">
                Evaluating Bill for Automated Approval Workflows
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-for-automated-approval-workflows">
                Evaluating Bill for Automated Approval Workflows
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
