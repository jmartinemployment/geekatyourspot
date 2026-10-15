import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PhaseOneSection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What This Phase Does
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        A discovery-stage requirements capture that maps <strong>operational variables</strong>, <strong>approval
        hierarchies</strong>, <strong>system constraints</strong>, and measurable <strong><GlossaryLink slug="kpi">KPI</GlossaryLink> baselines</strong> before
        any data access is granted or any platform is scoped.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Fear It Answers
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        You’ve seen this before. A consultant shows up with the platform already picked. Your workflow gets bent
        to fit their software. Your team spends six months fighting a tool <strong>built for a company ten times
        your size</strong>. Somewhere inside that <strong>black box</strong>, a process you used to control now
        runs on rules nobody in your building wrote.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How We Handle It
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        We don’t start with software. We start with <strong>your business</strong>. How cash actually moves. Who
        approves what. Where <strong>seasonal swings</strong> hit your margins: snowbird season, hurricane season,
        the quarterly <strong>IRS estimated-tax</strong> squeeze.</p>
      <p className="text-md text-white shadow-text pt-3">
        We map every variable in plain language, and <strong>you sign off on it</strong>. That map becomes
        the <strong>rulebook</strong> every later phase has to follow. Nothing gets automated unless you can point
        to it on that map. If a tool can’t follow the rulebook, it doesn’t get in.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How You Know You’re Safe
      </h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li><strong>Plain-language workflow map</strong> signed by you.</li>
        <li><strong>Measurable KPI baselines</strong> set on day one.</li>
        <li><strong>Zero data access</strong> during discovery.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="phase-1-business-objectives-alignment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 1: Business Objectives Alignment — Your Business Writes the Rules
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
              <h2 id="phase-1-business-objectives-alignment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 1: Business Objectives Alignment — Your Business Writes the Rules
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
