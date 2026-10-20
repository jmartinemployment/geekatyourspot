export default function FailurePointsSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Manual accounting rarely fails all at once. It fails at five predictable points, and each one makes
        the others worse. For each failure point below, we describe what sets it off, what it costs your team,
        and how it turns into a tax or audit problem.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        1. The Manual Friction Trap
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The trigger:</strong> Every receipt, bill, and invoice is typed by hand, first into a
        spreadsheet and then into the ledger. Volume rises with the season, and the stack never quite gets
        cleared.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The human cost:</strong> Your most careful employee spends hours on data entry instead of
        analysis. Typing the same number twice doubles the chance of a transposed digit, and fatigue makes
        errors more likely late in the day and late in the month. Turnover makes it worse, because every new
        hire has to learn your categories from scratch.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The audit risk:</strong> A keying error does not stay in one place. It flows into your sales
        tax return, your expense totals, and your income tax filings. If an auditor asks for the document
        behind an expense and it sits in a shoebox or an inbox, you cannot support the deduction, and the IRS
        can disallow it and add <strong>penalties and interest</strong>.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        2. The Delayed Visibility Crisis
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The trigger:</strong> The books close weeks after the month ends, so every decision rests on
        data that is <strong>thirty days old</strong> or more. Nobody can answer the simple question of how
        much cash will be available in two weeks.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The human cost:</strong> The owner fills the gap with guesses. You order inventory or hire
        seasonal staff before snowbird season based on a cash position that has already changed. You learn
        about the shortfall when a payment bounces or payroll runs tight, and the scramble that follows pulls
        everyone away from customers.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The audit risk:</strong> Tight cash tempts businesses to delay <strong>payroll tax
        deposits</strong>. The IRS failure to deposit penalty starts at <strong>2 percent</strong> for
        deposits one to five days late, rises to <strong>5 percent</strong> and then <strong>10
        percent</strong> as the delay grows, and reaches <strong>15 percent</strong> when the tax is still
        unpaid more than ten days after the first IRS notice. Withheld payroll taxes also carry the personal
        liability described above.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        3. The Overlooked Leak and Invisible Fraud
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The trigger:</strong> A vendor resends an invoice with a new number, and it gets paid twice.
        An email that looks like it came from a regular supplier asks you to update their bank details, and
        the next payment goes to a criminal. Manual review catches some of these, but only when the reviewer
        happens to remember the original.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The human cost:</strong> Duplicate payments are slow and awkward to recover, and money sent to
        a fraudster is often gone for good. The team loses hours tracing what happened, vendor relationships
        suffer, and trust inside the business takes a hit.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The audit risk:</strong> Every duplicate payment booked as an expense overstates your costs.
        Fraud losses that are recorded incorrectly distort the books as well. When an auditor finds these
        errors, you face adjustments to past returns, and your records lose credibility for everything else
        the auditor reviews.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        4. The Manual Approval Bottleneck
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The trigger:</strong> Invoices wait in an inbox or on a desk for the owner’s approval. The
        owner is on a job site, with a client, or traveling, and the queue keeps growing.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The human cost:</strong> Vendors get paid late, <strong>early payment discounts</strong> are
        lost, and <strong>late fees</strong> pile up. In a regional logistics network, a supplier who puts you
        on credit hold can stall deliveries across all three counties. Employees spend their time chasing
        signatures instead of doing their jobs.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The audit risk:</strong> Approvals given by text message or a quick verbal yes leave <strong>no
        audit trail</strong>. When an auditor or a lender asks who approved a payment and why, nobody can show
        it. Weak approval records are also exactly what fraudsters look for.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        5. The Broken Spreadsheet Dependency
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The trigger:</strong> The forecast, the budget, and sometimes the payroll calculations live in
        one complex workbook built by one person. A single overwritten cell or broken formula changes every
        number that depends on it, and nothing warns you.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The human cost:</strong> When the person who built the workbook leaves, nobody can maintain
        it. Copies get emailed around, and nobody knows which version is current. Rebuilding the model takes
        weeks at exactly the moment you need answers.</p>
      <p className="text-md text-white shadow-text pt-3">
        <strong>The audit risk:</strong> Wrong numbers feed your <strong>estimated tax payments</strong>, and
        underpaying them triggers an <strong>underpayment penalty</strong>. The same workbook often produces
        the reports you give your bank, so an error can put you out of compliance with a <strong>loan
        covenant</strong> without anyone noticing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-five-ways-manual-accounting-fails" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Five Ways Manual Accounting Fails
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
              <h2 id="the-five-ways-manual-accounting-fails-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Five Ways Manual Accounting Fails
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
