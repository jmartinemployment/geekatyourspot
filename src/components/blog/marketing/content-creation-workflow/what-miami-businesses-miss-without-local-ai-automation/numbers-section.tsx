import { GlossaryLink } from "@/components/glossary/glossary-link";

export default function NumbersSection() {
  const body = (idSuffix = "") => (
    <>
      <p className="text-base text-white shadow-text pt-3">
        Personalized Email Campaigns consistently outperform generic email blasts, but the evidence has clear
        boundaries. Brevo’s own data states that automation, sending emails at the time each subscriber is most
        likely to open, can lift open rates by up to 30 percent over standard campaigns (<a id={`blog-marketing-personalized-email-campaigns-numbers-source-brevo-com${idSuffix}`} href="https://www.brevo.com/integrations/airtable/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Brevo</a>,
        as of Oct 25, 2026). This is not a theoretical increase: Brevo’s benchmark for automated emails is a 30.63
        percent open rate, compared to 20.73 percent for traditional mass sends, based on large-scale reporting from
        their 2026 data (<a id={`blog-marketing-personalized-email-campaigns-numbers-source-brevo-com-2${idSuffix}`} href="https://www.brevo.com/blog/email-marketing-benchmarks/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Brevo</a>,
        as of Oct 25, 2026). The difference is not just in opens. When you segment your list and use behavioral
        triggers, you reach prospects when they are ready to engage, which has a direct impact on replies and sales.</p>
      <p className="text-base text-white shadow-text pt-3">
        The improvement holds up across several platforms. Mailchimp documents that their platform’s AI-driven
        features, like subject line suggestions and <GlossaryLink slug="send-time-optimization">send time
        optimization</GlossaryLink>, help small businesses get more out of each campaign, especially as their lists
        grow past the free tier. Mailchimp also points to pre-built automations for <GlossaryLink slug="welcome-series">welcome
        series</GlossaryLink>, abandoned carts, and post-purchase follow-ups as key drivers for higher engagement
        and sales. These templates reduce setup time and help businesses get consistent results without manual
        guesswork. The same is true of Moosend, which uses tags and segments to target follow-up and keep engaged
        and disengaged contacts on different paths. Their evidence shows that automating nurture sequences with
        clearly defined triggers and conditions increases both open and <GlossaryLink slug="click-through-rate">click
        rates</GlossaryLink>, and, just as important, removes the manual bottleneck from follow-up.</p>
      <p className="text-base text-white shadow-text pt-3">
        GetResponse provides case studies showing that when website forms and landing pages are linked directly to
        automated <GlossaryLink slug="email-sequence">email sequences</GlossaryLink>, every inquiry gets a next
        step, not just a generic confirmation. Their platform’s use of unlimited workflows (on the Marketer tier)
        allows for multiple customer journeys to be built and run in parallel, which is key for businesses that
        serve more than one type of customer or offer more than one service. This is not about blasting everyone
        with the same message, but about ensuring each segment receives communication relevant to their point in the <GlossaryLink slug="sales-funnel">sales
        funnel</GlossaryLink>. GetResponse’s automation reduces missed opportunities and increases conversions by
        keeping each lead on a path with clear next actions.</p>
      <p className="text-base text-white shadow-text pt-3">
        MailerLite stands out for small teams that want professional, branded email without the overhead of a full
        marketing suite. Their automation builder and AI assistant speed up copywriting and ensure every new
        subscriber gets a consistent, relevant introduction. MailerLite’s real advantage is in repeatability:
        reusable templates and visual workflows mean that once you design a sequence that works, you can deploy it
        again and again with minimal manual effort. The reporting features, tracked links and connected conversion
        data, make it clear which campaigns move people toward your goals.</p>
      <p className="text-base text-white shadow-text pt-3">
        ActiveCampaign takes this further for businesses that need sales and marketing to work together. Their
        automation triggers follow-up workflows based on form submissions, lead scores, or defined customer actions.
        The system prioritizes qualified prospects and ensures proposal follow-ups are sent automatically, closing
        the gap where sales are lost to forgotten emails. For a business that wants to connect marketing activity to
        pipeline progress, this is the standard. Automated sequences reduce manual chasing and make sure no lead is
        lost because someone forgot to send the next message.</p>
      <p className="text-base text-white shadow-text pt-3">
        What the evidence does not prove is that every personalized campaign will deliver the same results
        regardless of context, list quality, or the business’s own data hygiene. The figures above are from the
        platforms’ own large-scale reporting and case studies, but not every business will see a 30 percent lift out
        of the box (<a id={`blog-marketing-personalized-email-campaigns-numbers-source-brevo-com-3${idSuffix}`} href="https://www.brevo.com/integrations/airtable/" target="_blank" rel="noopener noreferrer" className="text-[#C83803] hover:underline">Brevo</a>,
        as of Oct 25, 2026). Open rates and sales gains depend on list cleanliness, relevance of the content, and
        how well the automation matches real customer journeys. None of the providers claim you can skip proper
        segmentation, ignore compliance, or run old lists through new automation and expect the same gains.</p>
      <p className="text-base text-white shadow-text pt-3">
        Nor does the evidence support the idea that automation replaces the need for a strategy. The platforms make
        it easier to run and measure campaigns, but they do not decide who your best customer is, what content
        matters, or how your offer stands out in a crowded local market. The tools are a multiplier for a solid
        process, not a fix for a weak strategy. The gaps in reporting, especially for businesses with inconsistent
        data or multiple disconnected systems, mean you may need to invest in cleaning and structuring your data
        before automation delivers its full benefit. No platform claims to be a shortcut for that work.</p>
      <p className="text-base text-white shadow-text pt-3">
        The one thing the evidence is clear on: when a business replaces hand-built, generic campaigns with
        automated, segmented, and timely messaging, open rates, replies, and conversions go up. The size of the lift
        depends on how well you match the tool to your workflow, and whether you start with clean, actionable data.
        If you are looking for a guarantee that automation alone will fix low engagement or poor offer fit, the
        evidence says otherwise. But if you want a proven path to higher productivity and real, trackable results,
        the case is strong.</p>
    </>
  );

  return (
    <>
      <section className="min-h-screen bg-[#023059] text-white py-5 lg:hidden">
        <div className="container">
          <div className="grid min-h-screen grid-cols-12 place-items-center gap-x-4">
            <div className="col-span-7">
              <h2 id="what-the-evidence-shows-about-personalized-email-campaigns-in-measured-outcomes-and-what-it-does-not-prove" className="text-white text-[6vw] sm:text-4xl md:text-5xl leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the evidence shows about Personalized Email Campaigns in measured outcomes, and what it does not prove
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
              <h2 id="what-the-evidence-shows-about-personalized-email-campaigns-in-measured-outcomes-and-what-it-does-not-prove-lg" className="text-white lg:text-[3.5rem] leading-[0.95] font-black font-[var(--font-sora)] shadow-text">
                What the evidence shows about Personalized Email Campaigns in measured outcomes, and what it does not prove
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
