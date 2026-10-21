export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Cashflowfrog is particularly suited for small to medium-sized businesses in Miami-Dade, Broward, and West
        Palm Beach counties looking to enhance their&nbsp;cash flow
        forecasting&nbsp;with automated spreadsheet data. It is ideal for business owners who need
        detailed insights into their cash flow, allowing them to make informed decisions quickly. Companies that
        operate in dynamic environments where financial conditions can change rapidly will find Cashflowfrog&#39;s
        real-time updates and scenario modeling invaluable.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Cashflowfrog may not be the best fit for very small businesses with straightforward cash flow needs
        or those that do not require detailed forecasting capabilities. For these businesses, simpler tools might
        suffice, offering basic forecasting functions without the depth or complexity of Cashflowfrog&#39;s
        features.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those considering Cashflowfrog, the next step is to assess the specific needs of your business and how
        they align with the tool&#39;s capabilities. Geek @ Your Spot LLC can assist in this evaluation, providing
        expert guidance on how to best implement Cashflowfrog to meet your unique requirements. This includes
        configuring the tool to integrate seamlessly with your existing systems and ensuring that your team is
        trained to leverage its full potential.</p>
      <p className="text-base text-white shadow-text pt-3">
        A practical approach involves starting with a pilot program to measure the return on investment and ensure
        that Cashflowfrog meets your expectations. By working with Geek @ Your Spot LLC, businesses can benefit from
        tailored implementation strategies that minimize downtime and maximize the tool&#39;s impact. This
        partnership ensures that you are not only adopting a new tool but also enhancing your financial management
        processes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Ultimately, deciding to implement Cashflowfrog should be based on a thorough understanding of its benefits
        and how they align with your business goals. With the right support and configuration, Cashflowfrog can
        transform your cash flow forecasting from a time-consuming task into a strategic advantage.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when&nbsp;
        <button type="button" data-scheduler-link id={`tools-accounting-spreadsheet-data-cashflowfrog-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">
          booking your free consultation
        </button>.</p>
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-cashflowfrog-and-next-steps">
                Who Benefits Most from Cashflowfrog and Next Steps
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="who-benefits-most-from-cashflowfrog-and-next-steps-lg">
                Who Benefits Most from Cashflowfrog and Next Steps
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
