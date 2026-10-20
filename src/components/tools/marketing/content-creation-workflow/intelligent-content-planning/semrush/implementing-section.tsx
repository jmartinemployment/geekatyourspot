export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Deploying Semrush into an existing small business environment is rarely about starting from scratch.
        The platform speeds up go-live by delivering pre-built integrations, a modular toolkit, and a workflow
        built for teams that cannot afford downtime. For a South Florida business already juggling Google
        Analytics, Search Console, or Google Ads, Semrush connects directly to these systems, pulling in
        historic and live data without manual imports. This means the first day is not spent rekeying old
        metrics or learning a new interface from zero, most of the data the team needs is there from the
        start.</p>
      <p className="text-md text-white shadow-text pt-3">
        The order of rollout matters. Geek @ Your Spot LLC, as the implementer, guides the business through a
        phased approach, never a big-bang cutover that risks lost data or missed deadlines. The first phase is
        always a focused pilot: one content workflow, one or two channels, and a single set of business
        objectives. This limits risk and shows results early. The pilot covers the core: keyword research,
        content generation, and basic performance tracking. Semrush&#39;s chat-driven interface means even
        teams with no SEO experience can get started, as the system routes tasks and flags what needs
        attention.</p>
      <p className="text-md text-white shadow-text pt-3">
        Once the pilot proves out, the next step is connecting more channels and expanding automation.
        Semrush’s modular design means businesses can add specialized toolkits, like Local, Social, or
        Advertising, when they are ready, not before. If the team is not ready to manage Google Business
        Profile posts or bulk social scheduling on day one, those modules can be slotted in later. This keeps
        the initial rollout focused, avoids overwhelming staff, and lets the business see value before
        committing to more complexity or cost.</p>
      <p className="text-md text-white shadow-text pt-3">
        A major time-saver is Semrush’s library of pre-built templates. For content generation, it offers
        topic blueprints and AI-generated article outlines based on live keyword data and competitor analysis.
        Instead of brainstorming from scratch, the team selects a template, adjusts it for their brand, and
        the system fills in the rest. This is not just about speed, it means every piece starts with a
        data-backed structure, so the risk of wasted effort drops sharply. The approval workflow, which is
        built in, lets managers review and greenlight drafts before they go live, reducing errors and keeping
        brand messaging consistent across emails, social, and web.</p>
      <p className="text-md text-white shadow-text pt-3">
        For small businesses, one of the biggest barriers to AI adoption is fear of disruption, nobody wants
        to lose a week of sales to a failed software rollout. Semrush addresses this by centralizing
        everything in one dashboard, with user management and collaboration tools that let the team work
        together without switching between tools or waiting for IT to stitch systems together. When Geek @ Your Spot LLC implements Semrush, the team sets up user roles and permissions so only the right people can
        approve, edit, or schedule content. The process is designed to be reversible: if something does not
        work as expected, the team can roll back or pause without losing data or progress.</p>
      <p className="text-md text-white shadow-text pt-3">
        The final stage before going fully live is training and handoff. Semrush’s interface is built for
        non-technical users, but Geek @ Your Spot LLC still provides targeted training, focusing on the workflows
        the team will actually use, not a generic tour of every feature. That means hands-on sessions for
        content scheduling, bulk publishing, and real-time visibility tracking. The team learns how to use
        Semrush’s recommendations to adjust on the fly, if traffic drops on a Tuesday, they see why and what
        to do next, right in the dashboard. This shortens the learning curve and ensures the team is confident
        before the rollout is considered complete.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="rolling-out-semrush-what-shortens-go-live-and-the-real-steps-involved" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Semrush: What Shortens Go-Live and the Real Steps Involved
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
              <h2 id="rolling-out-semrush-what-shortens-go-live-and-the-real-steps-involved" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out Semrush: What Shortens Go-Live and the Real Steps Involved
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
