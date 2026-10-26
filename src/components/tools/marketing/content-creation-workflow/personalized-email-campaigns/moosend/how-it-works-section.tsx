import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Moosend automates personalized email campaigns by combining segmentation, triggers, and AI-powered content
        creation into a single workflow. Each campaign starts with precise <GlossaryLink slug="audience-segmentation" className="text-[#0B162A] hover:underline">audience
        segmentation</GlossaryLink>, then moves through automated rules that decide who gets what message and when,
        all managed through a visual workflow builder. These mechanics mean your team sets the logic once, and
        Moosend handles the delivery and personalization at scale.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step in Moosend is to segment your audience. Moosend lets you group contacts by interests,
        purchase intent, funnel stage, and behavioral data, so a new subscriber, a loyal buyer, and a disengaged
        lead each receive different follow-ups. Segments can be built automatically using Moosend’s AI-driven
        Audience Discovery, which analyzes customer data and predicts which contacts are likely to engage or
        convert. You can refine these segments further with custom criteria, such as location or last purchase date,
        to match your business’s own targeting strategy.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once you have your segments, Moosend’s automation builder takes over. This is not a generic <GlossaryLink slug="autoresponder" className="text-[#0B162A] hover:underline">autoresponder</GlossaryLink>,
        it is a system where you define triggers (like a new signup, a cart abandonment, or a specific date),
        conditions (such as whether a contact has opened the last three emails), and actions (what message to send,
        which list to move them to, or which workflow to start next). These rules are set visually, so you see the
        flow from event to outcome, and can adjust or extend it as your campaigns evolve.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend supports multi-step sequences, meaning you can schedule a series of emails, welcome, nurture,
        re-engagement, or promotional, each with its own timing and content. Delays and branching logic are built
        in, so a contact who clicks a link gets one path, while a non-responder is routed to a different message or
        a win-back offer. This reduces manual work and ensures every recipient gets the most relevant follow-up, not
        just the next message in a static series.</p>
      <p className="text-base text-white shadow-text pt-3">
        Personalization in Moosend goes beyond a name in the subject line. The platform allows you to insert custom
        fields and dynamic content blocks into emails, tailoring product recommendations, offers, and even images
        based on each recipient’s profile and behavior. Moosend’s AI Writer generates subject lines and body copy
        variations, helping you test and optimize messaging without starting from scratch every time. This AI
        support is especially useful for small teams that need to keep campaigns fresh without adding more hours to
        the week.</p>
      <p className="text-base text-white shadow-text pt-3">
        <GlossaryLink slug="a-b-testing" className="text-[#0B162A] hover:underline">A/B testing</GlossaryLink> is
        built into the campaign workflow. Moosend lets you test subject lines, content, send times, and visual
        elements across segments, gathering data on what works for each audience group. Once a winner is found, the
        platform can automatically shift more sends to the high-performing variant, so you are always improving
        results with each campaign cycle.</p>
      <p className="text-base text-white shadow-text pt-3">
        For time-based or event-driven campaigns, Moosend’s scheduling tools allow you to set emails to go out at
        the optimal moment for each segment. The platform can adjust for time zones and subscriber behavior, so
        messages land when they are most likely to be opened. You can also set rules for special occasions, such as
        birthdays or anniversaries, with personalized offers linked to those dates.</p>
      <p className="text-base text-white shadow-text pt-3">
        Campaign performance is tracked through Moosend’s analytics dashboard. You see open rates, click-throughs,
        conversions, and engagement by segment, with the ability to drill down to individual subscriber actions.
        This data feeds back into your segmentation and automation logic, so underperforming groups can be targeted
        with new content or re-engagement flows, and successful tactics can be scaled up.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Moosend’s real mechanics are about setting up the rules, segments, and content once, then
        letting the automation engine deliver and optimize every message. For a small business in South Florida,
        this means less manual effort, more relevant emails, and a system that keeps improving as your list and
        strategy evolve.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="moosends-automation-engine" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Moosend’s automation engine
              </h2>
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="moosends-automation-engine-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Moosend’s automation engine
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
