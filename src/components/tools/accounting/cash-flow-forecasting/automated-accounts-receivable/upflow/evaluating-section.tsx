import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering Upflow for Automated Accounts Receivable, small businesses in Miami-Dade, Broward, and
        West Palm Beach counties should first evaluate its fit for their operations. Upflow excels in
        environments where B2B finance teams require precise&nbsp;
        <GlossaryLink slug="cash-flow-forecasting">cash flow forecasting</GlossaryLink>&nbsp;based on actual
        payment behaviors rather than static due dates. This approach is particularly beneficial for mid-sized
        companies with revenues between $10M and $500M, where inflow uncertainty can significantly impact
        financial planning.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow distinguishes itself by using billing cohort collection rates to project cash inflows, offering a
        more accurate picture than tools relying on assumed payment terms. This feature is crucial for businesses
        with net-30 terms but experience longer collection periods. By reflecting the actual timing of cash
        inflows, Upflow helps finance teams make better-informed decisions. The system&#39;s ability to project
        inflows up to six months ahead, with automatic updates as&nbsp;
        <GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;data syncs, provides a dynamic and reliable forecasting
        tool.</p>
      <p className="text-md text-white shadow-text pt-3">
        Pricing for Upflow isn&#39;t specified here, but potential buyers should consider its value in terms of
        time saved and accuracy gained. Unlike some platforms that require extensive manual data entry,
        Upflow&#39;s integration with ERP systems ensures forecasts are always current, eliminating the need for
        manual updates and reconciliations. This seamless integration reduces the risk of errors and the
        administrative burden on finance teams, allowing them to focus on strategic tasks rather than data
        maintenance.</p>
      <p className="text-md text-white shadow-text pt-3">
        When weighing Upflow against other solutions, it&#39;s important to consider how it integrates with
        existing systems and the level of automation it offers. For instance, its capability to automate reminder
        workflows and provide real-time analytics can drastically reduce the time spent on collections, as seen
        with clients like ActivTrak, which saved significant hours and costs by eliminating the need for
        additional hires. Moreover, Upflow&#39;s native integrations with platforms like Chargebee and Stripe
        simplify its deployment and enhance its utility.</p>
      <p className="text-md text-white shadow-text pt-3">
        Businesses should also assess the indirect benefits of adopting Upflow. By automating accounts receivable
        processes, companies can reduce Days Sales Outstanding (DSO), improve cash flow predictability, and
        enhance customer relationships through timely and professional interactions. These improvements can lead
        to increased financial stability and the ability to reinvest in business growth.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the decision to implement Upflow should consider the specific needs of the business, the
        complexity of its receivables, and its growth objectives. For those ready to streamline their accounts
        receivable processes and improve cash flow forecasting, Upflow offers a compelling solution that aligns
        with these goals.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-upflows-fit-and-pricing-model">
                Evaluating Upflow&#39;s Fit and Pricing Model
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="evaluating-upflows-fit-and-pricing-model">
                Evaluating Upflow&#39;s Fit and Pricing Model
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
