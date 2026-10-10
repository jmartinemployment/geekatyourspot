import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses in Miami-Dade, Broward, and West Palm Beach counties often find themselves overwhelmed by
        the fragmented nature of manual accounts receivable processes. Invoices, customer queries, payments, and
        reconciliation tasks are scattered across various systems and formats, making it difficult to get a clear
        view of collectible cash. This fragmentation leads to inefficiencies that can significantly impact cash flow
        and financial stability.</p>
      <p className="text-md text-white shadow-text pt-3">
        One of the primary issues is the passive nature of collections. Businesses typically rely on calendar-based
        follow-ups, checking aging reports only at set intervals, such as the 1st or 15th of the month. This means
        invoices can sit unpaid for weeks before any action is taken, leading to unnecessary delays in cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another major problem is the lack of a clear process for handling disputes. Invoices are often sent with
        missing details or vague descriptions, optimized more for internal tracking than for client understanding.
        As a result, clients may delay payments, leading to weeks of back-and-forth communication before issues are
        resolved.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, businesses frequently misallocate their resources by treating all clients equally, regardless of
        their value. Time spent chasing small payments could be better allocated to resolving larger, more impactful
        invoices. Additionally, financial projections often assume a &quot;best-case&quot; scenario where all
        clients pay on time, ignoring potential delays or disputes that can disrupt cash flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        Manual processes also bury invoice questions in email threads, complicating communication and delaying
        resolutions. Customers often lack a straightforward digital route to view and pay invoices, adding further
        delays. Staff are left to manually match incoming payments to invoices, a time-consuming task that is prone
        to errors. Meanwhile, collectors waste time on low-priority accounts while more significant, risky balances
        grow unchecked.</p>
      <p className="text-md text-white shadow-text pt-3">
        Management often receives performance data too late to make informed decisions, further exacerbating the
        problem. This lack of timely information can prevent businesses from taking proactive measures to improve
        their automated accounts receivable processes. Versapay addresses these issues by integrating AR automation,
        B2B payments, customer collaboration, and&nbsp;<GlossaryLink slug="ai">AI</GlossaryLink>-assisted cash
        application, streamlining the entire chain from invoice to reconciliation.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-costs-of-manual-automated-accounts-receivable">
                The Costs of Manual Automated Accounts Receivable
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="the-costs-of-manual-automated-accounts-receivable">
                The Costs of Manual Automated Accounts Receivable
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
