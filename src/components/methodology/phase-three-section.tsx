import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PhaseThreeSection() {
  const body = (
    <>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        What This Phase Does
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        This phase evaluates candidate <strong><GlossaryLink slug="erp" className="text-[#0B162A] hover:underline">ERP</GlossaryLink></strong>, <strong><GlossaryLink slug="cash-flow-forecasting" className="text-[#0B162A] hover:underline">cash
        flow forecasting</GlossaryLink></strong>, and <strong>sales tax nexus compliance</strong> platforms against
        weighted requirements. Each candidate is scored on how well it follows the Phase 1 rulebook, how well it
        fits your existing systems, and its full <strong>total cost of ownership</strong>. That cost includes
        setup, training, contract terms, and ongoing usage fees.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        The Fear It Answers
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        Every owner has heard about the <strong>expensive software paperweight</strong>. Perhaps you watched a peer
        sign a <strong>contract lasting three years</strong> after a slick demo. Six months later nobody logged in,
        the data was back in spreadsheets, and the invoices kept coming. Your fear is not the price tag. It is
        being <strong>locked into</strong> something your team cannot run and you cannot leave.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How We Handle It
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        A demo shows the vendor’s best day, so we judge software on <strong>your worst one</strong>. Every
        candidate is scored against your Phase 1 rulebook rather than a vendor’s feature list. You see the <strong>full
        cost of ownership</strong>, including licenses, setup, <strong>training hours</strong>, and the <strong>usage
        fees</strong> that grow quietly with volume.</p>
      <p className="text-base text-white shadow-text pt-3">
        We read the contract before you sign it, including the <strong>renewal clauses</strong>, the <strong>exit
        terms</strong>, and who owns your data when you leave. We favor tools that plug into what you already run,
        because the right tool is the one your team will actually open on Monday.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        How You Know You’re Safe
      </h3>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>You get a <strong>scorecard comparing each tool</strong> against your own requirements.</li>
        <li>You see the <strong>full cost of ownership</strong> before you sign anything.</li>
        <li>We confirm your <strong>data export and exit path</strong> up front.</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="phase-3-choose-the-right-ai-technologies" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 3: Choose the Right AI Technologies
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
              <h2 id="phase-3-choose-the-right-ai-technologies-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Phase 3: Choose the Right AI Technologies
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
