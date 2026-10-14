export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Launching Deel in a small business environment is not a long, drawn-out IT project. The platform is
        built for fast, low-risk deployment, especially in teams that need to move away from spreadsheets,
        manual payroll, or disconnected HR tools. What makes go-live faster is Deel’s pre-built integrations
        with accounting systems like QuickBooks, Xero, and NetSuite, as well as its templated setup for worker
        onboarding and compliance. These connections cut out the need for custom code or manual data transfers.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a typical South Florida business—say, a construction firm juggling both W-2 employees and 1099
        contractors—the rollout starts with data intake. That means exporting your existing payroll, worker, and
        contractor lists into Deel’s standard formats. The platform’s onboarding engine walks you through
        uploading employee and contractor details, mapping pay types, and setting up core compliance documents.
        Automated reminders prompt workers to complete personal, tax, and right-to-work documents online, so you
        don’t have to chase paperwork across email threads or filing cabinets.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next step is connecting Deel to your accounting software. This is not a custom integration project.
        With direct connectors to QuickBooks, Xero, and NetSuite, you can sync invoices, bills, and payroll data
        in a few clicks. All payment and payroll activity is mapped to the correct general ledger accounts, so
        your books stay accurate without manual entry. This is especially important for small businesses that
        can’t afford to spend hours reconciling payroll data or correcting coding mistakes after the fact.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the data is in and the integrations are live, Deel’s phased rollout model lets you start with a
        pilot group—maybe just your contractors, or a single business unit—before expanding to your full team.
        This staged approach means you can test the new workflow, catch any issues in setup, and get real
        feedback from your team without risking payroll delays for everyone. As you add more workers or expand
        to new locations, the same process repeats with templated compliance and onboarding steps.</p>
      <p className="text-md text-white shadow-text pt-3">
        Several things keep the timeline short. First, Deel’s compliance templates and automated document
        collection mean you don’t have to write new contracts or chase missing tax forms. Second, its built-in
        AI-powered classification tool flags potential misclassification risks up front, so you don’t find out
        about a problem after an audit. Third, the Compliance Hub monitors regulatory changes in real time and
        pushes alerts directly to your dashboard, so you can adjust your workflows as laws shift—no waiting for
        a quarterly review or a consultant’s memo.</p>
      <p className="text-md text-white shadow-text pt-3">
        During rollout, Geek @ Your Spot handles the configuration and mapping work: making sure your pay codes,
        deduction rules, and worker types are set up to match your business, and that integrations with existing
        systems are mapped to your chart of accounts. This is not a one-size-fits-all launch. The team works
        directly with your finance and HR leads to make sure every field, rule, and approval flow fits your
        workflow and local compliance needs. By the time you run your first payroll in Deel, the platform is
        already routing the right forms, automating tax filings, and flagging any outliers for review—no manual
        checks needed.</p>
      <p className="text-md text-white shadow-text pt-3">
        For a small South Florida business, this means you can move from spreadsheets and manual pay runs to a
        fully compliant, automated payroll and contractor management system in weeks, not months. There’s no
        downtime, no need to hire extra staff, and no risk of missing a payroll cycle during the transition. The
        phased rollout and templated setup are what keep the go-live process short and predictable.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-go-live-with-deel-and-how-the-rollout-actually-happens" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live with Deel and How the Rollout Actually Happens
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-shortens-go-live-with-deel-and-how-the-rollout-actually-happens" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Shortens Go-Live with Deel and How the Rollout Actually Happens
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
