import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ChallengesSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Small businesses in Miami face a hard truth with digital ads: when your monthly budget is under $500, the
        smallest mistake can wipe out your results for the week (<a id={`blog-marketing-budget-ad-copy-message-validation-challenges-source-localiq-com${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026). The real problem is not just that you are spending on ads, but that every platform is
        structured to burn through your budget with generic settings, broad targeting, and untested copy. You are
        not just paying for clicks; you are paying for every error the system is set up to let happen unless you
        intervene.</p>
      <p className="text-base text-white shadow-text pt-3">
        Manual Budget Ad Copy &amp; Message Validation is not just tedious; it is structurally stacked against you.
        The agency model does not work for local businesses at this scale because the retainer is higher than your
        ad spend. So you are left on your own to manage Google and Meta ad accounts, which are designed to run on
        autopilot unless you override them. But autopilot does not mean optimized, it means your ads are shown to
        the broadest, cheapest audience, not your local customer.</p>
      <p className="text-base text-white shadow-text pt-3">
        Every ad platform defaults to settings that favor their own revenue. <GlossaryLink slug="broad-match">Broad
        match</GlossaryLink> keywords, wide geo-targeting, and generic placements mean your $15 a day disappears to
        clicks from outside your service area, people searching for how-to guides instead of buying, or mobile users
        who will never convert (<a id={`blog-marketing-budget-ad-copy-message-validation-challenges-source-business-google-com${idSuffix}`} href="https://business.google.com/aunz/think/ai-excellence/epidemic-sound-ai-max-search/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Google</a>,
        as of Oct 24, 2026). It does not take many bad impressions to burn a week&apos;s budget. Worse, the
        platforms are not set up to stop and tell you when it happens, they simply spend until you notice the drop
        in your bank account.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you try to fix this by hand, you run into the next problem: the time and skill required to catch every
        setting that wastes money. Most small business owners are not ad technicians. Even if you log in daily,
        small tweaks to bidding or targeting often reset the platform’s learning, stalling your ad delivery. And if
        you leave it alone, you miss the moment when performance drops, so you end up paying for days of junk clicks
        or impressions before you can react.</p>
      <p className="text-base text-white shadow-text pt-3">
        There is also the issue of ad copy fatigue. Running the same headline for weeks means your local audience
        tunes you out. But most owners do not have the time or confidence to write, test, and rotate multiple
        versions, so your best-case scenario is a stagnant message that gets more expensive and less effective over
        time. If you try to manage this without automation, you are stuck either paying for a copywriter or gambling
        on untested headlines, neither of which is realistic on a $500 budget (<a id={`blog-marketing-budget-ad-copy-message-validation-challenges-source-localiq-com-2${idSuffix}`} href="https://localiq.com/blog/local-ppc/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">LocaliQ</a>,
        as of Oct 23, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        The bottom line is that manual validation of ad copy and message for micro budgets is not just inefficient,
        it is a losing game. You cannot outwork the platforms’ defaults, and you cannot afford the time or cost to
        fix every leak by hand. The result is predictable: Miami small businesses watch their budgets vanish to
        off-target clicks, stale creative, and ad platform settings that never had their interests in mind. Until
        you put automated guardrails in place, the only thing you can count on is that your ad dollars will keep
        leaking out to everyone but your next real customer.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="why-miami-small-businesses-keep-losing-money-on-manual-ad-copy-and-message-validation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Miami Small Businesses Keep Losing Money on Manual Ad Copy and Message Validation
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
              <h2 id="why-miami-small-businesses-keep-losing-money-on-manual-ad-copy-and-message-validation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Why Miami Small Businesses Keep Losing Money on Manual Ad Copy and Message Validation
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
