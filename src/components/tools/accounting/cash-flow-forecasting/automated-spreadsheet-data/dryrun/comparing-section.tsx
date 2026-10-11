import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering solutions
        for&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow
        forecasting</GlossaryLink>&nbsp;and managing automated spreadsheet data, businesses often weigh multiple
        options. Dryrun distinguishes itself through its focus on real-time integration and dynamic scenario
        modeling. Unlike traditional spreadsheet methods, which rely heavily on manual data entry and static
        forecasts, Dryrun provides a seamless connection to
        existing&nbsp;<GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink>&nbsp;systems
        like NetSuite, Sage Intacct, Microsoft Dynamics 365 Business Central, and QuickBooks Online. This
        integration allows for continuous data updates and reduces the risk of errors common in spreadsheet-based
        processes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Dryrun&#39;s ability to handle transaction-level adjustments sets it apart from competitors. By offering
        features such as transaction-level AR/AP timing adjustments and custom &quot;Days Outstanding&quot;
        parameters, Dryrun provides a granular level of control over cash flow forecasting. This specificity ensures
        that businesses can accurately reflect real-world payment behaviors, which is often a limitation of other
        tools that apply broad averages across all transactions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another key differentiator is Dryrun&#39;s scenario modeling capabilities. While other tools may offer basic
        forecasting, Dryrun allows users to simulate complex scenarios, such as changes in customer payment terms or
        unexpected supply chain disruptions. This feature empowers businesses to proactively manage potential risks
        and make informed decisions based on a comprehensive view of their financial landscape.</p>
      <p className="text-md text-white shadow-text pt-3">
        In contrast to solutions that require extensive manual data manipulation, Dryrun automates data
        synchronization and provides an intuitive interface for visualizing cash flow trends. This automation not
        only saves time but also enhances accuracy by minimizing human error. The platform&#39;s visual clarity and
        interactive dashboards give leadership teams immediate insights into cash positions, enabling faster and
        more strategic decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses evaluating cash flow forecasting tools, the choice often comes down to the level of
        integration and the ability to adapt to specific business needs. Dryrun excels in both areas, offering deep
        system integration and customizable forecasting models. This flexibility makes it suitable for a wide range
        of businesses, from those with straightforward cash flow needs to those with complex, multi-entity
        operations.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-dryrun-stands-out-among-alternatives">
                How Dryrun Stands Out Among Alternatives
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-dryrun-stands-out-among-alternatives">
                How Dryrun Stands Out Among Alternatives
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
