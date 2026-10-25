import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Wrench replaces guesswork and manual cycles in measured lead generation with automated, data-driven actions
        that return hours to your week and make every dollar count. Instead of spending time cleaning lists,
        segmenting contacts, or building creative variations by hand, your team can focus on closing deals and
        growing revenue.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench connects directly to your CRM and marketing tools, like HubSpot, Salesforce, Meta, and Instagram.
        This means your customer data is always up to date and ready for analysis. No more exporting spreadsheets or
        reformatting lists for each campaign. Wrench automatically cleans, standardizes, and refreshes your data, so
        your contact lists match correctly with ad networks. This alone removes hours of manual work each week and
        ensures your ads reach the right people, not wasted impressions.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is handled automatically. Wrench analyzes your CRM data, then sorts your audience into dynamic
        segments based on behavior, preferences, and past activity. Instead of static lists that go stale, you get
        live, actionable groups that update as your audience changes. The platform scores each contact for
        conversion probability, so you can focus spend on people most likely to buy and exclude those who have
        already converted. This stops you from wasting budget on cold leads or recent buyers, and it means your
        campaigns are always targeted and efficient.</p>
      <blockquote cite="https://wrench.ai/products/personas-and-ai-segmentation" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Personas and AI Segmentation analyze your CRM data to create dynamic customer segments, generate insights,
        and guide personalized campaign strategies.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        Creative bottlenecks disappear with Wrench’s AI-powered content engine. The system generates tailored ad
        concepts, tests variations, and refines messaging based on real-time performance data. Instead of relying on
        your team to create every new image or headline, Wrench produces and adapts <GlossaryLink slug="creative-assets" className="text-[#0B162A] hover:underline">creative
        assets</GlossaryLink> that match your audience’s needs. This keeps your campaigns fresh and prevents ad
        fatigue, so you can scale without hiring extra designers or writers. Multi-language support and the ability
        to generate content for multiple channels mean you can reach every segment of your market without extra
        effort.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench also brings <GlossaryLink slug="predictive-analytics" className="text-[#0B162A] hover:underline">predictive
        analytics</GlossaryLink> to your campaigns. It forecasts which creative elements and audience segments are
        most likely to perform before you launch, so you can prioritize what works. As campaigns run, Wrench tracks
        performance, scores leads, and adjusts strategies in real time. You get clear, actionable insights, not just
        raw data, so you can make decisions quickly. This removes the need for manual reporting cycles and lets you
        optimize spend on the fly.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform sets up automatic exclusions for converted clients, so you never waste money <GlossaryLink slug="retargeting" className="text-[#0B162A] hover:underline">retargeting</GlossaryLink> people
        who already bought. It also calculates when past leads are ready for an upsell, timing your campaigns to hit
        just as the purchase window reopens. By dividing contacts by <GlossaryLink slug="customer-lifetime-value" className="text-[#0B162A] hover:underline">lifetime
        value</GlossaryLink>, Wrench ensures high-potential targets get the right message, while budget-conscious
        prospects see offers that fit their profile. No more one-size-fits-all campaigns or missed upsell
        opportunities.</p>
      <p className="text-base text-white shadow-text pt-3">
        Wrench’s integrations and workflow automation mean your data is unified across all tools. You can push,
        pull, and update information in real time, and build custom workflows without waiting on IT. As your
        business evolves, Wrench adapts, connecting to new platforms and supporting new channels as you grow. This
        future-proofs your marketing operations and keeps your campaigns aligned with business goals.</p>
      <p className="text-base text-white shadow-text pt-3">
        For the team, this translates to less time spent on repetitive tasks and more time on strategy and sales.
        You no longer need to manually segment lists, build creative, or adjust campaigns in response to performance
        drops. Wrench automates these steps, so your team can work faster and smarter. The result is a stable,
        scalable lead generation engine that delivers predictable results without the usual headaches.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-wrench-removes-manual-work-from-measured-lead-generation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wrench removes manual work from Measured Lead Generation
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
              <h2 id="how-wrench-removes-manual-work-from-measured-lead-generation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Wrench removes manual work from Measured Lead Generation
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
