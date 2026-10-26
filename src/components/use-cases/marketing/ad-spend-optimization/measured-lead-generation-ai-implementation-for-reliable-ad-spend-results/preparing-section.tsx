import Link from "next/link";
import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function PreparingSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The next step for a business considering Measured Lead Generation is to get a full assessment of where your
        current process is leaking money, time, or leads. This does not mean a generic audit, it means mapping your
        real workflow, from how you capture leads to how you qualify, nurture, and track them through to sale. You
        should expect to answer practical questions about your current ad platforms, budget, creative process, and
        the structure of your CRM and marketing data. Geek @ Your Spot’s approach begins with this diagnostic,
        because the system only works when it is tailored to your real constraints and goals.</p>
      <p className="text-base text-white shadow-text pt-3">
        You should also expect a clear, step-by-step rollout plan before anything is implemented. This plan will
        spell out the order of technical integrations, connecting your ad accounts, CRM, and analytics, along with
        the automation tools that will be plugged in at each stage. You will see which partner systems, like
        Performance Max, Wrench, Optmyzr, Madgicx, or Marpipe, are being activated for your use case and why. Each
        tool is chosen for a reason: Performance Max for live budget reallocation, Wrench for predictive audience
        scoring, Optmyzr for automated guardrails and error checks, Madgicx for funnel mapping and audience
        exclusions, and Marpipe for creative automation and multivariate testing.</p>
      <p className="text-base text-white shadow-text pt-3">
        You should not expect a one-size-fits-all solution. The system is built for your real sales environment, not
        for an idealized or generic business. If your business runs on a complex CRM with legacy data problems, the
        process will start with data cleaning and validation, often using Wrench to standardize and segment your
        contacts for better ad targeting. If your main struggle is creative fatigue, the rollout will prioritize
        Marpipe’s automation, generating new variants to keep your ads fresh and relevant.</p>
      <p className="text-base text-white shadow-text pt-3">
        You should expect to see changes in your daily operations. Some manual tasks will be automated away, such as
        pausing underperforming ads, shifting budgets as conversion rates change, and excluding recent buyers from
        retargeting. Your team will spend less time on repetitive checks and more time on strategy, creative
        planning, or direct sales. The real test is not just whether you save hours, but whether you see more
        qualified leads at a lower and more predictable cost per lead.</p>
      <p className="text-base text-white shadow-text pt-3">
        After the rollout, you should expect a period of close monitoring and adjustment. Automation routines are
        not set-and-forget; they need tuning as your campaigns collect new data. The partner tools mentioned,
        Performance Max, Wrench, Optmyzr, Madgicx, and Marpipe, each provide live reporting and adjustment
        capabilities. For example, Optmyzr will catch broken landing pages or wasted spend on irrelevant keywords
        before they become budget drains, and Madgicx will flag when your funnel targeting needs to be tightened or
        expanded.</p>
      <p className="text-base text-white shadow-text pt-3">
        Over the first 30 to 90 days, you should see the main pain points addressed: CPL volatility should drop, ad
        fatigue should decrease, and your team should have more bandwidth for high-value work (<a id={`use-cases-marketing-measured-lead-generation-preparing-source-wrench-ai${idSuffix}`} href="https://wrench.ai/products/digital-campaign-agent" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Wrench</a>,
        as of Oct 24, 2026). Your CRM and marketing data should become more actionable, with better segmentation and
        cleaner handoffs to sales. The end result is not just more leads, but leads that close faster and at a lower
        cost.</p>
      <p className="text-base text-white shadow-text pt-3">
        The reader who follows this approach should expect measurable gains in both efficiency and effectiveness,
        but only if they are ready to follow through on the process. The gains compound: every improvement in data
        quality, creative testing, or budget allocation feeds into the next cycle, making the system smarter and
        more resilient over time. The outcome is a marketing and sales pipeline that runs with less friction, more
        predictability, and a clear path to scaling up without the usual headaches or runaway costs.</p>
      <p className="text-base text-white shadow-text pt-3">
        Before any of those systems takes over your bids, read what the evidence supports and where it runs out. Our post <Link id={`use-cases-marketing-ad-spend-optimization-ai-measured-lead-generation-xlink-blog${idSuffix}`} href="/blog/marketing/ad-spend-optimization/how-south-florida-businesses-can-stop-wasting-ad-spend" className="text-[#C83803] hover:underline">How South Florida Businesses Can Stop Wasting Ad Spend</Link> goes through Optmyzr’s rule engine pausing ad sets the moment a landing page returns a 404 and defending impression share against a competitor’s bid spike, Wrench’s scoring and exclusions keeping past buyers out of acquisition campaigns, Marpipe’s hundreds of creative variants from one upload, and Madgicx’s funnel tiers that stop a budget increase from bringing diminishing returns. It then marks the boundary: lead count still depends on your data and local demand, and the savings of month one erode by month six without regular audits and campaign reviews.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`use-cases-marketing-measured-lead-generation-preparing-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</a>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>When you find an ad campaign that is actually working, what exactly happens to your cost-per-lead when you
          try to increase the daily budget?</li>
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
        <li>After the first 90 days, what would make this worthwhile: reliable attribution, fewer unqualified leads,
          more booked appointments, or lower cost per qualified lead?</li>
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
              <h2 id="what-the-reader-should-do-next-and-what-they-should-be-able-to-expect" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the Reader Should Do Next, and What They Should Be Able to Expect
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
              <h2 id="what-the-reader-should-do-next-and-what-they-should-be-able-to-expect-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the Reader Should Do Next, and What They Should Be Able to Expect
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
