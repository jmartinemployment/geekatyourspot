export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Getting Rytr up and running for a small business is a fast, low-friction project compared to most
        content platforms. The whole point is to remove the blank-page bottleneck and the agency price tag, so
        the go-live process is stripped down to what matters: connect, configure, start producing. Geek @ Your Spot LLC handles this for South Florida clients as a hands-on rollout, not a generic onboarding. Every
        step is about fitting Rytr to your current content needs, not forcing you into a new workflow.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core reason Rytr launches quickly is its library of pre-built templates and use cases. Instead of
        building content types from scratch, you pick from 40+ templates, Google Business Profile blurbs,
        Instagram captions, product descriptions, email follow-ups, and fill in the specifics of your
        business. The platform is designed so you can generate your first draft in minutes, not hours. For a
        team that needs to get their GBP updated, schedule a month of social posts, or refresh product copy,
        this means you skip the usual weeks of setup. The templates handle the structure, and you focus on the
        details that make your business unique.</p>
      <p className="text-base text-white shadow-text pt-3">
        Most clients in West Palm, Broward, or Miami-Dade start with a single channel or asset. Maybe it&#39;s
        Instagram, maybe it&#39;s a neglected website page. Geek @ Your Spot LLC walks you through a phased
        rollout: start with the channel that costs you the most time or brings in the most leads. Once you see
        how Rytr generates content and adapts to your tone, you add more channels, emails, ads, bios, without
        having to reconfigure from scratch. This phased approach means you get value in week one, not after a
        long migration. You never need to pause your existing marketing while Rytr comes online.</p>
      <p className="text-base text-white shadow-text pt-3">
        Technical integration is light. Rytr is cloud-based, so there’s no software to install and no servers
        to maintain. For teams already using Gmail, LinkedIn, or Slack, Rytr supports direct context beside
        these platforms, so you can draft and adapt content without switching tabs. If you’re not using these
        platforms, nothing breaks, Rytr works as a standalone content engine, and Geek @ Your Spot LLC configures
        it so your team can access what they need from any browser or device. For mobile teams, Rytr’s full
        mobile optimization means you can review, edit, and approve content on the go, a real advantage for
        owners who work from the field.</p>
      <p className="text-base text-white shadow-text pt-3">
        The go-live checklist is short and concrete. Geek @ Your Spot LLC begins with a discovery call to map your
        current content pain points and the assets you need this month. Next, they configure your Rytr
        account, select the initial templates, and set up tone and language defaults, crucial for businesses
        in Miami-Dade that need Spanish or Haitian Creole support. The first content run happens live, with
        your input, so you see how Rytr handles your real material. Approvals and bulk scheduling are set up
        so you can review and push content live in batches, not one at a time.</p>
      <p className="text-base text-white shadow-text pt-3">
        If you’ve ever tried to launch a content tool and found yourself stuck in endless onboarding, Rytr’s
        approach is a relief. There’s no forced training module, no weeks of data mapping before you see
        value. The only real delay is the time it takes to decide what you want to say. For a business that
        needs to get out of the blank-page rut, this means you’re publishing real content, on your own
        channels, before the week is out. That’s the difference between Rytr and platforms built for content
        teams with months to spare. Geek @ Your Spot LLC’s role is to keep you focused on outcomes: more posts,
        better leads, and less time spent on the work you hate.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-rytr-in-a-real-small-business-workflow" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Rytr in a Real Small Business Workflow
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
              <h2 id="what-it-takes-to-launch-rytr-in-a-real-small-business-workflow-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What It Takes to Launch Rytr in a Real Small Business Workflow
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
