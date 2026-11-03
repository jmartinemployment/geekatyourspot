import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Bir sits in a different class from both native ad platform automation and generic optimization tools. Its value
        comes from how it addresses the real pain points of small businesses in South Florida: fragmented data, lack of
        always-on oversight, and the need for fast, safe scaling. Unlike basic rules in Meta or Google Ads, Bir builds a
        system of custom automations that check campaign performance every fifteen minutes and act across all your
        connected accounts. This means a business is not left exposed to overnight cost spikes or slow manual
        adjustments.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most out-of-the-box ad platform tools give you limited triggers, pause an ad if <GlossaryLink slug="cost-per-click" className="text-[#0B162A] hover:underline">cost
        per click</GlossaryLink> jumps, or raise a budget when conversions rise, but they are built for the
        platform&rsquo;s own reporting, not your business&rsquo;s real-world goals. Bir is designed to connect your
        Google, Meta, TikTok, and other data sources, then apply logic that fits your actual business KPIs. For example,
        if your Google <GlossaryLink slug="cost-per-acquisition" className="text-[#0B162A] hover:underline">cost per
        acquisition</GlossaryLink> rises, Bir can shift spend to Meta or pause underperformers before they drain your
        budget. That cross-platform logic is not possible with native tools, and it is rare among third-party platforms
        at this price point.</p>
      <p className="text-base text-white shadow-text pt-3">
        Compared to category competitors like Madgicx or Adobe Mix Modeler, Bir&rsquo;s strength is in its real-time
        rule engine and its flexibility. Bir lets you set up nested conditions, custom metrics, and time windows, so
        automations do not just react to a blip, they respond to trends proven over days or weeks. This prevents the
        common failure where a tool overreacts to a single bad hour, pushing campaigns into unstable learning phases.
        Instead, Bir automates gradual budget changes, daily resets, and multi-level stop-loss rules that keep your
        spend safe and your top performers scaling.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir also stands out by enabling teams to apply and duplicate automation rules across many ad accounts from one
        place. For a small business with several brands, or an agency managing multiple clients, this means you do not
        have to rebuild your logic for each account. You set your guardrails once, and Bir enforces them everywhere,
        with custom schedules to match audience behavior. These are not just technical features, they translate directly
        into fewer errors, less wasted spend, and more time for your team to focus on creative or strategic work.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core difference is that Bir is not a black box. You can see, edit, and audit every rule. You control which
        metrics trigger actions, how aggressively to scale, and when to pause or resume campaigns. For teams that have
        struggled with platforms that make changes without explanation, Bir&rsquo;s transparency is a relief. Its AI
        audits your current setup, flags rules that are not firing or that conflict, and helps you clean up technical
        debt that slows down other tools.</p>
      <p className="text-base text-white shadow-text pt-3">
        Bir&rsquo;s integrations are another practical edge. It connects to Google Sheets, Google Analytics, and
        attribution tools like Hyros, AppsFlyer, Adjust, and Wicked Reports. This means you can use your own first-party
        data, not just what the ad platforms report, to drive your automations. For businesses that need to match ad
        performance to real sales outcomes, or that want to enforce spend caps and anomaly detection across all their
        channels, Bir&rsquo;s architecture is a fit that most native or entry-level tools cannot match.</p>
      <p className="text-base text-white shadow-text pt-3">
        In the end, Bir is not for businesses that want a set-and-forget tool with no customization. It is for teams
        that want to move from reactive, manual oversight to a system that checks and acts on their behalf, but with
        rules they can understand and trust. Where a native platform&rsquo;s automation is a safety net with holes, Bir
        is a guardrail system that runs around the clock, catching problems before they cost you. For small businesses
        looking to scale safely in a competitive market, that is the difference between steady growth and unpredictable
        losses.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-bir-fits-among-other-ad-spend-optimization-tools-and-approaches" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Bir fits among other ad spend optimization tools and approaches
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="where-bir-fits-among-other-ad-spend-optimization-tools-and-approaches-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Where Bir fits among other ad spend optimization tools and approaches
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
