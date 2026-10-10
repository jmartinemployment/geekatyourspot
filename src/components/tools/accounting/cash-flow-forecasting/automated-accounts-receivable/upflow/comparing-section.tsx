import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering solutions for automated accounts receivable, small businesses in South Florida often weigh
        several options. Upflow stands out by focusing
        on&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow
        forecasting</GlossaryLink>&nbsp;based on real payment behaviors, rather than relying on static due dates.
        This approach makes it particularly effective for businesses where incoming cash flows are unpredictable.</p>
      <p className="text-md text-white shadow-text pt-3">
        Unlike some competitors that require manual input of expected inflows, Upflow calculates the percentage of
        invoices collected in the first, second, and third months. This detailed cohort analysis offers a more
        accurate cash flow projection, crucial for businesses dealing with varying payment timelines. For instance,
        a company with net-30 payment terms but a 51-day DSO benefits significantly from a tool like Upflow, which
        accounts for such discrepancies.</p>
      <p className="text-md text-white shadow-text pt-3">
        Many tools in the market, such as Chaser and Bill, cater to smaller teams with simpler needs, focusing
        primarily on invoice follow-ups. These platforms might be adequate for businesses that require basic
        reminders and collections. However, they may fall short when it comes to the comprehensive forecasting and
        integration capabilities that Upflow provides.</p>
      <p className="text-md text-white shadow-text pt-3">
        Upflow&#39;s integration
        with&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems
        ensures that forecasts are always current, eliminating the need for manual data entry or outdated exports.
        This feature is particularly beneficial for scaling businesses that need to maintain accuracy and efficiency
        as they grow. In contrast, some tools that lack deep ERP integration may lead to discrepancies between cash
        flow projections and actual financial data.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering larger, more complex platforms like HighRadius or Quadient, the choice often
        hinges on the need for extensive features and the company&#39;s capacity to handle a more involved
        implementation process. These platforms offer robust capabilities but can be overkill for mid-sized
        businesses that do not require such depth. Upflow offers a balanced solution, providing advanced features
        without the heavy lift associated with enterprise-level systems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Ultimately, the choice of an automated accounts receivable solution should reflect the specific needs and
        scale of the business. For those in Miami-Dade, Broward, and West Palm Beach counties, Upflow provides a
        compelling mix of detailed forecasting, real-time data integration, and user-friendly implementation, making
        it a strong contender in the market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="comparing-upflow-to-other-automated-accounts-receivable-solutions">
                Comparing Upflow to Other Automated Accounts Receivable Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="comparing-upflow-to-other-automated-accounts-receivable-solutions">
                Comparing Upflow to Other Automated Accounts Receivable Solutions
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
