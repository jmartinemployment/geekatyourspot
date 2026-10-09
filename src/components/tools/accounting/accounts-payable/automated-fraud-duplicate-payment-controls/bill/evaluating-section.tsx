import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Bill for Automated Fraud &amp; Duplicate Payment Controls, small businesses in
        Miami-Dade, Broward, and West Palm Beach counties should weigh its fit and pricing model against their
        specific needs. Bill offers a robust solution for automating&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;processes, reducing manual
        errors, and enhancing security. The platform&#39;s ability to integrate with popular accounting software
        like QuickBooks and Xero makes it a versatile choice for businesses already using these systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bill&#39;s pricing structure is straightforward, with plans starting at $49 per user per month for the
        Essentials tier, as detailed on&nbsp;
        <a id="tools-accounting-fraud-controls-bill-evaluating-pricing"
          href="https://www.bill.com/product/pricing"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Bill&#39;s pricing and plans page
        </a>. This tier offers essential features for automating accounts payable, while the Team tier at $65
        per user per month provides more granular controls and integrations. Businesses should consider their
        size and transaction volume when selecting a plan, as the cost-effectiveness of each tier depends on
        these factors.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, the Essentials plan might suffice if they are primarily looking to automate basic
        invoice processing and payment workflows. However, those requiring more advanced features like
        automatic 2-way sync with accounting software or extensive user roles might find the Team plan more
        beneficial. It&#39;s crucial to evaluate the potential time savings and error reduction each plan
        offers against its cost to determine the best fit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Adjacent solutions like Stampli or Tipalti also offer Automated Fraud &amp; Duplicate Payment Controls,
        and businesses should compare these alternatives to Bill. While Bill excels in its integration
        capabilities and user-friendly interface, competitors might offer different strengths such as specific
        industry customizations or pricing models. Evaluating these options side by side will help businesses
        make an informed decision.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the choice of Bill should align with a business&#39;s operational needs and budget
        constraints. By focusing on the direct outcomes offered, such as reduced time spent on manual AP tasks
        and improved fraud prevention, businesses can assess the real value Bill provides. This evaluation
        process ensures that the chosen solution not only fits current needs but also scales with future
        growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-for-automated-fraud-duplicate-payment-controls">
                Evaluating Bill for Automated Fraud &amp; Duplicate Payment Controls
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-bill-for-automated-fraud-duplicate-payment-controls">
                Evaluating Bill for Automated Fraud &amp; Duplicate Payment Controls
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
