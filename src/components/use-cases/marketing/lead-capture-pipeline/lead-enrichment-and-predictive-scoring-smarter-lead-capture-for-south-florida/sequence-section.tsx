import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function SequenceSection() {
  const body = (
    <>
      <p className="text-md text-white shadow-text pt-3">
        Rolling out a lead enrichment and predictive scoring pipeline in a real small business is not just a
        matter of plugging in a tool and watching the pipeline fill. It’s a stepwise process, and each phase
        relies on the one before it. What looks like a quick win in a demo can turn into a slog if you miss a
        step or skip the reality check that comes with integrating into everyday sales operations. Here’s what
        that rollout actually looks like on the ground in a South Florida office.</p>
      <p className="text-md text-white shadow-text pt-3">
        1. Scoping the Business Objective The first working session is about getting concrete. You don’t start
        with a list of integrations or feature requests, you start with the single, measurable pain point that
        will define success. Maybe your sales reps are spending two hours a day researching contacts that lead
        nowhere. Maybe you’re losing actual revenue because you can’t see which local companies are
        researching your service pages. This session sets the KPI: cut qualification time in half, reduce
        missed high-intent leads by a third, or double the response rate for outbound calls. Every step after
        this is built to hit that specific number.</p>
      <p className="text-md text-white shadow-text pt-3">
        2. Data Quality Assessment You can’t enrich or score what you can’t trust. This phase is a hands-on
        audit of what you already have, your&nbsp;CRM, email lists,
        website analytics, and marketing tools. Here, you find the gaps: outdated records, missing phone
        numbers, mismatched industries, or duplicate leads. This is where Lusha and Apollo come in. Lusha
        automates bulk enrichment, updating stale or incomplete records with verified contact data, direct
        dials, and the latest job changes. Apollo injects real-time firmographic and behavioral data straight
        into your workflow, so you’re not working from last year’s trade show list. If your data fails this
        step, you either clean it or risk building a pipeline on sand.</p>
      <p className="text-md text-white shadow-text pt-3">
        3. Tool Selection and Architecture Once you know what needs fixing, you pick the tools and set up the
        data flow. This is where choices get real. For a small business wanting to spot which local companies
        are already on their website, Snitcher and Leadfeeder are the backbone. Snitcher maps anonymous
        traffic to verified company profiles, while Leadfeeder triggers instant alerts the second a high-fit
        local account lands on your site. Factors takes it further, layering in behavioral intent and campaign
        attribution so you can see the full journey from first click to closed deal. Apollo is used to
        automate scoring and route leads to the right sales rep, applying rules based on your ICP and live
        engagement signals. The architecture is built for your real workflow, not a vendor’s ideal flow.</p>
      <p className="text-md text-white shadow-text pt-3">
        4. Pilot Implementation You don’t flip the switch on the entire business. The pilot is run first,
        usually on one sales team or a single high-traffic landing page. Data flows in, enrichment gets
        applied, and scoring rules are tested. You watch in real time as leads are captured, scored, and
        routed. This is where you catch what breaks: maybe a key integration fails, maybe your scoring model
        is too loose or too strict, maybe the alerts are too noisy for the sales rep to act on. The pilot is
        where you validate that warm leads actually reach the right person fast, and cold leads are filtered
        out before anyone wastes a call. If a tool like Lusha flags a batch of outdated contacts, you fix it
        now, not after a quarter of missed quotas.</p>
      <p className="text-md text-white shadow-text pt-3">
        5. Full Rollout and Local Integration When the pilot proves itself, you scale up. That means
        connecting the tools to every relevant
        system,&nbsp;CRM,&nbsp;<GlossaryLink slug="marketing-automation">marketing
        automation</GlossaryLink>, chatbots, call tracking, and Slack or Teams for real-time notifications.
        Snitcher automates the push to your&nbsp;CRM, so sales teams
        see new, scored leads as they land. Leadfeeder syncs with your outreach tools, so high-intent
        prospects are never missed. Factors aggregates multi-channel touchpoints and provides attribution, so
        marketing can see exactly which campaign drove the lead to action. Every workflow is tuned to the KPI
        set at the start: less manual research, faster response time, higher conversion rates.</p>
      <p className="text-md text-white shadow-text pt-3">
        6. Continuous Tuning and Measurement You don’t launch and walk away. Successful teams keep a close eye
        on what’s actually happening in the pipeline: are warm leads converting, is sales time spent on the
        right calls, are high-intent accounts being prioritized? This is ongoing work. Scoring thresholds may
        need adjusting, enrichment rules may need tightening, and sales feedback is looped in to refine what
        “qualified” really means. The tools, Apollo, Factors, Lusha, Snitcher, and Leadfeeder, are all built
        to adapt, but only if you use them as part of a living process, not a set-and-forget automation.</p>
      <p className="text-md text-white shadow-text pt-3">
        This sequence is not theoretical, it&#39;s what separates a pipeline that drives real revenue from one
        that stays stuck in the same grind as before. Each phase builds on the last, and skipping a step is
        how teams end up with a system that looks good on paper but fails in the field. For local small businesses,
        getting this rollout right is the difference between chasing ghosts and working a live, high-fit
        pipeline every day.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#024059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="rolling-out-a-lead-enrichment-and-predictive-scoring-pipeline-the-real-sequence-inside-a-small-business" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out a Lead Enrichment and Predictive Scoring Pipeline: The Real Sequence Inside a Small Business
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#024059] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="rolling-out-a-lead-enrichment-and-predictive-scoring-pipeline-the-real-sequence-inside-a-small-business-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                Rolling Out a Lead Enrichment and Predictive Scoring Pipeline: The Real Sequence Inside a Small Business
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
