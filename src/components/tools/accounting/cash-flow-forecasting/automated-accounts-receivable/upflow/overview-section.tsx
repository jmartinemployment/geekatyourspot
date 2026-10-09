import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every month, Anna, a finance manager in a bustling small business in Miami-Dade, faced the daunting task
        of chasing down overdue invoices. Despite her diligent efforts, the manual processes she relied on were
        time-consuming and fraught with errors. The constant juggling of spreadsheets and the repetitive
        follow-ups with clients took a toll not just on her schedule, but also on the company&#39;s cash flow.
        Delayed payments meant delayed opportunities, and the financial uncertainty began to stifle the
        company&#39;s growth potential.</p>
      <p className="text-md text-white shadow-text pt-3">
        This isn&#39;t just Anna&#39;s story. Many small businesses across West Palm Beach and Broward counties
        find themselves trapped in similar cycles, where the manual handling of accounts receivable eats away at
        both time and resources. Errors in invoice tracking and the inconsistency of follow-ups lead to increased
        Days Sales Outstanding (DSO), further straining financial health. The traditional approach to managing
        accounts receivable is not only inefficient but often results in missed revenues and strained client
        relationships.</p>
      <p className="text-md text-white shadow-text pt-3">
        Enter Automated Accounts Receivable solutions like Upflow. These systems are transforming how businesses
        handle collections by automating reminders, integrating with existing&nbsp;
        <GlossaryLink slug="erp">ERP</GlossaryLink>&nbsp;systems, and providing real-time analytics. With Upflow,
        businesses can automate personalized reminder workflows, reduce manual errors, and significantly cut down
        on the time spent managing collections. This shift not only accelerates cash inflows but also enhances
        decision-making with accurate, up-to-date financial data. For Anna and countless others like her, this
        means reclaiming valuable hours and focusing on strategic growth initiatives rather than mundane
        follow-ups.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses looking to streamline their financial operations, adopting Automated Accounts
        Receivable tools offers a clear path to improved cash flow and reduced DSO. By shifting the focus from
        manual processes to intelligent automation, companies can not only enhance their financial stability but
        also build stronger, more reliable relationships with their clients. In the competitive landscape of South
        Florida, such efficiency gains are not just beneficial—they are essential.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="overview">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
