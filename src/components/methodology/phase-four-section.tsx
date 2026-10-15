export default function PhaseFourSection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What This Phase Does
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        A staged rollout in which the automated system runs on an <strong>isolated test group</strong> in parallel
        with the existing process, with every output reconciled against the legacy system through a <strong>dual-system
        verification pipeline</strong> before cutover is approved.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Fear It Answers
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        The nightmare goes like this. Someone flips the switch Friday night. On Monday morning <strong>vendor
        connections are broken</strong>, <strong>invoices are scrambled</strong>, and <strong>deposits are
        missing</strong>. Payroll is due Wednesday. Nobody can explain what the system did over the weekend,
        because nobody can see inside it.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How We Handle It
      </h3>
      <p className="text-md text-white shadow-text pt-3">
        There is no big switch. We start with <strong>one workflow</strong> and <strong>one isolated test
        group</strong>. The new system runs <strong>side by side</strong> with your current process: the same
        transactions go through both systems, and every result is compared. When the two disagree, <strong>a human
        investigates</strong> before anything else moves.</p>
      <p className="text-md text-white shadow-text pt-3">
        Your old process stays live the whole time. Nothing cuts over until the numbers match and <strong>you
        approve it</strong>. The pilot measures real <strong>ROI</strong> against your Phase 1 baselines. You expand
        on evidence, not on faith.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How You Know You’re Safe
      </h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li><strong>Legacy process live</strong> throughout the entire pilot.</li>
        <li><strong>Line-by-line reconciliation</strong> of both systems’ outputs.</li>
        <li><strong>Cutover only on your written sign-off.</strong></li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="phase-4-pilot-strategy-and-safe-implementation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 4: Pilot Strategy &amp; Safe Implementation — No Friday-Night Switch Flips
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="phase-4-pilot-strategy-and-safe-implementation" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 4: Pilot Strategy &amp; Safe Implementation — No Friday-Night Switch Flips
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
