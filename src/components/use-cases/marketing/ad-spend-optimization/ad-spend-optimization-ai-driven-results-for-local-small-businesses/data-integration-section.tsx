import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataIntegrationSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A working ad spend optimization system lives or dies on the data it can actually access and connect. You need a
        continuous feed of clean, detailed conversion events, down to the keyword, creative, and channel, that ties
        each click or call to the actual revenue it produced. Any gap, delay, or mismatch in this data means the
        optimization engine is guessing, not allocating with confidence.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most small businesses in South Florida start out with data scattered across ad platforms, CRM systems, call
        tracking tools, and sales software. The first practical step is mapping out every touchpoint where a lead or
        sale can happen, online forms, tracked phone numbers, web chat, POS systems, and making sure each one feeds
        directly into a single, unified record. This is not a one-time export. The system must update in real time (or
        as close as possible) to catch shifts in performance before wasted spend piles up.</p>
      <p className="text-base text-white shadow-text pt-3">
        The backbone of this process is a robust integration layer. Cometly answers the specific problem of unreliable
        conversion data by installing a server-level tracking pixel that verifies every conversion, even when
        browser-based tracking fails. This lets you see the exact ad, creative, and source that drove a real sale or
        qualified lead, closing the loop between ad spend and revenue. Triplewhale takes this further by deduplicating
        conversions across platforms, so you are never double-counting leads that both Google and Meta claim credit
        for. It also blends operating metrics automatically, so you know your true <GlossaryLink slug="customer-acquisition-cost">acquisition
        cost</GlossaryLink> and can spot wasted budget before it burns through your month.</p>
      <p className="text-base text-white shadow-text pt-3">
        For local businesses, data quality is not just about accuracy, it is about context. LocaliQ solves for the
        spread of leads across multiple channels (calls, forms, chats) by unifying every touchpoint into a central
        dashboard. This is critical if you want to know whether your spend on social ads is driving phone calls, or if
        that $15-a-day Google campaign is just attracting out-of-town clicks (<a id={`use-cases-marketing-precision-lead-acquisition-data-integration-source-cometly-com${idSuffix}`} href="https://www.cometly.com/post/attribution-for-multiple-ad-accounts" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Cometly</a>,
        as of Oct 29, 2026). LocaliQ&rsquo;s geofencing and smart-radius targeting keep your spend focused strictly on
        your real service area, while its call and form tracking ensures you know which channel produced each
        inquiry.</p>
      <p className="text-base text-white shadow-text pt-3">
        The technical challenge is making all of these data streams talk to each other. Plai steps in for businesses
        that lack in-house analytics skill, automating the setup of conversion pixels and dashboard connections across
        platforms. No code or scripting needed. This ensures you are not flying blind on any channel, and that your
        optimization routines always use current, reliable numbers. Wask then connects all your ad accounts into a
        single review workflow, so you spot waste or opportunity across Google, Meta, and other networks from one
        place, not a dozen disconnected tabs.</p>
      <p className="text-base text-white shadow-text pt-3">
        But data alone does not make optimization possible, it must be actionable. Optmyzr addresses the problem of
        manual keyword and bid management by deploying automated scripts that not only pause underperforming keywords,
        but also monitor for issues like broken landing pages or competitor bid spikes. This means the system does not
        wait for a human to spot a problem. Bir raises the bar with rules that check your campaigns every 15 minutes,
        instantly pausing outliers and scaling up winners before you lose a day&rsquo;s worth of budget (<a id={`use-cases-marketing-precision-lead-acquisition-data-integration-source-bir-ch${idSuffix}`} href="https://bir.ch/case-studies/nothink" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Bir</a>,
        as of Oct 25, 2026). Its cross-channel logic can move spend between platforms based on real-time performance,
        not just static rules.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, for teams managing more than one account or channel, Adzooma unifies all reporting and optimization
        into a single dashboard. This is what keeps small businesses from &ldquo;forgetting&rdquo; about a secondary ad
        channel and letting it quietly burn money unchecked. Adzooma&rsquo;s system scans for outdated creative, budget
        mismatches, or partner network waste, and serves up one-click fixes. Performance Max, meanwhile, ensures that
        micro-budgets are shifted between local Google, Meta, and maps listings as live conversion signals shift, so
        you are never stuck with a fixed spend while the real demand moves elsewhere.</p>
      <p className="text-base text-white shadow-text pt-3">
        What does this look like in a real rollout? A South Florida plumbing company, for example, might connect its
        Google Ads, Meta Ads, call tracking, and CRM to Wask for unified reporting. It uses Triplewhale and Cometly to
        deduplicate conversions and trace every sale to its source. Plai automates the tracking setup, Bir watches for
        spikes and stops runaway spend, and Optmyzr and Adzooma automate the repetitive fixes. LocaliQ&rsquo;s
        smart-radius locks down the targeting to the company&rsquo;s real service area. The result is one system where
        every dollar spent is matched to a real lead or sale, and every optimization decision is backed by live
        business data, not guesses, not dashboard averages.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-data-and-the-integration-a-real-environment-has-to-supply" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data and the Integration a Real Environment Has to Supply
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
              <h2 id="the-data-and-the-integration-a-real-environment-has-to-supply-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Data and the Integration a Real Environment Has to Supply
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
