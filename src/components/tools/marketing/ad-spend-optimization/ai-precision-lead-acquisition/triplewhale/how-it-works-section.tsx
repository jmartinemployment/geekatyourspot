import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale gives small businesses a single, trusted source of truth for ad performance by combining
        server-level tracking, flexible attribution models, and real-time reporting. Its core is a proprietary pixel
        that captures first-party customer data directly from your site, then matches it to ad interactions and revenue
        events. This lets you see which ads actually drive sales, not just clicks or impressions, and stops you from
        wasting budget on campaigns that look good in platform dashboards but do nothing for your bottom line.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with the Triple Pixel. This is not a standard browser pixel that gets blocked or lost when
        users have privacy settings turned on. Instead, it runs server-side, so it can follow the full path from ad
        click to checkout, even when ad blockers are present. Triplewhale&rsquo;s own pages explain that this means you
        see the real source of each customer and purchase, not just what Google or Meta claims in their own
        dashboards.</p>
      <p className="text-base text-white shadow-text pt-3">
        After capturing this data, Triplewhale&rsquo;s engine deduplicates conversions. This is critical for small
        businesses that run ads on multiple platforms and often see Google and Meta both take credit for the same sale.
        Triplewhale&rsquo;s attribution system ensures that each order is only counted once, mapped to the channel that
        truly earned it. It does this through <GlossaryLink slug="marketing-attribution" className="text-[#0B162A] hover:underline">multi-touch
        attribution</GlossaryLink> (MTA), which divides credit among all the touchpoints a customer interacted with, and
        through custom rules that let you pick the model that best fits your business goals.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform supports a range of attribution models, including first-click, last-click, linear, time-decay, and
        data-driven methods. For example, Total Impact Attribution blends tracked digital touchpoints with post-purchase
        survey responses, so you can see not just which ad a customer clicked, but also what they say influenced their
        decision. This is especially useful for channels like YouTube or influencer campaigns where the impact may not
        show up in click data alone.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s reporting is built for action, not just analysis. The dashboard brings together all your
        channels, Facebook, Google, TikTok, email, SMS, and more, so you can see performance side by side. You can
        filter by campaign, creative, or audience, and the system updates click-based data in real time, so you&rsquo;re
        never working with yesterday&rsquo;s numbers. View-based data, like ad impressions, updates daily. This lets you
        spot underperformers or winners quickly and move budget without delay.</p>
      <p className="text-base text-white shadow-text pt-3">
        Creative performance is a key part of the workflow. Triplewhale&rsquo;s Moby Agents scan hundreds of ad
        variations across platforms and flag which creative assets are driving real results and which are dragging you
        down. This is not just about surface metrics like impressions or clicks. The platform ranks creative based on
        actual revenue and conversion data, so you can cut losing ads before they drain your budget. Teams like Dixxon
        Flannel Company have used this to cut weekly analysis from hours to minutes and get a 3x ROI on their ad spend
        (<a id={`tools-marketing-precision-lead-acquisition-triplewhale-how-it-works-source-blake-admire${idSuffix}`} href="https://www.triplewhale.com/expert/blake-admire" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">Triplewhale</a>,
        as of Oct 29, 2026).</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale also includes a suite of predictive analytics and AI-powered recommendations. The system&rsquo;s
        Compass module connects attribution, marketing mix modeling (MMM), and incrementality testing in one loop. This
        means you&rsquo;re not just seeing what happened, but getting guidance on where to allocate budget next for the
        highest return. The platform&rsquo;s AI agents surface step-by-step recommendations and explain what is driving
        changes in your results.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses that run lean teams, Triplewhale automates the most time-consuming parts of campaign
        optimization. Instead of exporting data to spreadsheets and trying to reconcile conflicting numbers, you get
        blended operating metrics, like cost per acquisition (CPA), return on ad spend (ROAS), and contribution margin,
        calculated for you and tied to real revenue. This lets you make budget decisions faster and with more
        confidence, without the risk of double-counting or missing key signals.</p>
      <p className="text-base text-white shadow-text pt-3">
        Triplewhale&rsquo;s approach is built for the reality of small-business marketing: multiple platforms, limited
        time, and the need for clear, actionable data. It does not just show you what happened, but tells you what to do
        next, whether that&rsquo;s pausing a tired ad, scaling a high-performer, or reallocating budget across channels.
        The result is fewer wasted dollars, more sales, and a marketing operation that runs on facts, not guesswork.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-triplewhales-measurement-system-actually-works-for-small-business-ad-spend" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Triplewhale&rsquo;s measurement system actually works for small-business ad spend
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
              <h2 id="how-triplewhales-measurement-system-actually-works-for-small-business-ad-spend-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Triplewhale&rsquo;s measurement system actually works for small-business ad spend
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
