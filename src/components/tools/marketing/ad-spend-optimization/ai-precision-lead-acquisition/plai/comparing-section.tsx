import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ComparingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Plai stands apart from traditional ad management and other AI-driven tools by combining cross-platform
        automation, real-time optimization, and simple reporting in one place. For small businesses in Miami-Dade,
        Broward, and Palm Beach counties, this means less time switching tools and more time seeing which ads drive
        results. Plai&rsquo;s structure and automation go well beyond what manual processes or basic rules-based
        platforms deliver.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most teams considering Plai are also looking at two other approaches: doing everything by hand across each ad
        platform, or using a collection of single-channel automation tools. Manual management means logging into
        Facebook, Google, TikTok, and more, then pulling separate reports, adjusting budgets, and trying to spot
        patterns. This approach eats up hours and makes it easy to miss trends, especially when each platform shows
        different data and uses its own rules for targeting and reporting. Even with a disciplined workflow, a small
        team&rsquo;s capacity is the ceiling, there is no way to scale up campaigns or client accounts without adding
        headcount.</p>
      <p className="text-base text-white shadow-text pt-3">
        Single-channel automation tools, like those that only work with Google Ads or Meta, can help with routine tasks
        or bid adjustments, but they do not solve the core problem of fragmented data and workflow. These tools may
        automate some optimizations within their own walls, but they do not unify cross-platform reporting or move budget
        between platforms based on live results. You end up with more dashboards, not fewer, and still need to interpret
        results and make the final calls yourself. The risk is that you keep running siloed campaigns, miss the full
        picture, and leave money on the table when one channel outperforms another.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s main difference is in its unified dashboard and automation engine. It brings Meta, Google, TikTok,
        LinkedIn, and other major channels together, so you see all campaigns, budgets, and performance metrics at a
        glance. The platform&rsquo;s AI actively monitors every campaign and reallocates spend in real time, shifting
        dollars from underperforming ads to those that are working, across platforms, not just within one. This is not
        just a reporting layer; it is an execution layer that takes action based on live data. When a campaign trends up
        or down, Plai responds immediately, rather than waiting for a weekly or monthly review.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams with limited analytics skills or time, Plai&rsquo;s visual dashboards and automated reporting are a
        relief. The platform translates complex metrics like ROAS (<GlossaryLink slug="return-on-ad-spend" className="text-[#0B162A] hover:underline">return
        on ad spend</GlossaryLink>) and <GlossaryLink slug="impression-share" className="text-[#0B162A] hover:underline">impression
        share</GlossaryLink> into simple, actionable visuals. You do not need to be a data scientist to see where your
        money is going or why a campaign is underperforming. Plai&rsquo;s reporting is not a bolt-on, it is built into
        the workflow, updating as soon as new data comes in, and making it easy for non-technical owners to track
        results.</p>
      <p className="text-base text-white shadow-text pt-3">
        Other platforms may offer some form of AI optimization, but often require you to set up custom scripts, manage
        integrations, and keep an eye on each rule. Plai&rsquo;s automation is built for the realities of small teams: it
        sets up tracking pixels without code, recommends audience targets based on proven small business results, and
        uses historical trends to optimize bidding schedules around your highest-value days. The system is designed so
        that you do not need to know the technical details, just what is working and what needs attention.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration is another area where Plai stands out. It supports major ad channels and plugs into tools like Stripe
        and GoHighLevel, so billing, reporting, and campaign management happen in the same environment. Competitors that
        lack these integrations force you to keep juggling logins, export data, or patch together workflows with
        spreadsheets. Plai&rsquo;s approach is to make everything accessible from one place, reducing the risk of errors
        and missed updates.</p>
      <p className="text-base text-white shadow-text pt-3">
        For franchises or businesses with multiple locations, Plai&rsquo;s structure allows for both centralized control
        and local flexibility. Headquarters can set brand standards and templates, while local teams launch campaigns
        without needing deep marketing knowledge. This is not just a time-saver, it protects brand consistency and lets
        local managers act fast, all while HQ keeps full visibility. Most other tools either force a one-size-fits-all
        setup or require manual oversight for every location, which does not scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        The main limitation of Plai, compared to some enterprise platforms, is that it is not built for highly custom,
        deep-dive analytics or for teams with in-house data science resources who want to design every optimization rule
        themselves. Plai is about making advanced optimization accessible and actionable for small teams without
        technical overhead. If you need granular, custom modeling or want to run experiments outside the major channels
        Plai supports, you may find its structure more streamlined than flexible. For most small business use cases,
        though, this is a strength, it keeps the platform simple, fast, and focused on outcomes, not on complexity for
        its own sake.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Plai&rsquo;s value is in removing the fragmentation and manual labor that slow down small teams,
        especially those without deep analytics skills. It is not just another reporting tool or a single-channel
        automation script. It is a full command center for digital ad spend, designed to save time, cut errors, and let
        you see and act on what really drives customer acquisition. For a small business in South Florida, that means
        more sales with less stress, and a marketing operation that scales without adding staff.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-plai-compares-to-other-ad-spend-optimization-approaches-for-small-businesses" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Plai compares to other ad spend optimization approaches for small businesses
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
              <h2 id="how-plai-compares-to-other-ad-spend-optimization-approaches-for-small-businesses-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Plai compares to other ad spend optimization approaches for small businesses
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
