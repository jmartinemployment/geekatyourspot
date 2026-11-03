import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function HowItWorksSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign automates personalized follow-up by pulling together CRM, e-commerce, and engagement data to
        trigger the right message at the right time. Its system works by connecting every customer touchpoint,
        segmenting contacts in real time, and launching <GlossaryLink slug="email-sequence" className="text-[#0B162A] hover:underline">email
        sequences</GlossaryLink> based on defined actions or behaviors. For a small business, this means every
        inquiry, purchase, or web form submission can start a tailored sequence, without anyone needing to build
        lists or remember follow-ups by hand.</p>
      <p className="text-base text-white shadow-text pt-3">
        At the heart of ActiveCampaign is its automation builder, which lets users create workflows that respond to
        customer actions. You start by setting up triggers, these are events like a form submission, a purchase, an
        email open, or a score change. Once a trigger fires, the workflow runs a series of actions: sending emails,
        updating contact records, assigning leads, or scheduling tasks. Each step can include conditional logic, so
        the path a contact follows depends on their profile or behavior. For example, if a prospect clicks a pricing
        link, they might enter a high-priority nurture sequence, while someone who only opens a newsletter gets a
        lighter touch.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is not a static list in ActiveCampaign. The platform builds dynamic segments, groups that
        update themselves based on live data. These segments can pull in criteria from CRM fields, purchase history,
        web activity, or even lead scores. If a contact’s behavior changes, their segment changes too. That means
        campaigns always target the right people with the most relevant message, and there’s no need for manual list
        clean-up or re-sorting. This is especially useful for small teams who cannot afford to spend hours
        maintaining lists or worrying about sending the wrong message to the wrong group.</p>
      <p className="text-base text-white shadow-text pt-3">
        AI-driven features take this further by surfacing micro-segments and predicting which contacts are most
        likely to respond. ActiveCampaign’s predictive sending uses engagement history to choose the best delivery
        time for each recipient, and its conditional content engine lets you swap out sections of an email based on
        contact data or recent actions. This means a single campaign can feel like a one-on-one conversation for
        hundreds or thousands of recipients, with no extra work from your team.</p>
      <p className="text-base text-white shadow-text pt-3">
        Lead scoring is built into every workflow. You define what matters, email opens, site visits, purchases,
        demo requests, and assign points accordingly. As contacts interact, their score rises or falls. When a score
        crosses a threshold, ActiveCampaign can assign the lead to a sales rep, move them into a new pipeline stage,
        or trigger a follow-up sequence. This keeps the team focused on high-intent prospects and makes sure no
        opportunity gets overlooked because someone missed a signal in the data.</p>
      <p className="text-base text-white shadow-text pt-3">
        Reporting is not an afterthought. Every automation and campaign in ActiveCampaign feeds into a real-time
        analytics dashboard. The platform tracks opens, clicks, conversions, and replies, then ties those results
        back to pipeline movement in the CRM. Its Autonomous Insights feature surfaces trends and underperformance
        before they become a problem, recommending tweaks to the workflow or audience targeting. This turns
        reporting into a live <GlossaryLink slug="feedback-loop" className="text-[#0B162A] hover:underline">feedback
        loop</GlossaryLink>, your team can see what’s working and adjust campaigns on the fly, instead of waiting
        for a monthly review.</p>
      <p className="text-base text-white shadow-text pt-3">
        For recurring tasks, ActiveCampaign offers a library of automation recipes. These are prebuilt workflows for
        common needs, welcome sequences, abandoned cart follow-ups, post-purchase surveys, win-back campaigns. Each
        recipe comes with ready-made triggers, actions, and conditions, so a small business can launch proven
        campaigns in minutes and customize them as needed. This lowers the barrier for teams with limited time or
        technical resources.</p>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign’s automation engine is designed to run quietly in the background, making sure every lead is
        followed up, every segment is current, and every campaign is as relevant as possible. It’s not just about
        sending more emails, but about making every message count, so small teams can compete with larger ones on
        customer experience without the manual grind.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="step-by-step-mechanics-of-activecampaigns-automation-engine" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-step mechanics of ActiveCampaign’s automation engine
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
              <h2 id="step-by-step-mechanics-of-activecampaigns-automation-engine-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Step-by-step mechanics of ActiveCampaign’s automation engine
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
