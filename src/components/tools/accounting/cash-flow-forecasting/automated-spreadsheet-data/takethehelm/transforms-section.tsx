import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Takethehelm transforms how small businesses handle their financial data by automating tedious processes
        and providing real-time insights. By integrating with platforms like QuickBooks, Xero, and Sage,
        Takethehelm automates&nbsp;<GlossaryLink slug="cash-flow-forecasting">cash flow
        forecasting</GlossaryLink>, eliminating the need for manual spreadsheet updates. This automation saves
        hours each week, allowing finance teams to focus on strategic tasks rather than data entry.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the key benefits is the removal of errors associated with manual data entry. With Takethehelm,
        businesses can trust that their forecasts are accurate and up-to-date. This reliability is crucial for
        making informed decisions, whether it&#39;s planning for a new project or managing day-to-day
        operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform also supports unlimited scenario planning, enabling businesses to test various financial
        strategies without altering their base case. This feature is particularly valuable for businesses in
        dynamic industries, allowing them to adapt quickly to changes in the market.</p>
      <p className="text-md text-white shadow-text pt-3">
        Takethehelm&#39;s drag-and-drop interface makes it easy to adjust forecasts and view different financial
        scenarios. This user-friendly design reduces the learning curve and ensures that even those with limited
        financial expertise can effectively manage their cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Additionally, Takethehelm integrates seamlessly with Veem, allowing businesses to manage and pay
        their&nbsp;<GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;directly from the
        platform. This integration streamlines the payment process, reducing the time spent on administrative
        tasks and ensuring that payments are made on time.</p>
      <blockquote cite="https://takethehelm.app/for-advisors/" className="mt-3 border-l-4 border-white/60 pl-4 italic text-md text-white shadow-text">
        Helm syncs with Xero, QuickBooks Online, and Sage Accounting to build automated cash flow forecasts in
        seconds.</blockquote>
      <p className="text-md text-white shadow-text pt-3">
        Overall, Takethehelm not only simplifies financial management but also enhances the accuracy and
        timeliness of financial data. By removing the manual burden, businesses can focus on growth and
        strategic planning, confident in the knowledge that their financial data is reliable and current.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="automated-spreadsheet-data-what-takethehelm-removes-from-your-week">
                Automated Spreadsheet Data: What Takethehelm Removes from Your Week
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="automated-spreadsheet-data-what-takethehelm-removes-from-your-week">
                Automated Spreadsheet Data: What Takethehelm Removes from Your Week
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
