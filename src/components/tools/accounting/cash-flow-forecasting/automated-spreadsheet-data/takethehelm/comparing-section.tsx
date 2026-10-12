import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        When considering tools for automating spreadsheet data, businesses often weigh options like&nbsp;<Link
        id="tools-accounting-spreadsheet-data-takethehelm-comparing-cashflowfrog"
        href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/cashflowfrog"
        className="text-[#0B162A] hover:underline">Cash Flow Frog</Link>,&nbsp;<Link
        id="tools-accounting-spreadsheet-data-takethehelm-comparing-floatapp"
        href="/tools/accounting/cash-flow-forecasting/automated-spreadsheet-data/floatapp"
        className="text-[#0B162A] hover:underline">Float</Link>, and Take the Helm. Each has its strengths, but
        Take the Helm stands out with its seamless integration capabilities and user-friendly interface. While
        Float and Cash Flow Frog offer solid forecasting features, Take the Helm excels in automating the entire
        cash flow process, syncing effortlessly with QuickBooks, Xero, and Sage.</p>
      <p className="text-md text-white shadow-text pt-3">
        Take the Helm&#39;s ability to integrate with these major accounting systems ensures that your data is
        always up-to-date, reducing the manual effort required to maintain accuracy. This integration is crucial
        for businesses that operate on tight schedules and need real-time insights to make informed decisions.
        Unlike some competitors, Take the Helm provides a comprehensive dashboard that allows users to
        manage&nbsp;<GlossaryLink slug="accounts-payable" className="text-[#0B162A] hover:underline">accounts
        payable</GlossaryLink>&nbsp;and receivable, track KPIs, and conduct scenario planning—all in one place.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another advantage of Take the Helm is its intuitive design, which minimizes the learning curve and allows
        teams to quickly adapt. This is particularly beneficial for small businesses with limited resources for
        training. The platform&#39;s drag-and-drop interface simplifies the process of adjusting forecasts and
        testing scenarios, making it accessible even for those with minimal technical expertise.</p>
      <p className="text-md text-white shadow-text pt-3">
        In contrast, some tools might require extensive setup or offer less flexibility in customizing
        forecasts. Take the Helm&#39;s flexibility is a key differentiator, allowing users to tailor forecasts to
        their specific needs without being constrained by rigid templates. This adaptability ensures that
        businesses can respond swiftly to changes in the market or internal operations.</p>
      <p className="text-md text-white shadow-text pt-3">
        For businesses in South Florida, where Geek @ Your Spot provides local expertise, the choice of
        Take the Helm is further supported by the consultancy&#39;s ability to tailor the tool&#39;s deployment to
        fit specific business environments. This local support ensures that businesses not only implement the
        tool effectively but also maximize its potential to improve cash flow management and forecasting
        accuracy.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="takethehelm-in-the-landscape-of-automated-spreadsheet-tools">
                Take the Helm in the Landscape of Automated Spreadsheet Tools
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="takethehelm-in-the-landscape-of-automated-spreadsheet-tools">
                Take the Helm in the Landscape of Automated Spreadsheet Tools
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
