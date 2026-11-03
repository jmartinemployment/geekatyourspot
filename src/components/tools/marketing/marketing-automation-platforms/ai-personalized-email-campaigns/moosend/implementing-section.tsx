import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function ImplementingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Going live with Moosend for Personalized Email Campaigns means connecting your existing data, setting up <GlossaryLink slug="automation-workflow">automated
        workflows</GlossaryLink>, and configuring audience segments, all in a sequence that minimizes disruption.
        The process moves faster when you start with Moosend’s pre-built templates and automation recipes, and when
        you phase the rollout rather than switching everything at once.</p>
      <p className="text-base text-white shadow-text pt-3">
        Moosend’s setup for a small business in South Florida is not a blank-slate project. The platform is built
        for users who already have email lists and want to move from generic blasts to targeted, automated
        campaigns. You do not have to build every workflow from scratch. Moosend offers a library of automation
        recipes, such as cart abandonment, onboarding, upsell, and thank-you flows, that can be customized for your
        business. These templates are designed to cover the most common marketing triggers and responses, so you can
        launch with proven patterns before layering on your own logic.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first step is importing your contact list. Moosend requires lists to be uploaded in CSV or Excel format,
        encoded as UTF-8, and free of special characters to avoid rejection. Cleaning your data before import is
        critical: invalid or outdated addresses will not only slow down the process but also hurt your
        deliverability and <GlossaryLink slug="engagement-rate">engagement rates</GlossaryLink>. If your list is
        large or has not been cleaned in a while, expect extra time here for validation and correction.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the data is in, you map fields to Moosend’s structure, names, emails, tags, custom fields, and create
        your first segments. Segmentation is where Moosend stands out: you can group contacts by behavior, purchase
        history, engagement level, or any custom attribute you track. This is not a manual process for every
        message. Instead, you set rules that sort new and existing contacts into segments automatically, so each
        campaign targets the right audience without extra work.</p>
      <p className="text-base text-white shadow-text pt-3">
        Workflow automation is next. Moosend’s visual automation builder lets you set up sequences that trigger on
        events, such as a new signup, a purchase, or a period of inactivity. You can use pre-built flows to get
        started or build your own, combining triggers, conditions, and actions. For example, a contact who abandons
        a cart can receive a reminder email, then a follow-up with a discount if they do not return. The same logic
        can be used for onboarding, renewals, or re-engagement.</p>
      <p className="text-base text-white shadow-text pt-3">
        The platform’s AI Writer helps you draft subject lines and body copy quickly, so you do not get stuck on the
        creative side. This is especially useful for small teams without a dedicated copywriter. You can generate
        ideas, optimize for tone and length, and adapt templates to match your brand voice. This takes the pressure
        off your staff and keeps campaigns moving.</p>
      <p className="text-base text-white shadow-text pt-3">
        Testing and scheduling are built into Moosend’s workflow. You can run A/B tests on subject lines, content,
        or send times to see what works best for your audience. Scheduling tools allow you to set campaigns for
        delivery at optimal times, based on user behavior and time zone data. For phased rollouts, you can start
        with one segment or campaign, monitor results, and expand as you gain confidence.</p>
      <p className="text-base text-white shadow-text pt-3">
        What shortens the go-live timeline is a combination of Moosend’s templated setup, its drag-and-drop workflow
        builder, and its AI-powered content tools. The more you can reuse proven templates and automate repetitive
        tasks, the less time you spend in manual setup. If your data is clean and your objectives clear, a small
        team can move from initial import to first live campaign in days, not weeks.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot’s role is to close the gap between your existing systems and Moosend’s requirements. This
        includes mapping your data fields, configuring integrations with your <GlossaryLink slug="crm">CRM</GlossaryLink> or
        eCommerce platform (where available), and training your team on running and refining campaigns. By phasing
        the rollout, starting with a core segment or campaign, then expanding as workflows prove themselves, you
        avoid the risks of a big-bang switch and can measure impact at each step.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, Moosend’s go-live process for Personalized Email Campaigns is streamlined by pre-built
        automation recipes, a user-friendly workflow builder, and AI-driven content support. The biggest time-savers
        are clean data, clear objectives, and a phased approach that lets you build confidence with each successful
        campaign. Geek @ Your Spot helps ensure each of these is in place, so your team spends less time on setup
        and more on results.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="going-live-with-moosend" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going live with Moosend
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
              <h2 id="going-live-with-moosend-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Going live with Moosend
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
