import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe suits small businesses in West Palm Beach, Broward, and Miami-Dade counties that need to scale
        digital lead generation but are blocked by manual creative production and campaign management. If your team
        spends more time resizing images, swapping copy, or rebuilding <GlossaryLink slug="ad-set">ad sets</GlossaryLink> than
        actually analyzing results or refining strategy, Marpipe is designed for you. The platform is best for
        companies spending $500 to $1,500 a month on ads, enough to need real process automation, but not enough to
        justify a dedicated in-house creative or data science team.</p>
      <p className="text-base text-white shadow-text pt-3">
        The ideal user is a business with a product catalog or a service list that can be structured into a feed. If
        you already run catalog ads on Meta, Google, or TikTok but find yourself stuck updating each creative by
        hand, Marpipe will save you hours every week. The more SKUs or service variants you have, the greater the
        benefit: Marpipe’s automation scales with your catalog, turning a single design into hundreds of variants
        and keeping them up to date as your inventory or offers change. This is especially valuable if you run
        frequent promotions, seasonal campaigns, or need to localize creative for different audiences.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe is also a strong fit for teams that want to move beyond basic A/B testing and start running true
        multivariate tests. If you have ever wondered whether it was the headline, the image, or the button color
        that caused a spike or drop in results, Marpipe’s element-level testing gives you that answer. This means
        you can stop guessing and start making data-driven creative decisions, even if you do not have a full
        analytics department.</p>
      <p className="text-base text-white shadow-text pt-3">
        However, Marpipe is not for everyone. If your business runs only a handful of static ads each month, has no
        product catalog, or does not need to update creative frequently, the platform’s automation may be more than
        you need. Marpipe’s value comes from removing the manual work of creative production and deployment at
        scale, if you are not feeling that pain, simpler tools or even native ad managers may be enough. The same
        goes for businesses whose data is not yet organized: if your catalog is incomplete, inconsistent, or not
        structured for automation, you will need to invest in data cleanup before Marpipe can deliver its full
        benefit.</p>
      <p className="text-base text-white shadow-text pt-3">
        Marpipe also assumes that you want to test and optimize creative systematically. If your approach is to set
        and forget campaigns, rarely refreshing ads or experimenting with new variants, you will not see the full
        return on what the platform can do. Its automation and reporting are built for teams who want to learn,
        iterate, and scale based on real data, not for those who are satisfied with a single winning ad run
        indefinitely.</p>
      <p className="text-base text-white shadow-text pt-3">
        For small businesses ready to move up from manual workflows, the next step is to assess your catalog data
        and creative needs. If your inventory is already in a spreadsheet or e-commerce platform, and you are
        running enough ad spend to justify automation, Marpipe can be deployed quickly with the right configuration
        support. Geek @ Your Spot specializes in mapping your data, setting up creative templates, and integrating
        Marpipe with your existing channels so you see results fast. If you are not sure whether your catalog or ad
        volume is a fit, a structured review of your current workflow and campaign history will make the answer
        clear.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Use Marpipe if you have a structured product or service catalog and need to test and update creative at
          scale.</li>
        <li>Skip Marpipe if you only run a few static ads or do not need frequent creative changes.</li>
        <li>Prepare your data, complete, consistent, and mapped to creative templates, before deploying Marpipe to get
          the most value.</li>
        <li>If you want to build a database of what works in your market, Marpipe’s reporting is built for ongoing
          learning and improvement.</li>
      </ul>
      <p className="text-base text-white shadow-text pt-3">
        The decision comes down to operational pain and ambition. If you are losing hours every week to manual ad
        production, or your cost per lead spikes when you try to scale, Marpipe is the tool that removes those
        limits. If you are not yet at that point, simpler solutions may suit you better for now.</p>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-marketing-marketing-automation-platforms-ai-content-generation-marpipe-xlink-blog${idSuffix}`} href="/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend" className="text-[#C83803] hover:underline">How South Florida Businesses Can Stop Wasting Ad Spend</Link> describes Marpipe as the fix for the creative bottleneck a small team cannot out-work: hundreds of variants built, tested and deployed across your feed from a single upload, with winners identified and losers paused before cost per lead balloons. It is also clear where the efficiency has a price: a brand that depends on unique, high-touch creative for every campaign may want automation for bulk production and hand-tuning for key assets, and 200 variants still need an owner who knows a win. Whether your catalog is complete and structured enough to feed it is the data quality phase of the four-phase assessment in our <Link id={`tools-marketing-marketing-automation-platforms-ai-content-generation-marpipe-xlink-pillar${idSuffix}`} href="/use-cases/marketing/marketing-automation-platforms/ai-content-generation" className="text-[#C83803] hover:underline">AI Content Generation</Link> guide.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`tools-marketing-marketing-automation-platforms-ai-content-generation-marpipe-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>What do you need written: blog posts, ads, social posts or marketing emails?</li>
        <li>Who writes it now?</li>
        <li>About how many pieces a month do you publish now, and what is your goal?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-should-use-marpipe-for-lead-generation-and-who-should-not" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who should use Marpipe for lead generation and who should not
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="who-should-use-marpipe-for-lead-generation-and-who-should-not-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who should use Marpipe for lead generation and who should not
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
