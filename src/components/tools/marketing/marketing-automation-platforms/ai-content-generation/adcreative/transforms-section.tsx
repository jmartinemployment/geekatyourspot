import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function TransformsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative replaces guesswork and manual effort with automated, data-backed ad creative built for
        conversion. For a small business owner in Miami-Dade, Broward or West Palm Beach running local ads on a
        tight budget, this means more leads and less waste, without the need to hire a copywriter, designer, or
        agency. Every feature of AdCreative is aimed at removing hours of manual work and reducing the risk of
        wasted spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        First, AdCreative’s AI-driven copywriting engine writes sharp, direct headlines and body text using proven
        conversion frameworks like AIDA (Attention, Interest, Desire, Action) and PAS (Problem, Agitation,
        Solution). This means every ad starts with a clear value proposition and <GlossaryLink slug="call-to-action" className="text-[#0B162A] hover:underline">call
        to action</GlossaryLink>, not a wall of text that gets ignored. The system generates multiple variations
        instantly, so you can test what works, no copywriting expertise required. Instead of spending hours drafting
        and revising, you select from high-performing options, each structured to drive clicks and conversions.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the visual side, AdCreative generates graphics trained on a massive database of successful ad layouts.
        The tool does not just create images that look good; it builds visuals optimized to stop the scroll and
        drive action. It pulls your brand’s fonts, colors, and logos automatically, ensuring every ad looks
        professional and on-brand. This eliminates the risk of mismatched creative and saves the time spent tweaking
        colors or searching for the right stock photo. The result is a library of ready-to-launch ads that reinforce
        your identity and inspire trust.</p>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative also addresses creative fatigue by producing fresh batches of new ad variants in seconds. As soon
        as performance drops, the platform can generate new concepts, no waiting for a designer or worrying about
        running stale creative for weeks. For a business owner, this means campaigns stay effective and audiences
        stay engaged, without the manual grind of constant redesigns. The platform’s batch generation feature allows
        you to create multiple ad variations at once, making it easy to test different angles and find what
        resonates with your audience.</p>
      <p className="text-base text-white shadow-text pt-3">
        Matching ad messaging to your landing page is another area where AdCreative removes friction. The system can
        scan your website or product page and generate ads that reflect your actual offer, positioning, and value
        proposition. This alignment reduces bounce rates and ensures that every click has a higher chance of turning
        into a lead or sale. You no longer have to manually rewrite copy to fit each campaign, AdCreative handles
        the adaptation for you.</p>
      <p className="text-base text-white shadow-text pt-3">
        Integration with major ad platforms is built-in. AdCreative connects directly to Meta, Google, LinkedIn, and
        more, letting you push AI-generated creatives straight into your accounts. This removes the need for manual
        downloads or uploads, streamlining the workflow from idea to campaign launch. For a small team, this means
        faster launches and less time spent on repetitive tasks. The platform is designed for ease of use: upload
        your logo and a short description, and AdCreative handles the rest, ranking generated creatives by predicted <GlossaryLink slug="conversion-rate" className="text-[#0B162A] hover:underline">conversion
        rate</GlossaryLink> so you can prioritize what works.</p>
      <p className="text-base text-white shadow-text pt-3">
        AdCreative’s AI is trained on over 500 million high-performing ad texts and images, ensuring that every
        output is backed by real-world data (<a id={`tools-marketing-budget-ad-copy-message-validation-adcreative-transforms-source-adcreative-ai${idSuffix}`} href="https://www.adcreative.ai/use-case/e-commerce" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">AdCreative</a>,
        as of Oct 23, 2026). It applies battle-tested frameworks, not just for copy, but for visual layouts,
        call-to-action placement, and product-centered designs. This focus on conversion means that every element of
        the ad is optimized to drive results, not just fill space. The platform’s Creative Insights AI monitors
        ongoing performance, alerting you when an ad begins to underperform and recommending a refresh before your
        budget gets wasted.</p>
      <blockquote cite="https://www.adcreative.ai/ad-creatives" className="mt-3 border-l-4 border-white/60 pl-4 italic text-base text-white shadow-text">
        Generate conversion-focused ad creatives in seconds with AI.</blockquote>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that need to scale campaigns without scaling headcount, AdCreative’s batch generation and
        unlimited creative options mean you can keep testing and improving without hiring more staff. Whether you
        are launching a new offer, running seasonal promotions, or targeting multiple audience segments, the
        platform makes it possible to stay agile and competitive on a small budget. The days of spending nights and
        weekends building ads by hand are over.</p>
      <p className="text-base text-white shadow-text pt-3">
        The real impact of AdCreative is in the hours and dollars it returns to your business. No more guessing
        which headline will convert, no more buying stock photos that blend in, and no more running out-of-date
        creative because you cannot afford a redesign. Instead, you get a system that continuously generates,
        validates, and refreshes your ad creative, so every dollar you spend is working as hard as you do. For South
        Florida small businesses, this is the difference between burning through a budget and building a pipeline of
        qualified leads.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-adcreative-removes-manual-work-from-budget-ad-copy-message-validation" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How AdCreative removes manual work from Budget Ad Copy &amp; Message Validation
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
              <h2 id="how-adcreative-removes-manual-work-from-budget-ad-copy-message-validation-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How AdCreative removes manual work from Budget Ad Copy &amp; Message Validation
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
