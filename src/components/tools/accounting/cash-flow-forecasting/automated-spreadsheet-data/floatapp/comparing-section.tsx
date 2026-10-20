
export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When
        considering&nbsp;cash
        flow forecasting&nbsp;tools, businesses often weigh several options. Floatapp stands out
        among these solutions by offering specific features tailored to the needs of small businesses. Its
        integration with accounting platforms like Xero and QuickBooks Online ensures that data is always current,
        reducing the manual effort associated with traditional spreadsheet models.</p>
      <p className="text-md text-white shadow-text pt-3">
        Many businesses start with spreadsheets for cash flow management. While spreadsheets are familiar, they come
        with significant limitations. Manual entry is prone to errors, and maintaining up-to-date data is a constant
        challenge. In contrast, Floatapp automates data import, syncing with accounting platforms every 24 hours.
        This automation not only reduces errors but also saves time, allowing businesses to focus on strategic
        decisions rather than data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        Floatapp also offers advanced scenario planning, a feature not typically available in basic spreadsheet
        models. This allows businesses to simulate various financial scenarios and make informed decisions based on
        potential outcomes. The ability to toggle budget lines and instantly see the impact on cash flow provides a
        dynamic forecasting tool that static spreadsheets cannot match.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses considering other software solutions, such as
        integrated&nbsp;ERP&nbsp;systems,
        it&#39;s important to note that Floatapp is specifically designed for cash flow management. While ERPs offer
        a broad range of functionalities, they often lack the specialized tools for detailed cash flow forecasting
        that Floatapp provides. Furthermore, ERPs can be complex and costly, making them less suitable for small
        businesses with limited budgets.</p>
      <p className="text-md text-white shadow-text pt-3">
        Floatapp&#39;s focus on cash flow forecasting means it excels in this area, offering features like real-time
        updates and intelligent cost predictions. These capabilities help businesses anticipate cash flow challenges
        and adjust their strategies accordingly. Other tools may offer similar forecasting features, but Floatapp’s
        integration and ease of use make it particularly appealing for businesses looking to streamline their
        financial processes without the overhead of a full-scale ERP system.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, Floatapp provides a specialized, user-friendly solution for cash flow forecasting, making it an
        attractive option for small businesses. Its ability to integrate seamlessly with existing accounting
        software and provide accurate, up-to-date forecasts sets it apart from both traditional spreadsheets and
        more complex ERP systems.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="comparing-floatapp-to-other-cash-flow-solutions">
                Comparing Floatapp to Other Cash Flow Solutions
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="comparing-floatapp-to-other-cash-flow-solutions-lg">
                Comparing Floatapp to Other Cash Flow Solutions
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
