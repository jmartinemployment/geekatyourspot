export default function EvaluatingSection() {
  const body = (
    <>
      <p className="text-base text-white shadow-text pt-3">
        A buyer should judge Adzooma on whether it matches the pace, budget, and oversight needs of a small business
        running digital ads under tight constraints. The right fit means Adzooma removes the manual grind of budget
        ad copy and message validation, keeps spend on track, and does not require technical staff or a large
        upfront investment. The pricing model is tiered by data refresh rate and alert capacity, not by a flat fee
        or per-seat license, and the free plan is genuinely usable for local teams that need to monitor spend
        without additional cost.</p>
      <p className="text-base text-white shadow-text pt-3">
        The first thing to weigh is whether your business needs real-time, cross-platform oversight. Adzooma stands
        out by letting you manage Google Ads, Meta Ads, and Microsoft Ads in one dashboard, with unlimited ad
        accounts on all plans. If your team is juggling multiple logins, disconnected spreadsheets, and slow monthly
        reviews, Adzooma’s daily opportunity analysis and alerts close that gap. The tool is built for small
        businesses, its interface and workflow do not assume agency-level staffing or expertise.</p>
      <p className="text-base text-white shadow-text pt-3">
        Fit comes down to how much control and automation you want over your budget and message validation. Adzooma
        lets you set custom rules, receive alerts by email or Slack, and take action on recommendations without
        jumping between platforms. For a business running local campaigns with a micro-budget, this means you can
        catch overspending, copy errors, or disapprovals before they spiral. The system does not force automation,
        every recommendation can be reviewed and approved before it goes live, so you keep control over your
        campaigns and spend.</p>
      <p className="text-base text-white shadow-text pt-3">
        The pricing model is not a flat monthly fee for everyone. Instead, Adzooma offers a free plan with monthly
        data refresh, a Silver plan with weekly updates, and a Gold plan with daily updates. Alert capacity and
        custom rule flexibility increase with each tier. Free users can activate up to three alerts; Silver users up
        to ten; Gold users have no alert cap. The higher the tier, the faster you see changes and the more custom
        logic you can build in. This is not a pay-per-user system, anyone on your team can access the dashboard and
        manage accounts without extra charge.</p>
      <p className="text-base text-white shadow-text pt-3">
        For a small business in South Florida, the free plan is often enough to catch major budget or copy issues if
        you are running a handful of campaigns and do not need daily oversight. If your campaigns are more active or
        your budget is at risk of being spent in a single day, the Silver or Gold plans are worth considering for
        faster updates and more granular alerting. Geek @ Your Spot can help you decide which tier fits your risk
        tolerance and how often you need validation checks to run.</p>
      <p className="text-base text-white shadow-text pt-3">
        Adzooma’s pricing is also structured so you do not pay for features you do not need. There is no upsell for
        user seats, no extra charge for connecting more ad accounts, and no requirement to buy into a full agency
        suite. The focus is on automation, oversight, and actionable recommendations, not on locking you into a
        heavy contract. If you outgrow the free plan, the jump to a paid tier is driven by your need for more
        frequent data refresh and more alert capacity, not by arbitrary feature gating.</p>
      <p className="text-base text-white shadow-text pt-3">
        When judging fit, consider how Adzooma’s automation matches your own workflow. If your team is stretched
        thin and cannot afford to check every ad copy or budget cap daily, Adzooma’s rules and alerts fill that gap.
        If you already have a process for reviewing campaigns every morning, the tool can be set to match your
        schedule and only alert you when something falls outside your normal range. The system is not designed for
        businesses that want to build custom integrations or extend the platform beyond its core automation and
        alerting, there is no open API or plugin marketplace. For most local businesses, this is a strength, as it
        keeps the tool simple and reliable.</p>
      <p className="text-base text-white shadow-text pt-3">
        Another point of evaluation is transparency and control. Adzooma logs every alert, action, and
        recommendation, so you have a full audit trail of what was flagged, who acted, and what changed. This is
        critical for small teams that need to show where budget went and how issues were caught. If you need to
        pause a campaign when it hits a spend cap or stop ads with low click-through rates, Adzooma can automate
        this and document every step.</p>
      <p className="text-base text-white shadow-text pt-3">
        Geek @ Your Spot’s implementation makes the fit even tighter by handling the initial setup, mapping your
        accounts, and tuning the automation logic to your business. The consultancy’s approach is to start with your
        real pain points, what is costing you time or money today, and configure Adzooma to solve those first. This
        means you do not pay for a generic deployment or features you will not use. Training is included so your
        team knows how to review, approve, and adjust rules as your campaigns evolve.</p>
      <p className="text-base text-white shadow-text pt-3">
        In summary, judge Adzooma on whether it gives you faster, more reliable oversight of your ad budget and
        copy, fits your actual workflow, and does not add unnecessary cost or complexity. The pricing model is
        flexible and transparent, with a free plan that covers the basics and paid tiers that scale with your need
        for speed and control. For South Florida small businesses who cannot afford to waste a day’s budget, Adzooma
        is a fit if you want automation that works out of the box and a consultancy that gets it live with zero
        downtime or disruption.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-a-buyer-should-judge-adzooma-on-fit-and-on-its-pricing-model" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How a buyer should judge Adzooma on fit and on its pricing model
              </h2>
            </div>
            <div className="col-span-12">{body}</div>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-[#8C4E2A] text-white py-5 hidden lg:block">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-5 flex items-center justify-center"></div>
            <div className="col-span-7">
              <h2 id="how-a-buyer-should-judge-adzooma-on-fit-and-on-its-pricing-model-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                How a buyer should judge Adzooma on fit and on its pricing model
              </h2>
              {body}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
