import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DataMappingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Hootsuite to deliver real value for Intelligent Content Generation depends on the upfront data
        structure and mapping decisions. These are not just technical details, they decide how easily your
        team can move from idea to published post, how approvals work, and how results are tracked across
        networks and campaigns.</p>
      <p className="text-md text-white shadow-text pt-3">
        At the foundation is the way Hootsuite treats social accounts, content assets, and user roles. Each
        social network (Facebook, Instagram, LinkedIn, TikTok, X, YouTube, Threads, Pinterest, WhatsApp, and
        Google Business Profile) is set up as a distinct profile within Hootsuite. Mapping these accounts
        correctly at the start is essential. If you miss a channel or connect the wrong asset, posts can go to
        the wrong place or fail to publish. For a small business that already manages accounts across multiple
        platforms, the first job is to inventory every official handle and decide which ones should be live in
        Hootsuite from day one. This is not just about coverage, it is about making sure every post lands
        where it should, every time.</p>
      <p className="text-md text-white shadow-text pt-3">
        Next comes the mapping of content libraries and creative assets. Hootsuite’s integration with Adobe
        Creative Cloud and Adobe Stock means that images, graphics, and videos can be pulled directly into the
        content workflow. For this to work, asset folders and permissions need to be mapped so the right team
        members have access to the right files. If a business uses other content libraries or storage
        platforms, those need to be mapped through integrations or manual imports. The goal is that when a
        team member sits down to build a campaign, every approved asset is right where they need it, with no
        hunting through email threads or cloud drives.</p>
      <p className="text-md text-white shadow-text pt-3">
        User roles and approval flows are another critical mapping decision. Hootsuite lets you set granular
        permissions, who can draft, who can edit, who must approve, and who can publish. For a lean team, this
        often means the owner or manager retains final approval, while assistants or contractors can draft and
        schedule posts. Mapping these roles upfront prevents accidental posts, maintains brand voice, and
        ensures compliance with industry or company rules. If the business has multiple locations or brands,
        Hootsuite’s permission layers can be used to keep local content authentic while maintaining central
        oversight, as seen in the Barceló Hotel Group case.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows are mapped to reflect the real-world process, not just a software default. For
        example, a post about a new service might require review by the owner, while routine updates can go
        live after a marketing assistant signs off. Hootsuite supports multi-step approval flows, so posts can
        be routed through several reviewers if needed. The mapping here is about matching the software logic
        to the way decisions actually get made in the business, not forcing the business to fit a rigid
        template.</p>
      <p className="text-md text-white shadow-text pt-3">
        Analytics and reporting structures are also part of the initial mapping. Hootsuite’s analytics engine
        tracks engagement, reach, sentiment, and conversion metrics across all connected networks. To get
        meaningful reports, you need to map which metrics matter most to your marketing goals. For example, if
        lead generation is the priority, UTM parameters and conversion events should be mapped from Hootsuite
        into Google Analytics or Adobe Analytics. If brand awareness is the goal, focus on reach and
        engagement metrics. Setting up these mappings at the start means the dashboards report on what
        matters, not just what is easy to count.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling and&nbsp;<GlossaryLink slug="content-repurposing">content
        repurposing</GlossaryLink>&nbsp;depend on how post templates and content types are structured in
        Hootsuite. If you want to turn a blog post into a week of social updates, the mapping must allow for
        easy adaptation, different copy, images, and hashtags for each network, all tied back to the original
        asset. Hootsuite’s AI tools help automate this, but only if the initial structure is set up to support
        multi-platform repurposing. This is where many DIY setups fall short: without clear mapping, content
        gets duplicated or lost.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, mapping notification and alert settings is key for teams that want to respond quickly to
        engagement or crises. Hootsuite can trigger alerts for spikes in mentions, sentiment shifts, or
        approval requests. Mapping these to the right team members, so the person who can act is the one who
        gets notified, keeps the workflow moving and ensures nothing slips through the cracks.</p>
      <p className="text-md text-white shadow-text pt-3">
        In every case, the upfront mapping work is what makes automation possible. When Hootsuite is deployed
        with clear data structures and mapped workflows, the result is a content engine that runs with minimal
        intervention. Posts go out on time, approvals happen without bottlenecks, and results are visible in
        real time. For a small business, this is the difference between a marketing program that runs in the
        background and one that constantly interrupts the workweek.</p>
      <p className="text-md text-white shadow-text pt-3">
        Geek @ Your Spot LLC’s approach is to handle this mapping as part of the initial implementation, working
        alongside the business to make decisions about which accounts, assets, roles, and metrics matter most.
        The goal is to launch with a setup that reflects the real way the business operates, not just what is
        possible in the software. This is what keeps the content workflow simple, accurate, and ready to scale
        as the business grows.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-shape-a-successful-hootsuite-deployment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape a Successful Hootsuite Deployment
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-data-structure-and-mapping-shape-a-successful-hootsuite-deployment" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Data Structure and Mapping Shape a Successful Hootsuite Deployment
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
