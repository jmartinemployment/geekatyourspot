import Link from "next/link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        In South Florida, navigating the intricacies of&nbsp;tax
        compliance&nbsp;can feel like walking a tightrope. Businesses face a multitude of
        challenges, from managing sales tax across different jurisdictions to dealing with complex regulatory
        notices. One primary issue is the miscalculation of&nbsp;<Link id={`use-cases-accounting-complex-changing-laws-challenges-multi-state-sales-tax-nexus${idSuffix}`} href="/use-cases/accounting/tax-compliance-regulations/ai-multi-state-sales-tax" className="text-[#C83803] text-shadow-2xs text-shadow-white hover:underline">economic nexus</Link>&nbsp;thresholds. As businesses expand,
        particularly in e-commerce, it&#39;s easy to overlook when sales activities cross state lines,
        triggering new tax obligations. This oversight can lead to unexpected liabilities and potential audits.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another significant hurdle is the failure to account for local surtaxes. These hyper-local changes, such
        as county-level discretionary sales surtaxes, can be easily missed. When these are not accurately
        tracked, it results in incorrect tax calculations and filings. Businesses operating in multiple
        counties, like those in Miami-Dade, Broward, and Palm Beach, must juggle different tax rates and rules,
        making manual tracking not only cumbersome but prone to errors.</p>
      <p className="text-base text-white shadow-text pt-3">
        State registrations also present a problem. Businesses often attempt to register with state departments
        without fully understanding the local business tax structures required. This leads to incomplete or
        incorrect registrations, further complicating compliance. The process becomes a maze of paperwork and
        bureaucracy, which small businesses are often not equipped to handle efficiently.</p>
      <p className="text-base text-white shadow-text pt-3">
        Then there&#39;s the issue of handling tax notices. Many businesses let complex regulatory notices from
        out-of-state tax authorities sit unaddressed due to a lack of understanding or resources. These notices
        can quickly pile up, leading to compliance failures and penalties. The constant influx of notices
        requires a dedicated team to manage and resolve them, something many small businesses lack.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, flawed ledger mapping is a widespread problem. When transaction platforms are manually linked
        to accounting software like QuickBooks, it often results in reconciliation errors. These errors not only
        affect financial reporting but can also trigger audits if discrepancies are found during tax filings.
        The manual entry and reconciliation process is time-consuming and fraught with potential mistakes.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-real-problems-in-tax-compliance-today" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Problems in Tax Compliance Today
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-real-problems-in-tax-compliance-today-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Problems in Tax Compliance Today
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
