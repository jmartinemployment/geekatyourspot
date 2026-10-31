import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DecisionsSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The first decisions in an Ad Spend Optimization project set the rules for everything that follows. If you get
        the objectives, data, and workflow wrong at the start, no amount of tuning later will fully fix it. You decide
        early what counts as a real conversion, where your data comes from, who is allowed to change budgets, and how
        often you review performance. These choices hard-wire your results and your risk. A rushed or unclear setup
        locks in blind spots that show up later as wasted spend or missed sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        The clearest example is the definition of what counts as a conversion. Many small businesses in South Florida
        start by trusting the default settings in Google Ads or Meta. If a click or a form fill is counted as a
        conversion, but only half of those become real customers, your optimization will steer budget toward ads that
        look good on paper but do not bring in money. Cometly solves this by connecting first-party server data and CRM
        events, so you can tie each conversion back to the sale it actually delivered. But if you make the wrong call
        up front, if you let the ad platforms set the rules, you will spend months optimizing for the wrong outcome
        before you catch the mistake.</p>
      <p className="text-base text-white shadow-text pt-3">
        You also lock in what data you trust. Triplewhale and LocaliQ both address a common failure: duplicate
        conversions across channels and missing revenue tracking. If you set up your dashboards to pull numbers
        straight from Google or Meta, you will get over-reported results and no way to see which channel truly brought
        in the customer. Triplewhale uses a server-level pixel to close this gap and deduplicate touchpoints, while
        LocaliQ brings together web, call, and form tracking so you can see the real path to a sale. If you do not
        connect your CRM or payment data at the start, you will not be able to fix attribution problems later without
        starting the whole process again.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget control is another one-way door. Bir is built for owners who have watched a campaign drain their account
        over a weekend or holiday. Its rules run every fifteen minutes, pausing overspending ads and scaling up only
        when historical data supports it. If you do not set up guardrails and time-window logic at the beginning, you
        may end up stuck with daily or weekly manual checks, or with automation that moves too fast and breaks the
        account&rsquo;s learning phase. Once budget rules are in place, changing them midstream risks re-entering
        expensive learning cycles and losing momentum.</p>
      <p className="text-base text-white shadow-text pt-3">
        Workflow and access control are often overlooked. With tools like Adzooma and Wask, you decide who can approve
        changes, which accounts are included in cross-channel dashboards, and how often alerts fire. If you do not map
        out who is responsible for reviewing and applying optimizations, you risk a setup where automated changes go
        live without oversight, or where no one acts on alerts until after the damage is done. Plai and Optmyzr, for
        example, both allow you to automate rule deployment and reporting, but the human workflow, who signs off, who
        gets the report, who acts, must be defined up front.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, the choice of what to optimize for, leads, sales, new customers, or lifetime value, locks in your
        optimization path. Some businesses make the mistake of optimizing for the cheapest <GlossaryLink slug="cost-per-lead">cost
        per lead</GlossaryLink>, only to find their pipeline full of low-quality or spam inquiries. Performance Max
        addresses this by using machine learning to recognize high-intent signals and shift budget to the channels
        that bring in actual buyers, not just clicks. If you fail to define your target outcome at the start, you end
        up with a system that rewards volume over value, and you will only realize the mistake after your results
        stall.</p>
      <p className="text-base text-white shadow-text pt-3">
        These decisions are not academic, they shape every step and every result that follows. A rushed or unfocused
        start locks in wasted spend, missed revenue, and manual cleanup that could have been avoided. The best Ad Spend
        Optimization projects start with a slow, careful setup: define your real objectives, connect the right data,
        set up guardrails, and map out who owns each step. The cost of skipping this work is not just money lost today,
        but a system that quietly underperforms for months or years to come.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-decisions-that-are-made-early-and-cannot-be-unmade-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Decisions That Are Made Early and Cannot Be Unmade
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
