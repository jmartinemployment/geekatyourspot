import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ’s automation logic is configured to enforce strict control over budget, targeting, and ad copy, all
        tuned to the realities of small business ad spend in South Florida. The platform’s own configuration covers
        keyword match rules, geofencing, <GlossaryLink slug="dynamic-creative-optimization" className="text-[#0B162A] hover:underline">dynamic
        creative optimization</GlossaryLink>, and unified lead tracking, each set up to prevent the most common ways
        micro-budgets get wasted. Geek @ Your Spot’s role is to set these rules to match your exact business
        objectives and market footprint, not just turn on generic automation.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ’s keyword management starts with machine learning rules that automatically drop or adjust
        broad-match keywords that drain budget on low-intent clicks. For a local plumber in Fort Lauderdale, for
        example, Geek @ Your Spot configures LocaliQ to suppress informational queries like &apos;how to fix a leaky
        pipe&apos; and focus spend on commercial-intent searches such as &apos;emergency plumber near me.&apos; The
        platform’s proprietary optimization engine is not just a set-and-forget tool: it continuously evaluates
        which search terms actually convert, shifting spend away from junk traffic in real time. This logic is set
        up in the LocaliQ dashboard, and Geek @ Your Spot ensures it is mapped to your true service area and
        business goals.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geofencing and radius targeting are core to LocaliQ’s automation, locking down exactly where your ads are
        shown. The platform allows configuration by zip code, city, or custom radius, so ads only appear to
        prospects within your actual driving or service zone. Geek @ Your Spot configures these perimeters up front
        and audits them as your business changes, so your limited daily budget is never spent on out-of-area clicks.
        For a Miami-Dade business, this means no more ad impressions in counties you do not serve.</p>
      <p className="text-base text-white shadow-text pt-3">
        Dynamic creative optimization is handled by LocaliQ’s own algorithms, which run ongoing tests on ad copy,
        images, and <GlossaryLink slug="call-to-action" className="text-[#0B162A] hover:underline">calls to action</GlossaryLink>.
        The platform automatically reallocates budget to the best-performing combinations, removing the need for
        manual A/B tests that most small teams cannot keep up with. Geek @ Your Spot tunes the creative rules to
        your brand voice and compliance needs, so the automation never pushes out off-brand or non-compliant
        messages. The system’s <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink> means underperforming ads are paused quickly, and high-performing variants get more
        exposure without waiting for a human to notice a trend.</p>
      <p className="text-base text-white shadow-text pt-3">
        Unified lead tracking is set up in LocaliQ through a single dashboard that pulls in call tracking, lead
        forms, and digital interactions from all connected channels. Geek @ Your Spot configures the tracking code
        and ensures it is correctly installed on your website and <GlossaryLink slug="landing-page" className="text-[#0B162A] hover:underline">landing
        pages</GlossaryLink>, so every phone call or form fill is attributed to the actual campaign and channel that
        drove it. This closes the loop between ad spend and real outcomes, letting you see not just which ad got a
        click, but which one produced a customer.</p>
      <p className="text-base text-white shadow-text pt-3">
        For clients with more complex environments, LocaliQ’s open API allows integration with external CRMs,
        analytics platforms, and reporting tools. Geek @ Your Spot manages these integrations, mapping LocaliQ’s
        data fields to your existing systems and ensuring data flows without manual re-entry or loss of attribution.
        This extension mechanism is optional, many small businesses use LocaliQ as a stand-alone platform, but when
        deeper integration is needed, the API supports it. The process includes setting up secure connections,
        configuring data sync schedules, and testing for accuracy before going live.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation rules in LocaliQ are not static. Geek @ Your Spot revisits them as market conditions shift or
        your business goals change. For example, if your service area expands or you add a new product line, the
        geofencing and keyword rules are updated to reflect the new reality. Continuous monitoring and adjustment
        are built into the engagement, so the automation always matches your current needs, not last quarter’s plan.</p>
      <p className="text-base text-white shadow-text pt-3">
        All configuration work is done inside LocaliQ’s own dashboard and settings panels. There is no need for
        custom scripting or external workflow builders. Where advanced integration is needed, the open API is used,
        but most clients get full value from the platform’s built-in automation and reporting. Geek @ Your Spot
        handles the initial configuration, ongoing rule adjustment, and any troubleshooting, so you do not have to
        become an expert in LocaliQ’s logic to see results.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ’s automation logic is built to minimize wasted spend and maximize lead quality for small teams. Geek
        @ Your Spot’s implementation ensures those rules are tailored to your exact market, goals, and operational
        limits. The result is a system that protects every dollar, adapts to change, and requires little manual
        intervention once live. For a twelve-person team with no in-house marketing staff, this means your campaigns
        stay optimized and your lead pipeline stays full, without the overhead of constant manual management.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="which-localiq-rules-and-automation-logic-get-configured-and-how-they-fit-the-clients-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which LocaliQ rules and automation logic get configured and how they fit the client’s environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="which-localiq-rules-and-automation-logic-get-configured-and-how-they-fit-the-clients-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Which LocaliQ rules and automation logic get configured and how they fit the client’s environment
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
