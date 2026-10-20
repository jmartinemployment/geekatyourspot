import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Going live with Writesonic in a small business setting is not a drawn-out enterprise IT project. The
        platform is built to shorten time-to-value, so a team in Miami-Dade or Broward can move from blank
        page to live content without weeks of setup. The process is straightforward because Writesonic comes
        with pre-built integrations and templated content pipelines. This means you do not need to build
        custom connectors or workflows from scratch, most of the heavy lifting is already done.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is connecting Writesonic to your core systems. For a typical South Florida business,
        this means linking your website CMS, social media accounts, and possibly
        a&nbsp;<GlossaryLink slug="crm">CRM</GlossaryLink>. Writesonic provides direct integrations with
        platforms like WordPress, Sanity, and Webflow, so publishing content is a one-click step rather than a
        manual copy-paste job. If you use Ahrefs or Google Keyword Planner for SEO research, those
        integrations pull in live keyword and competitor data, which Writesonic uses to inform its intelligent
        content generation. This is not just technical convenience, it is how you keep your content pipeline
        grounded in what is actually ranking and converting in your area.</p>
      <p className="text-md text-white shadow-text pt-3">
        The next phase is setting up your content templates and approval workflows. Writesonic does not force
        you into a single format. Instead, you select from ready-made templates for blog posts, landing pages,
        social updates, and email campaigns. These templates come pre-wired with the right structure for both
        SEO and AI search visibility: headings, schema markup, FAQs, and internal links. For teams that need
        review and sign-off before anything goes live, Writesonic supports automated approval workflows. This
        means a manager or owner can review drafts in the platform and approve or request changes before
        publishing. The result is a controlled process that does not slow you down.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is built in. Once your templates and workflows are set, you can generate a month’s
        worth of posts, schedule them for release across channels, and have the system handle the timing. This
        is a major shift for teams used to scrambling week to week. The platform’s pipeline approach means
        every piece of content runs through research, outline, brand voice application, expert review, and
        quality gates before it reaches your calendar. For a lean team, this means you get the output of a
        full creative department without adding headcount.</p>
      <p className="text-md text-white shadow-text pt-3">
        A phased rollout is often the fastest way to see results. Most small businesses start with a single
        channel, say, the company blog or a set of landing pages, and expand from there. Writesonic’s modular
        setup lets you pilot on one format, validate the results, then scale up to social media, email, or
        product descriptions. Because the platform’s connectors and templates are reusable, adding a new
        channel is a matter of configuration, not a new build. This staged approach means you get value
        quickly and avoid the disruption of a big-bang launch.</p>
      <p className="text-md text-white shadow-text pt-3">
        Throughout deployment, Geek @ Your Spot LLC closes the gap between Writesonic’s technical options and your
        real business process. The consultancy handles the mapping between your existing content, brand
        guidelines, and the platform’s templates. They configure workflows to match your approval steps, train
        your team on the platform, and make sure the integrations actually connect to your live systems. Where
        a DIY rollout might get stuck on permissions or custom fields, Geek @ Your Spot LLC moves the project
        forward without downtime. This is not a generic onboarding, it is a practical, local implementation
        that gets you publishing with minimal friction.</p>
      <p className="text-md text-white shadow-text pt-3">
        The net effect is that a team used to spending hours every week on manual drafting and coordination
        can shift to a system where content is planned, generated, reviewed, and published in a few clicks.
        You see the difference not just in time saved, but in the consistency and reach of your marketing.
        Writesonic’s go-live is a technical process, but it is also an operational reset for how small
        businesses in South Florida approach content. The old bottlenecks, manual drafting, scattered
        approvals, missed deadlines, are replaced with a repeatable workflow that scales with your ambition,
        not your payroll.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-actually-takes-to-deploy-writesonic-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Actually Takes to Deploy Writesonic in a Small Business Environment
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-actually-takes-to-deploy-writesonic-in-a-small-business-environment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Actually Takes to Deploy Writesonic in a Small Business Environment
              </h2>
              {body}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
