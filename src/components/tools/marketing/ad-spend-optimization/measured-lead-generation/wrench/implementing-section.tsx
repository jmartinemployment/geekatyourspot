import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Wrench in a small business environment means connecting your existing CRM and marketing
        tools, mapping your data, and rolling out automated segmentation and creative generation in a phased way.
        The process is faster when you already use platforms with Wrench’s native connectors, and when your CRM data
        is well-structured. Geek @ Your Spot manages the setup, so your team avoids a long learning curve and gets
        results quickly.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is linking Wrench with your core systems. Wrench offers native integrations for tools like
        HubSpot, Salesforce, Meta, and Instagram. If your business already relies on these platforms, the technical
        lift is lighter. Geek @ Your Spot handles the connector setup, so you do not need to write code or manage <GlossaryLink slug="api">API</GlossaryLink> keys.
        For less common or custom systems, Wrench supports custom integrations, but expect a longer timeline for
        mapping, validation, and testing.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the data connections are in place, Geek @ Your Spot works through a structured onboarding. They start
        by centralizing your customer and lead data inside Wrench’s platform. This step is about breaking down data
        silos, your contacts, campaign history, and engagement signals are pulled together so Wrench’s AI can
        analyze them as one source of truth. If your data is spread across spreadsheets, old CRMs, or multiple
        marketing tools, Geek @ Your Spot will clean, standardize, and deduplicate it before import. This reduces
        mismatches and ensures the AI segments and scores leads accurately from day one.</p>
      <p className="text-base text-white shadow-text pt-3">
        The next phase is setting up <GlossaryLink slug="audience-segmentation">audience segmentation</GlossaryLink> and
        lead scoring. Wrench uses your historical data to model customer behavior, segment your audience by buying
        intent, and assign lead scores. This is not a static process, Wrench keeps these segments updated as new
        data comes in. Geek @ Your Spot configures the scoring logic to match your business goals, whether that
        means focusing on high-value prospects, identifying upsell windows, or excluding recent buyers from
        retargeting. This step is where most manual targeting rules and guesswork are eliminated.</p>
      <p className="text-base text-white shadow-text pt-3">
        After segmentation, Wrench’s creative automation comes online. Wrench’s Serendipity model generates campaign
        assets, ad copy, images, and layouts, tailored to each segment. Geek @ Your Spot sets up the creative
        templates and rules, so the system can produce and rotate fresh assets at the pace ad platforms demand. This
        prevents creative fatigue and keeps your campaigns performing, without your team needing to manually design
        every variant.</p>
      <p className="text-base text-white shadow-text pt-3">
        A phased rollout is the safest approach. Geek @ Your Spot usually starts with one or two high-impact
        campaigns, often your main lead generation funnel or a key retargeting sequence. Once the system proves
        itself (better CPL, more qualified leads, less wasted spend), they expand automation to other campaigns and
        channels. This approach limits risk and lets your team adjust to the new workflow without disruption.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens the go-live timeline most is clean, accessible CRM data and the use of supported platforms. If
        your data is organized and your stack matches Wrench’s integrations, Geek @ Your Spot can move from kickoff
        to live campaigns in days, not weeks. If your environment is more fragmented, expect a longer ramp as data
        mapping, cleansing, and custom integration work take priority.</p>
      <p className="text-base text-white shadow-text pt-3">
        Throughout deployment, Geek @ Your Spot provides training and documentation for your team. They walk through
        how to review segments, adjust scoring rules, and interpret Wrench’s recommendations. The goal is to make
        your team self-sufficient for daily use, with Geek @ Your Spot available for more advanced tuning or
        troubleshooting. By the end of onboarding, your manual lead targeting and creative bottlenecks are replaced
        by automated, data-driven processes that scale as your spend grows.</p>
      <p className="text-base text-white shadow-text pt-3">
        A typical rollout order is: connect core systems, centralize and clean data, configure segmentation and
        scoring, launch initial campaigns, then expand automation across channels. Each step is managed to minimize
        downtime and keep your existing campaigns running. Wrench’s modular setup means you can automate one
        workflow at a time, so you see value early and build confidence before scaling up.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-to-expect-when-going-live-with-wrench-in-your-current-marketing-stack" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to expect when going live with Wrench in your current marketing stack
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
              <h2 id="what-to-expect-when-going-live-with-wrench-in-your-current-marketing-stack-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What to expect when going live with Wrench in your current marketing stack
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
