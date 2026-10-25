import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function StatusQuoSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Manual lead generation does not just eat up money, it burns through time, creates errors, and forces small
        teams to absorb risks that the system itself should handle. The costs show up in places you cannot see on a
        dashboard. Every manual fix, every delay in updating a list or a bid, adds up to lost leads, higher ad
        spend, and a team that spends more time on firefighting than on growth.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with labor. As you scale up, the number of decisions grows: more ads, more audiences, more data, more
        platforms. Each one needs to be checked, updated, and monitored. A business owner or a small team might
        spend hours every week pulling reports, updating spreadsheets, and resetting bids. When a campaign goes
        sideways over the weekend or after hours, you often do not even know until the money is already gone.
        Performance Max and Optmyzr break this cycle by automating routine monitoring, pausing bad placements, and
        reacting to performance changes in real time, no more waiting for the next login to catch a runaway budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        Delay is the next big cost. When you rely on people to push every change, there is always a lag between what
        is happening in the market and what your campaigns are doing. Competitor bid spikes, sudden drops in search
        volume, or a broken <GlossaryLink slug="landing-page" className="text-[#0B162A] hover:underline">landing
        page</GlossaryLink> can eat up your budget before you notice. Optmyzr monitors landing page status and
        competitor metrics, pausing ads or adjusting bids the moment something changes, not hours or days later.
        Performance Max shifts spend between channels as conversion signals change, keeping your budget working even
        when the market moves.</p>
      <p className="text-base text-white shadow-text pt-3">
        Errors multiply with scale. Manual data entry leads to missed exclusions, duplicate targeting, and outdated
        lists. If you do not catch that a buyer just made a purchase, you can keep spending to show them the same
        ad, wasting money and hurting your brand. Wrench tackles this by syncing with your existing tools, cleaning
        and updating lists dynamically, and setting up automatic exclusions for buyers who just converted. Madgicx
        does the same for audience targeting, ensuring that cold leads and warm prospects get the right message and
        that your own ads never compete against each other for the same person.</p>
      <p className="text-base text-white shadow-text pt-3">
        Design bottlenecks are a hidden cost most teams ignore. When a designer or marketer spends the day resizing
        images or building new ad variants by hand, that is time not spent on strategy or high-impact work. Marpipe
        ends this by generating and deploying hundreds of creative variations automatically, freeing up hours for
        work that actually moves the needle. It also runs clean, isolated tests to identify which creative elements
        work, so you are not guessing or wasting budget on the wrong combinations.</p>
      <p className="text-base text-white shadow-text pt-3">
        Data fragmentation is another silent drain. When your contact lists are stuck in disconnected CRMs or static
        spreadsheets, you cannot target efficiently or score leads based on real purchase probability. That means
        more spend on the wrong people and missed opportunities with the right ones. Wrench fixes this by connecting
        your data sources, scoring contacts, and segmenting audiences for precise targeting, no more guesswork or
        wasted <GlossaryLink slug="impressions" className="text-[#0B162A] hover:underline">impressions</GlossaryLink>.</p>
      <p className="text-base text-white shadow-text pt-3">
        Risk lands on the business owner and their team. When automation is missing, every error, every missed
        update, and every manual oversight is a direct hit to your bottom line. If you keep high bids active during
        a seasonal lull, your cost per lead spikes and your profit margin shrinks. If you fail to add <GlossaryLink slug="negative-keywords" className="text-[#0B162A] hover:underline">negative
        keywords</GlossaryLink> after a bad run, you keep paying for irrelevant traffic. Optmyzr builds regular
        audits and scheduled rule routines into the workflow, catching these problems before they become expensive.</p>
      <p className="text-base text-white shadow-text pt-3">
        The cost of the status quo is not just about the dollars you see leave your account, it is the opportunity
        cost of every lead you did not win, every hour spent on low-value tasks, and every risk that lands on your
        plate because the system is not built for the real world. In a small business, these costs are absorbed by
        the owner, the marketing lead, or the team member who becomes the default &quot;fixer&quot; whenever
        something breaks. Over time, the hidden costs become unsustainable. Automation and integration, through
        partners like Performance Max, Wrench, Optmyzr, Madgicx, and Marpipe, shift the burden from your people to
        the system, letting your team focus on growth instead of patching holes in a manual process.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-cost-of-manual-lead-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Lead Generation
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="the-real-cost-of-manual-lead-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Real Cost of Manual Lead Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
