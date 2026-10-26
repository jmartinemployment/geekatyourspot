import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function MechanicsSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A working personalized email campaign for a small business in South Florida is not a one-off blast or a
        series of ad-hoc messages. It is a system that matches each contact to the right message, at the right time,
        with zero manual effort day-to-day. This is done through a structured four-phase process: set the right
        goals, assess whether your data can support them, select and connect the tools that fit your stack, and then
        run a controlled pilot to prove the results before scaling. Each phase is deliberate, and every tool
        mentioned here (Brevo, GetResponse, MailerLite, Moosend, ActiveCampaign, Mailchimp) is chosen and configured
        to solve a workflow bottleneck that manual effort cannot.</p>
      <p className="text-base text-white shadow-text pt-3">
        Start with the business objective. The first phase is not about choosing a tool or writing a subject line.
        It is about naming the specific problem: missed follow-ups, cold leads, or slow response to inquiries. For a
        local HVAC company, that might mean too many leads going cold because no one follows up quickly; for a small
        law firm, it might mean prospects never see the right information before a call. The point is to define a
        goal you can measure: more appointments booked, fewer no-shows, higher open rates, or more conversions from
        your existing lead list.</p>
      <p className="text-base text-white shadow-text pt-3">
        Once the goal is clear, the next step is a <GlossaryLink slug="data-quality" className="text-[#0B162A] hover:underline">data
        quality</GlossaryLink> assessment. This is where many implementations go wrong. If your lead data sits in
        spreadsheets, is inconsistent, or is missing key fields (like phone, interest, or last contact date),
        automation will stall or misfire. A successful rollout means checking data integrity, cleaning up
        duplicates, and mapping what lives in each system. For most small businesses, this means getting lead
        capture forms, website signups, and any CRM (however basic) aligned so each new contact lands in one place,
        with the right tags or fields to enable segmentation later. The groundwork here saves weeks of
        troubleshooting later.</p>
      <p className="text-base text-white shadow-text pt-3">
        The third phase is technology selection and architecture. This is where the right platform earns its keep.
        Mailchimp is often chosen by small businesses for its approachable interface and free tier, but it stands
        out when you use its segmentation, automation, and AI-driven <GlossaryLink slug="send-time-optimization" className="text-[#0B162A] hover:underline">send-time
        optimization</GlossaryLink>. For teams that want to group contacts by behavior but avoid overpaying for
        features, Brevo makes it easy to organize lists, send targeted campaigns, and track what works, all with a
        free plan generous enough for most small businesses. If your main problem is scattered, inconsistent
        follow-up, GetResponse and ActiveCampaign offer visual automation builders and CRM features to make sure
        every inquiry gets a tailored sequence, not just a single “thanks for your interest” message.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite is the go-to for small teams who want professional results without a heavy learning curve. Its
        workflow builder lets you automate <GlossaryLink slug="welcome-series" className="text-[#0B162A] hover:underline">welcome
        sequences</GlossaryLink>, connect sign-up forms to segmented lists, and review which campaigns actually
        drive action, not just opens. For those with a list but no reliable system for next steps, Moosend supports
        tags and segments, lets you build multi-step sequences (like onboarding or <GlossaryLink slug="re-engagement-campaign" className="text-[#0B162A] hover:underline">re-engagement</GlossaryLink>),
        and offers reusable templates to keep branding consistent. Every tool here can send an email, but what
        matters is how they handle segmentation, automation triggers, and reporting, because that is where manual
        processes fail.</p>
      <p className="text-base text-white shadow-text pt-3">
        The last phase is pilot implementation. Here, you do not move every contact into a new workflow at once. You
        pick a segment, say, new inquiries from the last month, and set up an automation: a welcome message, a
        follow-up after two days, a reminder if no reply, and a tailored offer based on interest. Run this group
        through the system, track what happens, and review the analytics: open rates, clicks, conversions, or
        appointments booked. This is not about “more emails”, it is about timely, relevant follow-up that works with
        minimal oversight. Once you see that it delivers, you scale up, adjust the workflows, and connect more
        sources (like website forms or CRM triggers) as needed.</p>
      <p className="text-base text-white shadow-text pt-3">
        The mechanics are not complicated, but the order matters. Define your measurable goal first. Clean up and
        map your data. Choose the platform that fits your workflow and your team’s skills. Build and test one
        automation before scaling. The result is a system that delivers relevant content and consistent follow-up
        without burning hours, so no lead goes cold, and your team spends less time chasing and more time closing.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="how-personalized-email-campaigns-actually-work" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Personalized Email Campaigns Actually Work
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
              <h2 id="how-personalized-email-campaigns-actually-work-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How Personalized Email Campaigns Actually Work
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
