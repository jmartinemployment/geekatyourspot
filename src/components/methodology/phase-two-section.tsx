import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PhaseTwoSection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What This Phase Does
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        A structured <GlossaryLink slug="data-quality">data quality</GlossaryLink> audit of legacy ledgers and
        spreadsheets for <strong>accuracy, completeness, consistency, timeliness, validity, and
        uniqueness</strong>, followed by cleansing, deduplication, and the design of <strong>isolated relational
        entry points</strong> that gate every record before it reaches an automated workflow.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Fear It Answers
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Your books aren’t perfect. Nobody’s are. The same vendor is entered three different ways. One spreadsheet
        only your controller understands. One reconciliation is “close enough.” Your real fear is that automation
        reads that mess and <strong>multiplies it</strong>: one bad formula copied at machine speed into every
        invoice, forecast, and tax filing. And you find out only when <strong>the IRS or your auditor</strong> finds
        it first.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How We Handle It
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Automation doesn’t fix bad data. It <strong>speeds it up</strong>. So no record moves until it passes
        inspection. We score your data against <strong>six measurable standards</strong> and show you every
        duplicate, gap, and conflict. Then we clean it, and <strong>your team confirms every
        correction</strong>.</p>
      <p className="text-md text-white shadow-text pt-3">
        Then we build <strong>controlled entry points</strong>: narrow, validated doors where data gets checked
        before any system acts on it. Bad data stops at the door, not in a <strong>compliance audit</strong> eighteen
        months later.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How You Know You’re Safe
      </h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li><strong>Six-point data health scorecard</strong> in your hands.</li>
        <li><strong>Every correction logged</strong> and approved by your team.</li>
        <li><strong>Validation gates</strong> on every automated entry point.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="phase-2-data-quality-assessment-and-architecture" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 2: Data Quality Assessment &amp; Architecture — Clean Before Fast
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="phase-2-data-quality-assessment-and-architecture" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 2: Data Quality Assessment &amp; Architecture — Clean Before Fast
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
