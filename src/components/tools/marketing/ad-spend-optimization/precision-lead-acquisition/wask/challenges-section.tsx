import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual ad spend management drains time and wastes money for small businesses. Owners and teams spend hours each
        week pulling reports from Google and Meta, trying to answer the same questions over and over: Which ads are
        working? Where is the budget bleeding away? Why do results shift with no warning? Without a clear system,
        campaigns run unchecked for weeks, weak ads stay live, and budget leaks go unnoticed until the next crisis.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in Miami-Dade, Broward, and Palm Beach counties face the same core issues. They pay for
        Google and Meta ads but lack a reliable process to spot waste or act before it compounds. The data sits in
        separate dashboards. One person might check Google&rsquo;s numbers on Monday, Meta&rsquo;s on Friday, and never
        tie either one to sales. With no structured review, it&rsquo;s easy to miss a weak campaign that is quietly
        draining hundreds or thousands of dollars each month.</p>
      <p className="text-base text-white shadow-text pt-3">
        When ad platforms are reviewed on their own, spending decisions are made in isolation. A team might see
        Google&rsquo;s <GlossaryLink slug="cost-per-lead">cost-per-lead</GlossaryLink> rising and react by cutting its
        budget, not realizing Meta&rsquo;s campaigns are carrying the real load. Or, they might increase spend on an ad
        set that looks strong in Meta&rsquo;s dashboard, only to find later that those clicks never turned into sales.
        Fragmented reporting means the business is flying blind, and every decision is a guess rather than a step toward
        better results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Without automation, every adjustment depends on someone noticing a problem and deciding what to do. Owners and
        managers react to daily swings in spend or leads, making changes based on gut feel or the latest spike in cost.
        There&rsquo;s no guardrail, no agreed performance threshold that triggers action. This reactive approach means
        budgets are shifted for the wrong reasons, and high-performing campaigns can be starved just as easily as weak
        ones are overfunded.</p>
      <p className="text-base text-white shadow-text pt-3">
        The biggest cost is invisible. Weak ads keep running because nobody owns the job of checking creative
        performance or testing new ideas. Reports pile up, but nobody can explain what should happen next. The owner
        sees activity, not outcomes. The team spends more time explaining results than improving them. Instead of a
        process that turns data into action, the business is stuck in a loop of pulling numbers, arguing about what they
        mean, and hoping next month will be better.</p>
      <p className="text-base text-white shadow-text pt-3">
        This cycle is expensive in every sense. Hours are lost to manual checks and scattered reporting. Budgets are
        wasted on ads that should have been paused or changed weeks ago. Opportunities are missed as strong campaigns
        are left underfunded. Most of all, the owner never feels in control, every dollar spent is a risk, not an
        investment. Until the business brings all its ad data together, sets clear rules for action, and builds a weekly
        control process, these problems repeat.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-costs-to-keep-doing-this-by-hand-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it costs to keep doing this by hand
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
