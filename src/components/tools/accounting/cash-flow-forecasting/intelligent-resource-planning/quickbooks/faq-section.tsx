import Link from "next/link";

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
              What is financial reporting software?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Financial reporting software like QuickBooks connects to your data, gathers the numbers, and shows
              you clear insights in easy-to-read charts and graphs. It is part of a business intelligence
              toolkit, helping you pull out what matters most from your business data.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does QuickBooks have an expense report template?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, QuickBooks includes a simple expense report template. It tracks the date, expense type, and
              totals for each item. You can also customize it by adding new columns or changing headings to fit
              your business needs.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does QuickBooks offer expense reports?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, QuickBooks lets you view real-time expense reports and track your business spending right
              from your dashboard. This helps you keep an eye on costs and spot trends quickly.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What software is used for financial records?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              QuickBooks is designed to make viewing and managing your financial records easy. You can see your
              profit and loss, check expenses, and look for ways to increase revenue and profits, all in a few
              clicks.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Why is financial reporting software important for small businesses?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Financial reporting software is key for small businesses because it streamlines your financial
              management and improves accuracy. This saves you time and money, and gives you valuable insights
              into your company’s financial health.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Which software should I use for making financial reports?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              QuickBooks is a strong choice for making financial reports. It helps you manage data like unpaid
              invoices and customer balances, and includes ready-made reports such as Customer Balance Summary
              and Accounts Receivable Aging Summary. This makes it easier to stay on top of your finances.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What financial reports does a small business need?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
                <li>Balance sheets</li>
                <li>Income statements</li>
                <li>Cash flow statements</li>
            </ul>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              What are the benefits of financial reporting software?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
                <li>Gives you a clear view of your finances</li>
                <li>Saves time and boosts efficiency</li>
                <li>Makes it easy to track overdue invoices</li>
                <li>Lets you create custom reports for your needs</li>
            </ul>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Does QuickBooks do financial statements?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              Yes, QuickBooks lets you create financial statements like balance sheets, income statements, and
              cash flow statements. You can also generate other financial reports as needed.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Is QuickBooks Online Advanced considered a true ERP system, or do I need to completely switch to a new software?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              QuickBooks Online Advanced is a top-tier accounting and financial management platform, but it is
              not a full ERP system by itself. Traditional ERPs handle everything, accounting, supply chain, HR,
              and operations, in one closed system. QBO Advanced works as a strong modular ERP core. Instead of
              a risky, expensive migration to something like NetSuite, small businesses can use QBO Advanced’s
              API to connect automated tools for inventory, payroll, and forecasting. This lets you build a
              custom ERP that fits your needs.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We are drowning in spreadsheets for cash flow forecasting. Can QuickBooks Advanced handle this automatically?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              QBO Advanced has basic cash flow tools, like the Cash Flow Dashboard, but it does not provide
              deep, predictive modeling on its own. For small businesses in South Florida with changing client
              demands or seasonal swings, its built-in tools still require manual spreadsheet updates. To get
              true ERP-level automation, you need to connect QBO Advanced with specialized FP&amp;A tools like&nbsp;<Link id="tools-accounting-intelligent-resource-planning-quickbooks-faq-fathomhq" href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/fathomhq" className="text-[#C83803] hover:underline">Fathom</Link>&nbsp;or&nbsp;<Link id="tools-accounting-intelligent-resource-planning-quickbooks-faq-jirav" href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/jirav" className="text-[#C83803] hover:underline">Jirav</Link>. These integrations sync live data from QuickBooks to automate forecasting,
              budgeting, and KPI dashboards, removing the need for manual updates.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              How does QuickBooks Advanced protect my business from payroll tax penalties and worker misclassification?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              QBO Advanced tracks your financial data, but it does not automatically enforce employment laws or
              classify workers. Small businesses in South Florida often use both contractors and employees,
              which increases the risk of IRS audits for misclassification. To automate compliance and reduce
              risk, QuickBooks should be integrated with a workforce management and payroll compliance tool like&nbsp;<Link id="tools-accounting-intelligent-resource-planning-quickbooks-faq-gusto" href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/gusto" className="text-[#C83803] hover:underline">Gusto</Link>&nbsp;or&nbsp;<Link id="tools-accounting-intelligent-resource-planning-quickbooks-faq-rippling" href="/tools/accounting/tax-compliance-regulations/payroll-tax-worker-misclassification/rippling" className="text-[#C83803] hover:underline">Rippling</Link>. These platforms handle payroll taxes, track changing laws, and automate
              onboarding to help protect your business from legal issues.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              We sell to clients across multiple states. Does QuickBooks Online Advanced handle complex sales tax rules automatically?
            </h3>
            <p className="text-base text-white shadow-text pt-3">
              QBO Advanced includes an automated sales tax engine that calculates tax at checkout based on
              location, but it does not manage economic nexus thresholds across states. As your business grows,
              you may cross state sales limits without realizing it, which can lead to tax penalties. To address
              this, you need to pair QuickBooks with a dedicated tax compliance automation tool like&nbsp;<Link id="tools-accounting-intelligent-resource-planning-quickbooks-faq-taxcloud" href="/tools/accounting/tax-compliance-regulations/multi-state-sales-tax-nexus/taxcloud" className="text-[#C83803] hover:underline">TaxCloud</Link>&nbsp;or
              Anrok. These integrations monitor your sales against state laws, alert you when nexus is
              triggered, and handle filing and remittance for you.</p>
            <hr className="border-t-1 border-[#C83803] my-6 text-[#C83803] w-full" />
            <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
              Our team is non-technical. Won&#39;t implementing ERP-style automations around QuickBooks disrupt our daily operations?
            </h3>
            <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
                <li>Traditional ERP implementations often fail because they require big changes and steep learning curves.</li>
                <li>A modular ERP approach with QBO Advanced keeps your daily operations running smoothly.</li>
                <li>Your staff can keep using the familiar QuickBooks dashboard for daily tasks.</li>
                <li>Automation tools, like AP/AR workflows or forecasting, run quietly in the background or use simple, single-sign-on interfaces.</li>
                <li>Rolling out these tools step by step means you get enterprise-grade features with almost no downtime.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
