import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function DecisionsSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        The first decisions you make in a personalized email automation project are the ones that shape every
        outcome after. These choices, what measurable goal you target, how you define your segments, and which
        platform you build on, lock in costs, flexibility, and even what data you can use later. There is no
        backtracking without losing time and budget.</p>
      <p className="text-base text-white shadow-text pt-3">
        The process starts with business objectives, not features. If you want to drive more appointments, repeat
        sales, or better lead response, the campaign structure and automation logic must match that goal. For a
        South Florida dental practice, the priority might be to cut no-shows and fill last-minute openings. For a
        real estate brokerage, it might be nurturing cold leads until they are ready to buy. The risk is picking a
        platform or template before you have nailed down the specific metric you want to change. Once you are live,
        changing your goal midstream means reworking every workflow and segment.</p>
      <p className="text-base text-white shadow-text pt-3">
        Segmentation is next, and it is not just about tags or demographic fields. The initial call is whether you
        want to group people by behavior (like last purchase date or form submission), stated preferences (service
        type, location), or a mix. Brevo, for example, groups contacts by behavior such as website visits or past
        purchases, letting you send hyper-relevant content automatically, not just manually set tags. If you skip
        this and settle for static lists, you lose the ability to target by real engagement, and your follow-up goes
        generic fast. MailerLite gives you interest groups and dynamic segments, so you can keep offers and
        follow-ups relevant as your list grows or your products change.</p>
      <p className="text-base text-white shadow-text pt-3">
        Platform choice is the next fork you cannot undo cheaply. Each tool, Brevo, GetResponse, MailerLite,
        Moosend, ActiveCampaign, Mailchimp, has a different ceiling for automation complexity, list size, and
        reporting. Brevo’s free plan, for instance, offers 300 emails per day with unlimited contacts, making it
        accessible for small teams who do not want to pay for features they will not use (<a id={`use-cases-marketing-personalized-email-campaigns-decisions-source-brevo-com${idSuffix}`} href="https://www.brevo.com/success-stories/kenya-airways-success-story/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Brevo</a>,
        as of Oct 25, 2026). GetResponse excels at connecting website forms and landing pages to follow-up
        sequences, so if your leads come from multiple sources, that is a fit. Moosend stands out for multi-step
        sequences with defined delays and conditions, so you can build nurture tracks that do not require staff to
        remember each follow-up. If you pick a tool that cannot scale with your segmentation or reporting needs, you
        will hit a wall and need a migration, always harder once automations are running.</p>
      <p className="text-base text-white shadow-text pt-3">
        Content strategy must be set before any emails go out. This is not about picking images or writing lines,
        but deciding how you will personalize. Will you use first names in subject lines? <GlossaryLink slug="dynamic-content">Dynamic
        content</GlossaryLink> blocks that change based on purchase history or behavior? Mailchimp’s AI suggests
        subject lines and send times based on campaign history and industry benchmarks, but it can only optimize
        what you tell it to track. Moosend and MailerLite both support reusable templates and AI-generated copy, but
        if you do not plan for these features at the start, you will still be hand-editing every variant.</p>
      <p className="text-base text-white shadow-text pt-3">
        Approval processes are another early decision that cannot be tacked on later. If you want every campaign to
        be reviewed by a manager before sending, that workflow must be mapped in the tool’s logic. MailerLite and
        ActiveCampaign both allow for multi-user workflows and review queues, but you need to decide who signs off,
        and at what stage, before the first live run. Otherwise, you will be stuck with one person responsible for
        every mistake and no audit trail to catch errors before they go out.</p>
      <p className="text-base text-white shadow-text pt-3">
        Finally, decide how you will measure results and what counts as success. Brevo, for instance, tracks open
        rates, click-throughs, and conversions in a single dashboard, with AI highlighting what is working and what
        is not. If you want to tie campaigns to booked appointments or sales, you need to have those data points
        ready and connected from day one; otherwise, your reporting will stay at surface level, opens and clicks,
        not actual revenue or appointments.</p>
      <p className="text-base text-white shadow-text pt-3">
        The upshot: the decisions made in the first week, what you want to achieve, how you will segment, what data
        you will use, which tool you pick, and how you will approve messages, are the rails the project runs on.
        Changing course later means redoing work, breaking automations, or even migrating platforms. Taking the time
        to align the plan to measurable business goals, to map your segments to real customer behavior, and to pick
        a tool that matches your real-world workflows is the only way to avoid regret and rework later.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="the-early-decisions-that-set-the-direction-for-every-personalized-email-rollout" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Early Decisions That Set the Direction for Every Personalized Email Rollout
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
              <h2 id="the-early-decisions-that-set-the-direction-for-every-personalized-email-rollout-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                The Early Decisions That Set the Direction for Every Personalized Email Rollout
              </h2>
              {body("-lg")}
            </div>
            <div className="col-span-5 flex items-center justify-center"></div>
          </div>
        </div>
      </section>
    </>
  );
}
