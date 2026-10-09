import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small businesses often face significant challenges when managing Automated Fraud &amp; Duplicate Payment
        Controls. These issues stem from a lack of cohesive processes that integrate invoice intake, approval,
        payment, and accounting records. This disconnection can lead to costly errors, such as paying the same
        invoice twice or making payments without proper authorization. For instance, consider a situation where
        both the business owner and the bookkeeper enter the same vendor bill independently. This duplication
        can result in double payments if not caught in time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Another common problem arises when invoices are received via email and entered manually. This method
        often leads to inconsistencies in details, making it difficult to track and reconcile payments
        accurately. Additionally, staff may inadvertently process an invoice with a duplicate number without
        realizing it, further complicating the&nbsp;
        <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink>&nbsp;process. These errors not only
        waste money but also consume valuable time that could be better spent on strategic business
        activities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, the intended approval process is sometimes bypassed, either due to oversight or the urgency to
        process payments quickly. This can lead to unauthorized payments slipping through the cracks. On top of
        this, accounting records may not be updated promptly, causing someone to mistakenly issue a payment
        again. Such scenarios highlight the critical need for a more integrated approach to managing accounts
        payable.</p>
      <p className="text-md text-white shadow-text pt-3">
        BILL addresses these challenges by centralizing activities and implementing checks for duplicate
        invoices. By consolidating invoice processing, approval routing, and payment records into one
        controlled workflow, BILL ensures that every step is tracked and verified. This system not only
        prevents duplicate payments but also maintains a clear audit trail for each transaction.</p>
      <p className="text-md text-white shadow-text pt-3">
        The solution offered by BILL is straightforward: &quot;Stop paying from scattered inboxes. We build one
        controlled workflow that checks for duplicate bills, routes approvals, and keeps payment records
        connected to your books.&quot; This approach eliminates the chaos of managing invoices through multiple
        channels and reduces the risk of financial discrepancies. By providing a unified platform, BILL
        streamlines the entire accounts payable process, allowing small businesses to focus on growth rather
        than administrative burdens.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 gap-x-4 place-items-center">
            <div className="col-span-7">
              <h2 className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="challenges-with-automated-fraud-duplicate-payment-controls">
                Challenges with Automated Fraud &amp; Duplicate Payment Controls
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
              <h2 className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text" id="challenges-with-automated-fraud-duplicate-payment-controls">
                Challenges with Automated Fraud &amp; Duplicate Payment Controls
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
