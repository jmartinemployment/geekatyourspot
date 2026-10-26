import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with GetResponse in a small business starts with connecting your existing lead sources, mapping
        out the required automations, and configuring data flows so nothing falls through the cracks. The process is
        designed to minimize disruption: pre-built connectors and templates shorten setup, and the platform’s
        all-in-one structure means you do not have to juggle multiple tools or data imports. Most small teams can
        expect to move from first login to live campaigns in a matter of days, not weeks, when the right groundwork
        is in place.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is linking up every place your leads come from, website forms, landing pages, social ads, and
        even Facebook Lead Ads. GetResponse offers direct integrations for these sources, so the moment someone
        fills out a form or clicks an ad, their information flows straight into your contact list. This eliminates
        the need for manual data entry or risky copy-paste routines that often lead to missed follow-ups. For a
        business that fields inquiries from several channels, this connection alone can reclaim hours each week.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once lead capture is automated, the next phase is mapping out the customer journeys you want to run.
        GetResponse’s automation templates give you a starting point for common sequences: welcome emails, nurture
        drips, <GlossaryLink slug="abandoned-cart-email">abandoned cart reminders</GlossaryLink>, and re-engagement
        campaigns. These templates are not rigid scripts; they are frameworks you can adjust to your own offer and
        audience. For example, a local service provider might use a welcome sequence to prompt a booking, while an
        ecommerce shop might focus on post-purchase follow-ups and cross-sell offers. The platform’s drag-and-drop
        automation builder lets you visualize and tweak these flows without writing code.</p>
      <p className="text-base text-white shadow-text pt-3">
        A phased rollout is the norm for small teams. Rather than switching everything on at once, most businesses
        start with one high-impact sequence, often a welcome or nurture flow, then add more as results come in. This
        approach keeps the workload manageable and lets you see early wins without risking errors across your whole
        list. Because GetResponse supports unlimited workflows on higher plans, you are not boxed into a single
        sequence when your business needs to handle multiple customer types or offers.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing is built into the platform, with A/B split options for both emails and landing pages. You can run
        two versions of a welcome sequence or a product offer, then let the data decide which one drives more
        engagement or sales. For teams in West Palm Beach, Broward, or Miami-Dade, this means you can adapt your
        campaigns to local preferences and see what resonates without committing to a single approach. This is
        especially useful when your customer base is diverse or your offers change seasonally.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse’s all-in-one structure also means you do not have to coordinate between separate systems for
        email, landing pages, and analytics. Everything is managed in one account, so your team can monitor results,
        adjust automations, and build new campaigns from a single dashboard. This reduces training time and makes it
        easier to spot bottlenecks or missed opportunities early.</p>
      <p className="text-base text-white shadow-text pt-3">
        Onboarding is further shortened by the platform’s user-friendly interface. The drag-and-drop email editor
        and automation builder mean your team does not need coding skills to launch professional, mobile-optimized
        campaigns. Templates are available for most common messages and can be customized to match your brand. For
        advanced users, HTML editing is also supported, but it is never required for a campaign to go live.</p>
      <p className="text-base text-white shadow-text pt-3">
        Support is available 24/7 on paid plans, so if you run into a technical issue, or just need help setting up
        a workflow, you are not left waiting days for a response. This is a real advantage for small businesses that
        cannot afford downtime or delays. The ability to get help in the moment keeps projects moving and reduces
        the risk of stalling out during setup.</p>
      <p className="text-base text-white shadow-text pt-3">
        For businesses that need to move fast or have limited resources, the combination of pre-built integrations,
        templated automations, and a unified dashboard means you can start seeing results with minimal upfront
        investment. The process is not one-size-fits-all: Geek @ Your Spot helps tailor the rollout to your specific
        needs, ensuring that your most valuable leads enter the right journey from day one and that no opportunity
        is lost to manual gaps or technical missteps.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="launching-getresponse-in-a-small-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Launching GetResponse in a small business
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
              <h2 id="launching-getresponse-in-a-small-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Launching GetResponse in a small business
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
