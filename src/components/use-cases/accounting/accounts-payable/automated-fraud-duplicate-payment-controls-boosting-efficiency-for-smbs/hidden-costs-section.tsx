import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HiddenCostsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Managing <GlossaryLink slug="accounts-payable">accounts payable</GlossaryLink> (AP) manually is not
        just tedious; it&#39;s costly. Small businesses in Miami-Dade, Broward, and West Palm Beach counties
        often find themselves trapped in a cycle of inefficiencies that drain resources and inflate costs.
        Manual processes are riddled with errors, from simple data entry mistakes to complex issues like
        duplicate payments. These mistakes can be expensive. Imagine processing six duplicate invoices every
        month, each averaging $2,000. That&#39;s $12,000 monthly in potential losses.</p>
      <p className="text-md text-white shadow-text pt-3">
        The time spent on manual data entry is another hidden cost. Each invoice requires verification,
        approval, and entry into the system. This process can consume hours weekly, especially when errors
        occur or documents are misplaced. When an invoice is incorrectly entered, it may lead to overpayments
        or duplicate payments, complicating financial records and causing cash flow issues.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, manual AP processes increase the risk of late payments. As invoices pile up, missing a due
        date becomes more likely. This can lead to late fees, strained vendor relationships, and a damaged
        credit reputation. For small businesses operating on tight margins, such costs are particularly
        burdensome.</p>
      <p className="text-md text-white shadow-text pt-3">
        Fraud risk is another significant concern. Without automated checks, it&#39;s easier for duplicate
        invoices to slip through or for unauthorized payments to be made. This not only results in financial
        loss but also requires additional time and resources to investigate and resolve.</p>
      <p className="text-md text-white shadow-text pt-3">
        The burden of these inefficiencies falls heavily on the staff responsible for managing AP. They are
        often stretched thin, trying to keep up with the demands of manual processing while also attending to
        other critical tasks. This can lead to burnout and reduced productivity, further exacerbating the
        problem.</p>
      <p className="text-md text-white shadow-text pt-3">
        The lack of visibility into the AP process can also hinder strategic decision-making. Without
        real-time data, businesses struggle to forecast cash flow accurately or identify areas for cost
        savings. This lack of insight can lead to poor financial planning and missed opportunities for
        growth.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-hidden-costs-of-manual-accounts-payable-processes" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Accounts Payable Processes
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-hidden-costs-of-manual-accounts-payable-processes" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Hidden Costs of Manual Accounts Payable Processes
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
