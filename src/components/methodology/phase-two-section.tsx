import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PhaseTwoSection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What This Phase Does
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        This phase is a structured <GlossaryLink slug="data-quality">data quality</GlossaryLink> audit of your
        legacy ledgers and spreadsheets. We measure them for <strong>accuracy, completeness, consistency,
        timeliness, validity, and uniqueness</strong>. We then cleanse and deduplicate the records and
        design <strong>isolated relational entry points</strong> that check every record before it reaches an
        automated workflow.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Fear It Answers
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Your books are not perfect, and nobody’s are. The same vendor may be entered three different ways. One
        spreadsheet may make sense only to your controller, and one reconciliation may be “close enough.” Your
        real fear is that automation will read that mess and <strong>multiply it</strong>, copying one bad formula
        at machine speed into every invoice, forecast, and tax filing. You would find out only when <strong>the IRS
        or your auditor</strong> found it first.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How We Handle It
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        Automation does not fix bad data. It <strong>speeds it up</strong>. That is why no record moves until it
        passes inspection. We score your data against <strong>six measurable standards</strong> and show you every
        duplicate, gap, and conflict we find. Then we clean it, and <strong>your team confirms every
        correction</strong>.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next we build <strong>controlled entry points</strong>, which are narrow, validated doors where data is
        checked before any system acts on it. Bad data stops at the door instead of turning up in
        a <strong>compliance audit</strong> eighteen months later.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How You Know You’re Safe
      </h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>You receive a <strong>data health scorecard</strong> that covers all six standards.</li>
        <li>We <strong>log every correction</strong>, and your team approves each one.</li>
        <li><strong>Validation gates</strong> guard every automated entry point.</li>
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
                Phase 2: Data Quality Assessment &amp; Architecture
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
                Phase 2: Data Quality Assessment &amp; Architecture
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
