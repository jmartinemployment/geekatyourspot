import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ConfiguringSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Configuring Moosend for personalized email campaigns means setting up rules, automation logic, and audience
        segments that match your business’s real workflows. Moosend is built for configuration, not custom coding:
        you work through its visual workflow builder, automation templates, and segmentation tools, not by writing
        scripts or running an SDK. Everything that drives automation, triggers, conditions, actions, and content
        personalization, gets set in the platform’s own interface, so a small team can control complex journeys
        without a developer.</p>
      <p className="text-base text-white shadow-text pt-3">
        The core of Moosend’s automation is its workflow builder. Here, you define what kicks off a campaign (the
        trigger), what filters or rules apply (the conditions), and what happens next (the actions). Each step is
        spelled out in Moosend’s own terms. For example, you can trigger an email when someone subscribes to a list,
        clicks a link, or makes a purchase. Conditions let you filter by custom fields, segment membership, or
        behavioral data, so, for instance, only contacts from Miami-Dade who have opened at least two emails in the
        last month get a certain follow-up. Actions include sending an email, adding a tag, or moving a contact to a
        new segment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend’s segmentation is where most of the personalization logic lives. You build segments using filters on
        customer behavior (such as opens, clicks, past purchases), demographic data, or custom fields you define.
        For a small business, this means you can set up different tracks for new leads, repeat buyers, or disengaged
        subscribers, all from the same list. The platform’s AI can help generate segments automatically based on
        interest, purchase intent, or funnel stage, and you can combine these with your own rules for even more
        precise targeting.</p>
      <p className="text-base text-white shadow-text pt-3">
        The automation engine lets you chain together sequences with delays, branching logic, and rules. For
        example, you can set up a sequence that sends a welcome message, waits three days, checks if the contact has
        opened it, and if not, sends a different follow-up. You can create multi-step journeys that change based on
        how each recipient interacts with your emails, all without manual intervention. Moosend’s automation
        recipes, pre-built workflows for common needs like cart abandonment, onboarding, or upselling, are a
        starting point, and you can tweak them to fit your business. The AI Writer built into Moosend drafts subject
        lines and body copy variations, so you spend less time staring at a blank screen and more time refining what
        works.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend’s extension mechanism is configuration-based. There is no exposed <GlossaryLink slug="api" className="text-[#0B162A] hover:underline">API</GlossaryLink> or
        scripting layer for custom code in the evidence, so what you build is what you can set through its
        interface. This is a strength for small teams: everything is managed in one place, and you do not need to
        maintain code or hire a developer to change a workflow. The technical constraint to remember is that list
        imports must be in CSV or Excel format, UTF-8 encoded, and free of special characters, so your data needs to
        be clean before you bring it in.</p>
      <p className="text-base text-white shadow-text pt-3">
        With Geek @ Your Spot implementing Moosend, the difference is in mapping these rules and segments to your
        real business process. That means working with you to define what counts as a lead, a qualified buyer, or a
        disengaged customer in your context, then building those definitions into Moosend’s segments and automation
        flows. The consultancy sets up triggers and actions to match your existing sales or service rhythm, so the
        platform does not just send emails, it moves each contact along the journey you already run, only now with
        less manual work and more consistency.</p>
      <p className="text-base text-white shadow-text pt-3">
        What you do not get is a blank slate for custom integrations or homegrown extensions. Moosend’s power is in
        its configuration depth: you can build complex, branching campaigns, but you do it through its own tools.
        For a small South Florida business, this keeps things simple and maintainable. You set up the logic once,
        adjust as you learn, and the platform handles the rest. When your business changes, you can update segments,
        triggers, or content in the same place, no code deploy, no outside contractor needed.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#025E73] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-you-actually-configure-in-moosend" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What you actually configure in Moosend
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#025E73] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-you-actually-configure-in-moosend-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What you actually configure in Moosend
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
