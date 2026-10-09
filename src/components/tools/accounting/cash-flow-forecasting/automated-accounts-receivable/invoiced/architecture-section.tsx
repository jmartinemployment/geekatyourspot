import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced is designed as an end-to-end platform that automates the entire invoice-to-cash cycle. This
        architecture integrates all stages of accounts receivable into one seamless process, reducing manual
        intervention and increasing efficiency. The platform uses&nbsp;
        <GlossaryLink slug="ai" className="text-[#0B162A] hover:underline">AI</GlossaryLink>&nbsp;to manage
        tasks from invoice delivery to payment reconciliation, ensuring a streamlined workflow that minimizes
        errors and saves time.</p>
      <p className="text-md text-white shadow-text pt-3">
        The core of Invoiced&#39;s architecture lies in its AI-driven functionalities. Features like CashMatch
        AI automate the matching of incoming payments to open invoices, which reduces the time spent on manual
        reconciliation. This automation not only speeds up the process but also improves accuracy, allowing
        businesses to focus on strategic tasks rather than administrative ones.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced also employs Smart Chasing, an AI-driven collections sequence that follows up on unpaid
        invoices. This feature adapts to the behavior of each customer, optimizing the timing and method of
        contact to improve collection rates. By tailoring outreach efforts, Smart Chasing helps businesses
        maintain steady cash flow and reduce days sales outstanding (DSO).</p>
      <p className="text-md text-white shadow-text pt-3">
        A key component of Invoiced is its powerful reporting capabilities. The platform offers real-time
        analytics and dashboards that provide insights into collections performance and&nbsp;
        <GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow forecasting</GlossaryLink>.
        Businesses can access over 30 pre-built reports or create custom ones using the Report Builder, which
        supports 40 different data types. This flexibility allows companies to tailor reports to their specific
        needs, providing valuable insights that drive informed decision-making.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoiced&#39;s integration capabilities further enhance its functionality. The platform offers native
        integrations with systems like NetSuite, which ensures real-time data synchronization and reduces the
        need for manual data entry. This seamless integration allows businesses to manage their invoice-to-cash
        cycle more effectively, focusing on strategy rather than operational tasks.</p>
      <p className="text-md text-white shadow-text pt-3">
        Overall, Invoiced&#39;s architecture is built to provide a comprehensive solution for automated accounts
        receivable. By leveraging AI and robust integration capabilities, the platform simplifies complex
        processes, enhances accuracy, and provides businesses with the tools they need to optimize their cash
        flow and financial performance.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="invoiceds-architecture-and-how-it-works">
                Invoiced&#39;s Architecture and How It Works
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="invoiceds-architecture-and-how-it-works">
                Invoiced&#39;s Architecture and How It Works
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
