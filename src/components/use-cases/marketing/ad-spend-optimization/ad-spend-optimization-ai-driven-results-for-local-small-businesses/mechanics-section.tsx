import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Ad Spend Optimization replaces guesswork with clear, repeatable steps that connect every ad dollar to real
        business results. The process starts by revealing where your budget is leaking, then puts systems in place to
        fix what is broken and keep your best campaigns funded. Every step is measured, documented, and built for the
        real-world workflow of a small business with limited time and resources.</p>
      <p className="text-base text-white shadow-text pt-3">
        The method is straightforward. First, you define your business objectives and name the specific outcomes you
        care about, leads, calls, booked jobs, or sales. This is not a vague goal; you set a number, a cost per result,
        or a revenue target that fits your local market and your budget realities. For a small team in West Palm Beach
        or Miami-Dade, this might mean aiming for a set number of phone inquiries per week, or a target cost per booked
        service.</p>
      <p className="text-base text-white shadow-text pt-3">
        Next comes data quality assessment. Here, you look at the raw materials: the tracking pixels, the call tracking
        numbers, your CRM records, and the ad platforms themselves. This is where most small teams stall out, because
        data is often scattered or incomplete. Tools like Cometly and Triplewhale step in at this stage by installing
        server-level tracking pixels and deduplication logic. These platforms close the gap between what your ad
        dashboards claim and what really happened, no more double-counting leads or losing sales to browser
        restrictions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once you have a clean data baseline, the real optimization starts. The system identifies underperforming
        campaigns by comparing verified conversion events, not just clicks, but actual leads or sales, against spend.
        This is where Wask and LocaliQ prove their worth. Wask brings structure by connecting your ad accounts into a
        single review workflow, flagging campaigns that are burning money without bringing in real business.
        LocaliQ&rsquo;s engine focuses spend on high-intent local searches, locking down your targeting so that every
        dollar stays in your market and on the right customer.</p>
      <p className="text-base text-white shadow-text pt-3">
        With the waste identified, automated rules and budget controls are set up. Bir and Optmyzr deliver the
        guardrails that most small businesses lack: Bir runs safety checks around the clock, pausing campaigns if costs
        spike or if a channel&rsquo;s performance dips unexpectedly. Optmyzr applies automated scripts that drop toxic
        keywords and protect your bidding from sudden market shifts or site outages, reducing manual oversight and
        insulating your spend from late-night surprises.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process then shifts from triage to continuous improvement. Plai and Performance Max provide the command
        center for ongoing optimization: Plai automates the setup of <GlossaryLink slug="conversion-tracking" className="text-[#0B162A] hover:underline">conversion
        tracking</GlossaryLink> and translates complex metrics into plain dashboards, so non-technical owners can see
        which days, channels, or creative variations are actually achieving measurable results. Performance Max
        leverages built-in AI to shift budgets between Google, Meta, and local maps automatically, keeping your spend
        fluid and always focused on the highest-performing placements.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma pulls the whole operation into one cross-channel control panel. Juggling Google, Facebook, and
        Microsoft Ads in separate tabs is a recipe for fatigue and missed errors, Adzooma&rsquo;s dashboard lets you
        see, act, and fix across all platforms from one place. It also sends alerts the moment a campaign&rsquo;s
        performance drops, so you are not the last to know when something needs attention.</p>
      <p className="text-base text-white shadow-text pt-3">
        With the mechanics in place, the final step is routine measurement and reallocation. Every week, the system
        reviews what worked and what did not, pausing losing ads, boosting budgets on proven winners, and surfacing new
        insights to try. Over time, this process compounds: you cut more wasted spend, double down on the campaigns
        that bring in real customers, and build a feedback loop where every month&rsquo;s results are clearer than the
        last.</p>
      <p className="text-base text-white shadow-text pt-3">
        In sum, Ad Spend Optimization is not a one-time fix, it is a disciplined workflow that surfaces where your money
        is going, connects spend to real business results, and automates the decisions that keep your next ad dollar
        working harder than the last. For a small business, it is the difference between flying blind and scaling with
        confidence.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-ad-spend-optimization-works" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Ad Spend Optimization Works
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-ad-spend-optimization-works-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Ad Spend Optimization Works
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
