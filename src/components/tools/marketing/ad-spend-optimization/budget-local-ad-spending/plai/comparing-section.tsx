import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Plai stands out because it automates budget ad copy and message validation for small businesses in ways that
        manual work, generic ad platforms, and even most agency setups do not. Where others force you to juggle
        multiple tools or rely on default settings, Plai brings every piece, copywriting, targeting, validation, and
        optimization, under one roof, with AI doing the heavy lifting and clear dashboards showing what matters.
        This is not a surface-level claim: Plai’s workflow is built to protect small budgets from the kinds of waste
        that drain most do-it-yourself campaigns, and it is designed for owners who do not have the time or the
        technical background to manage complex analytics or daily tweaks.</p>
      <p className="text-base text-white shadow-text pt-3">
        The most common alternative for a South Florida small business is to run ads directly through Google or
        Meta’s own tools, using their built-in automation and targeting. This seems simple at first, but in
        practice, these platforms push broad targeting and default settings that are not tuned for a local business
        with a $10-a-day budget (<a id={`tools-marketing-budget-ad-copy-message-validation-plai-comparing-source-plai-io${idSuffix}`} href="https://www.plai.io/post/learn-how-to-increase-traffic-to-your-website" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Plai</a>,
        as of Oct 23, 2026). Owners who go this route often find their ads reaching people far outside their service
        area, or burning through money on broad-match keywords that never convert. Worse, both Google and Meta make
        it hard to see which messages are actually working, and their reporting is designed for ad professionals,
        not for someone running their own shop. Plai, by contrast, translates complex data into plain dashboards and
        sets up conversion tracking and pixel configuration automatically, so you are not flying blind or missing
        key performance signals. This is a direct answer to the problem of “blinding the ad platform” that plagues
        most DIY campaigns.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another route is to hire a traditional agency, but for a business spending under $500 a month, the
        management fees alone can double the cost of advertising (<a id={`tools-marketing-budget-ad-copy-message-validation-plai-comparing-source-plai-io-2${idSuffix}`} href="https://www.plai.io/features/saas-configurator" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Plai</a>,
        as of Oct 23, 2026). Agencies do bring expertise, but at this budget, they either automate everything with
        the same generic rules or leave your account on autopilot. Plai’s automation does not just copy agency
        playbooks; it actively narrows audience targeting based on proven small business data, and it deploys
        machine-learning schedules that move your spend to the days and channels that actually drive results. This
        is not a “set it and forget it” system, Plai’s AI runs continuous validation and optimization, shifting
        budgets and refreshing creative without waiting for a human to notice a dip in performance.</p>
      <p className="text-base text-white shadow-text pt-3">
        Some business owners try to bridge the gap by using a patchwork of low-cost <GlossaryLink slug="saas" className="text-[#0B162A] hover:underline">SaaS</GlossaryLink> tools,
        one for ad creation, another for reporting, a third for scheduling. This approach adds complexity rather
        than reducing it. Each tool has its own login, its own learning curve, and none of them share data or
        optimization logic. The result is more time lost to setup, more chances for error, and no clear way to see
        which message or audience is actually driving sales. Plai addresses this directly by centralizing every step
        in one platform, from creative production to campaign launch to real-time reporting. Every campaign, every
        test, every result is visible in one place, and the system is designed to keep all client and brand data
        siloed and organized, no cross-account confusion, no accidental overlap.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai also supports true cross-platform validation in a way most small-business tools do not. Instead of
        running separate tests for Facebook, Google, and TikTok, Plai lets you build, launch, and optimize across
        all major platforms from a single dashboard. This means you can see which ad copy works best on each channel
        and shift budget instantly to what is actually performing, without logging into multiple systems or waiting
        a week for a report. For a business owner, this is the difference between reacting to last month’s results
        and steering your spend in real time.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams with no technical background, Plai’s use of AI-generated ad copy, audience segmentation, and
        automated creative testing is what closes the gap. Instead of guessing at which message will land or which
        audience to target, Plai draws on historical success patterns and live campaign data to recommend and test
        tightly focused segments. The system’s validation logic is not a black box, it is visible, tunable, and
        explained in plain language so you can see why a decision was made, not just what the outcome was. This is
        especially important for small businesses that cannot afford to make the same mistake twice; every dollar
        saved on wasted clicks is a dollar that can go back into what works.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, Plai’s pricing is aligned with the realities of small business. The entry tier is accessible, and
        you are not locked into long-term contracts or hidden fees. The platform is built for scale, but it works at
        the micro-budget level without requiring a separate agency or consultant to manage it. This is a real
        advantage over competitors that either price out small teams or offer a stripped-down version that lacks the
        automation and validation logic needed to actually protect your spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        In short, Plai is not just another ad tool or a cheaper agency alternative. It is a purpose-built system for
        small teams that need to validate their budget ad copy and messaging with automation, clarity, and real
        control over every dollar spent. Where other approaches leave you exposed to platform defaults, hidden
        complexity, or a constant need for manual oversight, Plai gives you an AI-driven command center that does
        the hard work, shows you what is happening, and keeps your campaigns on track, no matter how small your
        budget or how local your market.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-plai-compares-to-other-approaches-small-businesses-consider" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Plai Compares to Other Approaches Small Businesses Consider
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
              <h2 id="how-plai-compares-to-other-approaches-small-businesses-consider-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Plai Compares to Other Approaches Small Businesses Consider
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
