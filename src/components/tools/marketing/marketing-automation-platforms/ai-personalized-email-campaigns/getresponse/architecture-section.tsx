import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ArchitectureSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse is built as a single platform that brings together lead capture, segmentation, automation, and
        campaign management under one account. Its architecture is designed to centralize every contact, message,
        and workflow, so you do not need to juggle different systems or worry about data slipping through the
        cracks. Every integration, form, and campaign connects directly to your contact database, making it possible
        to manage the full <GlossaryLink slug="customer-journey" className="text-[#0B162A] hover:underline">customer
        journey</GlossaryLink> without manual transfers or imports.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the core of GetResponse is its contact database. Every lead, whether from a website form, Facebook Lead
        Ad, or landing page, enters into this system. The platform supports up to 500 contacts on its free plan,
        with higher limits on paid plans (<a id={`tools-marketing-personalized-email-campaigns-getresponse-architecture-source-getresponse-com${idSuffix}`} href="https://www.getresponse.com/features/list-building/form-builder" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">GetResponse</a>,
        as of Oct 25, 2026). Each contact record holds not just basic information like name and email, but also
        tags, engagement scores, custom fields, and a history of every interaction. This makes it easy to track who
        your contacts are, what they care about, and how they are engaging with your business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation in GetResponse is handled automatically through real-time data processing. As contacts interact
        with your emails, landing pages, or store, the platform assigns tags, updates engagement scores, and moves
        contacts into segments based on the rules you set. For example, a contact who clicks a link in an email can
        be tagged as interested in a product, while someone who abandons a cart is added to a <GlossaryLink slug="re-engagement-campaign" className="text-[#0B162A] hover:underline">re-engagement</GlossaryLink> segment.
        This segmentation is not static, it updates as soon as new data comes in, so your lists are always current
        and accurate.</p>
      <p className="text-base text-white shadow-text pt-3">
        Automation workflows are the backbone of campaign delivery. These workflows connect triggers (like a new
        signup or a purchase) to actions (such as sending a welcome series or a product recommendation). You can
        build as many workflows as you need on paid plans, or start with a single workflow on the Starter tier. Each
        workflow can include multiple steps, conditions, and branches, so you can map out complex journeys tailored
        to different customer types. The automation engine runs these workflows continuously, ensuring every contact
        receives the right message at the right time.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse’s campaign assets, emails, templates, landing pages, are all stored and managed within the same
        platform. You can create, edit, and reuse templates for different campaigns, saving time and ensuring brand
        consistency. The drag-and-drop editor makes it easy to build new assets, and you can store custom designs
        for future use. This central library means you do not need to search through folders or external tools to
        find what you need.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform integrates with common lead sources and marketing channels. Besides website forms and landing
        pages, GetResponse connects to Facebook Lead Ads, Leadpages, Landingi, and other tools. These integrations
        allow you to capture leads wherever they come from and bring them directly into your workflows. For
        businesses running paid ads, GetResponse can trigger follow-up emails as soon as a lead is generated,
        without waiting for manual exports or uploads.</p>
      <p className="text-base text-white shadow-text pt-3">
        Analytics and reporting are built in. Every campaign, workflow, and contact segment can be tracked for
        opens, clicks, conversions, and growth over time. This data is stored in your account and accessible through
        clear dashboards and reports. You can see which campaigns are performing, which segments are most engaged,
        and where to focus your efforts for better results. The analytics are tied directly to your contact
        database, so you always have a complete view of your audience and their journey.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses with more advanced needs, GetResponse’s architecture supports features like A/B testing,
        dynamic content, and product recommendations. These are not separate modules but part of the same platform,
        using the same contact data and segmentation logic. This means you can test different messages, personalize
        content, and recommend products all within the same workflow, without needing to connect third-party tools
        or manage multiple accounts.</p>
      <p className="text-base text-white shadow-text pt-3">
        Security and <GlossaryLink slug="email-deliverability" className="text-[#0B162A] hover:underline">deliverability</GlossaryLink> are
        handled at the platform level. GetResponse maintains a 99% deliverability rate, so your emails reach inboxes
        reliably (<a id={`tools-marketing-personalized-email-campaigns-getresponse-architecture-source-getresponse-com-2${idSuffix}`} href="https://www.getresponse.com/customers/red-hot-marketing-case-study" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">GetResponse</a>,
        as of Oct 25, 2026). The system also manages compliance with email marketing best practices, such as <GlossaryLink slug="opt-in" className="text-[#0B162A] hover:underline">opt-in</GlossaryLink> tracking
        and <GlossaryLink slug="opt-out" className="text-[#0B162A] hover:underline">unsubscribe</GlossaryLink> management,
        so you do not need to handle these details manually. For each message, the platform tracks delivery,
        bounces, and engagement, helping you maintain list quality and avoid spam issues.</p>
      <p className="text-base text-white shadow-text pt-3">
        The free plan gives small businesses a way to start with up to 500 contacts, 2,500 newsletters per month,
        and one landing page, all managed in the same account (<a id={`tools-marketing-personalized-email-campaigns-getresponse-architecture-source-getresponse-com-3${idSuffix}`} href="https://www.getresponse.com/referral-program/refer-a-friend.html" target="_blank" rel="noopener noreferrer" className="text-[#0B162A] hover:underline">GetResponse</a>,
        as of Oct 25, 2026). As your needs grow, you can upgrade to access more contacts, unlimited workflows, and
        advanced features like dynamic segmentation and A/B testing. Every plan includes lead capture, email
        creation, and automation, so you can build a complete marketing system without piecing together different
        providers.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse’s architecture is built for small teams that need to move fast and stay organized. Everything,
        contacts, campaigns, workflows, analytics, is in one place, so you do not spend time switching between tools
        or tracking down missing data. The integrations and automation mean you can connect your website, ads, and
        sales channels in minutes, not days. This is how small businesses in South Florida can run sophisticated,
        personalized email campaigns without the overhead of a large marketing department.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="getresponses-architecture-connects-your-lead-sources-segments-data-in-real-time-and-holds-everything-in-one-place" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                GetResponse’s architecture connects your lead sources, segments data in real time, and holds everything in one place
              </h2>
            </div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#BF5934] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="getresponses-architecture-connects-your-lead-sources-segments-data-in-real-time-and-holds-everything-in-one-place-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                GetResponse’s architecture connects your lead sources, segments data in real time, and holds everything in one place
              </h2>
              {body("-lg")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
