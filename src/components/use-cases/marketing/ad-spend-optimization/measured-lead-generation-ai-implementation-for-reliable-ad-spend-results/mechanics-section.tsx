import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Measured Lead Generation replaces guesswork and manual fixes with a staged, automated system that steps up
        your ad budget only when the data supports it, kills losing ads before they drain your spend, and builds
        more creative combinations than a human team could manage. Each phase builds on the last, and the system
        works because it automates the mechanics that usually break as your budget grows. Here is how the process
        works, end to end, for a South Florida small business spending between $500 and $1,500 a month.</p>
      <ol className="list-decimal list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Business objectives alignment comes first. The process starts with a one-on-one consult to define what a win
          looks like for you: the leads you want, the cost you can live with, and the sales pipeline you need. This is
          not a formality, if you cannot name the goal, the system cannot optimize for it. We map your current
          numbers, your market, your <GlossaryLink slug="customer-journey" className="text-[#0B162A] hover:underline">customer
          journey</GlossaryLink>, and the bottlenecks that stop you from getting more qualified leads for your budget.</li>
        <li>Next is a <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data quality</GlossaryLink> assessment.
          This step goes deeper than just exporting your CRM. We scan your lead lists, ad accounts, and website
          tracking for gaps, errors, and outdated formatting. Wrench comes in here, its AI cleans up your contact
          data, fixes broken formatting, and scores every lead for conversion probability, so your targeting is
          actually precise. This assessment surfaces the hidden issues: leads who already bought, contacts who should
          be excluded, and the missing fields that kill lookalike modeling. If you skip this, you end up paying to
          show ads to the wrong people.</li>
        <li>We then select and architect the right stack of automation tools. This is not a one-size-fits-all setup.
          Optmyzr loads non-developer automation scripts into your existing Google and Microsoft ad accounts, so you
          can pause wasteful keywords, defend against sudden competitor bid spikes, and keep your ads showing only
          when the landing page is live. Madgicx maps your full-funnel targeting: it divides cold prospects from warm
          leads and past buyers, automatically excluding people who have already converted, and dynamically shifting
          bids to match their value. Performance Max handles the real-time budget reallocation, moving your spend
          between Google, Meta, and maps based on what is working, not what you set last week. Marpipe takes your base <GlossaryLink slug="creative-assets" className="text-[#0B162A] hover:underline">creative
          assets</GlossaryLink> and generates hundreds of new combinations, then tests them live, killing off the
          losers and scaling up the winners without waiting for designer input.</li>
        <li>Pilot implementation is where the system goes from plan to production. We roll out the automation in a
          sandboxed environment, using your real data but holding back from full launch. Every rule, every script, and
          every creative test is validated with smoke tests, no budget is wasted on an unproven workflow. Optmyzr’s
          scripts watch for errors and flag them before they cost you money. Wrench and Madgicx run live segmentation
          and exclusion routines on a subset of your list, so you can see if targeting is accurate. Marpipe’s
          multivariate creative tests run in controlled batches, so you do not flood your audience with unvetted ads.</li>
        <li>Once validated, we scale up. The automation system steps up your daily ad budget in precise, small
          increments when the data supports it, never in big jumps that break the algorithm’s learning window. Losing
          creative is instantly paused, and new variants are promoted as soon as they prove out. Audience segments are
          refreshed in real time, so you do not waste spend on people who have already converted or who are now out of
          market. This ongoing cycle keeps your cost per lead stable, even as your volume grows, because the system is
          always learning and always reacting before manual review would catch a problem.</li>
      </ol>
      <p className="text-base text-white shadow-text pt-3">
        A real example: If you run a plumbing business in Miami and want to double your monthly leads without
        pushing your cost per lead above $45, the system first audits your current Google Ads and Facebook campaigns
        (<a id={`use-cases-marketing-measured-lead-generation-mechanics-source-wrench-ai${idSuffix}`} href="https://wrench.ai/products/digital-campaign-agent" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Wrench</a>,
        as of Oct 24, 2026). Wrench finds that 17% of your contact list is past buyers who should be excluded from
        most campaigns (<a id={`use-cases-marketing-measured-lead-generation-mechanics-source-wrench-ai-2${idSuffix}`} href="https://wrench.ai/products/sneak-peek-of-the-wrench.ai-platform" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Wrench</a>,
        as of Oct 24, 2026). Optmyzr’s scripts catch that your landing page is down every Sunday, pausing ads
        automatically to prevent wasted spend. Madgicx segments your audience so that only people who have requested
        a quote but not yet booked get retargeted. Marpipe generates 80 creative variants from your two main service
        photos and five headlines, then runs them in test batches to find which combination gets the best response
        in Little Havana versus Boca Raton.</p>
      <p className="text-base text-white shadow-text pt-3">
        The system is not just a collection of tools. It is a coordinated, staged process that keeps your budget
        safe, your creative fresh, and your targeting sharp as you scale up. Each step is built to eliminate the
        bottlenecks that manual lead generation cannot solve, so your cost per lead stays low and your growth does
        not stall the minute you try to expand.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-measured-lead-generation-actually-works" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Measured Lead Generation Actually Works
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
              <h2 id="how-measured-lead-generation-actually-works-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Measured Lead Generation Actually Works
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
