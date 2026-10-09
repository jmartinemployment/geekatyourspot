import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering automated approval workflows, Ramp is a powerful contender for small businesses. It
        offers a range of features that streamline the&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;process, reducing time
        spent on manual tasks and minimizing errors. Understanding how Ramp fits into your operations involves
        examining its capabilities, pricing considerations, and how it compares to other solutions you might
        be evaluating.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Optical Character Recognition (OCR) for data extraction directly from invoices, reducing manual data entry.</li>
        <li>Machine Learning (ML) for matching invoices to purchase orders and receipts, ensuring accuracy.</li>
        <li>Smart approval workflows that automatically route invoices to the right stakeholders based on predefined criteria.</li>
        <li>Real-time decision confidence levels that provide a rationale and override options.</li>
        <li>
          <a id="tools-accounting-approval-workflows-ramp-evaluating-erp-integrations"
            href="https://ramp.com/blog/ai-accounting-software"
            target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
            Seamless integrations with major ERP systems, including QuickBooks Online, Xero, and NetSuite.
          </a>
        </li>
      </ul>
      <p className="text-md text-white shadow-text pt-3">
        These features translate into significant time savings and error reduction. For instance, the process
        of handling an invoice, which could take up to 20 minutes manually, can be reduced to under three
        minutes with Ramp. This efficiency is crucial for small businesses that need to optimize their
        resources.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing is an important consideration, though specific figures are not disclosed in the available
        data. It&#39;s essential to evaluate the cost against the time saved and the reduction in errors.
        Ramp&#39;s ability to automate 3.5 times more transactions than legacy tools suggests a strong return
        on investment, particularly for businesses processing a high volume of invoices.</p>
      <p className="text-md text-white shadow-text pt-3">
        When comparing Ramp to other tools, consider its deep integration capabilities and the breadth of its
        automation features. Competitors like ApprovalMax and Bill also offer automated workflows, but
        Ramp&#39;s strength lies in its comprehensive approach to both automation and integration, which can
        be particularly beneficial for businesses using multiple&nbsp;
        <GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        In choosing the right tool, consider your current pain points. If manual data entry and approval
        bottlenecks are common challenges, Ramp&#39;s automation can alleviate these issues. However, if your
        business processes a low volume of invoices, the investment in Ramp might not be necessary. Assess the
        scale of your operations and the potential time savings to determine if Ramp is the right fit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision should weigh the cost of implementation against the efficiencies gained.
        Ramp&#39;s ability to integrate seamlessly with existing systems and its robust automation
        capabilities make it a strong candidate for businesses looking to streamline their accounts payable
        processes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-ramp-for-your-business-needs">
                Evaluating Ramp for Your Business Needs
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-ramp-for-your-business-needs">
                Evaluating Ramp for Your Business Needs
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
