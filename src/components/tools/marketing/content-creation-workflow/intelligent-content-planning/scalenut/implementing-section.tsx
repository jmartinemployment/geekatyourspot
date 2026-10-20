export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Getting Scalenut live in a small business environment is less about a long checklist and more about
        removing the usual friction points that stall most content platforms. The difference starts with the
        way Scalenut is built: it comes with pre-configured modules for intelligent content planning,
        AI-driven execution, and real-time monitoring, so you are not wiring together a dozen point solutions
        or waiting on a developer to build custom integrations. For a South Florida team with no technical
        headcount to spare, this means you can move from contract to first output in days, not weeks.</p>
      <p className="text-md text-white shadow-text pt-3">
        The go-live process with Scalenut is defined by a clear sequence. First, Geek @ Your Spot LLC reviews your
        current marketing setup, what content platforms you use, how you manage approvals, what analytics you
        rely on, and where your workflow stalls. Scalenut does not require you to rip out what works; it
        overlays your existing process, automating the steps that eat up most of your time. For example, if
        you already use Google Workspace for drafts and Slack for approvals, Scalenut’s notification and
        review modules can be set to alert the right people at each stage, without forcing a new inbox or
        workflow on the team.</p>
      <p className="text-md text-white shadow-text pt-3">
        A major time-saver is Scalenut’s templated setup for topic clusters and keyword mapping. Instead of
        starting from a blank screen, you load your key business areas or service lines, and Scalenut’s engine
        generates a draft content blueprint, complete with keyword clusters, prompt coverage, and competitor
        benchmarks, based on live search and AI engine data. This eliminates the typical weeks spent in
        spreadsheet planning and manual keyword research.</p>
      <p className="text-md text-white shadow-text pt-3">
        The actual rollout is phased but parallelized. Scalenut lets you launch content clusters, AI
        visibility monitoring, and internal linking automation all at once, instead of waiting for one step to
        finish before starting the next. This is especially important for small teams: you do not have to wait
        for a blog series to be published before the system starts tracking AI citations or building out
        internal links. Geek @ Your Spot LLC configures each module for your actual business priorities, local
        landing pages for Miami or Fort Lauderdale, for example, so your team sees immediate movement on
        high-value topics.</p>
      <p className="text-md text-white shadow-text pt-3">
        Approval workflows in Scalenut are rule-based and can be set up in advance, so nothing goes live
        without the right sign-off. The platform supports multi-step approvals, version tracking, and audit
        logs, which is critical for regulated industries or teams with strict brand guidelines. If your
        process calls for legal or compliance review, Geek @ Your Spot LLC maps that into the workflow, so the
        AI-generated drafts pause at the correct gate and notify the right reviewer.</p>
      <p className="text-md text-white shadow-text pt-3">
        Bulk scheduling is another area where Scalenut shortens go-live. Once content is approved, the
        platform can push posts, emails, or landing pages to your CMS or email platform on a preset calendar.
        For teams used to copy-pasting content between tools, this alone cuts hours from every campaign cycle.
        The platform’s AI repurposing engine also means that a single approved asset can be spun out as social
        posts, email sequences, or alternate formats without manual rewriting.</p>
      <p className="text-md text-white shadow-text pt-3">
        Finally, the go-live is validated by real-time analytics. Scalenut tracks not just traditional SEO
        metrics, but also where your brand appears in ChatGPT, Perplexity, and other answer engines. The
        dashboard updates as soon as your content is cited or referenced, so you know within days, sometimes
        hours, if your changes are working. This closes the loop: you see the impact of your rollout without
        waiting a quarter for traffic reports.</p>
      <p className="text-md text-white shadow-text pt-3">
        In practice, the team that started this page, stuck on the content treadmill, buried in manual
        approvals and endless drafts, sees the first relief within the first week. The blank screens are
        replaced with a prioritized content plan. Approvals move through the workflow automatically. New
        content goes live in bulk, and the team gets its first AI-driven citation alerts before the next
        Monday standup. Going live with Scalenut is not about a big-bang launch; it is about cutting out every
        step that used to slow you down, with Geek @ Your Spot LLC configuring the system so that what matters to
        your business is what gets done first.</p>
      <ul className="list-disc list-outside pl-3 space-y-2 text-md font-normal text-white shadow-text pt-3">
        <li>Initial review of your current content stack and workflows by Geek @ Your Spot LLC</li>
        <li>Templated setup of topic clusters and keyword mapping, no manual spreadsheets</li>
        <li>Phased, parallel rollout of content, monitoring, and linking modules</li>
        <li>Rule-based approval workflows mapped to your team’s real-world process</li>
        <li>Bulk scheduling and automated publishing to your existing CMS or email tools</li>
        <li>Real-time analytics for both SEO and AI-driven search visibility</li>
      </ul>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-go-live-with-scalenut-in-your-existing-stack" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live with Scalenut in Your Existing Stack
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
              <h2 id="what-it-takes-to-go-live-with-scalenut-in-your-existing-stack" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Go Live with Scalenut in Your Existing Stack
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
