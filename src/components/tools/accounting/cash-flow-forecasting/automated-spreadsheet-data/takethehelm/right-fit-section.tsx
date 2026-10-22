import Link from "next/link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Take the Helm is particularly suited for small businesses that require a robust yet flexible solution
        for&nbsp;cash flow forecasting. Its
        integration with popular accounting systems like QuickBooks, Xero, and Sage makes it an ideal choice for
        businesses already using these platforms. The tool&#39;s ability to provide real-time insights and
        automate tedious tasks can significantly reduce the workload for small finance teams, allowing them to
        focus on strategic planning rather than data entry.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Take the Helm might not be the best fit for businesses that have highly specialized or complex
        financial processes that require custom-built solutions. While it offers a high degree of customization,
        there are limits to what can be achieved without custom development work. Businesses with unique needs
        may find that they require additional tools or bespoke solutions to complement Take the Helm&#39;s
        capabilities.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those considering Take the Helm, the next step is to evaluate how well it aligns with your current
        systems and processes. Geek @ Your Spot LLC can assist in this evaluation by providing a detailed analysis
        of your needs and how Take the Helm can be configured to meet them. This consultancy service is invaluable
        for ensuring that the transition to automated&nbsp;cash flow
        forecasting&nbsp;is as smooth and effective as possible.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Take the Helm offers a powerful combination of features and ease of use that makes it a strong
        contender for small businesses looking to automate their automated spreadsheet data management. By
        leveraging the expertise of Geek @ Your Spot LLC, businesses can ensure that they not only implement the
        tool effectively but also extract maximum value from its capabilities. This partnership can lead to
        significant improvements in efficiency, accuracy, and financial insight.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when&nbsp;<Link href="#consultationAppointment2xl"
        id={`tools-accounting-spreadsheet-data-takethehelm-right-fit-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking your free
        consultation</Link>.</p>
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
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-takethehelm-right-for-your-business">
                Is Take the Helm Right for Your Business?
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="is-takethehelm-right-for-your-business-lg">
                Is Take the Helm Right for Your Business?
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
