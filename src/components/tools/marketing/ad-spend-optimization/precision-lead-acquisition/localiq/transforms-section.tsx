import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ takes the guesswork out of digital advertising for small businesses by automating the core jobs that
        waste your time and budget: tracking, optimizing, and reallocating spend across channels. Instead of juggling
        reports and making manual tweaks, you get a platform that connects every ad dollar directly to real results,
        saving you hours each week and cutting out the hidden costs of missed leads and wasted impressions.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform&rsquo;s AI-driven optimization engine does more than just automate bidding. It learns from your
        actual customer data, calls, website visits, CRM uploads, and micro-conversions, to fine-tune keywords, ad
        placements, and budgets in real time. This means that instead of paying for broad, low-intent clicks, your
        budget is automatically shifted toward high-intent local searches and audiences most likely to convert. Small
        spends are focused on commercial intent, not wasted on DIYers or out-of-area clicks.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ&rsquo;s real-time optimization works across all major search engines and social platforms, so you
        never have to worry about missing opportunities or letting underperforming ads run unchecked. The system
        pre-tests keyword bids by audience before publishing, cutting down learning costs and speeding up the time to
        real results. If a campaign or ad set is not performing, the platform reallocates spend instantly, moving your
        budget to where it will drive the most qualified leads. You do not need to pause, review, and relaunch,
        LocaliQ does it for you, every hour of every day.</p>
      <blockquote cite="https://localiq.com/products/search-ads/?itm_source=localiq&amp;itm_medium=product_overview" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        LocaliQ has the power to optimize your budget in real-time for maximum performance across all top search
        engines.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Unified reporting is another area where LocaliQ removes manual work. Instead of pulling separate reports from
        Google, Meta, and your website, you get a single dashboard that shows every lead, call, and conversion, mapped
        back to the campaign and channel that drove it. This lets you see exactly which ads bring in paying customers,
        not just clicks or impressions. You can follow the path from ad view to phone call or form fill, making it
        easy to spot what works and cut what does not.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead management is built in. LocaliQ captures every inbound inquiry, whether it starts as a web form, a text,
        or a call, and tracks it in one place. No more spreadsheets or missed follow-ups. The platform&rsquo;s
        AI-powered lead management tools qualify, summarize, and prioritize leads so your team can focus on the
        hottest opportunities first. Automated email messaging and SMS responses keep prospects engaged, even after
        hours, so you never lose a lead because you could not respond fast enough.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that rely on local customers, LocaliQ&rsquo;s geofencing and smart-radius targeting lock down
        your ad footprint to your true service area. This stops your budget from leaking into out-of-town clicks and
        ensures your ads are seen only by people who can actually become customers. If your business serves
        Miami-Dade, Broward, or Palm Beach, your ads stay inside those boundaries, no more paying for leads an hour
        away.</p>
      <p className="text-base text-white shadow-text pt-3">
        Social media and search ads are managed together, with automated budget optimization that shifts spend
        between channels and campaigns based on live performance. You do not have to watch for underperforming banners
        or stale creative. The platform&rsquo;s algorithms test variations and push micro-budgets toward the
        top-performing combinations, so your ads stay fresh and effective without constant manual intervention.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting on <GlossaryLink slug="return-on-ad-spend">return on ad spend</GlossaryLink> (ROAS) is built in,
        especially when you connect your CRM. This lets you see not just which ads get clicks, but which ones drive
        revenue. You can track performance by location if you have more than one, and focus your budget where it
        delivers the best return. Integration with systems like HubSpot, Liine, ServiceTitan, and Yardi means your
        marketing insights live in one place, making it easy to connect spend to sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        LocaliQ&rsquo;s lead management and reporting tools are accessible 24/7, so you can check results, respond to
        leads, and adjust your strategy whenever you need, no more waiting for monthly reports or trying to piece
        together what happened last week. With open API support, the platform can connect to other systems you already
        use, so data flows smoothly and you avoid double entry or missed information.</p>
      <p className="text-base text-white shadow-text pt-3">
        The result is a platform that gives you back the time you would have spent on manual reporting, bid
        adjustments, and chasing lost leads. You get more qualified leads for your budget, clear proof of what works,
        and the confidence to invest in campaigns that actually drive growth. Instead of hiring more staff or paying
        for expensive agency retainers, you let LocaliQ handle the heavy lifting, so your team can focus on serving
        customers and growing your business.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-localiq-actually-does-for-ad-spend-optimization" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What LocaliQ actually does for Ad Spend Optimization
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="what-localiq-actually-does-for-ad-spend-optimization-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What LocaliQ actually does for Ad Spend Optimization
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
