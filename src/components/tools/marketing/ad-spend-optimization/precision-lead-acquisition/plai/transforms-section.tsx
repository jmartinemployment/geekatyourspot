import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Plai removes the guesswork and the manual labor from ad spend optimization for small teams. It brings every
        campaign, across platforms like Facebook, Google, TikTok and LinkedIn, into a single dashboard. This means you
        see everything in one place and can act on what matters without logging into five different systems. The first
        thing most teams notice is hours returned to their week, reporting, budget checks and performance reviews all
        happen inside Plai, with no need to stitch together spreadsheets or chase down missing data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai automates tasks that would otherwise take a dedicated analyst. It sets up <GlossaryLink slug="conversion-tracking">conversion
        tracking</GlossaryLink> across platforms so you do not have to worry about missing pixels or broken analytics. If
        you have struggled to see which campaigns actually drive sales, Plai solves that by pulling performance data
        together and translating complex metrics into simple, actionable insights. You do not need to know what ROAS
        means to see which ads are making you money and which are not.</p>
      <p className="text-base text-white shadow-text pt-3">
        Budget allocation becomes automatic. Plai monitors every campaign in real time and shifts spend toward what is
        working. If one ad set starts outperforming, Plai moves more budget there without waiting for a weekly review.
        Underperforming ads get paused or cut back before they waste your budget. This means fewer late-night
        &ldquo;catch-up&rdquo; sessions and no more finding out days later that you have been fueling a campaign that
        never had a chance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Audience targeting is smarter, not broader. Plai uses historical data and proven small business results to
        recommend tightly defined audiences. This reduces wasted spend and increases the odds that your ads reach people
        who are actually interested in your offer. You do not have to build complex targeting rules from scratch, Plai
        recommends and applies them, so your campaigns start with the best chance of success.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative testing and reporting are built into the workflow. Plai lets you duplicate winning campaigns in minutes,
        not hours. You can test multiple ad variations at once, and Plai tracks which versions perform best. When
        creative fatigue sets in, Plai can refresh your ads automatically, so you do not have to monitor every detail.
        This keeps your campaigns fresh and your results steady, without constant manual oversight.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai also handles the routine but critical job of scheduling. It analyzes engagement data and peak hours to plan
        your posts and ads for when your audience is most active. This means your budget works harder, reaching people
        when they are most likely to respond, and you do not have to guess when to launch or update a campaign.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams managing multiple clients or locations, Plai keeps everything siloed and organized. Each workspace
        holds its own brand data, campaigns and analytics, so there is no risk of cross-contamination or confusion.
        Franchise brands can roll out approved templates and control messaging from headquarters, while local teams get
        the flexibility to customize for their market, all tracked in one place.</p>
      <p className="text-base text-white shadow-text pt-3">
        The practical result of all this is time and money saved. Teams spend less time on busy work and more time on
        strategy. Errors from manual data entry or missed updates drop sharply. Budget shifts happen in real time, so you
        get more from every dollar spent. And because everything is visible in one dashboard, you can answer client or
        management questions with confidence, without scrambling for numbers or explanations.</p>
      <blockquote cite="https://www.plai.io/post/how-can-white-label-marketing-tools-automate-campaigns-while-keeping-your-brand-front" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Because of this, it can be very easy to fall behind the strategic side of a project and end up working on busy
        work rather than strategy.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s impact is clearest when you look at what it removes from your week. No more logging into separate
        platforms to pull reports. No more guessing which days or audiences matter. No more waiting for a monthly review
        to find out you have been wasting budget. Plai&rsquo;s automation, analytics and unified dashboard mean you can
        see, decide and act in minutes, not days.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses in South Florida, this means you do not need a data scientist or a big agency budget to run
        smart, optimized campaigns. Plai handles the technical setup, the ongoing adjustments and the reporting, so your
        team can focus on growth. The old way, manual, slow, error-prone, gets replaced by a system that works at the
        pace your business needs, giving you back control and clarity over every ad dollar you spend.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-plai-removes-manual-work-from-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Plai removes manual work from Ad Spend Optimization
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-plai-removes-manual-work-from-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Plai removes manual work from Ad Spend Optimization
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
