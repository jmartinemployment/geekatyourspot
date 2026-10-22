import Link from "next/link";

export default function RightFitSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Writesonic is built for small businesses and lean teams who need to scale content output without
        adding staff or blowing up their marketing budget. If you are in Miami-Dade, Broward, or West Palm
        Beach and need to look like a much larger operation, publishing regular blog posts, landing pages,
        social updates, and email campaigns, this platform is designed for you. The sweet spot is the business
        that has outgrown manual posting but cannot justify a full-time content hire or a high-retainer
        agency.</p>
      <p className="text-base text-white shadow-text pt-3">
        You get the most out of Writesonic when you have a clear sense of your audience, a backlog of topics
        or questions from your clients, and at least a basic content strategy. The platform’s multi-stage
        pipeline takes your raw ideas and turns them into structured, brand-aligned assets ready for web,
        email, and social. If your team is already juggling billing, client service, and admin work,
        Writesonic removes the bottleneck of content creation and lets you reclaim hours every week.</p>
      <p className="text-base text-white shadow-text pt-3">
        For teams with complex approval chains, regulatory review, or highly specialized technical content,
        Writesonic can still fit, but you may need to layer on extra human validation at the end of the
        pipeline. The platform’s quality gates and expert-role passes catch most tone and accuracy issues, but
        final sign-off for regulated industries or legal review should still sit with your internal experts.
        Writesonic is not a replacement for subject-matter expertise where the risk of error is high, it is a
        force multiplier for the routine, high-volume work that keeps your brand visible and your pipeline
        full.</p>
      <p className="text-base text-white shadow-text pt-3">
        On the other hand, Writesonic is not the right fit for micro-businesses or solo operators who only
        need a post or two per month and are comfortable writing them by hand. If you are not feeling the pain
        of the blank page or agency sticker shock, or if your marketing is already running on autopilot with
        no need to expand, the platform’s depth and automation may be more than you need. The same goes for
        businesses with highly visual or video-first marketing, Writesonic’s strength is in written content,
        not multimedia production.</p>
      <p className="text-base text-white shadow-text pt-3">
        The decision comes down to what your next year looks like. If you see your business needing to double
        or triple its content output, launch new service area pages, or build out a full library of local
        guides, Writesonic is built to handle that scale. Its pricing starts at $79 per month for teams that
        need a steady flow of editor credits and audits, with higher tiers for those pushing into larger
        pipelines or adding advanced tracking. That is a fraction of what a local agency or freelancer would
        charge for the same volume and quality.</p>
      <p className="text-base text-white shadow-text pt-3">
        Before you jump in, map out your real needs. List the types of content you produce now, the channels
        you want to grow, and the topics that matter to your clients. Check whether your current tools, CMS,
        analytics, email platform, are among those Writesonic integrates with. If you have a backlog of old
        posts or landing pages that need updating, factor that into your plan. The more you can automate, the
        more value you will get from the platform.</p>
      <p className="text-base text-white shadow-text pt-3">
        If your business is stuck between doing everything by hand and paying for done-for-you agency work,
        Writesonic is the bridge. It is not a magic button, but it is a system that returns time, raises your
        publishing cadence, and keeps your brand in front of local prospects without the usual cost or stress.
        For South Florida small teams looking to break out of the content bottleneck and compete with bigger
        brands, this is the step that makes scale practical, and sustainable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Answer these questions
        when&nbsp;<Link href="#consultationAppointment2xl" id={`tools-marketing-intelligent-content-generation-writesonic-right-fit-booking-your-free-consultation${idSuffix}`} className="text-[#C83803] hover:underline">booking
        your free consultation</Link>.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-base font-normal text-white shadow-text pt-3">
        <li>Walk me through your current process from a raw marketing idea to a published asset, who writes it, who reviews it, and how many different systems or documents do they switch between?</li>
        <li>When you create a primary content piece (like a long-form article or case study), what is your process for transforming it into emails, LinkedIn updates, or Meta ads? Is that handled manually or skipped entirely due to time constraints?</li>
        <li>Are your marketing assets heavily dependent on data from other departments, such as active accounting inventory,&nbsp;CRM&nbsp;pipelines, or technical spec sheets?</li>
        <li>How are you currently measuring the success of your copy? Are you optimizing primarily for organic search rankings (SEO traffic) or are you actively spending money on paid local ads where every click costs you?</li>
        <li>Have you ever run an ad campaign where the traffic was high but conversions were low? How did you figure out if the weak link was your targeting or the written copy itself?</li>
        <li>When your team writes headlines or call-to-actions, are they relying on creative intuition, or do you have a framework to test what phrases resonate best with your specific demographic?</li>
        <li>How do you currently ensure that external freelancers or junior staff don&#39;t accidentally publish content containing incorrect business facts, outdated pricing, or off-brand messaging?</li>
        <li>Do you have a documented brand voice guide, style guide, or a repository of highly successful past campaigns that you want your AI system to explicitly replicate?</li>
        <li>Do you operate in a regulated industry or niche where your content must pass strict legal, compliance, or quality reviews before going live?</li>
        <li>Who on your current team will be the primary users interacting with this software daily? What is their comfort level with learning new digital platforms or formatting web code?</li>
        <li>How many hours per week is your team currently losing to repetitive administrative formatting, scheduling across multiple social channels, or copy-pasting text variants?</li>
        <li>Are you looking for a system that plugs directly into your existing text editors and website builders (like WordPress or Shopify), or do you want a self-contained workspace that also handles distribution and tracking?</li>
        <li>If we could safely double your weekly marketing output while cutting the turnaround time in half, what would that shift mean for your sales pipeline this quarter?</li>
        <li>What are you currently spending on external copywriters, content agencies, or specialized software tools that this implementation could potentially consolidate or replace?</li>
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
              <h2 id="who-writesonic-is-for-who-it-is-not-and-what-to-do-next" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Writesonic Is For, Who It Is Not, and What to Do Next
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
              <h2 id="who-writesonic-is-for-who-it-is-not-and-what-to-do-next-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Who Writesonic Is For, Who It Is Not, and What to Do Next
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
