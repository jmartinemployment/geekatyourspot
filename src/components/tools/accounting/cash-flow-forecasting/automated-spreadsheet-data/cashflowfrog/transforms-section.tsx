import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog changes the way businesses handle their financial forecasting by removing the manual burden of
        spreadsheet management. Instead of spending hours updating and cross-referencing data, businesses can focus
        on strategic planning. Cashflowfrog automates the integration of accounting data, providing real-time
        insights that are crucial for making informed decisions.</p>
      <p className="text-md text-white shadow-text pt-3">
        One significant advantage is the elimination of manual data entry errors. By automating data imports from
        platforms like QuickBooks and Xero, Cashflowfrog ensures that forecasts are built on accurate, up-to-date
        information. This reduces the risk of errors that often arise from manual spreadsheet handling, saving time
        and improving data reliability.</p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog also offers detailed cash flow breakdowns by vendor, customer, class, and project. This feature
        allows businesses to drill three levels deep into their forecasts, tracing each figure back to the original
        invoice or bill. This level of detail helps businesses understand what drives their cash flow, enabling them
        to make more precise adjustments and forecasts.</p>
      <p className="text-md text-white shadow-text pt-3">
        The platform supports scenario planning, allowing users to model different business situations and see their
        impact on cash flow. Whether it&#39;s hiring a new employee or launching a marketing campaign, businesses
        can test various scenarios without affecting their actual accounting data. This capability helps in planning
        for potential future changes, ensuring that businesses remain agile and prepared.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Cash Flow Frog forecasts the same QuickBooks data daily and weekly too, up to three years out, so you
        can run a 13-week cash flow and see which week cash gets tight.&quot;&nbsp;
        <a id={`tools-accounting-spreadsheet-data-cashflowfrog-transforms-source${idSuffix}`}
          href="https://cashflowfrog.com/compare/quickbooks-cash-flow/"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Cash Flow Frog
        </a></p>
      <p className="text-md text-white shadow-text pt-3">
        Cashflowfrog&#39;s integration with tools like&nbsp;<Link id={`tools-accounting-spreadsheet-data-cashflowfrog-transforms-zapier${idSuffix}`} href="/tools/marketing/zapier" className="text-[#C83803] hover:underline">Zapier</Link>&nbsp;and&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>&nbsp;assistants such as ChatGPT further streamlines
        operations. These integrations allow for automated projections and updates, reducing the need for constant
        manual oversight. By leveraging these technologies, businesses can maintain an accurate and dynamic view of
        their cash position, leading to better financial management and strategic planning.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-cashflowfrog-transforms-automated-spreadsheet-data">
                How Cashflowfrog Transforms Automated Spreadsheet Data
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="how-cashflowfrog-transforms-automated-spreadsheet-data-lg">
                How Cashflowfrog Transforms Automated Spreadsheet Data
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
