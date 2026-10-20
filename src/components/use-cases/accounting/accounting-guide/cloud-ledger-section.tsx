import Link from "next/link";

export default function CloudLedgerSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Every remedy in this guide depends on one clean record of your business. The <strong>ledger</strong> holds
        your chart of accounts, your vendor and customer lists, and your bank feeds. Every other tool reads
        from it and writes back to it. If the ledger is messy, every tool connected to it inherits the mess,
        so this is where the work begins.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        QuickBooks Online Advanced
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        <Link id={`use-cases-accounting-cloud-ledger-quickbooks${idSuffix}`} href="/tools/accounting/cash-flow-forecasting/intelligent-resource-planning/quickbooks" className="text-[#C83803] hover:underline">QuickBooks
        Online Advanced</Link> is the top tier of QuickBooks Online and one of the most widely used ledgers
        among growing small businesses. It supports up to <strong>25 users</strong> with <strong>custom
        roles</strong>, so each person sees only what their job requires. Its <strong>workflow
        automation</strong> sends reminders and routes approvals according to rules you set, and its reporting
        goes deeper than the lower tiers. When a business grows into several entities, Intuit offers <strong>Intuit
        Enterprise Suite</strong> as the next step, so the clean data you build today does not have to move to
        a different vendor later. Our <Link id={`use-cases-accounting-cloud-ledger-p-irp${idSuffix}`} href="/use-cases/accounting/cash-flow-forecasting/intelligent-resource-planning-ai-driven-cash-flow-forecasting-for-small-business" className="text-[#C83803] hover:underline">Intelligent
        Resource Planning</Link> guide covers how the ledger fits into planning.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Xero
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        <strong>Xero</strong> is a cloud ledger known for strong bank feeds and a large marketplace of
        connected apps. Every Xero plan includes <strong>unlimited users</strong>, which helps businesses that
        want their bookkeeper, accountant, and managers working in the same system. Its higher plan adds
        support for <strong>multiple currencies</strong>, which matters for South Florida importers and
        distributors who buy from suppliers in Latin America. Approval tools such as <Link id={`use-cases-accounting-cloud-ledger-approvalmax${idSuffix}`} href="/tools/accounting/accounts-payable/automated-approval-workflows/approvalmax" className="text-[#C83803] hover:underline">ApprovalMax</Link> connect
        directly to Xero.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Sage 50
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        <strong>Sage 50</strong> is desktop accounting software that runs on your own computers, with optional
        cloud connectivity for remote access. It suits businesses that want their data stored locally and need
        features such as <strong>inventory tracking</strong> and <strong>job costing</strong>. The tradeoff is
        a smaller set of direct connections to the cloud tools described in the rest of this guide, so a Sage
        50 business usually needs more careful integration planning.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What a Clean Ledger Gives You
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Whichever ledger you choose, the goal is the same. Bank feeds bring transactions in automatically.
        Rules categorize recurring items the same way every time. QuickBooks Online and Xero both let you <strong>lock
        a closed period</strong>, so nobody can quietly change last quarter’s numbers. A clean ledger turns
        your books into a source of truth that every other tool can trust.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="start-with-a-clean-cloud-ledger" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Start With a Clean Cloud Ledger
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="start-with-a-clean-cloud-ledger-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Start With a Clean Cloud Ledger
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
