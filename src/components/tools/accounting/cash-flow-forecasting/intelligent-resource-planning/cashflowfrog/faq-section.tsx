export default function FaqSection() {
  return (
    <section className="min-h-screen bg-[#024059] text-white py-5">
      <div className="container">
        <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
          <div className="col-span-12">
            <h2 id="frequently-asked-questions" className="text-white text-[6vw] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="col-span-12">
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why do I need CashFlowFrog if my automated accounting or ERP tool already tracks my financials?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Automated ERPs and bookkeeping tools like QuickBooks Enterprise, Odoo, or Sage Intacct are great
              for tracking what happened in the past. They do not show you what is coming next. CashFlowFrog
              pulls live data from your accounting system and builds a rolling 36-month cash flow forecast. This
              lets you see and plan for the future, not just report on the past, so you can manage cash and
              payroll without surprises.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which automated ERP and accounting platforms will this seamlessly plug into?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
                <li>CashFlowFrog connects in real time to eight major platforms:</li>
                <li>QuickBooks Online and QuickBooks Desktop</li>
                <li>Xero</li>
                <li>Sage Intacct</li>
                <li>Odoo ERP</li>
                <li>Zoho Books and FreshBooks</li>
                <li>Plaid for direct bank feeds</li>
                <li>No manual uploads or custom API work needed. It syncs your data automatically.</li>
            </ul>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How can this tool help me simulate big business decisions before I spend the cash?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              CashFlowFrog includes What-If Scenario Planning. You can test out major moves, like hiring, buying
              equipment, or opening a new office, before you spend. It shows your exact cash runway and the
              ripple effects of each decision, so you can avoid cash gaps and plan growth safely.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We are trying to leverage AI agents in our IT workflows. Can we interact with our cash flow data using AI?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              Yes. CashFlowFrog has an AI Connector using the Model Context Protocol. You can link your
              preferred AI agent, like Claude, ChatGPT, Copilot, or Gemini, and manage your forecast by chatting
              in plain language. Ask questions or give instructions, and the forecast updates instantly.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How much time does it take to deploy, and will it force us back into managing complex spreadsheets?
            </h3>
            <p className="text-md text-white shadow-text pt-3">
              CashFlowFrog sets up in minutes. It connects directly to your accounting system, reads your live
              data, and builds the baseline forecast automatically. You do not need to go back to manual
              spreadsheets, the dashboard stays live and accurate without extra work.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does CashFlowFrog help me manage bad paying clients or regional tax planning?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
                <li>CashFlowFrog gives you Strategic Insights from your invoice workflows:</li>
                <li>Customer Insights: It flags and ranks customers by payment punctuality, so you know who to collect from first.</li>
                <li>Tax Planning: It builds projected tax returns into your forecast, so you are ready for regional tax deadlines and avoid surprises.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
