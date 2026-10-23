export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Clockwork is designed with small to medium-sized businesses in mind, particularly those that utilize
        QuickBooks or Xero for their accounting needs. Its integration with these platforms is seamless, allowing
        businesses to quickly connect and start using Clockwork&#39;s forecasting capabilities without a lengthy
        setup process.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Clockwork may not be the best fit for every business. Companies that require only basic financial
        reporting or those that are not ready to move away from manual spreadsheet models may find Clockwork&#39;s
        comprehensive features more than they need. It&#39;s designed for businesses that want to
        leverage&nbsp;AI&nbsp;for deeper financial insights and are looking
        to streamline their forecasting processes.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those businesses that do need the advanced capabilities Clockwork offers, the benefits are substantial.
        By automating the creation of a 52-week cash flow forecast and a 5-year financial model, Clockwork saves
        significant time and reduces errors associated with manual data entry. This allows business owners and
        financial managers to focus on strategic decision-making rather than data maintenance.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you&#39;re considering implementing Clockwork, partnering with Geek @ Your Spot LLC can enhance the
        transition. Their expertise in AI implementation ensures that Clockwork integrates smoothly with your
        existing systems, providing training and support tailored to your specific needs. This partnership can be
        particularly beneficial for businesses without a dedicated IT department, ensuring a smooth transition to an
        automated forecasting tool.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ultimately, the decision to adopt Clockwork should be based on your business&#39;s specific needs and goals.
        If you&#39;re aiming to improve financial accuracy, reduce manual workload, and gain deeper insights into
        your business&#39;s financial health, Clockwork is a robust solution that can support these objectives.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <a href="#consultationAppointment2xl" id={`tools-accounting-spreadsheet-data-clockwork-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          booking your free consultation
        </a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Offer a free &quot;Cash Flow Fragility Audit&quot; to prospects. Have them send you their current manual Excel forecast. Point out the broken links, the hard-coded numbers that are already out of date, and the formulas that will break if they add a new row. Then, show them a video mockup of how that exact same spreadsheet looks when powered seamlessly by your partner software&#39;s live data feed.</li>
        <li>How much time does your team spend manually collecting, consolidating, and updating cash flow data each week or month?</li>
        <li>What is your current error rate or frequency of broken formulas and version control issues when multiple team members edit your forecasting sheets?</li>
        <li>How far out can you reliably forecast right now (e.g., 13 weeks, 12 months) before the manual spreadsheet maintenance becomes too overwhelming?</li>
        <li>What specific data sources (e.g., ERPs, bank accounts, billing platforms, CRMs) do you need to stitch together to get an accurate cash flow picture?</li>
        <li>Who needs to see these reports, and how much time do you spend formatting spreadsheet data so it is presentable for executives, board members, or lenders?</li>
        <li>What specific business event (e.g., rapid scaling, tightening margins, upcoming capital raise, or a recent forecasting error) prompted you to look into automated alternatives?</li>
        <li>What is the single biggest risk to your business if your cash flow forecast is inaccurate next month?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-clockwork-right-for-your-business">
                Is Clockwork Right for Your Business?
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-clockwork-right-for-your-business-lg">
                Is Clockwork Right for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
