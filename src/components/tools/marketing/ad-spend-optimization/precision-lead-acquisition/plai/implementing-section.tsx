import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = () => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Plai for ad spend optimization means your team moves from fragmented, manual processes to a
        single, automated command center. The transition is short because Plai is built with pre-configured connectors,
        ready-to-use templates, and a dashboard that brings every major ad channel together. Geek @ Your Spot manages the
        rollout so you do not have to rebuild your campaigns or learn new analytics tools from scratch.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with an audit of your current ad accounts and data sources. Geek @ Your Spot reviews what
        platforms you use, Meta, Google, TikTok, and others, and checks how your campaigns, budgets, and reporting are
        set up today. The aim is to map your existing structure to Plai&rsquo;s unified dashboard with as little
        disruption as possible. Because Plai supports direct integrations with major ad platforms and tools like Stripe
        and GoHighLevel, most small businesses do not need custom development or manual data transfers. This cuts weeks
        off the typical onboarding timeline.</p>
      <p className="text-base text-white shadow-text pt-3">
        Plai&rsquo;s onboarding uses templated campaign setups. Instead of building every campaign from scratch, Geek @
        Your Spot loads proven frameworks into your account. If you already have ads running, Plai can import those
        campaigns and reuse your best-performing creative as templates. This minimizes downtime and lets you see unified
        performance data from day one. For teams that manage multiple brands or business units, Plai&rsquo;s workspace
        model keeps everything siloed and organized, so you do not risk overlap or data leaks between clients or
        departments.</p>
      <p className="text-base text-white shadow-text pt-3">
        A phased rollout is the norm for small teams. Geek @ Your Spot typically starts with one or two platforms, often
        Meta and Google, before adding TikTok, LinkedIn, or others. This staged approach means you get visible results
        and real reporting improvements early, without overwhelming your team with a massive change. Each phase includes
        a data quality check: Geek @ Your Spot ensures your <GlossaryLink slug="conversion-tracking">conversion
        tracking</GlossaryLink>, audience lists, and budget rules are mapped correctly before anything goes live. Plai
        automates the setup of conversion pixels and tracking codes, removing the usual technical hurdles that slow down
        cross-platform reporting. For most small businesses, this means you are not left waiting for IT support or
        outside developers to finish integration work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the core platforms are live, Geek @ Your Spot configures Plai&rsquo;s automation features. This includes
        setting up optimization rules, scheduling, and reporting workflows. Plai&rsquo;s AI engine takes over the daily
        work of monitoring campaign performance, adjusting budgets, and recommending audience tweaks. Your team can focus
        on strategy and creative decisions, while Plai handles the repetitive, data-driven tasks. Geek @ Your Spot
        provides training and support so your staff can use the dashboard without needing to learn complex analytics or
        ad platform interfaces.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last step before full handoff is validation. Geek @ Your Spot walks through the dashboard with your team,
        confirming that campaigns, budgets, and reports reflect live data from all connected platforms. They check that
        automation rules are firing as intended, and that each workspace is properly siloed for privacy and control. If
        you need to add new channels or brands later, Plai&rsquo;s structure makes it easy to expand without breaking
        your existing setup.</p>
      <p className="text-base text-white shadow-text pt-3">
        The entire process is designed to avoid downtime and keep your existing campaigns running while Plai takes over.
        Because Plai handles billing automation, client portal setup, and full white-labeling, you can present a unified
        experience to your customers or franchisees from the start. For a typical small business in Miami-Dade, Broward,
        or Palm Beach, going live with Plai is a matter of days, not weeks, when Geek @ Your Spot manages the project.
        The result is a central, automated system that cuts out manual reporting, reduces errors, and puts real ad
        performance data in your hands every day.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-plai-actually-looks-like-for-a-small-business-team" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with Plai actually looks like for a small business team
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body()}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#023059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-going-live-with-plai-actually-looks-like-for-a-small-business-team-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What going live with Plai actually looks like for a small business team
              </h2>
              {body()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
