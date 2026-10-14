import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function OverviewSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        A South Florida&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;founder lands a new batch of
        customers in Texas, New York, and California, another big month for the books. Then the spreadsheet
        check starts. Their single accountant spends hours trying to work out if the business has crossed a new
        sales tax threshold in any of those states. The rules are different everywhere: what counts as a taxable
        digital product in Texas is not in Florida, and California’s requirements change again next quarter.
        Each state has its own paperwork, deadlines, and audit risk. The team’s core software stack, built for
        speed and scale, offers no help for the tangle of local rules. With every sale, the risk of missing a
        critical compliance step grows.</p>
      <p className="text-md text-white shadow-text pt-3">
        This is how Multi-State Sales Tax Nexus hits small businesses. You can cross the $100,000 revenue or
        200-transaction mark in a state before you even notice it. Suddenly you need to register, collect, and
        remit sales tax there, but you lack the headcount and systems that a large enterprise would use. What
        started as a win, expansion into new states, turns into a scramble to keep up with thousands of shifting
        rules across more than 11,000 tax jurisdictions. Manual tracking means missed thresholds, late filings,
        and the risk of audit penalties that can wipe out months of profit.</p>
      <p className="text-md text-white shadow-text pt-3">
        Most small digital agencies,&nbsp;<GlossaryLink slug="saas">SaaS</GlossaryLink>&nbsp;firms, and online
        sellers in West Palm Beach, Broward, and Miami-Dade have felt this squeeze. They want to grow, but the
        overhead of tracking hyper-localized tax rules eats into every sale. The truth is, even the best team
        cannot keep up by hand. The cost is not just time, it is lost focus, stress, and a backlog of compliance
        risk that grows with every new state you sell into. That is why
        automated&nbsp;<GlossaryLink slug="tax-compliance">tax compliance</GlossaryLink>&nbsp;software now sits
        at the core of any business plan that crosses state lines. It is not about adding another tool to your
        stack. It is about regaining control, cutting manual work, and protecting your growth from the kind of
        tax risk that only gets more expensive the longer it sits.</p>
      <p className="text-md text-white shadow-text pt-3">
        If your business has ever watched sales roll in from a new state and wondered if you were about to
        trigger a new tax obligation, you are not alone. The stakes are real: operational paralysis, audit
        exposure, and stunted growth. The right approach gives you back the hours and the confidence to scale
        across borders, without letting compliance bottlenecks hold you back.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="overview" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Overview
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
