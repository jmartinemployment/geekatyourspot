import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PhaseOneSection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What This Phase Does
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        This phase is a discovery engagement that captures your requirements before anyone touches your data. We
        map your <strong>operational variables</strong>, <strong>approval hierarchies</strong>, and <strong>system
        constraints</strong>, and we set measurable <strong><GlossaryLink slug="kpi">KPI</GlossaryLink> baselines</strong>.
        No data access is granted and no platform is scoped until that map exists.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Fear It Answers
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        You have seen this happen. A consultant arrives with the platform already picked, and your workflow gets
        bent to fit their software. Your team spends six months fighting a tool that was <strong>built for a
        company ten times your size</strong>. Somewhere inside that <strong>black box</strong>, a process you used
        to control now runs on rules nobody in your building wrote.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How We Handle It
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        We do not start with software. We start with <strong>your business</strong>: how cash actually moves, who
        approves what, and where <strong>seasonal swings</strong> hit your margins. For many South Florida
        businesses that means snowbird season, hurricane season, and the quarterly squeeze of <strong>IRS estimated
        taxes</strong>.</p>
      <p className="text-md text-white shadow-text pt-3">
        We write every variable down in plain language, and <strong>you sign off on it</strong>. That map becomes
        the <strong>rulebook</strong> that every later phase has to follow. Nothing gets automated unless you can
        point to it on the map, and a tool that cannot follow the rulebook does not get in.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How You Know You’re Safe
      </h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>You sign a <strong>workflow map written in plain language</strong>.</li>
        <li>We set <strong>measurable KPI baselines</strong> on the first day.</li>
        <li>We have <strong>no access to your data</strong> during discovery.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="phase-1-define-business-objectives" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 1: Define Business Objectives
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
              <h2 id="phase-1-define-business-objectives" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 1: Define Business Objectives
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
