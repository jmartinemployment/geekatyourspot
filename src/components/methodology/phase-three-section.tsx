import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PhaseThreeSection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What This Phase Does
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        A requirements-weighted evaluation of candidate <strong><GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink></strong>, <strong><GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash
        flow forecasting</GlossaryLink></strong>, and <strong>sales tax nexus compliance</strong> platforms, scored
        against the Phase 1 rulebook, fit with your existing systems, and full <strong>total cost of
        ownership</strong> including setup, training, contract terms, and ongoing usage fees.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Fear It Answers
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        The <strong>expensive software paperweight</strong>. You’ve watched a peer sign a <strong>three-year
        contract</strong> after a slick demo. Six months later nobody logs in. The data is back in spreadsheets,
        and the invoices keep coming. Your fear isn’t the price tag. It’s being <strong>locked into</strong> something
        your team can’t run and you can’t leave.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How We Handle It
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        A demo shows the vendor’s best day. We judge software on <strong>your worst one</strong>. Every candidate is
        scored against your Phase 1 rulebook, not a vendor’s feature list. You see the <strong>full cost of
        ownership</strong>: licenses, setup, <strong>training hours</strong>, and <strong>usage fees</strong> that
        grow quietly with volume.</p>
      <p className="text-md text-white shadow-text pt-3">
        We read the contract before you sign it: <strong>renewal clauses</strong>, <strong>exit terms</strong>, and
        who owns your data when you leave. We favor tools that plug into what you already run. The right tool is
        the one your team will actually open on Monday.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How You Know You’re Safe
      </h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li><strong>Side-by-side scorecard</strong> against your own requirements.</li>
        <li><strong>Full cost of ownership</strong> before any signature.</li>
        <li><strong>Data export and exit path</strong> confirmed up front.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="phase-3-partner-tech-selection-and-integration" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 3: Partner Tech Selection &amp; Integration — Software Your Team Will Actually Run
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
              <h2 id="phase-3-partner-tech-selection-and-integration" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 3: Partner Tech Selection &amp; Integration — Software Your Team Will Actually Run
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
