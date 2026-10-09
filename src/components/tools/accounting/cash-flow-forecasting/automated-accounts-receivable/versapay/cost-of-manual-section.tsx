import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function CostOfManualSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        In the hectic world of small businesses in Miami-Dade, Broward, and West Palm Beach counties, the manual
        handling of Automated Accounts Receivable can be a costly burden. When invoices, customer inquiries,
        payments, and reconciliation are scattered across various platforms, it creates a fragmented view of
        collectible cash. This disjointed process not only delays cash flow but also increases the risk of errors
        and disputes.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the main issues is the passive approach to collections. Many businesses rely on calendar-based
        follow-ups, checking aging reports only on specific dates like the 1st or 15th of the month. This means
        invoices can sit unpaid for weeks before any action is taken. Such delays can lead to cash flow
        bottlenecks, making it difficult for businesses to meet their financial obligations on time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Disputes are another area where manual processes falter. Often, invoices are issued with missing details
        or unclear line items, optimized for internal tracking rather than client understanding. This lack of
        clarity can lead to clients shelving invoices until they receive a follow-up, which can take weeks.
        Meanwhile, the business&#39;s cash flow suffers as they wait for these issues to be resolved.</p>
      <p className="text-md text-white shadow-text pt-3">
        A significant challenge is the equal treatment of high-value and low-value clients. Staff often spend the
        same amount of time chasing small payments as they do large ones, leading to misallocated resources and
        drying up cash reserves. This inefficiency is compounded by financial forecasting that assumes all clients
        will pay on time, without accounting for potential delays or disputes.</p>
      <p className="text-md text-white shadow-text pt-3">
        Invoice questions frequently become buried in lengthy email threads, making it difficult to track and
        resolve issues promptly. Customers also lack a convenient digital route to view and pay invoices, further
        complicating the payment process. Staff are left manually matching incoming payments to open invoices, a
        time-consuming task that is prone to errors.</p>
      <p className="text-md text-white shadow-text pt-3">
        Versapay addresses these issues by integrating AR automation, B2B payments, customer collaboration,
        and&nbsp;
        <GlossaryLink slug="ai">AI</GlossaryLink>-assisted cash application into a single platform. This approach
        not only streamlines the entire accounts receivable process but also provides a clear view of collectible
        cash, reducing errors and disputes. By automating the matching of payments to invoices and providing
        real-time visibility, Versapay eliminates the delays and manual labor that plague traditional AR
        processes.</p>
      <p className="text-md italic text-white shadow-text pt-3">
        &quot;Our automated cash application software uses AI to streamline your entire accounts receivable
        reconciliation process—giving your team clarity, control, and time back.&quot;&nbsp;
        <a id="tools-accounting-accounts-receivable-versapay-cost-of-manual-source"
          href="https://www.versapay.com/solutions/cash-application"
          target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">
          Versapay
        </a></p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-accounts-receivable-processes">
                The Cost of Manual Automated Accounts Receivable Processes
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-cost-of-manual-automated-accounts-receivable-processes">
                The Cost of Manual Automated Accounts Receivable Processes
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
