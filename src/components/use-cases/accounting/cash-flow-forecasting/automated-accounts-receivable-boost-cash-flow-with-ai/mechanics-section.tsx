import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every day a business delays in collecting unpaid invoices, it essentially acts as an interest-free bank for
        its clients. This comes with a significant cost that many businesses overlook. Imagine having $50,000 in
        outstanding invoices that are 15 days overdue. This situation not only affects your cash flow but also
        undermines your ability to make strategic investments in payroll, hiring, or inventory.  Modern automated
        accounts receivable (AR) solutions offer a structured approach to address this issue, making cash flow
        predictable and reliable. These solutions revolve around three core components:
        behavioral&nbsp;<GlossaryLink slug="predictive-analytics" className="text-[#0B162A] hover:underline">predictive
        analytics</GlossaryLink>, automated humanized cadences, and centralized communication logs.</p>
      <p className="text-md text-white shadow-text pt-3">
        Behavioral predictive analytics is the first pillar. Instead of relying on the invoice&#39;s due date, these
        systems analyze each client&#39;s payment behavior over time. This allows the software to predict an
        &quot;Expected Payment Date&quot; for each invoice, providing a more realistic view of cash flow.&nbsp;
        <Link id="use-cases-accounting-accounts-receivable-mechanics-chaserhq"
          href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/chaserhq" className="text-[#0B162A] hover:underline">
          Chaserhq
        </Link>&nbsp;exemplifies this by separating receivables into categories such as promised, disputed, and at-risk,
        which helps businesses distinguish between reliable cash flow and potential problems.</p>
      <p className="text-md text-white shadow-text pt-3">
        Automated, humanized cadences form the second pillar. These systems send tailored email reminders that
        adjust their tone and frequency based on a client&#39;s payment history. Reliable clients receive gentle
        reminders, while habitual late payers face progressively firmer communications.&nbsp;
        <Link id="use-cases-accounting-accounts-receivable-mechanics-invoiced"
          href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/invoiced" className="text-[#0B162A] hover:underline">
          Invoiced
        </Link>, for instance, offers features that automate these reminders, ensuring that follow-ups are consistent and
        timely without requiring manual intervention.</p>
      <p className="text-md text-white shadow-text pt-3">
        The third pillar is centralized communication logs. All interactions concerning invoices, such as disputes
        or payment promises, are logged in one system. This ensures that any invoice dispute is immediately marked
        and removed from the active forecast, preventing over-reliance on disputed cash flow. Systems like&nbsp;
        <Link id="use-cases-accounting-accounts-receivable-mechanics-versapay"
          href="/tools/accounting/cash-flow-forecasting/automated-accounts-receivable/versapay" className="text-[#0B162A] hover:underline">
          Versapay
        </Link>&nbsp;integrate these logs with payment portals, allowing clients to resolve disputes quickly and keep the
        cash flow predictions accurate.</p>
      <p className="text-md text-white shadow-text pt-3">
        By integrating these components, automated AR solutions transform the collections process into a predictable
        and efficient system. This not only shortens payment cycles by 10 to 14 days but also
        turns&nbsp;<GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash flow
        forecasting</GlossaryLink>&nbsp;into a precise, data-driven tool. Businesses can thus move from uncertainty
        to confidence, using their cash flow projections to drive growth rather than reacting to cash flow gaps.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-mechanics-of-automated-accounts-receivable-solutions" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Mechanics of Automated Accounts Receivable Solutions
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-mechanics-of-automated-accounts-receivable-solutions" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Mechanics of Automated Accounts Receivable Solutions
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
