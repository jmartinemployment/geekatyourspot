import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When evaluating Dryrun for your business, consider both the fit with your current financial processes and
        its pricing model. Dryrun is designed to integrate seamlessly with existing systems, making it a flexible
        choice for businesses looking to enhance
        their&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow
        forecasting</GlossaryLink>&nbsp;capabilities. However, understanding its pricing structure is crucial to
        ensure it aligns with your budget and delivers value.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dryrun&#39;s fit is largely determined by its ability to integrate with your
        current&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;and
        accounting systems. With seamless connections to platforms like NetSuite, Sage Intacct, Microsoft Dynamics
        365 Business Central, and QuickBooks Online, Dryrun ensures that your financial data is always up to date.
        This integration minimizes manual data entry and reduces the risk of errors, making it an ideal choice for
        businesses seeking to streamline their financial operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The pricing model for Dryrun is not explicitly detailed in the available data, but potential buyers should
        consider the cost in relation to the efficiencies and savings it brings. By automating manual processes and
        providing real-time insights into cash flow, Dryrun can reduce the time and resources spent on financial
        management. This efficiency can translate into significant cost savings over time, making the investment
        worthwhile.</p>
      <p className="text-md text-white shadow-text pt-3">
        When assessing Dryrun, consider the specific needs of your business. For small businesses in Miami-Dade,
        Broward, and West Palm Beach counties, the ability to manage cash flow efficiently can be a game-changer.
        Dryrun&#39;s features, such as transaction-level AR/AP tracking and multi-entity forecasting, provide the
        tools needed to navigate complex financial landscapes and make informed decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to implement Dryrun should be based on a thorough evaluation of its fit with your
        business processes and its potential to deliver a return on investment. Geek @ Your Spot LLC can assist in this
        evaluation, ensuring that Dryrun is configured to meet your specific needs and deliver the maximum benefit.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-dryrun-fit-and-pricing-model">
                Evaluating Dryrun: Fit and Pricing Model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-dryrun-fit-and-pricing-model">
                Evaluating Dryrun: Fit and Pricing Model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
