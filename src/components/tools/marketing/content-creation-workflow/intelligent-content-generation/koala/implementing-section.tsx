import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out Koala in a small business is a focused, step-by-step process that avoids the usual delays
        and confusion that come with new software. The main reason: Koala is built with pre-configured
        templates, direct integrations, and a workflow that puts your business’s core information at the
        center from day one. This means you do not spend weeks on setup, and you do not need a technical
        background to get the basics right. Geek @ Your Spot LLC guides the process, translating your real-world
        business details into Koala’s data structure so the system produces content that sounds like you, not
        like a generic template.</p>
      <p className="text-md text-white shadow-text pt-3">
        The first step is building your Brand DNA profile. Koala gives three ways to do this: pulling your
        business details straight from Google Maps, importing from your website, or starting with a template
        and filling in the blanks. For most small teams in Miami-Dade, Broward, and West Palm Beach, the
        fastest route is the Google Maps import. In under a minute, Koala can pull your address, phone, hours,
        reviews, and photos, automatically populating your profile. If your website holds unique service
        details or credentials, importing from the site fills in those gaps. Manual entry is the fallback for
        businesses with more complex or less standard data, but even this uses a structured template to avoid
        missed fields.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the Brand DNA is set, Koala reads that data into every part of the workflow. This covers your
        services, what makes you different, and the voice you want to project. The system does not just store
        this information; it applies it to every article, post, and campaign it generates. This is where Koala
        stands apart from tools that require you to re-explain your business every time you start a new
        project. You set your context once, and it carries across everything.</p>
      <p className="text-md text-white shadow-text pt-3">
        Koala’s integrations with platforms like WordPress, Shopify, Webflow, and Ghost mean publishing is
        direct and automatic. There is no need for copy-paste or manual uploads. Geek @ Your Spot LLC connects
        Koala to your CMS, mapping fields so that articles, images, and links land in the right place every
        time. This integration step is quick, often an hour or less, because Koala’s connectors are built for
        these platforms out of the box. For any system outside those four, Koala’s webhook
        and&nbsp;<GlossaryLink slug="api">API</GlossaryLink>&nbsp;options allow for custom connections, but
        most small teams get full value without extra development work.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is another area where Koala shortens the go-live timeline. Once your Brand DNA is in
        place, Koala’s agent can suggest a month of content, place it on a calendar, and queue up articles for
        review or direct publishing. Approval workflows are built in: you see every draft before it goes live,
        and you can edit, approve, or reject with a click. This keeps control in your hands while removing the
        bottleneck of manual coordination.</p>
      <p className="text-md text-white shadow-text pt-3">
        For teams used to juggling multiple writers or outside agencies, Koala’s approach means you spend less
        time coordinating and more time reviewing. The system generates content in batches, applies your
        strategy and tone uniformly, and maintains a record of what’s scheduled, published, or pending
        approval. Geek @ Your Spot LLC helps you tune the system to your needs, setting up folder structures, user
        permissions, and notification settings so nothing slips through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        A phased rollout is possible but often unnecessary. Most small businesses see value within the first
        week, with the first batch of content live and the system ready to handle ongoing updates. Where a
        phased approach makes sense, such as when integrating with a legacy CMS or migrating from another AI
        platform, Geek @ Your Spot LLC manages the transition, ensures data is mapped correctly, and tests
        publishing before switching over fully.</p>
      <p className="text-md text-white shadow-text pt-3">
        In summary, going live with Koala is a matter of days, not weeks. The process is streamlined by
        pre-built connectors, structured templates, and a focus on importing your real business information
        from the start. Geek @ Your Spot LLC’s role is to translate your unique needs into Koala’s structure,
        handle technical setup, and ensure your team is ready to review, approve, and publish with confidence.
        The result is a content system that delivers consistent, branded output without the setup headaches or
        ongoing maintenance that slow other tools down.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-launching-koala-looks-like-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Launching Koala Looks Like in a Small Business Environment
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
              <h2 id="what-launching-koala-looks-like-in-a-small-business-environment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What Launching Koala Looks Like in a Small Business Environment
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
