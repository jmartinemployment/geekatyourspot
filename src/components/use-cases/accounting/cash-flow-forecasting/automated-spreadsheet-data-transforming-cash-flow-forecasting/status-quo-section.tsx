export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Continuing with spreadsheet-based cash flow management incurs significant costs, both tangible and
        intangible. For small business owners like Maria, these costs manifest in wasted hours, increased errors,
        and elevated risks, all of which ultimately hinder business growth and stability.</p>
      <p className="text-base text-white shadow-text pt-3">
        One of the most immediate costs is time. Small business owners often spend hours each week updating
        spreadsheets, reconciling accounts, and checking for errors. This administrative burden diverts attention
        from strategic decision-making and customer engagement, critical areas for business success. For Maria, this
        means less time innovating and more time firefighting financial discrepancies.</p>
      <p className="text-base text-white shadow-text pt-3">
        Errors are another costly consequence. Manual data entry is prone to mistakes, and in financial forecasting,
        even a minor error can lead to major misjudgments. For instance, a misplaced decimal or incorrect formula
        can skew cash flow predictions, leading to poor investment decisions or unexpected cash shortages. These
        errors not only affect financial planning but can also damage a business&#39;s reputation if they result in
        missed payments or unmet commitments.</p>
      <p className="text-base text-white shadow-text pt-3">
        The delay in data processing is a critical risk factor. In today&#39;s fast-paced business environment,
        delayed insights can mean the difference between seizing an opportunity and missing it entirely. Without
        real-time data, Maria might find herself reacting to financial issues long after they&#39;ve impacted her
        business, rather than proactively managing them.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moreover, the reliance on outdated spreadsheets increases financial risk. Businesses face unpredictable
        factors like sudden market changes, customer payment delays, and unexpected expenses. Without the ability to
        quickly adjust forecasts and scenarios, companies remain exposed to these risks. For Maria, this could mean
        struggling to cover payroll or missing out on a strategic investment opportunity due to inaccurate cash
        predictions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, there&#39;s the opportunity cost of maintaining the status quo. By sticking to spreadsheets,
        businesses forgo the benefits of automated systems that can offer dynamic forecasting, real-time updates,
        and deeper insights into financial health. These tools not only improve accuracy but also enhance strategic
        agility, enabling business owners to make informed decisions swiftly and confidently.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-cost-of-maintaining-the-status-quo-in-cash-flow-management" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Maintaining the Status Quo in Cash Flow Management
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-cost-of-maintaining-the-status-quo-in-cash-flow-management-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Maintaining the Status Quo in Cash Flow Management
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
