import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Launching Plai for Budget Ad Copy &amp; Message Validation in a small business setting means moving from a
        patchwork of manual processes to a unified, AI-driven workflow in days, not weeks. The process is
        streamlined by Plai’s pre-built connectors, templated campaign setups, and a phased rollout that fits the
        team’s existing stack. Geek @ Your Spot guides clients through each step, making the transition fast and
        low-risk for teams with limited marketing resources.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is to connect Plai to the platforms and tools a business already uses. Plai’s integrations
        with major ad networks (Meta, Google, TikTok, LinkedIn, and others) and payment processors like Stripe mean
        there is no need to rip out or rebuild core systems. Instead, Geek @ Your Spot maps the client’s current
        accounts into Plai’s single dashboard, so every campaign, creative, and budget is visible from one place.
        This eliminates the time lost to switching between multiple tools and helps prevent the errors that come
        from juggling disconnected systems.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaign setup moves quickly because Plai comes with proven templates and reusable frameworks. Geek @ Your
        Spot imports existing campaigns, saving high-performing ads as templates, and configures new campaigns using
        Plai’s built-in audience packs and targeting presets. This approach cuts out the guesswork and gets the
        first campaigns live in a fraction of the time it would take to start from scratch. For a business that has
        struggled to keep up with manual reporting or creative production, this is a direct path to faster launches
        and more consistent results.</p>
      <p className="text-base text-white shadow-text pt-3">
        A phased rollout is key for small teams with limited bandwidth. Geek @ Your Spot starts by validating one
        core workflow, usually the main paid channel or the highest-priority campaign. This lets the team see real
        results before committing to a full migration. Once the core is stable, additional channels, <GlossaryLink slug="landing-page">landing
        pages</GlossaryLink>, and social posting features are added. Plai’s modular structure means each new feature
        can be switched on when the team is ready, without disrupting what is already working.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai’s automation features shorten the time to value. The platform automates conversion pixel setup, so
        campaigns start tracking results right away without a technical learning curve. Its AI-driven optimization
        means budgets are adjusted in real time, and creative testing runs continuously in the background. This
        takes the pressure off the team to monitor and tweak campaigns every day, Plai handles the routine
        adjustments, freeing up owners and staff to focus on running the business.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting and analytics are central from day one. Plai consolidates performance data across all campaigns,
        showing clear, actionable metrics in a single dashboard. Geek @ Your Spot configures these dashboards to
        highlight what matters most to the business, lead volume, cost per result, or local market reach, so the
        team can make decisions without sifting through raw data or confusing spreadsheets. This is especially
        important for owners who are not technical but need to see where their budget is going and what’s working.</p>
      <p className="text-base text-white shadow-text pt-3">
        The onboarding process with Geek @ Your Spot is designed to minimize downtime and avoid disruption. Most
        teams can go live with Plai in a matter of days because the setup is guided and the platform does not
        require custom development. Where a business has unique needs, such as strict brand controls for franchise
        locations or multi-location reporting, Plai’s white-label and workspace features allow for granular
        configuration without slowing down the rollout. Geek @ Your Spot ensures that each workspace is siloed, so
        data and creative assets do not bleed across clients or business units.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, going live with Plai is not a long, technical project. For South Florida small businesses, it is
        a guided switch from scattered, manual effort to a single, automated command center. The process is
        shortened by pre-built integrations, reusable templates, and a phased approach that matches the team’s pace
        and priorities. Geek @ Your Spot manages the details, so the business can see results and savings from the
        first campaigns onward.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-it-takes-to-launch-plai-in-a-small-business-environment" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to launch Plai in a small business environment
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
              <h2 id="what-it-takes-to-launch-plai-in-a-small-business-environment-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What it takes to launch Plai in a small business environment
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
