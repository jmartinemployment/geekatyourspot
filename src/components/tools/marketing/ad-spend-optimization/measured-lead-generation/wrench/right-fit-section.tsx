import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wrench is best suited for small businesses in West Palm Beach, Broward, and Miami-Dade counties that are
        spending between $500 and $1,500 a month on digital advertising and have outgrown manual lead generation and
        campaign management. These businesses typically have enough data in their CRM or marketing systems to
        benefit from automated segmentation, predictive scoring, and creative optimization, but lack the in-house
        resources or technical staff to build and maintain custom <GlossaryLink slug="automation-scripts">automation
        scripts</GlossaryLink> or manage high-frequency creative production on their own.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business is still running all measured lead generation and ad optimization by hand, uploading lists,
        segmenting contacts manually, and cycling through creative variations with spreadsheets, Wrench can return
        hours to your week and cut your cost-per-lead by letting algorithms do the heavy lifting. You will see the
        most impact if your sales pipeline depends on a steady flow of qualified leads, if you are frustrated by
        rising ad costs as you try to scale, or if your team cannot keep up with the creative demands of modern ad
        platforms.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench is not the right fit for businesses with very low ad spend (under $500 a month), or for those who
        have not yet invested in a CRM or structured marketing data. If you are just starting out, or if your lead
        volume is too low to support automated segmentation and scoring, simpler tools or manual processes may be
        more cost-effective. Wrench also may not suit teams with highly specialized, one-off campaign needs that do
        not repeat or scale, since its value grows as you automate and optimize recurring workflows.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with more advanced needs, such as multi-channel campaigns, complex audience segmentation, or
        a need to integrate with existing tools like HubSpot, Salesforce, or Meta, Wrench’s native integrations and
        modular approach make it a strong contender. It is built to unify data from multiple sources, centralize
        workflows, and adapt as your business evolves. If your current pain points include data fragmentation,
        creative fatigue, and unpredictable ad performance, Wrench is designed to address these directly.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step for a business considering Wrench is a structured assessment of your current marketing data
        and processes. This means reviewing how your contact data is stored, how leads are scored and segmented, and
        how creative assets are produced and deployed. Geek @ Your Spot’s published methodology starts with a free
        consultation, then walks you through defining business objectives, assessing data quality, and mapping out
        where Wrench’s automation can remove manual work from your team’s daily routine. The goal is to build a
        system that fits your existing operations, scales as you grow, and delivers measurable improvements in <GlossaryLink slug="lead-quality">lead
        quality</GlossaryLink> and campaign efficiency.</p>
      <p className="text-base text-white shadow-text pt-3">
        A business that is ready for Wrench will typically have a CRM or marketing database with enough contacts to
        segment and score, a need to run multiple campaigns or creative variants, and a desire to move away from
        reactive, manual management toward proactive, data-driven optimization. If you fit this profile, the value
        is not just in saving time, it is in unlocking a more predictable, scalable sales pipeline that keeps your
        cost-per-lead stable as you grow.</p>
      <p className="text-base text-white shadow-text pt-3">
        For those on the fence, it is worth comparing your current manual workload and error rate to what Wrench
        automates. If your team spends hours each week updating lists, chasing down data errors, or struggling to
        keep creative fresh, the cost of doing nothing is often higher than the cost of implementing an automated
        system. Wrench’s transparent, adaptable platform lets you start small and scale up, so you do not need to
        overhaul your entire operation in one move.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Wrench is for growth-minded small businesses that want to move beyond manual lead generation and
        campaign management, unify their marketing data, and compete at the next level. It is not for those with
        minimal data, one-off campaigns, or an unwillingness to invest in structured automation. The path forward is
        clear: assess your current pain points, map your data, and work with a partner like Geek @ Your Spot to
        configure Wrench for your real-world environment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Our post <Link id={`tools-marketing-ad-spend-optimization-measured-lead-generation-wrench-xlink-blog${idSuffix}`} href="/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend" className="text-[#C83803] hover:underline">How South Florida Businesses Can Stop Wasting Ad Spend</Link> makes Wrench the first dependency of the whole system: it cleans and standardizes CRM data so every sync to the ad platforms matches, scores contacts by conversion probability and lifetime value, and excludes someone who just bought from the retargeting campaign the same day. The post is equally direct that a business still on static spreadsheets sees dramatic gains from this, while one already running a disciplined CRM sees real but incremental ones. Whether your contact base is large and structured enough to score is what the data quality phase of the four-phase assessment in our <Link id={`tools-marketing-ad-spend-optimization-measured-lead-generation-wrench-xlink-pillar${idSuffix}`} href="/use-cases/marketing/ad-spend-optimization/ai-measured-lead-generation" className="text-[#C83803] hover:underline">AI Measured Lead Generation</Link> guide establishes.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`tools-marketing-measured-lead-generation-wrench-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>When you find an ad campaign that is actually working, what exactly happens to your cost-per-lead when you
          try to increase the <GlossaryLink slug="daily-budget">daily budget</GlossaryLink>?</li>
        <li>How do you currently defend your search rankings when a local competitor suddenly spikes their bids over the
          weekend, and who turns off your ads if your website crashes?</li>
        <li>How many completely different graphic variations and ad headlines are you testing every week, and how long
          does it take your team to format them for stories, feeds, and banners?</li>
        <li>When you look at your ad dashboards, can you pinpoint the exact second users drop off from your videos, or
          tell your designer which headline angle made money vs. just getting clicks?</li>
        <li>Where are your lead lists and past customer data stored right now, and how often are those lists actively
          synced to your Facebook or Google ad accounts?</li>
        <li>Are you spending the exact same bid to display an ad to a complete stranger as you are to someone who has
          visited your pricing page three times?</li>
        <li>Is the $500–$1,500/month your advertising budget, or must it also cover software and management? What
          separate amount can you allocate to tracking?</li>
        <li>What frustrates you most: too few inquiries, poor-quality inquiries, not knowing which ads work, or not
          knowing which leads become customers?</li>
        <li>Where are you advertising now, Google, Meta, Microsoft, or elsewhere? How much do you spend on each?</li>
        <li>How do prospects contact you, phone calls, website forms, chat, booking pages, or <GlossaryLink slug="lead-form-ads">platform
          lead forms</GlossaryLink>? Roughly what percentage comes through each?</li>
        <li>Can you show me which campaign produced your last five qualified inquiries? Can you identify which of those
          became customers?</li>
        <li>How many calls and form submissions do you receive monthly? How many are unique prospects rather than repeat
          calls, spam, or existing customers?</li>
        <li>What makes an inquiry worth pursuing, service requested, location, budget, urgency, or another factor? What
          makes it a bad fit?</li>
        <li>What happens after an inquiry: appointment, estimate, proposal, sale? Where do you record those stages?</li>
        <li>What is a typical new customer worth in gross profit? Approximately how many qualified inquiries become
          customers?</li>
        <li>Who answers calls and follows up on forms? How quickly? What happens after hours or when someone misses a
          call?</li>
        <li>Which website platform, forms, phone service, CRM, and scheduling software do you use? What tracking is
          already installed?</li>
        <li>Who controls the website, advertising accounts, analytics, and CRM? Can they authorize changes and provide
          access?</li>
        <li>Who will mark leads as qualified, booked, won, or lost, and how often can they update those records?</li>
        <li>Do you need call recordings or transcripts? Are there consent, sensitive-data, <GlossaryLink slug="customer-retention">retention</GlossaryLink>,
          or access requirements we must review?</li>
        <li>After the first 90 days, what would make this worthwhile: reliable <GlossaryLink slug="marketing-attribution">attribution</GlossaryLink>,
          fewer unqualified leads, more booked appointments, or lower cost per qualified lead?</li>
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
              <h2 id="who-benefits-from-wrench-who-does-not-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who benefits from Wrench, who does not, and what to do next
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
              <h2 id="who-benefits-from-wrench-who-does-not-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who benefits from Wrench, who does not, and what to do next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
