import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MethodologySection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Good tools installed badly create a new black box. That is why every engagement follows the same four
        phases, and each phase ends with something you can see and approve. The full method is on our <Link id={`use-cases-accounting-methodology-methodology${idSuffix}`} href="/methodology" className="text-[#0B162A] hover:underline">methodology
        page</Link>. Here is how it applies to accounting.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Phase 1: Business Objectives Alignment
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        We begin by mapping how your business actually runs, and we do it before we touch any data. We
        document how cash moves in and out, who approves what, which vendors and customers matter most, and
        where <strong>seasonal swings</strong> hit your margins. We record your obligations, including sales
        tax filing frequency, payroll schedules, reemployment tax, local business tax receipts, and any states
        where you may have nexus. We also identify the black boxes you already have, such as the spreadsheet
        only one person understands and the approvals that happen by text message. For a hospitality business,
        that can mean mapping how tips, deposits, and seasonal staff flow through payroll. For a logistics
        company, it can mean mapping how freight bills, fuel cards, and customer credit terms move through the
        month.</p>
      <p className="text-base text-white shadow-text pt-3">
        We set measurable <strong>baselines</strong>, such as the days it takes to close the books, the hours
        spent on data entry, and how long customers take to pay. The result is a written <strong>rulebook</strong> in
        plain language that you sign. It defines the approval thresholds for your conditional workflows, the
        reports you need each week, and the controls that must never be bypassed. Every later phase has to
        follow it.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Phase 2: Data Quality Assessment &amp; Architecture
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        Automation speeds up whatever data you give it, including the mistakes. In this phase we audit your
        ledger, vendor list, customer list, and spreadsheets for <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink>, measuring <strong>accuracy, completeness, consistency, timeliness, validity,
        and uniqueness</strong>. We find the vendor entered three different ways, the duplicate customer
        records, the uncategorized transactions, and the reconciliations that never quite balanced. We also
        trace the connections that already exist. Many small businesses have a point of sale system, a payment
        processor, and a bank feed all writing to the ledger, and the same sale sometimes posts twice. We
        follow each one so that every dollar enters the books exactly once.</p>
      <p className="text-base text-white shadow-text pt-3">
        We clean the records with your team confirming every correction, and we design the connections between
        your ledger and every new tool. Each connection has a defined direction, a defined owner, and <strong>validation
        checks</strong> that stop bad data at the door. You receive a data health scorecard and a log of every
        change we made.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Phase 3: Partner Tech Selection &amp; Integration
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        Only now do we choose software. Each candidate is scored against your rulebook, your existing systems,
        your budget, and your team’s comfort with technology. We compare the <strong>full cost of
        ownership</strong>, including licenses, setup, training, and usage fees that grow with volume. A
        landscaping company in Broward with twelve employees needs a very different stack from a Miami
        importer with suppliers in four countries.</p>
      <p className="text-base text-white shadow-text pt-3">
        We read contracts before you sign them, including renewal terms, exit terms, and who owns your data
        when you leave. We favor tools that connect to the ledger you already run, and we configure the
        conditional workflows from your rulebook inside each tool. You see a scorecard that compares every
        option before any decision is made. Integration follows the same order the data flows. The ledger
        comes first, then capture and approvals, then payments, then forecasting, and finally the tax and
        payroll connections. Each connection is tested with real transactions from your own history before
        anyone relies on it.</p>
      <h3 className="text-white pt-2 text-[5vw] sm:text-3xl lg:text-3xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
        Phase 4: Pilot Strategy &amp; Safe Implementation
      </h3>
      <p className="text-base text-white shadow-text pt-3">
        We never switch everything on at once. We start with one workflow, such as bill capture and approval,
        and run it alongside your current process. The same transactions go through both systems, and every
        result is reconciled. When the two disagree, a person investigates before anything else moves.</p>
      <p className="text-base text-white shadow-text pt-3">
        Your old process stays live until the numbers match and you approve the cutover in writing. The pilot
        measures results against the Phase 1 baselines, so you can see exactly what improved. Then we expand
        one workflow at a time, from payables to receivables, forecasting, sales tax, and payroll, with the
        same checks at every step. If a pilot fails a check, we fix the cause and run the check again rather
        than pushing ahead. Your team is trained during the pilot, while the old process is still there as a
        safety net, so nobody has to learn a new system under pressure.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-four-phase-methodology-behind-every-rollout" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Four Phase Methodology Behind Every Rollout
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-four-phase-methodology-behind-every-rollout-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Four Phase Methodology Behind Every Rollout
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
