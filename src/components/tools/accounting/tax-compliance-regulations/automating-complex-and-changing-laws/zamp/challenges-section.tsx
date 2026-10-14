import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Small business owners in Miami-Dade, Broward, and West Palm Beach counties often grapple with the
        intricacies of&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;due to
        complex and changing laws. The primary issue is a lack of in-house expertise to handle the simultaneous
        demands of multi-state filings, tax calculations, and audit notices. This gap creates a significant risk
        of compliance failures, leading to financial penalties and operational disruptions.</p>
      <p className="text-md text-white shadow-text pt-3">
        Miscalculating thresholds is a common pitfall. Many businesses overlook when their sales activities
        cross economic nexus thresholds in other states, triggering tax obligations they weren&#39;t prepared
        for. This oversight can result in unexpected liabilities and penalties. Similarly, ignoring local
        surtaxes, such as county-level sales taxes, can lead to inaccurate tax filings, further complicating
        compliance.</p>
      <p className="text-md text-white shadow-text pt-3">
        State registrations present another challenge. Businesses attempting to self-register often miss
        critical steps in setting up local business tax structures, leading to incomplete or incorrect
        registrations. This misstep not only affects compliance but also complicates future interactions with
        tax authorities.</p>
      <p className="text-md text-white shadow-text pt-3">
        Handling tax notices is yet another area where businesses struggle. Complex regulatory notices from
        out-of-state tax authorities often go unaddressed due to a lack of understanding. This can escalate into
        serious legal and financial issues if not managed properly.</p>
      <p className="text-md text-white shadow-text pt-3">
        Moreover, flawed ledger mapping is a frequent issue. When businesses manually reconcile transactions
        from platforms like QuickBooks or Xero, errors can occur, leading to discrepancies in financial records.
        These errors not only affect compliance but also hinder accurate financial reporting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Zamp offers a solution to these challenges by providing an outsourced, enterprise-grade tax department
        for a predictable flat fee. This service turns a complex multi-state tax situation into a manageable
        process, allowing businesses to focus on growth rather than compliance headaches. By leveraging Zamp,
        businesses can stop acting like sales tax attorneys and instead rely on a dedicated team to handle
        registrations, filings, and notices effectively.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-cost-of-navigating-complex-and-changing-laws" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Navigating Complex and Changing Laws
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
              <h2 id="the-cost-of-navigating-complex-and-changing-laws" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Cost of Navigating Complex and Changing Laws
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
