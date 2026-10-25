import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Automating Measured Lead Generation is the right move when your team faces persistent bottlenecks in manual
        campaign management, data sync, or creative production, and you have enough lead volume and data quality to
        fuel the system. It is not the answer for every business, especially those with highly irregular demand,
        thin data, or a sales process that depends on high-touch, personalized follow-up.</p>
      <p className="text-base text-white shadow-text pt-3">
        The strongest case for automation is when your ad spend is rising but your lead quality or volume is flat,
        or you are burning time on work that could be handled by a script or rule. For example, if you find yourself
        stuck in a cycle of reviewing <GlossaryLink slug="search-terms-report">search terms</GlossaryLink>, pausing
        bad keywords, or shifting budgets between channels by hand, you are already losing ground to competitors who
        let tools like Optmyzr and Performance Max handle those adjustments in real time. If your CRM is full of
        mixed-quality leads and duplicates, and your team cannot keep up with manual segmentation, Wrench’s
        automated scoring and exclusions can immediately redirect spend to the buyers who matter.</p>
      <p className="text-base text-white shadow-text pt-3">
        Where the case is weaker is in very low-volume or highly custom sales, think professional services with a
        handful of deals a month, or businesses where every lead requires bespoke nurturing. Automation thrives on
        enough data to spot patterns and run tests; if you have fewer than a few dozen leads a month, or your
        product is so niche that every lead looks different, the value of systematizing your workflow may be
        outweighed by the risk of overengineering. You may be better off keeping manual control and reviewing each
        lead yourself. Likewise, if your market is highly variable, seasonal spikes, unpredictable demand, or
        campaigns that change every week, automation can struggle to keep up, and the cost of misfiring rules can
        exceed the savings.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams whose bottleneck is creative production, Marpipe and Madgicx offer the fastest gains. If your
        biggest pain is slow asset creation, lagging ad refresh, or too many manual design steps, these tools can
        multiply your ad variants and keep fatigue at bay. But if your brand depends on unique, high-touch creative
        for every campaign, or your audience is hypersensitive to subtle messaging, the efficiencies of automation
        may come at the price of creative control. Here, a hybrid approach, using automation for bulk production,
        then hand-tuning key assets, can make sense.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next step, if you find your business matches the profile above, is to map your current workflow against
        the four-phase methodology: define your measurable bottleneck (cost-per-lead spikes, creative delays, wasted
        spend), assess your data quality (is your CRM clean, are your lists validated, do you know your customer
        segments), select the right tools for your stack (do they connect to your CRM, handle your channels, fit
        your volume), and start with a low-risk pilot (pick one campaign, measure gains and issues before scaling).
        If you cannot answer these questions, or your bottlenecks are not yet clear, you are not ready for full
        automation, and will get more value from a focused review of your manual process first.</p>
      <p className="text-base text-white shadow-text pt-3">
        A measured approach means automating where you are weakest, not everywhere at once. For South Florida
        businesses at the edge of scaling, with lead volume and data quality to support it, this is the moment to
        move forward. For others, the right call may be to wait, or to start by cleaning your data and mapping your
        true workflow costs. Either way, the decision is not about buying a platform, but about building a process
        that fits your actual business, and measuring each step as you go.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions when <a href="#consultationAppointment2xl" id={`blog-marketing-measured-lead-generation-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
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
        <li>After the first 90 days, what would make this worthwhile: reliable <GlossaryLink slug="marketing-attribution">attribution</GlossaryLink>,
          fewer unqualified leads, more booked appointments, or lower cost per qualified lead?</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="when-automation-makes-sense-for-lead-generation-and-when-to-hold-off" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When automation makes sense for lead generation, and when to hold off
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="when-automation-makes-sense-for-lead-generation-and-when-to-hold-off-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                When automation makes sense for lead generation, and when to hold off
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
